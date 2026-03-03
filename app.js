/* ============================================
   TRENORD BIGLIETTO DIGITALE — App Logic
   ============================================ */

// ── Zone Configuration ──
const ZONES = [
    { label: 'Mi1', number: 1, color: '#5B8DBE' },
    { label: 'Mi3', number: 3, color: '#5AAD47' },
    { label: 'Mi4', number: 4, color: '#8BB43E' },
    { label: 'Mi5', number: 5, color: '#C8B832' },
    { label: 'Mi6', number: 6, color: '#E09030' },
    { label: 'Mi7', number: 7, color: '#C07035' },
    { label: 'Mi8', number: 8, color: '#A05040' },
    { label: 'Mi9', number: 9, color: '#CC6088' }
];

function getTicketInfo(fromIdx, toIdx) {
    const from = ZONES[fromIdx];
    const to = ZONES[toIdx];
    const zoneCount = to.number - from.number + 1;
    return {
        label: from.label + ' | ' + to.label,
        fromZone: from.label.toUpperCase(),
        toZone: to.label.toUpperCase(),
        price: Math.round((1.00 + zoneCount * 0.40) * 100) / 100,
        duration: 45 + zoneCount * 15,
        zoneCount: zoneCount,
        imageFile: 'STIBM Areas/' + from.label + '-' + to.label + '.png'
    };
}

// ── Tab-Screen Map ──
const SCREEN_MAP = {
    home: 'home-screen',
    acquista: 'config-screen',
    wallet: 'wallet-screen',
    gite: 'gite-screen',
    profilo: 'profilo-screen'
};

// ── App State ──
let tickets = [];
let selectedFromIdx = 0;
let selectedToIdx = 1;
let ticketCount = 1;
let currentDetailTicket = null;
let qrInstance = null;
let wakeLockSentinel = null;

// ── DOM References ──
const configScreen = document.getElementById('config-screen');
const walletScreen = document.getElementById('wallet-screen');
const detailScreen = document.getElementById('detail-screen');

const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');

const sliderFrom = document.getElementById('slider-from');
const sliderTo = document.getElementById('slider-to');
const sliderFill = document.getElementById('slider-fill');
const zoneBadges = document.getElementById('zone-badges');
const zoneMapImg = document.getElementById('zone-map-img');
const sliderLabelsEl = document.getElementById('slider-labels');

const ticketCountText = document.getElementById('ticket-count-text');
const btnCountMinus = document.getElementById('btn-count-minus');
const btnCountPlus = document.getElementById('btn-count-plus');
const btnGeneraText = document.getElementById('btn-genera-text');

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
    loadTickets();
    initDefaults();
    initSliderLabels();
    updateSlider();
    bindEvents();
    registerSW();
});

function initDefaults() {
    const now = new Date();
    now.setSeconds(0, 0);
    startDateInput.value = toLocalDatetimeString(now);
    updateEndDate();
}

function initSliderLabels() {
    sliderLabelsEl.innerHTML = '';
    ZONES.forEach(z => {
        const span = document.createElement('span');
        span.textContent = z.label;
        span.dataset.zone = z.label;
        sliderLabelsEl.appendChild(span);
    });
}

function bindEvents() {
    // Slider events
    sliderFrom.addEventListener('input', onSliderFromChange);
    sliderTo.addEventListener('input', onSliderToChange);

    // Date change
    startDateInput.addEventListener('change', updateEndDate);

    // Ticket counter
    btnCountMinus.addEventListener('click', () => updateTicketCount(-1));
    btnCountPlus.addEventListener('click', () => updateTicketCount(1));

    // Generate ticket(s)
    document.getElementById('btn-genera').addEventListener('click', generateTickets);

    // Tabbar navigation
    document.querySelectorAll('#global-tabbar .tabbar-item').forEach(item => {
        item.addEventListener('click', () => switchTab(item.dataset.tab));
    });

    // Close detail
    document.getElementById('btn-detail-close').addEventListener('click', closeDetail);

    // Activation modal
    document.getElementById('btn-activation-info').addEventListener('click', () => openModal('activation-modal'));

    // Norme link
    document.getElementById('btn-norme').addEventListener('click', () => openModal('info-modal'));

    // Modal backdrop close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal(overlay.id);
        });
    });

    // Expired toggle
    document.getElementById('expired-toggle').addEventListener('click', toggleExpired);
}

