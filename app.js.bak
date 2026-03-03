/* ============================================
   TRENORD BIGLIETTO DIGITALE — App Logic
   ============================================ */

// ── Zone Configuration ──
const ZONE_CONFIG = {
    'Mi1 | Mi1': { price: 2.20, duration: 90,  fromZone: 'MI1', toZone: 'MI1' },
    'Mi1 | Mi3': { price: 2.20, duration: 90,  fromZone: 'MI1', toZone: 'MI3' },
    'Mi1 | Mi4': { price: 2.60, duration: 105, fromZone: 'MI1', toZone: 'MI4' },
    'Mi1 | Mi5': { price: 3.00, duration: 120, fromZone: 'MI1', toZone: 'MI5' },
    'Mi1 | Mi6': { price: 3.40, duration: 135, fromZone: 'MI1', toZone: 'MI6' },
    'Mi1 | Mi7': { price: 3.80, duration: 150, fromZone: 'MI1', toZone: 'MI7' },
    'Mi1 | Mi8': { price: 4.20, duration: 165, fromZone: 'MI1', toZone: 'MI8' },
    'Mi1 | Mi9': { price: 4.60, duration: 180, fromZone: 'MI1', toZone: 'MI9' }
};

// ── App State ──
let currentTicket = null;
let qrInstance = null;

// ── DOM References ──
const configScreen  = document.getElementById('config-screen');
const walletScreen  = document.getElementById('wallet-screen');
const detailScreen  = document.getElementById('detail-screen');
const infoModal     = document.getElementById('info-modal');
const activationModal = document.getElementById('activation-modal');

const startDateInput  = document.getElementById('start-date');
const endDateInput    = document.getElementById('end-date');
const viaggioSelect   = document.getElementById('viaggio-select');
const prezzoInput     = document.getElementById('prezzo-input');

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
    initDefaults();
    bindEvents();
    registerSW();
});

function initDefaults() {
    // Set default start date: now, rounded to nearest minute
    const now = new Date();
    now.setSeconds(0, 0);
    startDateInput.value = toLocalDatetimeString(now);

    // Calculate and set end date
    updateEndDate();
    updatePrice();
}

function bindEvents() {
    // Config form
    viaggioSelect.addEventListener('change', () => {
        updatePrice();
        updateEndDate();
    });
    startDateInput.addEventListener('change', updateEndDate);

    // Generate ticket
    document.getElementById('btn-genera').addEventListener('click', generateTicket);

    // Back to config from wallet
    document.getElementById('btn-back-config').addEventListener('click', () => {
        navigateScreen(walletScreen, configScreen, true);
    });

    // Show QR Code detail
    document.getElementById('btn-mostra-qr').addEventListener('click', openDetail);

    // Close detail
    document.getElementById('btn-detail-close').addEventListener('click', closeDetail);

    // Info modal (card ⓘ)
    document.getElementById('btn-ticket-info').addEventListener('click', () => openModal('info-modal'));

    // Activation modal (header ⓘ)
    document.getElementById('btn-activation-info').addEventListener('click', () => openModal('activation-modal'));

    // Modal backdrop close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });

    // Norme link
    document.getElementById('btn-norme').addEventListener('click', () => {
        openModal('info-modal');
    });
}

// ── Price & Duration Auto-Update ──

function updatePrice() {
    const viaggio = viaggioSelect.value;
    const config = ZONE_CONFIG[viaggio];
    if (config) {
        prezzoInput.value = config.price.toFixed(2);
    }
}

function updateEndDate() {
    const viaggio = viaggioSelect.value;
    const config = ZONE_CONFIG[viaggio];
    const startVal = startDateInput.value;
    if (config && startVal) {
        const startDate = new Date(startVal);
        const endDate = new Date(startDate.getTime() + config.duration * 60000);
        endDateInput.value = toLocalDatetimeString(endDate);
    }
}

// ── Ticket Generation ──

function generateTicket() {
    const viaggio = viaggioSelect.value;
    const config = ZONE_CONFIG[viaggio];
    const startVal = startDateInput.value;
    const endVal = endDateInput.value;
    const prezzo = parseFloat(prezzoInput.value);

    if (!startVal || !endVal) {
        showAlert('Errore', 'Inserisci le date di validità.');
        return;
    }
    if (isNaN(prezzo) || prezzo <= 0) {
        showAlert('Errore', 'Inserisci un prezzo valido.');
        return;
    }

    const startDate = new Date(startVal);
    const endDate = new Date(endVal);
    const purchaseDate = new Date(startDate.getTime() - 10 * 60000); // k6 = start - 10 min

    const pnr = generatePNR();
    const uuid = generateUUID(false); // lowercase for k10
    const fromZone = config.fromZone;
    const toZone = config.toZone;

    currentTicket = {
        pnr,
        uuid,
        viaggio,
        prezzo,
        startDate,
        endDate,
        purchaseDate,
        fromZone,
        toZone,
        classe: 'Unica'
    };

    populateWallet();
    navigateScreen(configScreen, walletScreen);
}

