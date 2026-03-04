/* ============================================
   TRENORD BIGLIETTO DIGITALE — App Logic
   ============================================ */

// ── Zone Configuration ──
const ZONES = [
    { label: 'Mi1', number: 1, color: '#BDA3C8', pattern: 'striped-purple' },
    { label: 'Mi3', number: 3, color: '#BDA3C8', pattern: null },
    { label: 'Mi4', number: 4, color: '#585DA4', pattern: null },
    { label: 'Mi5', number: 5, color: '#63A166', pattern: null },
    { label: 'Mi6', number: 6, color: '#E1DD70', pattern: null },
    { label: 'Mi7', number: 7, color: '#DDA165', pattern: null },
    { label: 'Mi8', number: 8, color: '#E37603', pattern: null },
    { label: 'Mi9', number: 9, color: '#A61D27', pattern: 'striped-red' }
];

// ── Comuni STIBM ──
const COMUNI_STIBM = [
    {nome:"ABBIATEGRASSO",zona:"Mi7"},{nome:"AGRATE BRIANZA",zona:"Mi5"},{nome:"AICURZIO",zona:"Mi7"},
    {nome:"ALBAIRATE",zona:"Mi6"},{nome:"ALBIATE",zona:"Mi6"},{nome:"ARCONATE",zona:"Mi7"},
    {nome:"ARCORE",zona:"Mi5"},{nome:"ARESE",zona:"Mi4"},{nome:"ARLUNO",zona:"Mi6"},
    {nome:"ASSAGO",zona:"Mi3"},{nome:"BARANZATE",zona:"Mi3"},{nome:"BAREGGIO",zona:"Mi4"},
    {nome:"BARLASSINA",zona:"Mi6"},{nome:"BASIANO",zona:"Mi6"},{nome:"BASIGLIO",zona:"Mi4"},
    {nome:"BELLINZAGO LOMBARDO",zona:"Mi6"},{nome:"BELLUSCO",zona:"Mi7"},{nome:"BERNAREGGIO",zona:"Mi7"},
    {nome:"BERNATE TICINO",zona:"Mi8"},{nome:"BESANA IN BRIANZA",zona:"Mi7"},{nome:"BESATE",zona:"Mi7"},
    {nome:"BIASSONO",zona:"Mi5"},{nome:"BINASCO",zona:"Mi5"},{nome:"BOFFALORA SOPRA TICINO",zona:"Mi7"},
    {nome:"BOLLATE",zona:"Mi3"},{nome:"BOVISIO MASCIAGO",zona:"Mi5"},{nome:"BRESSO",zona:"Mi3"},
    {nome:"BRIOSCO",zona:"Mi7"},{nome:"BRUGHERIO",zona:"Mi4"},{nome:"BUBBIANO",zona:"Mi6"},
    {nome:"BUCCINASCO",zona:"Mi3"},{nome:"BURAGO DI MOLGORA",zona:"Mi6"},{nome:"BUSCATE",zona:"Mi8"},
    {nome:"BUSNAGO",zona:"Mi7"},{nome:"BUSSERO",zona:"Mi4"},{nome:"BUSTO GAROLFO",zona:"Mi7"},
    {nome:"CALVIGNASCO",zona:"Mi6"},{nome:"CAMBIAGO",zona:"Mi6"},{nome:"CAMPARADA",zona:"Mi6"},
    {nome:"CANEGRATE",zona:"Mi7"},{nome:"CAPONAGO",zona:"Mi5"},{nome:"CARATE BRIANZA",zona:"Mi6"},
    {nome:"CARNATE",zona:"Mi6"},{nome:"CARPIANO",zona:"Mi5"},{nome:"CARUGATE",zona:"Mi5"},
    {nome:"CASALMAIOCCO",zona:"Mi6"},{nome:"CASARILE",zona:"Mi5"},{nome:"CASORATE PRIMO",zona:"Mi6"},
    {nome:"CASOREZZO",zona:"Mi7"},{nome:"CASSANO D'ADDA",zona:"Mi7"},{nome:"CASSINA DE' PECCHI",zona:"Mi4"},
    {nome:"CASSINETTA DI LUGAGNANO",zona:"Mi7"},{nome:"CASTANO PRIMO",zona:"Mi9"},
    {nome:"CAVENAGO DI BRIANZA",zona:"Mi6"},{nome:"CERIANO LAGHETTO",zona:"Mi6"},
    {nome:"CERNUSCO SUL NAVIGLIO",zona:"Mi4"},{nome:"CERRO AL LAMBRO",zona:"Mi6"},
    {nome:"CERRO MAGGIORE",zona:"Mi6"},{nome:"CESANO BOSCONE",zona:"Mi3"},{nome:"CESANO MADERNO",zona:"Mi5"},
    {nome:"CESATE",zona:"Mi5"},{nome:"CINISELLO BALSAMO",zona:"Mi3"},{nome:"CISLIANO",zona:"Mi5"},
    {nome:"COGLIATE",zona:"Mi6"},{nome:"COLOGNO MONZESE",zona:"Mi3"},{nome:"COLTURANO",zona:"Mi5"},
    {nome:"COMAZZO",zona:"Mi6"},{nome:"CONCOREZZO",zona:"Mi5"},{nome:"CORBETTA",zona:"Mi6"},
    {nome:"CORMANO",zona:"Mi3"},{nome:"CORNAREDO",zona:"Mi4"},{nome:"CORNATE D'ADDA",zona:"Mi7"},
    {nome:"CORREZZANA",zona:"Mi7"},{nome:"CORSICO",zona:"Mi3"},{nome:"CUGGIONO",zona:"Mi8"},
    {nome:"CUSAGO",zona:"Mi4"},{nome:"CUSANO MILANINO",zona:"Mi3"},{nome:"DAIRAGO",zona:"Mi8"},
    {nome:"DESIO",zona:"Mi5"},{nome:"DRESANO",zona:"Mi5"},{nome:"GAGGIANO",zona:"Mi5"},
    {nome:"GARBAGNATE MILANESE",zona:"Mi4"},{nome:"GESSATE",zona:"Mi6"},{nome:"GIUSSANO",zona:"Mi6"},
    {nome:"GORGONZOLA",zona:"Mi5"},{nome:"GREZZAGO",zona:"Mi7"},{nome:"GUDO VISCONTI",zona:"Mi6"},
    {nome:"INVERUNO",zona:"Mi7"},{nome:"INZAGO",zona:"Mi6"},{nome:"LACCHIARELLA",zona:"Mi5"},
    {nome:"LAINATE",zona:"Mi5"},{nome:"LAZZATE",zona:"Mi7"},{nome:"LEGNANO",zona:"Mi7"},
    {nome:"LENTATE SUL SEVESO",zona:"Mi6"},{nome:"LESMO",zona:"Mi6"},{nome:"LIMBIATE",zona:"Mi5"},
    {nome:"LISCATE",zona:"Mi5"},{nome:"LISSONE",zona:"Mi5"},{nome:"LOCATE DI TRIULZI",zona:"Mi4"},
    {nome:"MACHERIO",zona:"Mi5"},{nome:"MAGENTA",zona:"Mi7"},{nome:"MAGNAGO",zona:"Mi9"},
    {nome:"MARCALLO CON CASONE",zona:"Mi7"},{nome:"MASATE",zona:"Mi6"},{nome:"MEDA",zona:"Mi6"},
    {nome:"MEDIGLIA",zona:"Mi4"},{nome:"MELEGNANO",zona:"Mi5"},{nome:"MELZO",zona:"Mi5"},
    {nome:"MERLINO",zona:"Mi6"},{nome:"MESERO",zona:"Mi7"},{nome:"MEZZAGO",zona:"Mi7"},
    {nome:"MILANO",zona:"Mi1"},{nome:"MISINTO",zona:"Mi7"},{nome:"MONZA",zona:"Mi4"},
    {nome:"MORIMONDO",zona:"Mi7"},{nome:"MOTTA VISCONTI",zona:"Mi7"},{nome:"MUGGIÒ",zona:"Mi4"},
    {nome:"MULAZZANO",zona:"Mi6"},{nome:"NERVIANO",zona:"Mi5"},{nome:"NOSATE",zona:"Mi9"},
    {nome:"NOVA MILANESE",zona:"Mi4"},{nome:"NOVATE MILANESE",zona:"Mi3"},{nome:"NOVIGLIO",zona:"Mi5"},
    {nome:"OPERA",zona:"Mi3"},{nome:"ORNAGO",zona:"Mi7"},{nome:"OSSONA",zona:"Mi6"},
    {nome:"OZZERO",zona:"Mi7"},{nome:"PADERNO DUGNANO",zona:"Mi4"},{nome:"PANTIGLIATE",zona:"Mi4"},
    {nome:"PARABIAGO",zona:"Mi6"},{nome:"PAULLO",zona:"Mi5"},{nome:"PERO",zona:"Mi3"},
    {nome:"PESCHIERA BORROMEO",zona:"Mi3"},{nome:"PESSANO CON BORNAGO",zona:"Mi5"},
    {nome:"PIEVE EMANUELE",zona:"Mi4"},{nome:"PIOLTELLO",zona:"Mi4"},
    {nome:"POGLIANO MILANESE",zona:"Mi5"},{nome:"POZZO D'ADDA",zona:"Mi7"},
    {nome:"POZZUOLO MARTESANA",zona:"Mi6"},{nome:"PREGNANA MILANESE",zona:"Mi5"},
    {nome:"RENATE",zona:"Mi8"},{nome:"RESCALDINA",zona:"Mi7"},{nome:"RHO",zona:"Mi4"},
    {nome:"ROBECCHETTO CON INDUNO",zona:"Mi9"},{nome:"ROBECCO SUL NAVIGLIO",zona:"Mi7"},
    {nome:"RODANO",zona:"Mi4"},{nome:"RONCELLO",zona:"Mi7"},{nome:"RONCO BRIANTINO",zona:"Mi7"},
    {nome:"ROSATE",zona:"Mi6"},{nome:"ROZZANO",zona:"Mi3"},{nome:"SAN DONATO MILANESE",zona:"Mi3"},
    {nome:"SAN GIORGIO SU LEGNANO",zona:"Mi7"},{nome:"SAN GIULIANO MILANESE",zona:"Mi4"},
    {nome:"SAN VITTORE OLONA",zona:"Mi6"},{nome:"SAN ZENONE AL LAMBRO",zona:"Mi6"},
    {nome:"SANTO STEFANO TICINO",zona:"Mi6"},{nome:"SEDRIANO",zona:"Mi5"},{nome:"SEGRATE",zona:"Mi3"},
    {nome:"SENAGO",zona:"Mi4"},{nome:"SEREGNO",zona:"Mi6"},{nome:"SESTO SAN GIOVANNI",zona:"Mi3"},
    {nome:"SETTALA",zona:"Mi5"},{nome:"SETTIMO MILANESE",zona:"Mi3"},{nome:"SEVESO",zona:"Mi6"},
    {nome:"SOLARO",zona:"Mi5"},{nome:"SORDIO",zona:"Mi6"},{nome:"SOVICO",zona:"Mi6"},
    {nome:"SULBIATE",zona:"Mi7"},{nome:"TAVAZZANO CON VILLAVESCO",zona:"Mi7"},
    {nome:"TREZZANO ROSA",zona:"Mi7"},{nome:"TREZZANO SUL NAVIGLIO",zona:"Mi4"},
    {nome:"TREZZO SULL'ADDA",zona:"Mi7"},{nome:"TRIBIANO",zona:"Mi5"},{nome:"TRIUGGIO",zona:"Mi6"},
    {nome:"TRUCCAZZANO",zona:"Mi6"},{nome:"TURBIGO",zona:"Mi9"},{nome:"USMATE VELATE",zona:"Mi6"},
    {nome:"VANZAGHELLO",zona:"Mi9"},{nome:"VANZAGO",zona:"Mi5"},{nome:"VAPRIO D'ADDA",zona:"Mi7"},
    {nome:"VAREDO",zona:"Mi5"},{nome:"VEDANO AL LAMBRO",zona:"Mi5"},{nome:"VEDUGGIO CON COLZANO",zona:"Mi8"},
    {nome:"VERANO BRIANZA",zona:"Mi6"},{nome:"VERMEZZO",zona:"Mi6"},{nome:"VERNATE",zona:"Mi6"},
    {nome:"VIGNATE",zona:"Mi5"},{nome:"VILLA CORTESE",zona:"Mi7"},{nome:"VILLASANTA",zona:"Mi5"},
    {nome:"VIMERCATE",zona:"Mi6"},{nome:"VIMODRONE",zona:"Mi3"},{nome:"VITTUONE",zona:"Mi5"},
    {nome:"VIZZOLO PREDABISSI",zona:"Mi5"},{nome:"ZELO BUON PERSICO",zona:"Mi6"},
    {nome:"ZELO SURRIGONE",zona:"Mi6"},{nome:"ZIBIDO SAN GIACOMO",zona:"Mi4"}
];