// ── Zone Slider Logic ──

function onSliderFromChange() {
    let fromVal = parseInt(sliderFrom.value);
    let toVal = parseInt(sliderTo.value);
    if (fromVal >= toVal) {
        fromVal = toVal - 1;
        sliderFrom.value = fromVal;
    }
    selectedFromIdx = fromVal;
    updateSlider();
    updateEndDate();
}

function onSliderToChange() {
    let fromVal = parseInt(sliderFrom.value);
    let toVal = parseInt(sliderTo.value);
    if (toVal <= fromVal) {
        toVal = fromVal + 1;
        sliderTo.value = toVal;
    }
    selectedToIdx = toVal;
    updateSlider();
    updateEndDate();
}

function updateSlider() {
    selectedFromIdx = parseInt(sliderFrom.value);
    selectedToIdx = parseInt(sliderTo.value);
    const max = 7;

    // Update fill bar
    const fromPct = (selectedFromIdx / max) * 100;
    const toPct = (selectedToIdx / max) * 100;
    sliderFill.style.left = fromPct + '%';
    sliderFill.style.width = (toPct - fromPct) + '%';

    // Update badges
    updateZoneBadges();

    // Update map image
    updateMapImage();

    // Update labels
    updateSliderLabels();

    // Update generate button
    updateGenerateButton();
}

function updateZoneBadges() {
    zoneBadges.innerHTML = '';
    for (let i = selectedFromIdx; i <= selectedToIdx; i++) {
        const z = ZONES[i];
        const badge = document.createElement('span');
        badge.className = 'zone-badge';
        badge.textContent = z.label;
        badge.style.backgroundColor = z.color;
        zoneBadges.appendChild(badge);
    }
}

function updateMapImage() {
    const info = getTicketInfo(selectedFromIdx, selectedToIdx);
    zoneMapImg.src = info.imageFile;
    zoneMapImg.alt = 'Mappa zone ' + info.label;
}