function populateWallet() {
    const t = currentTicket;
    document.getElementById('wallet-pnr').textContent = t.pnr;
    document.getElementById('wallet-classe').textContent = t.classe;
    document.getElementById('wallet-viaggio').textContent = t.viaggio;
    document.getElementById('wallet-validita-start').textContent = formatDateShort(t.startDate);
    document.getElementById('wallet-validita-end').textContent = formatDateShort(t.endDate);
}

// ── Detail Screen ──

function openDetail() {
    if (!currentTicket) return;
    const t = currentTicket;

    document.getElementById('detail-pnr').textContent = t.pnr;

    // Zone text: "Mi1-Mi4" format
    const zoneFrom = t.viaggio.split(' | ')[0];
    const zoneTo = t.viaggio.split(' | ')[1];
    document.getElementById('detail-zone').textContent = zoneFrom + '-' + zoneTo;

    // Info fields
    document.getElementById('detail-validita').textContent =
        formatDateLong(t.startDate) + ' - ' + formatDateLong(t.endDate);
    document.getElementById('detail-prezzo').textContent =
        formatPrice(t.prezzo);
    document.getElementById('detail-classe').textContent = t.classe;
    document.getElementById('detail-viaggio').textContent = t.viaggio;

    // Show detail panel first (so QR canvas renders properly)
    detailScreen.classList.remove('closing');
    detailScreen.classList.add('open');

    // Generate QR Code after modal is visible
    requestAnimationFrame(() => {
        generateQRCode();
    });
}

function closeDetail() {
    detailScreen.classList.add('closing');
    setTimeout(() => {
        detailScreen.classList.remove('open', 'closing');
        // Clean up QR
        const container = document.getElementById('qrcode-container');
        container.innerHTML = '';
        qrInstance = null;
    }, 350);
}

// ── QR Code Generation ──

function generateQRCode() {
    const container = document.getElementById('qrcode-container');
    container.innerHTML = '';

    const qrContent = buildQRContent(currentTicket);

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
    // Build JSON payload matching Trenord format
    const payload = {
        k0: 'TICKET',
        k1: ticket.pnr,
        k2: '8500',
        k3: 'UNIQUE',
        k4: ticket.startDate.toISOString(),
        k5: ticket.endDate.toISOString(),
        k6: ticket.purchaseDate.toISOString(),
        k7: { c: ticket.fromZone + 'a' },
        k8: { c: ticket.toZone },
        k10: ticket.uuid
    };

    // Base64 encode the JSON
    const jsonStr = JSON.stringify(payload);
    const base64 = btoa(unescape(encodeURIComponent(jsonStr)));

    // Generate checksum: 8 groups of 4 digits, 7 uppercase letters between them
    const checksum = generateChecksum();

    // Generate separate UUID (uppercase) for the QR suffix
    const qrUUID = generateUUID(true);

    return base64 + ':' + checksum + ':' + qrUUID;
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
            uuid += hex[(Math.floor(Math.random() * 4) + 8)]; // 8,9,a,b variants
        } else {
            uuid += c;
        }
    }
    return uuid;
}

function generateChecksum() {
    // Format: NNNNLNNNNLNNNNLNNNNLNNNNLNNNNLNNNNLNNNN
    // 8 groups of 4 digits, 7 uppercase letters between them
    const letters = 'ABCDEFG';
    let result = '';
    for (let i = 0; i < 8; i++) {
        // 4 random digits (1000-9999)
        result += String(Math.floor(1000 + Math.random() * 9000));
        // Add letter between groups (not after the last)
        if (i < 7) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
    }
    return result;
}

// ── Navigation ──

function navigateScreen(fromScreen, toScreen, isBack) {
    if (isBack) {
        // Going back: fromScreen slides DOWN, toScreen revealed behind
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
        // Going forward: toScreen slides UP over fromScreen
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
    // Simple fallback alert
    alert(title + '\n' + message);
}

// ── Date Formatting ──

function toLocalDatetimeString(date) {
    // Format: YYYY-MM-DDTHH:MM (for datetime-local input)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatDateShort(date) {
    // Format: DD/MM/YY, HH:MM
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

function formatDateLong(date) {
    // Same as short for Trenord: DD/MM/YY, HH:MM
    return formatDateShort(date);
}

function formatPrice(price) {
    // Format: X,XX €
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