function getTicketInfo(fromIdx, toIdx) {
    const from = ZONES[fromIdx];
    const to = ZONES[toIdx];
    const zoneCount = toIdx - fromIdx + 1;

    let price = 0;
    if (fromIdx === 0) {
        // Da Mi1 verso esterno (tariffario richiesto)
        const mi1Table = {
            2: 2.20,
            3: 2.60,
            4: 3.00,
            5: 3.50,
            6: 3.90,
            7: 4.30,
            8: 4.80
        };
        price = mi1Table[zoneCount] ?? 4.80;
    } else {
        // Tratte senza Mi1 (tariffario richiesto)
        const noMi1Table = {
            2: 1.70,
            3: 2.20,
            4: 2.60,
            5: 3.10,
            6: 3.60,
            7: 4.10
        };
        price = noMi1Table[zoneCount] ?? 1.70;
    }

    return {
        label: from.label + ' | ' + to.label,
        fromZone: from.label.toUpperCase(),
        toZone: to.label.toUpperCase(),
        price: price,
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

    // Config tabs - Coming Soon
    document.querySelectorAll('.config-tab').forEach((tab, idx) => {
        if (idx > 0) { // Skip first tab (Biglietti / Carnet)
            tab.addEventListener('click', () => {
                const tabName = tab.textContent.trim();
                showComingSoonAlert(tabName);
            });
        }
    });

    // Map viewer
    zoneMapImg.addEventListener('click', openMapViewer);
    document.getElementById('map-viewer-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('map-viewer-overlay') || 
            e.target.classList.contains('map-viewer-image') ||
            e.target.closest('.map-viewer-close')) {
            closeMapViewer();
        }
    });

    // Accordion toggle
    document.getElementById('accordion-daa-btn').addEventListener('click', () => toggleAccordion('accordion-daa'));
    document.getElementById('accordion-zone-btn').addEventListener('click', () => toggleAccordion('accordion-zone'));

    // Search comuni
    const searchFrom = document.getElementById('search-from');
    const searchTo = document.getElementById('search-to');
    searchFrom.addEventListener('input', () => onSearchInput('from'));
    searchTo.addEventListener('input', () => onSearchInput('to'));
    searchFrom.addEventListener('focus', () => onSearchInput('from'));
    searchTo.addEventListener('focus', () => onSearchInput('to'));
    document.getElementById('clear-from').addEventListener('click', () => clearSearch('from'));
    document.getElementById('clear-to').addEventListener('click', () => clearSearch('to'));

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-field-wrap')) {
            document.getElementById('dropdown-from').classList.remove('open');
            document.getElementById('dropdown-to').classList.remove('open');
        }
    });
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
    const selectedZones = [];
    for (let i = selectedFromIdx; i <= selectedToIdx; i++) {
        selectedZones.push(ZONES[i]);
    }
    selectedZones.forEach((z, idx) => {
        const badge = document.createElement('span');
        badge.className = 'zone-badge';
        if (z.pattern) {
            badge.classList.add(z.pattern);
        }
        // Applica classi per border-radius
        if (idx === 0) {
            badge.classList.add('zone-badge-first');
        } else if (idx === selectedZones.length - 1) {
            badge.classList.add('zone-badge-last');
        } else {
            badge.classList.add('zone-badge-middle');
        }
        badge.textContent = z.label;
        badge.style.backgroundColor = z.color;
        zoneBadges.appendChild(badge);
    });
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
        width: 300,
        height: 300,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
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