function updateSliderLabels() {
    const labels = sliderLabelsEl.querySelectorAll('span');
    labels.forEach((label, i) => {
        if (i >= selectedFromIdx && i <= selectedToIdx) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
}

function updateGenerateButton() {
    const info = getTicketInfo(selectedFromIdx, selectedToIdx);
    btnGeneraText.textContent = info.label + '  ' + formatPrice(info.price);
}

// ── Ticket Counter ──

function updateTicketCount(delta) {
    ticketCount = Math.max(1, Math.min(10, ticketCount + delta));
    ticketCountText.textContent = ticketCount + (ticketCount === 1 ? ' Biglietto' : ' Biglietti');
    btnCountMinus.disabled = ticketCount <= 1;
    btnCountPlus.disabled = ticketCount >= 10;
}

// ── Date Auto-Update ──

function updateEndDate() {
    const info = getTicketInfo(selectedFromIdx, selectedToIdx);
    const startVal = startDateInput.value;
    if (startVal) {
        const startDate = new Date(startVal);
        const endDate = new Date(startDate.getTime() + info.duration * 60000);
        endDateInput.value = toLocalDatetimeString(endDate);
    }
}

// ── Ticket Generation ──

function generateTickets() {
    const info = getTicketInfo(selectedFromIdx, selectedToIdx);
    const startVal = startDateInput.value;
    const endVal = endDateInput.value;

    if (!startVal || !endVal) {
        showAlert('Errore', 'Inserisci le date di validità.');
        return;
    }

    const startDate = new Date(startVal);
    const endDate = new Date(endVal);
    const purchaseDate = new Date(startDate.getTime() - 10 * 60000);

    for (let i = 0; i < ticketCount; i++) {
        tickets.push({
            id: generateUUID(false),
            pnr: generatePNR(),
            uuid: generateUUID(false),
            viaggio: info.label,
            prezzo: info.price,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            purchaseDate: purchaseDate.toISOString(),
            fromZone: info.fromZone,
            toZone: info.toZone,
            classe: 'Unica',
            status: 'active'
        });
    }

    saveTickets();
    renderWalletTickets();
    switchTab('wallet');
}

// ── localStorage Persistence ──

function saveTickets() {
    localStorage.setItem('trenord_tickets', JSON.stringify(tickets));
}

function loadTickets() {
    try {
        const data = localStorage.getItem('trenord_tickets');
        if (data) {
            tickets = JSON.parse(data);
        }
    } catch (e) {
        tickets = [];
    }
}

function checkExpiredTickets() {
    const now = new Date();
    let changed = false;
    tickets.forEach(t => {
        if (t.status === 'active' && new Date(t.endDate) < now) {
            t.status = 'expired';
            changed = true;
        }
    });
    if (changed) saveTickets();
}

// ── Wallet Rendering ──

function renderWalletTickets() {
    checkExpiredTickets();

    const activeTickets = tickets.filter(t => t.status === 'active');
    const expiredTickets = tickets.filter(t => t.status === 'expired');

    const ticketList = document.getElementById('ticket-list');
    const expiredList = document.getElementById('expired-list');
    const expiredSection = document.getElementById('expired-section');

    // Render active tickets
    ticketList.innerHTML = '';
    if (activeTickets.length === 0) {
        ticketList.innerHTML = '<div class="empty-state"><p>Nessun biglietto attivo</p></div>';
    } else {
        activeTickets.forEach(t => {
            ticketList.appendChild(createTicketCard(t, false));
        });
    }

    // Render expired tickets
    if (expiredTickets.length > 0) {
        expiredSection.style.display = 'block';
        expiredList.innerHTML = '';
        expiredTickets.forEach(t => {
            expiredList.appendChild(createTicketCard(t, true));
        });
    } else {
        expiredSection.style.display = 'none';
    }
}

function createTicketCard(ticket, isExpired) {
    const container = document.createElement('div');
    container.className = 'swipe-container';
    container.dataset.ticketId = ticket.id;

    const startDate = new Date(ticket.startDate);
    const endDate = new Date(ticket.endDate);

    container.innerHTML = `
        <div class="swipe-action">
            <button class="swipe-delete-btn">Elimina</button>
        </div>
        <div class="ticket-card swipe-content ${isExpired ? 'ticket-expired' : ''}">
            <div class="ticket-card-header">
                <span class="ticket-type-label">Ordinario</span>
                <button class="info-icon-gray btn-ticket-info" aria-label="Info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><circle cx="12" cy="8" r="0.5" fill="currentColor"/></svg>
                </button>
            </div>
            <div class="ticket-field">
                <span class="ticket-label">VALIDITÀ</span>
                <div class="ticket-validita">
                    <span>${formatDateShort(startDate)}</span>
                    <span class="validita-sep">|</span>
                    <span>${formatDateShort(endDate)}</span>
                </div>
            </div>
            <div class="ticket-row-2col">
                <div class="ticket-field">
                    <span class="ticket-label">PNR</span>
                    <span class="ticket-value">${ticket.pnr}</span>
                </div>
                <div class="ticket-field">
                    <span class="ticket-label">CLASSE</span>
                    <span class="ticket-value">${ticket.classe}</span>
                </div>
            </div>
            <div class="ticket-field">
                <span class="ticket-label">VIAGGIO</span>
                <span class="ticket-value ticket-value-bold">${ticket.viaggio}</span>
            </div>
            <div class="stibm-badge">STIBM</div>
            <button class="btn-green-full btn-qr btn-mostra-qr">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Mostra QR Code
            </button>
        </div>
    `;

    // Init swipe-to-delete
    initSwipe(container, ticket.id);

    // QR button
    const qrBtn = container.querySelector('.btn-mostra-qr');
    qrBtn.addEventListener('click', (e) => {
        const content = container.querySelector('.swipe-content');
        const tx = content.style.transform;
        if (tx && tx !== 'translateX(0px)' && tx !== 'translateX(0)') return;
        openDetail(ticket.id);
    });

    // Info button
    container.querySelector('.btn-ticket-info').addEventListener('click', () => {
        openModal('info-modal');
    });

    return container;
}

// ── Swipe-to-Delete (iOS style) ──

function initSwipe(container, ticketId) {
    const content = container.querySelector('.swipe-content');
    const deleteBtn = container.querySelector('.swipe-delete-btn');

    let startX = 0, startY = 0, currentX = 0;
    let isDragging = false, isOpen = false, isHorizontal = null;
    const THRESHOLD = 80;

    content.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
        isHorizontal = null;
        content.style.transition = 'none';
    }, { passive: true });

    content.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;

        // Determine direction on first significant move
        if (isHorizontal === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
            isHorizontal = Math.abs(dx) > Math.abs(dy);
        }

        if (!isHorizontal) return;

        e.preventDefault();

        const offset = isOpen ? dx - THRESHOLD : dx;
        currentX = Math.min(0, Math.max(-THRESHOLD, offset));
        content.style.transform = 'translateX(' + currentX + 'px)';
    }, { passive: false });

    content.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        content.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        if (currentX < -(THRESHOLD / 2)) {
            content.style.transform = 'translateX(-' + THRESHOLD + 'px)';
            isOpen = true;
        } else {
            content.style.transform = 'translateX(0)';
            isOpen = false;
        }
        currentX = 0;
        isHorizontal = null;
    }, { passive: true });

    // Delete button
    deleteBtn.addEventListener('click', () => {
        const h = container.offsetHeight;
        container.style.transition = 'height 0.3s ease, opacity 0.3s ease, margin-bottom 0.3s ease';
        container.style.height = h + 'px';
        container.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            container.style.height = '0px';
            container.style.opacity = '0';
            container.style.marginBottom = '0';
        });
        setTimeout(() => {
            deleteTicket(ticketId);
        }, 320);
    });

    // Tap to close swipe
    content.addEventListener('click', (e) => {
        if (isOpen) {
            e.preventDefault();
            e.stopPropagation();
            content.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            content.style.transform = 'translateX(0)';
            isOpen = false;
        }
    });
}