// ── Wake Lock & Brightness ──

async function requestMaxBrightness() {
    // 1. Wake Lock — impedisce allo schermo di spegnersi
    try {
        if ('wakeLock' in navigator) {
            wakeLockSentinel = await navigator.wakeLock.request('screen');
        }
    } catch (e) {
        console.log('Wake Lock not available:', e);
    }

    // 2. Forza luminosità percepita al massimo (sfondo bianco puro + CSS)
    document.body.classList.add('qr-brightness-mode');

    // 3. iOS Screen Brightness API (non-standard, solo su alcuni browser)
    try {
        if (screen && 'brightness' in screen) {
            screen.brightness = 1.0;
        }
    } catch (e) { /* ignore */ }
}

function releaseMaxBrightness() {
    // Rilascia Wake Lock
    if (wakeLockSentinel) {
        wakeLockSentinel.release();
        wakeLockSentinel = null;
    }

    // Rimuovi classe luminosità
    document.body.classList.remove('qr-brightness-mode');

    // Ripristina brightness
    try {
        if (screen && 'brightness' in screen) {
            screen.brightness = -1; // auto
        }
    } catch (e) { /* ignore */ }
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

// ── Coming Soon Alert ──

function showComingSoonAlert(feature) {
    alert('🚧 ' + feature + ' - Coming Soon\n\nQuesta funzionalità sarà disponibile nei prossimi aggiornamenti.');
}

// ── Map Viewer ──

function openMapViewer() {
    const modal = document.getElementById('map-viewer-modal');
    const viewerImg = document.getElementById('map-viewer-img');
    viewerImg.src = zoneMapImg.src;
    viewerImg.alt = zoneMapImg.alt;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMapViewer() {
    const modal = document.getElementById('map-viewer-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ── Accordion Logic ──

let selectedComuneFrom = null;
let selectedComuneTo = null;

function toggleAccordion(id) {
    const section = document.getElementById(id);
    const isOpen = section.classList.contains('open');
    // Close all
    document.querySelectorAll('.accordion-section').forEach(s => s.classList.remove('open'));
    // Open clicked if it was closed
    if (!isOpen) {
        section.classList.add('open');
    }
}

// ── Comuni Search Logic ──

function onSearchInput(type) {
    const input = document.getElementById('search-' + (type === 'from' ? 'from' : 'to'));
    const dropdown = document.getElementById('dropdown-' + (type === 'from' ? 'from' : 'to'));
    const clearBtn = document.getElementById('clear-' + (type === 'from' ? 'from' : 'to'));
    const query = input.value.trim().toUpperCase();

    clearBtn.classList.toggle('visible', input.value.length > 0);

    if (query.length === 0) {
        dropdown.classList.remove('open');
        return;
    }

    const results = COMUNI_STIBM.filter(c => c.nome.includes(query)).slice(0, 15);
    dropdown.innerHTML = '';

    if (results.length === 0) {
        dropdown.innerHTML = '<div class="search-dropdown-empty">Nessun comune trovato</div>';
    } else {
        results.forEach(c => {
            const item = document.createElement('div');
            item.className = 'search-dropdown-item';
            item.innerHTML = '<span>' + capitalizeComune(c.nome) + '</span><span class="comune-zone-tag">' + c.zona + '</span>';
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                selectComune(type, c);
            });
            dropdown.appendChild(item);
        });
    }
    dropdown.classList.add('open');
}

function selectComune(type, comune) {
    const input = document.getElementById('search-' + (type === 'from' ? 'from' : 'to'));
    const dropdown = document.getElementById('dropdown-' + (type === 'from' ? 'from' : 'to'));
    const clearBtn = document.getElementById('clear-' + (type === 'from' ? 'from' : 'to'));

    input.value = capitalizeComune(comune.nome);
    dropdown.classList.remove('open');
    clearBtn.classList.add('visible');

    if (type === 'from') {
        selectedComuneFrom = comune;
    } else {
        selectedComuneTo = comune;
    }

    // If both selected, auto-calculate zones
    if (selectedComuneFrom && selectedComuneTo) {
        applyComuniZones();
    }
}

function clearSearch(type) {
    const input = document.getElementById('search-' + (type === 'from' ? 'from' : 'to'));
    const dropdown = document.getElementById('dropdown-' + (type === 'from' ? 'from' : 'to'));
    const clearBtn = document.getElementById('clear-' + (type === 'from' ? 'from' : 'to'));
    input.value = '';
    dropdown.classList.remove('open');
    clearBtn.classList.remove('visible');

    if (type === 'from') {
        selectedComuneFrom = null;
    } else {
        selectedComuneTo = null;
    }

    document.getElementById('search-result-zone').style.display = 'none';
}

function applyComuniZones() {
    const fromZona = selectedComuneFrom.zona;
    const toZona = selectedComuneTo.zona;

    // Find zone indices in ZONES array
    const fromZoneIdx = ZONES.findIndex(z => z.label === fromZona);
    const toZoneIdx = ZONES.findIndex(z => z.label === toZona);

    if (fromZoneIdx === -1 || toZoneIdx === -1) return;

    // Ensure from <= to
    const minIdx = Math.min(fromZoneIdx, toZoneIdx);
    const maxIdx = Math.max(fromZoneIdx, toZoneIdx);

    // Enforce minimum 2 zones
    let finalMinIdx = minIdx;
    let finalMaxIdx = maxIdx;
    if (finalMinIdx === finalMaxIdx) {
        if (finalMaxIdx < ZONES.length - 1) {
            finalMaxIdx++;
        } else {
            finalMinIdx--;
        }
    }

    // Update sliders
    selectedFromIdx = finalMinIdx;
    selectedToIdx = finalMaxIdx;
    sliderFrom.value = selectedFromIdx;
    sliderTo.value = selectedToIdx;
    updateSlider();
    updateEndDate();

    // Show result
    const resultDiv = document.getElementById('search-result-zone');
    const resultText = document.getElementById('search-result-text');
    const info = getTicketInfo(selectedFromIdx, selectedToIdx);
    resultText.textContent = '✓ Zone calcolate: ' + info.label + ' — ' + formatPrice(info.price);
    resultDiv.style.display = 'block';
}

function capitalizeComune(str) {
    return str.split(' ').map(word => {
        // Keep short prepositions/articles lowercase
        const lower = word.toLowerCase();
        if (['di', 'al', 'sul', 'con', 'in', 'del', 'dei', 'da', 'd\'adda', 'de\''].includes(lower)) {
            return lower;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// ── PWA Service Worker Registration ──

function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(err => console.log('SW registration failed:', err));
    }
}