function deleteTicket(ticketId) {
    tickets = tickets.filter(t => t.id !== ticketId);
    saveTickets();
    renderWalletTickets();
}

// ── Expired Toggle ──

function toggleExpired() {
    const list = document.getElementById('expired-list');
    const chevron = document.querySelector('.expired-chevron');
    const isCollapsed = list.classList.contains('collapsed');

    if (isCollapsed) {
        list.classList.remove('collapsed');
        chevron.classList.add('open');
    } else {
        list.classList.add('collapsed');
        chevron.classList.remove('open');
    }
}

// ── Detail Screen ──

function openDetail(ticketId) {
    const ticket = tickets.find(t => t.id === ticketId);
    if (!ticket) return;

    currentDetailTicket = ticket;
    const startDate = new Date(ticket.startDate);
    const endDate = new Date(ticket.endDate);

    document.getElementById('detail-pnr').textContent = ticket.pnr;

    const zoneFrom = ticket.viaggio.split(' | ')[0];
    const zoneTo = ticket.viaggio.split(' | ')[1];
    document.getElementById('detail-zone').textContent = zoneFrom + '-' + zoneTo;

    document.getElementById('detail-validita').textContent =
        formatDateShort(startDate) + ' - ' + formatDateShort(endDate);
    document.getElementById('detail-prezzo').textContent = formatPrice(ticket.prezzo);
    document.getElementById('detail-classe').textContent = ticket.classe;
    document.getElementById('detail-viaggio').textContent = ticket.viaggio;

    detailScreen.classList.remove('closing');
    detailScreen.classList.add('open');

    requestMaxBrightness();

    requestAnimationFrame(() => {
        generateQRCode(ticket);
    });
}

function closeDetail() {
    releaseMaxBrightness();
    detailScreen.classList.add('closing');
    setTimeout(() => {
        detailScreen.classList.remove('open', 'closing');
        const container = document.getElementById('qrcode-container');
        container.innerHTML = '';
        qrInstance = null;
        currentDetailTicket = null;
    }, 350);
}

// ── QR Code Generation ──

function generateQRCode(ticket) {
    const container = document.getElementById('qrcode-container');
    container.innerHTML = '';

    const qrContent = buildQRContent(ticket);

    qrInstance = new QRCode(container, {
        text: qrContent,
        width: 280,
        height: 280,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

function buildQRContent(ticket) {
    const startDate = new Date(ticket.startDate);
    const endDate = new Date(ticket.endDate);
    const purchaseDate = new Date(ticket.purchaseDate);

    const payload = {
        k0: 'TICKET',
        k1: ticket.pnr,
        k2: '8500',
        k3: 'UNIQUE',
        k4: startDate.toISOString(),
        k5: endDate.toISOString(),
        k6: purchaseDate.toISOString(),
        k7: { c: ticket.fromZone + 'a' },
        k8: { c: ticket.toZone },
        k10: ticket.uuid
    };

    const jsonStr = JSON.stringify(payload);
    const base64 = btoa(unescape(encodeURIComponent(jsonStr)));
    const checksum = generateChecksum();
    const qrUUID = generateUUID(true);

    return base64 + ':' + checksum + ':' + qrUUID;
}

// ── Tab Navigation ──

function switchTab(tabName) {
    // Hide all tab screens
    Object.values(SCREEN_MAP).forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    // Show target
    const targetId = SCREEN_MAP[tabName];
    if (targetId) {
        document.getElementById(targetId).classList.add('active');
    }
    // Update tabbar
    document.querySelectorAll('#global-tabbar .tabbar-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tabName);
    });
    // If wallet, render tickets
    if (tabName === 'wallet') {
        renderWalletTickets();
    }
}

// ── Wake Lock (Max Brightness) ──

async function requestMaxBrightness() {
    try {
        if ('wakeLock' in navigator) {
            wakeLockSentinel = await navigator.wakeLock.request('screen');
        }
    } catch (e) {
        console.log('Wake Lock not available:', e);
    }
}

function releaseMaxBrightness() {
    if (wakeLockSentinel) {
        wakeLockSentinel.release();
        wakeLockSentinel = null;
    }
}

// ── Navigation ──

function navigateScreen(fromScreen, toScreen, isBack) {
    if (isBack) {
        toScreen.style.display = 'flex';
        toScreen.style.zIndex = '1';
        fromScreen.style.zIndex = '2';
        fromScreen.classList.add('slide-out');

        setTimeout(() => {
            fromScreen.classList.remove('slide-out', 'active');
            fromScreen.style.display = '';
            fromScreen.style.zIndex = '';
            toScreen.classList.add('active');
            toScreen.style.display = '';
            toScreen.style.zIndex = '';
        }, 360);
    } else {
        toScreen.style.display = 'flex';
        toScreen.style.zIndex = '2';
        toScreen.classList.add('slide-in');

        setTimeout(() => {
            toScreen.classList.remove('slide-in');
            toScreen.classList.add('active');
            toScreen.style.display = '';
            toScreen.style.zIndex = '';
            fromScreen.classList.remove('active');
        }, 410);
    }
}

// ── Modals ──

function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('closing');
    modal.classList.add('open');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('closing');
    setTimeout(() => {
        modal.classList.remove('open', 'closing');
    }, 250);
}

function showAlert(title, message) {
    alert(title + '\n' + message);
}

// ── Generators ──

function generatePNR() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 9; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function generateUUID(uppercase) {
    const hex = uppercase ? '0123456789ABCDEF' : '0123456789abcdef';
    const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    let uuid = '';
    for (let i = 0; i < template.length; i++) {
        const c = template[i];
        if (c === 'x') {
            uuid += hex[Math.floor(Math.random() * 16)];
        } else if (c === 'y') {
            uuid += hex[(Math.floor(Math.random() * 4) + 8)];
        } else {
            uuid += c;
        }
    }
    return uuid;
}

function generateChecksum() {
    const letters = 'ABCDEFG';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += String(Math.floor(1000 + Math.random() * 9000));
        if (i < 7) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
    return result;
}

// ── Date Formatting ──

function toLocalDatetimeString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;
}

function formatDateShort(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return day + '/' + month + '/' + year + ', ' + hours + ':' + minutes;
}

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + ' €';
}

// ── PWA Service Worker Registration ──

function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(err => console.log('SW registration failed:', err));
    }
}
