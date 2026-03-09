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

const APP_BUILD_VERSION = '1.0';
const APP_BUILD_LABEL = 'v' + APP_BUILD_VERSION;

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
        duration: getTicketDuration(zoneCount),
        zoneCount: zoneCount,
        imageFile: 'STIBM Areas/' + from.label + '-' + to.label + '.png'
    };
}

// ── Durata biglietto STIBM (minuti) ──
// Mi1-Mi3 (≤3 zone): 90 min
// 4-5 zone: +15 min per zona aggiuntiva oltre la 3ª
// 6+ zone: +30 min per zona aggiuntiva oltre la 5ª
function getTicketDuration(zoneCount) {
    if (zoneCount <= 3) return 90;
    if (zoneCount <= 5) return 90 + (zoneCount - 3) * 15;
    return 120 + (zoneCount - 5) * 30;
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
    initSplashScreen();
    checkDisclaimerAccepted();
    loadTickets();
    initDefaults();
    initSliderLabels();
    updateSlider();
    bindEvents();
    registerSW();
    checkForUpdates();
    updateProfiloDisplayName();
    syncBuildLabels();
    initIOSViewportFix();
    initDevConsole();
    requestNotificationPermission();
    initGuideDemos();
    // Check ticket expiry every 30 seconds
    setInterval(checkTicketExpiryNotifications, 30000);
});

function syncBuildLabels() {
    const footerVersionEl = document.querySelector('.profilo-footer-version');
    if (footerVersionEl) {
        footerVersionEl.textContent = APP_BUILD_LABEL + ' · Mar 2026';
    }

    const aggiornaVersionEl = document.querySelector('.aggiorna-version');
    if (aggiornaVersionEl) {
        aggiornaVersionEl.textContent = 'Versione corrente: ' + APP_BUILD_LABEL;
    }
}

function initIOSViewportFix() {
    function updateIOSBottomGap() {
        const vv = window.visualViewport;
        if (!vv) return;
        const rawGap = window.innerHeight - vv.height - vv.offsetTop;
        const gap = Math.max(0, Math.round(rawGap));
        document.documentElement.style.setProperty('--ios-bottom-gap', gap + 'px');
    }

    updateIOSBottomGap();

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', updateIOSBottomGap);
        window.visualViewport.addEventListener('scroll', updateIOSBottomGap);
    }
    window.addEventListener('resize', updateIOSBottomGap);
    window.addEventListener('orientationchange', updateIOSBottomGap);
}

function initDefaults() {
    // No date defaults needed — dates calculated at activation
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

    // Ticket counter
    btnCountMinus.addEventListener('click', () => updateTicketCount(-1));
    btnCountPlus.addEventListener('click', () => updateTicketCount(1));

    // Generate ticket(s)
    document.getElementById('btn-genera').addEventListener('click', generateTickets);

    // Tabbar navigation
    document.querySelectorAll('#global-tabbar .tabbar-item').forEach(item => {
        item.addEventListener('click', () => {
            switchTab(item.dataset.tab);
            if (item.dataset.tab === 'gite') {
                renderStats();
            }
        });
    });

    // Close detail
    document.getElementById('btn-detail-close').addEventListener('click', closeDetail);

    // Activation modal
    document.getElementById('btn-wallet-info').addEventListener('click', () => openModal('info-modal'));

    // Norme link — shows QR data for active tickets
    document.getElementById('btn-norme').addEventListener('click', () => showQRData());

    // Check updates button (removed - now in profilo sub-screen)

    // Modal backdrop close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal(overlay.id);
        });
    });

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

// ── Ticket Generation ──

function generateTickets() {
    const info = getTicketInfo(selectedFromIdx, selectedToIdx);

    // Check billing data before generating
    if (!hasBillingData()) {
        _pendingTicketGeneration = info;
        openModal('billing-required-modal');
        return;
    }

    // Show assembly animation with ticket data
    showQRAssemblyAnimation(info, () => {
        const purchaseDate = new Date();
        const generatedTickets = [];

        for (let i = 0; i < ticketCount; i++) {
            const ticket = {
                id: generateUUID(false),
                pnr: generatePNR(),
                uuid: generateUUID(false),
                viaggio: info.label,
                prezzo: info.price,
                duration: info.duration,
                startDate: null,
                endDate: null,
                activatedDate: null,
                purchaseDate: purchaseDate.toISOString(),
                fromZone: info.fromZone,
                toZone: info.toZone,
                classe: 'Unica',
                status: 'purchased'
            };
            tickets.push(ticket);
            generatedTickets.push(ticket);
        }

        saveTickets();

        // Generate order for storico acquisti
        createOrder(generatedTickets, purchaseDate);

        renderWalletTickets();

        // Fly-to-wallet animation
        flyToWallet(info, () => {
            switchTab('wallet');
        });
    });
}

let _pendingTicketGeneration = null;

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
        if (t.status === 'active' && t.endDate && new Date(t.endDate) < now) {
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
    const purchasedTickets = tickets.filter(t => t.status === 'purchased');
    const visibleTickets = [...activeTickets, ...purchasedTickets];
    const ticketList = document.getElementById('ticket-list');

    ticketList.innerHTML = '';
    if (visibleTickets.length === 0) {
        ticketList.innerHTML = '<div class="empty-state"><p>Nessun biglietto attivo</p></div>';
    } else {
        visibleTickets.forEach(t => {
            ticketList.appendChild(createTicketCard(t, false));
        });
    }
}

function createTicketCard(ticket, isExpired) {
    const container = document.createElement('div');
    container.className = 'swipe-container';
    container.dataset.ticketId = ticket.id;

    const isPurchased = ticket.status === 'purchased';
    const duration = ticket.duration || 90;

    // Validità section
    let validitaHTML = '';
    if (isPurchased) {
        validitaHTML = `
            <div class="ticket-field">
                <span class="ticket-label">VALIDITÀ</span>
                <span class="ticket-value">${duration} min</span>
            </div>`;
    } else {
        validitaHTML = `
            <div class="ticket-field">
                <span class="ticket-label">VALIDITÀ</span>
                <span class="ticket-value">${duration} min</span>
            </div>`;
    }

    // Button section
    let buttonHTML = '';
    if (isPurchased) {
        buttonHTML = `
            <button class="btn-green-full btn-qr btn-tapgo">
                Tap & Go
            </button>`;
    } else {
        buttonHTML = `
            <button class="btn-green-full btn-qr btn-mostra-qr">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Mostra QR Code
            </button>`;
    }

    container.innerHTML = `
        <div class="swipe-action">
            <button class="swipe-delete-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    <line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
                </svg>
                <span>Elimina</span>
            </button>
        </div>
        <div class="ticket-card swipe-content ${isExpired ? 'ticket-expired' : ''}">
            <div class="ticket-card-header">
                <span class="ticket-type-label">Ordinario</span>
                <button class="info-icon-gray btn-ticket-info" aria-label="Info">
                    <img class="info-icon-img info-icon-img-green" src="SVG Icons/Info.svg" alt="Info">
                </button>
            </div>
            ${validitaHTML}
            <div class="ticket-field">
                <span class="ticket-label">VIAGGIO</span>
                <span class="ticket-value ticket-value-bold">${ticket.viaggio}</span>
            </div>
            <div class="stibm-badge">STIBM</div>
            ${buttonHTML}
        </div>
    `;

    // Init swipe-to-delete
    initSwipe(container, ticket.id);

    if (isPurchased) {
        // Tap & Go button
        const tapGoBtn = container.querySelector('.btn-tapgo');
        tapGoBtn.addEventListener('click', (e) => {
            const content = container.querySelector('.swipe-content');
            const tx = content.style.transform;
            if (tx && tx !== 'translateX(0px)' && tx !== 'translateX(0)') return;
            pendingActivationTicketId = ticket.id;
            openModal('tapgo-modal');
        });
    } else {
        // QR button
        const qrBtn = container.querySelector('.btn-mostra-qr');
        qrBtn.addEventListener('click', (e) => {
            const content = container.querySelector('.swipe-content');
            const tx = content.style.transform;
            if (tx && tx !== 'translateX(0px)' && tx !== 'translateX(0)') return;
            openDetail(ticket.id);
        });
    }

    // Info button
    container.querySelector('.btn-ticket-info').addEventListener('click', () => {
        openModal('info-modal');
    });

    return container;
}

// ── Swipe-to-Delete (iOS style — improved) ──

function initSwipe(container, ticketId) {
    const content = container.querySelector('.swipe-content');
    const deleteBtn = container.querySelector('.swipe-delete-btn');

    let startX = 0, startY = 0, currentX = 0;
    let isDragging = false, isOpen = false, isHorizontal = null;
    const THRESHOLD = 90;

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

        if (isHorizontal === null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
            isHorizontal = Math.abs(dx) > Math.abs(dy);
        }

        if (!isHorizontal) return;
        e.preventDefault();

        const offset = isOpen ? dx - THRESHOLD : dx;
        currentX = Math.min(0, Math.max(-THRESHOLD, offset));
        content.style.transform = 'translateX(' + currentX + 'px)';
    }, { passive: false });

    content.addEventListener('touchend', () => {
        if (!isDragging || isHorizontal === null) return;
        isDragging = false;
        content.style.transition = 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        if (currentX < -(THRESHOLD * 0.4)) {
            content.style.transform = 'translateX(-' + THRESHOLD + 'px)';
            isOpen = true;
        } else {
            content.style.transform = 'translateX(0)';
            isOpen = false;
        }
        currentX = 0;
    }, { passive: true });

    // Delete button
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const h = container.offsetHeight;
        container.style.transition = 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, margin-bottom 0.4s ease';
        container.style.height = h + 'px';
        container.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            container.style.height = '0px';
            container.style.opacity = '0';
            container.style.marginBottom = '0';
        });
        setTimeout(() => {
            deleteTicket(ticketId);
        }, 420);
    });

    // Tap to close swipe
    content.addEventListener('click', (e) => {
        if (isOpen) {
            e.preventDefault();
            e.stopPropagation();
            content.style.transition = 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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

// ── Tap & Go Activation ──

let pendingActivationTicketId = null;

function activateTicket() {
    if (!pendingActivationTicketId) return;
    const ticket = tickets.find(t => t.id === pendingActivationTicketId);
    if (!ticket || ticket.status !== 'purchased') {
        closeModal('tapgo-modal');
        pendingActivationTicketId = null;
        return;
    }

    const now = new Date();
    const duration = ticket.duration || 90;
    const endDate = new Date(now.getTime() + duration * 60000);

    ticket.activatedDate = now.toISOString();
    ticket.startDate = now.toISOString();
    ticket.endDate = endDate.toISOString();
    ticket.status = 'active';

    const activatedId = pendingActivationTicketId;

    saveTickets();
    closeModal('tapgo-modal');
    pendingActivationTicketId = null;
    renderWalletTickets();

    // Auto-open ticket detail after activation
    setTimeout(function() {
        openDetail(activatedId);
    }, 400);
}

function cancelActivation() {
    closeModal('tapgo-modal');
    pendingActivationTicketId = null;
}

// ── Detail Screen ──

function openDetail(ticketId) {
    const ticket = tickets.find(t => t.id === ticketId);
    if (!ticket || ticket.status !== 'active') return;

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

    // Hide QR data section when opening
    const qrDataSection = document.getElementById('qr-data-section');
    if (qrDataSection) qrDataSection.style.display = 'none';

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
        qrShowingReal = false;
        qrRealSrc = null;
        qrFakeSrc = null;
    }, 350);
}

// ── QR Data Viewer ──

function showQRData() {
    if (!currentDetailTicket || currentDetailTicket.status !== 'active') return;
    const qrContent = buildQRContent(currentDetailTicket);
    const parts = qrContent.split(':');
    const base64Part = parts[0];

    // Decode base64 to JSON
    let decodedJSON = '';
    let parsed = null;
    try {
        const jsonStr = decodeURIComponent(escape(atob(base64Part)));
        parsed = JSON.parse(jsonStr);
        decodedJSON = JSON.stringify(parsed, null, 2);
    } catch(e) {
        decodedJSON = 'Errore nella decodifica';
    }

    const section = document.getElementById('qr-data-section');
    const rawEl = document.getElementById('qr-data-raw');
    const decodedEl = document.getElementById('qr-data-decoded');
    const fieldsEl = document.getElementById('qr-data-fields');

    rawEl.textContent = qrContent;
    decodedEl.textContent = decodedJSON;

    // Populate fields table
    if (parsed && fieldsEl) {
        const fieldDescriptions = {
            k0: 'Tipo documento',
            k1: 'Codice PNR',
            k2: 'Codice operatore',
            k3: 'Classe',
            k4: 'Data attivazione',
            k5: 'Data scadenza',
            k6: 'Data acquisto',
            k7: 'Zona partenza',
            k8: 'Zona arrivo',
            k10: 'UUID biglietto'
        };
        let rows = '';
        for (const key of Object.keys(fieldDescriptions)) {
            const val = parsed[key];
            const display = typeof val === 'object' ? JSON.stringify(val) : String(val || '—');
            rows += '<tr><td><code>' + key + '</code></td><td>' + fieldDescriptions[key] + '</td><td>' + display + '</td></tr>';
        }
        fieldsEl.innerHTML = rows;
    }

    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

// ── Go to Receipt from Detail ──

function openReceiptFromDetail() {
    if (!currentDetailTicket) return;
    const orders = getOrders();
    const ticket = currentDetailTicket;
    // Match order by purchaseDate
    const order = orders.find(o => o.date === ticket.purchaseDate);
    if (!order) return;
    closeDetail();
    setTimeout(() => {
        switchTab('profilo');
        openSubScreen('screen-storico-acquisti');
        renderStoricoAcquisti();
        setTimeout(() => {
            openOrderDetail(order.orderId);
            setTimeout(() => openReceipt(order.orderId), 400);
        }, 400);
    }, 400);
}

// ── QR Code Generation ──

// Stato swap QR: true = vero (default), false = corrotto
let qrShowingReal = true;
let qrRealSrc = null;
let qrFakeSrc = null;

function generateQRCode(ticket) {
    const container = document.getElementById('qrcode-container');
    container.innerHTML = '';
    qrShowingReal = true;
    qrRealSrc = null;
    qrFakeSrc = null;

    const qrContent = buildQRContent(ticket);

    qrInstance = new QRCode(container, {
        text: qrContent,
        width: 300,
        height: 300,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
    });

    // Dopo il rendering, prepara la versione corrotta
    setTimeout(() => {
        const img = container.querySelector('img');
        if (!img) return;

        const setup = () => {
            qrRealSrc = img.src;
            qrFakeSrc = buildCorruptedQR(img);
            // Mostra il VERO di default
            img.src = qrRealSrc;
            qrShowingReal = true;
            img.style.cursor = 'pointer';
            img.addEventListener('click', toggleQR);
        };

        if (img.complete && img.naturalWidth > 0) {
            setup();
        } else {
            img.onload = setup;
        }
    }, 200);
}

function toggleQR() {
    const container = document.getElementById('qrcode-container');
    if (!container || !qrRealSrc || !qrFakeSrc) return;
    const img = container.querySelector('img');
    if (!img) return;
    qrShowingReal = !qrShowingReal;
    img.src = qrShowingReal ? qrRealSrc : qrFakeSrc;
}

function buildCorruptedQR(img) {
    const size = img.naturalWidth || 300;
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, size, size);

    // Analizza i pixel per trovare quietZone e finderSize
    const data = ctx.getImageData(0, 0, size, size).data;
    const isBlack = (px, py) => {
        if (px < 0 || py < 0 || px >= size || py >= size) return false;
        return data[(py * size + px) * 4] < 128;
    };

    // Trova quiet zone
    let qz = 0, qzY = 0;
    outer: for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (isBlack(x, y)) { qz = x; qzY = y; break outer; }
        }
    }

    // Finder = prima riga continua di neri
    let fEnd = qz;
    for (let x = qz; x < size; x++) {
        if (isBlack(x, qzY)) { fEnd = x; } else { break; }
    }
    const finderPx = fEnd - qz + 1;
    const modPx = finderPx / 7;

    // 3 finder positions
    const finders = [
        { x: qz, y: qzY },
        { x: size - qz - finderPx, y: qzY },
        { x: qz, y: size - qzY - finderPx }
    ];

    // Moduli bianchi dell'anello interno da rendere neri.
    // Questi sono i punti che lo scanner attraversa orizzontalmente
    // e verticalmente per rilevare il rapporto 1:1:3:1:1.
    // Rendendoli neri, il rapporto diventa 2:0:3:1:1 (orizzontale)
    // e 2:0:3:1:1 (verticale) → scanner non lo riconosce.
    // Visivamente: 4 microscopici pixel neri nell'anello bianco,
    // adiacenti al bordo nero → praticamente invisibili.
    const corruptModules = [
        { r: 3, c: 1 }, // centro-sinistra anello bianco (rompe scansione orizzontale)
        { r: 3, c: 5 }, // centro-destra anello bianco (rompe scansione orizzontale)
        { r: 1, c: 3 }, // centro-alto anello bianco (rompe scansione verticale)
        { r: 5, c: 3 }, // centro-basso anello bianco (rompe scansione verticale)
    ];

    ctx.fillStyle = '#000000';
    finders.forEach(f => {
        corruptModules.forEach(m => {
            ctx.fillRect(
                Math.floor(f.x + m.c * modPx),
                Math.floor(f.y + m.r * modPx),
                Math.ceil(modPx),
                Math.ceil(modPx)
            );
        });
    });

    return c.toDataURL();
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
    // Defensive reset: if a modal flow left the body locked, restore page scroll.
    document.body.style.overflow = '';

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
    if (tabName === 'gite') {
        renderStats();
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

// ── Map Viewer with Pinch-to-Zoom ──

let mapZoomState = {
    scale: 1,
    minScale: 1,
    maxScale: 4,
    offsetX: 0,
    offsetY: 0,
    initialDistance: 0
};

function openMapViewer() {
    const modal = document.getElementById('map-viewer-modal');
    const viewerImg = document.getElementById('map-viewer-img');
    viewerImg.src = zoneMapImg.src;
    viewerImg.alt = zoneMapImg.alt;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset zoom state
    mapZoomState = {
        scale: 1,
        minScale: 1,
        maxScale: 4,
        offsetX: 0,
        offsetY: 0,
        initialDistance: 0
    };
    updateMapTransform(viewerImg);
    initMapZoom(viewerImg);
}

function closeMapViewer() {
    const modal = document.getElementById('map-viewer-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initMapZoom(imgElement) {
    let touchStartScale = 1;
    let lastX = 0, lastY = 0;
    let isPinching = false;
    let isPanning = false;

    // Remove old listeners if any
    const newImg = imgElement.cloneNode(true);
    imgElement.parentNode.replaceChild(newImg, imgElement);
    const img = document.getElementById('map-viewer-img');

    img.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            isPinching = true;
            isPanning = false;
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            mapZoomState.initialDistance = Math.sqrt(dx * dx + dy * dy);
            touchStartScale = mapZoomState.scale;
        } else if (e.touches.length === 1 && mapZoomState.scale > 1) {
            isPanning = true;
            isPinching = false;
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        }
    }, { passive: true });

    img.addEventListener('touchmove', (e) => {
        if (isPinching && e.touches.length === 2) {
            e.preventDefault();
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const currentDistance = Math.sqrt(dx * dx + dy * dy);
            
            const scaleFactor = currentDistance / mapZoomState.initialDistance;
            mapZoomState.scale = Math.max(mapZoomState.minScale, Math.min(mapZoomState.maxScale, touchStartScale * scaleFactor));
            updateMapTransform(img);
        } else if (isPanning && e.touches.length === 1) {
            e.preventDefault();
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const deltaX = (currentX - lastX) / mapZoomState.scale;
            const deltaY = (currentY - lastY) / mapZoomState.scale;
            
            mapZoomState.offsetX += deltaX;
            mapZoomState.offsetY += deltaY;
            
            lastX = currentX;
            lastY = currentY;
            updateMapTransform(img);
        }
    }, { passive: false });

    img.addEventListener('touchend', (e) => {
        if (e.touches.length < 2) isPinching = false;
        if (e.touches.length === 0) isPanning = false;
    }, { passive: true });
}

function updateMapTransform(imgElement) {
    imgElement.style.transform = `scale(${mapZoomState.scale}) translate(${mapZoomState.offsetX}px, ${mapZoomState.offsetY}px)`;
    imgElement.style.cursor = mapZoomState.scale > 1 ? 'grab' : 'zoom-in';
}

// ── Accordion Logic ──

let selectedComuneFrom = null;
let selectedComuneTo = null;

function toggleAccordion(id) {
    const section = document.getElementById(id);
    const isOpen = section.classList.contains('open');
    const commonSections = document.getElementById('common-form-sections');

    // Close all
    document.querySelectorAll('.accordion-section').forEach(s => s.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) {
        section.classList.add('open');
        // Sposta le sezioni comuni alla fine di questo accordion body
        const body = section.querySelector('.accordion-body');
        body.appendChild(commonSections);
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

// ── Fly to Wallet Animation ──

function flyToWallet(info, callback) {
    const walletTab = document.querySelector('#global-tabbar .tabbar-item[data-tab="wallet"]');
    if (!walletTab) { callback(); return; }

    const walletRect = walletTab.getBoundingClientRect();
    const walletX = walletRect.left + walletRect.width / 2;
    const walletY = walletRect.top + walletRect.height / 2;

    const el = document.createElement('div');
    el.className = 'fly-ticket';
    el.innerHTML = `
        <div class="fly-ticket-inner">
            <div class="fly-ticket-zone">${info.label}</div>
            <div class="fly-ticket-price">${info.price.toFixed(2)} €</div>
        </div>`;
    document.body.appendChild(el);

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    el.style.left = startX + 'px';
    el.style.top = startY + 'px';

    requestAnimationFrame(() => {
        el.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.left = walletX + 'px';
        el.style.top = walletY + 'px';
        el.style.transform = 'translate(-50%, -50%) scale(0.15)';
        el.style.opacity = '0.3';
    });

    setTimeout(() => {
        // Pulse wallet icon
        walletTab.classList.add('wallet-pulse');
        setTimeout(() => walletTab.classList.remove('wallet-pulse'), 500);
        el.remove();
        callback();
    }, 750);
}

// ── QR Assembly Animation (Epic) ──

function showQRAssemblyAnimation(ticketData, callback) {
    const modal = document.getElementById('qr-assembly-modal');
    const termBody = document.getElementById('qr-terminal-body');
    const grid = document.getElementById('qr-grid');
    const pctEl = document.getElementById('qr-pct');
    const progressFill = document.getElementById('qr-progress-fill');
    const statusEl = document.getElementById('qr-status');
    const successOverlay = document.getElementById('qr-success-overlay');

    // Reset
    termBody.innerHTML = '';
    grid.innerHTML = '';
    pctEl.textContent = '0%';
    progressFill.style.width = '0%';
    statusEl.textContent = 'Inizializzazione...';
    successOverlay.classList.remove('visible');
    modal.classList.remove('fadeout');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Create 441 pixels (21x21 grid)
    const GRID_SIZE = 21;
    const totalPixels = GRID_SIZE * GRID_SIZE;
    const pixels = [];
    const qrPattern = generateQRPattern(GRID_SIZE);

    for (let i = 0; i < totalPixels; i++) {
        const px = document.createElement('div');
        px.className = 'qr-px off';
        grid.appendChild(px);
        pixels.push(px);
    }

    // Generate ticket metadata
    const uuid = generateUUID(false);
    const pnr = generatePNR();
    const sha = Array.from(crypto.getRandomValues(new Uint8Array(32))).map(b => b.toString(16).padStart(2, '0')).join('');
    const now = new Date();
    const timestamp = now.toISOString();

    // Terminal sequence (scaled to ~15s total)
    const lines = [
        { delay: 0, html: '<span class="t-green">$</span> ssh tpg@gateway.trenord.it -p 443' },
        { delay: 260, html: '<span class="t-gray">Connecting to gateway.trenord.it:443...</span>' },
        { delay: 585, html: '<span class="t-green">\u2713</span> <span class="t-gray">Connection established. TLS 1.3 (ECDHE-RSA-AES256)</span>' },
        { delay: 845, html: '<span class="t-gray">Last login: ' + now.toLocaleDateString('it-IT') + ' from 10.0.' + Math.floor(Math.random()*255) + '.' + Math.floor(Math.random()*255) + '</span>' },
        { delay: 1100, html: '' },
        { delay: 1170, html: '<span class="t-green">tpg@trenord</span>:<span class="t-cyan">~</span>$ init-ticket --type STIBM --mode ordinario' },
        { delay: 1500, html: '<span class="t-yellow">[INIT]</span> Ticket Processing Gateway v4.2.1' },
        { delay: 1690, html: '<span class="t-yellow">[INIT]</span> Allocating secure memory block...' },
        { delay: 1880, html: '' },
        { delay: 1950, html: '<span class="t-cyan">\u2501\u2501\u2501 CONFIGURAZIONE BIGLIETTO \u2501\u2501\u2501</span>' },
        { delay: 2145, html: '<span class="t-gray">\u251c\u2500</span> <span class="t-white">Viaggio:</span>    <span class="t-green">' + ticketData.label + '</span>' },
        { delay: 2340, html: '<span class="t-gray">\u251c\u2500</span> <span class="t-white">Zone:</span>       <span class="t-green">' + ticketData.fromZone + ' \u2192 ' + ticketData.toZone + '</span> <span class="t-gray">(' + ticketData.zoneCount + ' zone)</span>' },
        { delay: 2535, html: '<span class="t-gray">\u251c\u2500</span> <span class="t-white">Prezzo:</span>     <span class="t-green">\u20ac' + ticketData.price.toFixed(2) + '</span>' },
        { delay: 2730, html: '<span class="t-gray">\u251c\u2500</span> <span class="t-white">Classe:</span>     <span class="t-green">Unica</span>' },
        { delay: 2925, html: '<span class="t-gray">\u251c\u2500</span> <span class="t-white">Durata:</span>     <span class="t-green">' + ticketData.duration + ' min</span>' },
        { delay: 3120, html: '<span class="t-gray">\u2514\u2500</span> <span class="t-white">Timestamp:</span>  <span class="t-orange">' + timestamp + '</span>' },
        { delay: 3380, html: '' },
        { delay: 3445, html: '<span class="t-green">tpg@trenord</span>:<span class="t-cyan">~</span>$ generate-identity --secure' },
        { delay: 3705, html: '<span class="t-yellow">[AUTH]</span> Generating secure identifiers...' },
        { delay: 3965, html: '<span class="t-gray">\u251c\u2500</span> <span class="t-white">UUID:</span>  <span class="t-magenta">' + uuid + '</span>' },
        { delay: 4160, html: '<span class="t-gray">\u2514\u2500</span> <span class="t-white">PNR:</span>   <span class="t-magenta">' + pnr + '</span>' },
        { delay: 4420, html: '' },
        { delay: 4485, html: '<span class="t-green">tpg@trenord</span>:<span class="t-cyan">~</span>$ build-payload --encode base64' },
        { delay: 4745, html: '<span class="t-yellow">[BUILD]</span> Assembling JSON payload...' },
        { delay: 5005, html: '<span class="t-gray">{</span>' },
        { delay: 5100, html: '  <span class="t-cyan">"id"</span>: <span class="t-orange">"' + uuid.substring(0, 18) + '..."</span>,' },
        { delay: 5200, html: '  <span class="t-cyan">"pnr"</span>: <span class="t-orange">"' + pnr + '"</span>,' },
        { delay: 5300, html: '  <span class="t-cyan">"zones"</span>: <span class="t-orange">"' + ticketData.fromZone + '-' + ticketData.toZone + '"</span>,' },
        { delay: 5395, html: '  <span class="t-cyan">"price"</span>: <span class="t-magenta">' + ticketData.price.toFixed(2) + '</span>,' },
        { delay: 5490, html: '  <span class="t-cyan">"class"</span>: <span class="t-orange">"U"</span>' },
        { delay: 5590, html: '<span class="t-gray">}</span>' },
        { delay: 5850, html: '' },
        { delay: 5915, html: '<span class="t-green">tpg@trenord</span>:<span class="t-cyan">~</span>$ sha256sum --verify payload.json' },
        { delay: 6175, html: '<span class="t-yellow">[CRYPTO]</span> Computing SHA-256 checksum...' },
        { delay: 6500, html: '<span class="t-gray">SHA-256:</span> <span class="t-magenta">' + sha.substring(0, 32) + '</span>' },
        { delay: 6695, html: '<span class="t-gray">         ' + sha.substring(32) + '</span>' },
        { delay: 6955, html: '<span class="t-green">\u2713</span> <span class="t-white">Checksum verified</span>' },
        { delay: 7215, html: '' },
        { delay: 7280, html: '<span class="t-green">tpg@trenord</span>:<span class="t-cyan">~</span>$ qr-encode --ecc H --matrix 21x21' },
        { delay: 7540, html: '<span class="t-yellow">[QR]</span> Encoding data matrix...' },
        { delay: 7800, html: '<span class="t-yellow">[QR]</span> Error correction: <span class="t-white">Level H (30%)</span>' },
        { delay: 8060, html: '<span class="t-yellow">[QR]</span> Matrix size: <span class="t-white">21\u00d721 modules</span>' },
        { delay: 8580, html: '<span class="t-yellow">[QR]</span> Writing position detection patterns...' },
        { delay: 9425, html: '<span class="t-yellow">[QR]</span> Writing timing patterns...' },
        { delay: 9750, html: '<span class="t-yellow">[QR]</span> Writing data codewords...' },
        { delay: 11570, html: '<span class="t-green">\u2713</span> <span class="t-white">QR matrix complete \u2014 ' + totalPixels + ' modules written</span>' },
        { delay: 11830, html: '' },
        { delay: 11895, html: '<span class="t-green">tpg@trenord</span>:<span class="t-cyan">~</span>$ commit --sign --push' },
        { delay: 12155, html: '<span class="t-yellow">[SIGN]</span> Signing ticket with RSA-4096...' },
        { delay: 12480, html: '<span class="t-green">\u2713</span> <span class="t-white">Digital signature applied</span>' },
        { delay: 12740, html: '<span class="t-green">\u2713</span> <span class="t-white">Ticket committed to ledger</span>' },
        { delay: 13000, html: '' },
        { delay: 13130, html: '<span class="t-green">\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</span>' },
        { delay: 13260, html: '<span class="t-green">\u2713 BIGLIETTO GENERATO CON SUCCESSO</span>' },
        { delay: 13390, html: '<span class="t-green">\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</span>' },
    ];

    // Progress phases
    const phases = [
        { at: 0, pct: 0, label: 'Inizializzazione...' },
        { at: 585, pct: 5, label: 'Connessione TLS...' },
        { at: 1100, pct: 10, label: 'Autenticazione...' },
        { at: 1950, pct: 15, label: 'Configurazione biglietto...' },
        { at: 3445, pct: 30, label: 'Generazione identit\u00e0...' },
        { at: 4485, pct: 40, label: 'Costruzione payload...' },
        { at: 5915, pct: 55, label: 'Verifica checksum SHA-256...' },
        { at: 6955, pct: 65, label: 'Checksum verificato \u2713' },
        { at: 7280, pct: 70, label: 'Encoding QR matrix...' },
        { at: 8580, pct: 75, label: 'Position detection patterns...' },
        { at: 9750, pct: 82, label: 'Scrittura data codewords...' },
        { at: 11570, pct: 92, label: 'QR matrix completa \u2713' },
        { at: 11895, pct: 95, label: 'Firma digitale RSA-4096...' },
        { at: 12740, pct: 98, label: 'Commit su ledger...' },
        { at: 13260, pct: 100, label: 'Completato \u2713' },
    ];

    // Type terminal lines
    lines.forEach(function(line) {
        setTimeout(function() {
            var div = document.createElement('div');
            div.className = 't-line';
            div.innerHTML = line.html;
            termBody.appendChild(div);
            termBody.scrollTop = termBody.scrollHeight;
        }, line.delay);
    });

    // Update progress phases
    phases.forEach(function(p) {
        setTimeout(function() {
            pctEl.textContent = p.pct + '%';
            progressFill.style.width = p.pct + '%';
            statusEl.textContent = p.label;
        }, p.at);
    });


    //  QR Grid Animation 
    // Phase 1: Finder patterns (3 corners, 7x7 each) at 8580ms
    var finderPositions = getFinderPositions(GRID_SIZE);
    finderPositions.forEach(function(idx, i) {
        setTimeout(function() {
            pixels[idx].className = 'qr-px glow';
            setTimeout(function() {
                pixels[idx].className = qrPattern[idx] ? 'qr-px on' : 'qr-px off';
            }, 120);
        }, 8580 + i * 8);
    });

    // Phase 2: Timing patterns (row 6 + col 6) at 9425ms
    var timingPositions = getTimingPositions(GRID_SIZE);
    timingPositions.forEach(function(idx, i) {
        setTimeout(function() {
            pixels[idx].className = 'qr-px glow';
            setTimeout(function() {
                pixels[idx].className = qrPattern[idx] ? 'qr-px on' : 'qr-px off';
            }, 100);
        }, 9425 + i * 20);
    });

    // Phase 3: Data modules at 9750ms
    var usedPositions = finderPositions.concat(timingPositions);
    var dataPositions = [];
    for (var i = 0; i < totalPixels; i++) {
        if (usedPositions.indexOf(i) === -1) dataPositions.push(i);
    }
    // Shuffle for random fill
    for (var k = dataPositions.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var tmp = dataPositions[k];
        dataPositions[k] = dataPositions[j];
        dataPositions[j] = tmp;
    }
    var dataDelay = 1820 / dataPositions.length;
    dataPositions.forEach(function(idx, i) {
        setTimeout(function() {
            pixels[idx].className = 'qr-px glow';
            setTimeout(function() {
                pixels[idx].className = qrPattern[idx] ? 'qr-px on' : 'qr-px off';
            }, 80);
        }, 9750 + i * dataDelay);
    });

    //  Success overlay at 13520ms 
    setTimeout(function() {
        successOverlay.classList.add('visible');
    }, 13520);

    //  Fadeout and close at 14600ms 
    setTimeout(function() {
        modal.classList.add('fadeout');
    }, 14600);

    setTimeout(function() {
        modal.classList.remove('active');
        modal.classList.remove('fadeout');
        successOverlay.classList.remove('visible');
        document.body.style.overflow = '';
        if (callback) callback();
    }, 15000);
}

function generateQRPattern(size) {
    var pattern = [];
    for (var i = 0; i < size * size; i++) pattern.push(false);

    // Real QR finder patterns (7x7) at 3 corners
    var drawFinder = function(sr, sc) {
        for (var r = 0; r < 7; r++) {
            for (var c = 0; c < 7; c++) {
                var isBorder = (r === 0 || r === 6 || c === 0 || c === 6);
                var isInner = (r >= 2 && r <= 4 && c >= 2 && c <= 4);
                pattern[(sr + r) * size + (sc + c)] = isBorder || isInner;
            }
        }
    };
    drawFinder(0, 0);              // top-left
    drawFinder(0, size - 7);       // top-right
    drawFinder(size - 7, 0);       // bottom-left

    // Timing patterns (row 6 and col 6, alternating)
    for (var t = 7; t < size - 7; t++) {
        pattern[6 * size + t] = (t % 2 === 0);
        pattern[t * size + 6] = (t % 2 === 0);
    }

    // Random data for the rest (~55% filled)
    for (var i = 0; i < pattern.length; i++) {
        if (!pattern[i]) {
            var row = Math.floor(i / size);
            var col = i % size;
            var inFinderZone = (row < 8 && col < 8) || (row < 8 && col >= size - 8) || (row >= size - 8 && col < 8);
            if (!inFinderZone && Math.random() > 0.45) {
                pattern[i] = true;
            }
        }
    }
    return pattern;
}

function getFinderPositions(size) {
    var positions = [];
    var addFinder = function(sr, sc) {
        for (var r = 0; r < 7; r++) {
            for (var c = 0; c < 7; c++) {
                positions.push((sr + r) * size + (sc + c));
            }
        }
    };
    addFinder(0, 0);
    addFinder(0, size - 7);
    addFinder(size - 7, 0);
    return positions;
}

function getTimingPositions(size) {
    var positions = [];
    for (var i = 7; i < size - 7; i++) {
        positions.push(6 * size + i);
        positions.push(i * size + 6);
    }
    return positions;
}

// ── PWA Service Worker Registration ──

function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(err => console.log('SW registration failed:', err));
    }
}

// ── Force Reload (svuota cache SW e ricarica) ──

function forceReload() {
    if ('caches' in window) {
        caches.keys().then(function(names) {
            return Promise.all(names.map(function(name) { return caches.delete(name); }));
        }).then(function() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistration().then(function(reg) {
                    if (reg) reg.update();
                });
            }
            window.location.reload(true);
        });
    } else {
        window.location.reload(true);
    }
}

// ── GitHub Version Check ──

const GITHUB_REPO = 'sjmvne/Trenord';
let _latestCommitSHA = null;
let _changelogLoaded = false;

function checkForUpdates() {
    fetch('https://api.github.com/repos/' + GITHUB_REPO + '/commits?per_page=1', {
        cache: 'no-store'
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (!Array.isArray(data) || data.length === 0) return;
        var latest = data[0];
        var sha = latest.sha;
        var savedSHA = localStorage.getItem('trenord_last_commit');

        if (!savedSHA) {
            // Prima installazione: salva e non mostrare popup
            localStorage.setItem('trenord_last_commit', sha);
            return;
        }

        if (sha !== savedSHA) {
            _latestCommitSHA = sha;
            var msg = latest.commit.message || 'Aggiornamento disponibile';
            var dateStr = '';
            if (latest.commit.author && latest.commit.author.date) {
                var d = new Date(latest.commit.author.date);
                dateStr = d.toLocaleDateString('it-IT', {
                    day: 'numeric', month: 'long', year: 'numeric',
                    hour: '2-digit', minute: '2-digit'
                });
            }
            document.getElementById('update-commit-msg').textContent = msg;
            document.getElementById('update-commit-date').textContent = dateStr;
            var modal = document.getElementById('update-modal');
            modal.classList.add('open');
        }
    })
    .catch(function(err) {
        console.log('Version check failed:', err);
    });
}

function applyUpdate() {
    if (_latestCommitSHA) {
        localStorage.setItem('trenord_last_commit', _latestCommitSHA);
    }
    closeModal('update-modal');
    showEpicUpdateScreen();
}

// ── Epic Update Screen ──

function showEpicUpdateScreen() {
    const screen = document.getElementById('update-screen');
    const fillBar = document.getElementById('update-progress-fill');
    const glowBar = document.getElementById('update-progress-glow');
    const pctEl = document.getElementById('update-progress-pct');
    const statusEl = document.getElementById('update-status-text');
    const particlesContainer = document.getElementById('update-particles');

    // Set version badge
    document.getElementById('update-ver-old').textContent = APP_BUILD_VERSION;
    document.getElementById('update-ver-new').textContent = 'New';

    // Reset
    fillBar.style.width = '0%';
    glowBar.style.width = '0%';
    pctEl.textContent = '0%';
    screen.classList.remove('fadeout');
    screen.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Spawn particles
    particlesContainer.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'update-particle';
        const size = Math.random() * 4 + 2;
        const isGold = Math.random() > 0.75;
        p.style.cssText = [
            'width:' + size + 'px',
            'height:' + size + 'px',
            'left:' + (Math.random() * 100) + '%',
            'background:' + (isGold ? 'rgba(255,215,0,0.7)' : 'rgba(78,204,120,0.6)'),
            'animation-duration:' + (Math.random() * 3 + 2) + 's',
            'animation-delay:' + (Math.random() * 4) + 's',
            'box-shadow: 0 0 ' + (size * 2) + 'px ' + (isGold ? 'rgba(255,215,0,0.4)' : 'rgba(78,204,120,0.4)')
        ].join(';');
        particlesContainer.appendChild(p);
    }

    // Status text phases
    const phases = [
        { at: 0,    text: 'Connessione al server...' },
        { at: 500,  text: 'Download nuovi componenti...' },
        { at: 1200, text: 'Aggiornamento risorse UI...' },
        { at: 2000, text: 'Compilazione moduli...' },
        { at: 2800, text: 'Pulizia cache precedente...' },
        { at: 3500, text: 'Applicazione patch...' },
        { at: 4000, text: 'Verifica integrità...' },
        { at: 4500, text: 'Finalizzazione...' },
        { at: 4800, text: 'Aggiornamento completato ✓' }
    ];

    phases.forEach(function(phase) {
        setTimeout(function() {
            statusEl.style.opacity = '0';
            setTimeout(function() {
                statusEl.textContent = phase.text;
                statusEl.style.opacity = '1';
            }, 150);
        }, phase.at);
    });

    // Smooth progress from 0 to 100% over ~4.8s
    const duration = 4800;
    const startTime = performance.now();

    function animateProgress(now) {
        const elapsed = now - startTime;
        const rawPct = Math.min(elapsed / duration, 1);
        // Eased progress (ease-out cubic)
        const pct = 1 - Math.pow(1 - rawPct, 3);
        const display = Math.round(pct * 100);

        fillBar.style.width = display + '%';
        glowBar.style.width = display + '%';
        pctEl.textContent = display + '%';

        if (rawPct < 1) {
            requestAnimationFrame(animateProgress);
        }
    }
    requestAnimationFrame(animateProgress);

    // Actually clear caches in background while animation plays
    if ('caches' in window) {
        caches.keys().then(function(names) {
            return Promise.all(names.map(function(name) { return caches.delete(name); }));
        }).then(function() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistration().then(function(reg) {
                    if (reg) reg.update();
                });
            }
        });
    }

    // Fade out and reload at 5s
    setTimeout(function() {
        screen.classList.add('fadeout');
        setTimeout(function() {
            window.location.reload(true);
        }, 600);
    }, 5000);
}

// ── Changelog Fetcher ──

function fetchChangelog() {
    if (_changelogLoaded) return;
    
    const list = document.getElementById('changelog-list');
    
    fetch('https://api.github.com/repos/' + GITHUB_REPO + '/commits?per_page=30', {
        cache: 'default'
    })
    .then(function(res) { return res.json(); })
    .then(function(commits) {
        _changelogLoaded = true;
        
        if (!Array.isArray(commits) || commits.length === 0) {
            list.innerHTML = '<div class="changelog-empty">Nessun commit disponibile</div>';
            return;
        }
        
        var html = '';
        var lastDate = null;
        
        commits.forEach(function(commit) {
            var msg = commit.commit.message || 'No message';
            var sha = commit.sha.substring(0, 7);
            var author = (commit.commit.author && commit.commit.author.name) || 'Unknown';
            var dateStr = '';
            var dateGroup = '';
            
            if (commit.commit.author && commit.commit.author.date) {
                var d = new Date(commit.commit.author.date);
                dateStr = d.toLocaleString('it-IT', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                dateGroup = d.toLocaleDateString('it-IT', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
            }
            
            // Group by date
            if (dateGroup && dateGroup !== lastDate) {
                html += '<div class="changelog-date-divider">' + dateGroup + '</div>';
                lastDate = dateGroup;
            }
            
            // Extract emoji if present
            var emoji = '';
            var msgClean = msg;
            var emojiMatch = msg.match(/^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])/u);
            if (emojiMatch) {
                emoji = emojiMatch[1];
                msgClean = msg.substring(emoji.length).trim();
            }
            
            // Parse multi-line commit (first line = title, rest = description)
            var lines = msgClean.split('\n');
            var title = lines[0];
            var description = lines.slice(1).join('\n').trim();
            
            html += '<div class="changelog-item">';
            html += '  <div class="changelog-item-header">';
            if (emoji) {
                html += '    <span class="changelog-emoji">' + emoji + '</span>';
            }
            html += '    <div class="changelog-item-title-wrap">';
            html += '      <span class="changelog-item-title">' + escapeHtml(title) + '</span>';
            html += '      <div class="changelog-item-meta">';
            html += '        <span class="changelog-sha">' + sha + '</span>';
            html += '      </div>';
            html += '    </div>';
            html += '  </div>';
            if (description) {
                html += '  <div class="changelog-item-description">' + escapeHtml(description).replace(/\n/g, '<br>') + '</div>';
            }
            html += '</div>';
        });
        
        list.innerHTML = html;
    })
    .catch(function(err) {
        console.log('Changelog fetch failed:', err);
        list.innerHTML = '<div class="changelog-error">⚠️ Errore nel caricamento del changelog</div>';
    });
}

function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ── Splash Screen ──

function initSplashScreen() {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;

    // Spawn particles
    const container = document.getElementById('splash-particles');
    if (container) {
        for (let i = 0; i < 25; i++) {
            const p = document.createElement('div');
            p.className = 'splash-particle';
            const size = Math.random() * 3.5 + 1.5;
            const isGold = Math.random() > 0.8;
            const duration = Math.random() * 4 + 3;
            const delay = Math.random() * 3;
            p.style.cssText = [
                'width:' + size + 'px',
                'height:' + size + 'px',
                'left:' + (Math.random() * 100) + '%',
                'bottom:' + (Math.random() * 20 - 10) + '%',
                'background:' + (isGold ? 'rgba(255,215,0,0.7)' : 'rgba(78,204,120,0.5)'),
                'box-shadow:0 0 ' + (size * 3) + 'px ' + (isGold ? 'rgba(255,215,0,0.3)' : 'rgba(78,204,120,0.3)'),
                'animation-duration:' + duration + 's',
                'animation-delay:' + delay + 's'
            ].join(';');
            container.appendChild(p);
        }
    }

    // Dismiss splash after minimum time + page fully loaded
    const minTime = 3000;
    const startTime = Date.now();

    function dismissSplash() {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minTime - elapsed);

        setTimeout(function() {
            splash.classList.add('dismiss');
            setTimeout(function() {
                splash.classList.remove('active', 'dismiss');
                splash.style.display = 'none';
            }, 800);
        }, remaining);
    }

    // Wait for window load (all resources) then dismiss
    if (document.readyState === 'complete') {
        dismissSplash();
    } else {
        window.addEventListener('load', dismissSplash);
    }
}

// ============================================
// DISCLAIMER OBBLIGATORIO (primo avvio)
// ============================================

function checkDisclaimerAccepted() {
    if (localStorage.getItem('trenord_disclaimer_accepted')) return;
    const overlay = document.getElementById('disclaimer-mandatory-overlay');
    if (!overlay) return;
    overlay.classList.add('active');

    const body = document.getElementById('disclaimer-mandatory-body');
    const btn = document.getElementById('disclaimer-accept-btn');
    const hint = document.getElementById('disclaimer-scroll-hint');
    if (!body || !btn) return;

    function checkScroll() {
        const scrolledToBottom = body.scrollTop + body.clientHeight >= body.scrollHeight - 10;
        if (scrolledToBottom) {
            btn.disabled = false;
            if (hint) hint.style.display = 'none';
        }
    }

    // If content is short enough to not scroll, enable immediately
    requestAnimationFrame(() => {
        if (body.scrollHeight <= body.clientHeight + 10) {
            btn.disabled = false;
            if (hint) hint.style.display = 'none';
        }
    });

    body.addEventListener('scroll', checkScroll);
}

function acceptDisclaimer() {
    localStorage.setItem('trenord_disclaimer_accepted', '1');
    const overlay = document.getElementById('disclaimer-mandatory-overlay');
    if (overlay) {
        overlay.classList.add('dismiss');
        setTimeout(() => {
            overlay.classList.remove('active', 'dismiss');
            overlay.style.display = 'none';
        }, 500);
    }
}

// ============================================
// SUB-SCREEN NAVIGATION (iOS-style slide)
// ============================================

let subScreenStack = [];

function openSubScreen(screenId) {
    const screen = document.getElementById(screenId);
    if (!screen) return;

    subScreenStack.push(screenId);
    screen.classList.remove('closing');
    screen.classList.add('active');

    // Trigger specific actions when opening screens
    if (screenId === 'screen-dati-fatturazione') {
        renderBillingView();
    } else if (screenId === 'screen-storico-acquisti') {
        renderStoricoAcquisti();
    } else if (screenId === 'screen-notifiche') {
        fetchNotificheChangelog();
    } else if (screenId === 'screen-billing-edit') {
        loadBillingDataIntoForm();
    } else if (screenId === 'screen-profilo-utente') {
        renderProfiloUtente();
    } else if (screenId === 'screen-developer') {
        renderDevStorage();
        renderDeviceInfo();
        renderDevPerformance();
    } else if (screenId === 'screen-statistiche') {
        renderStats();
    } else if (screenId === 'screen-disclaimer') {
        // Static content, no init needed
    }
}

function closeSubScreen() {
    if (subScreenStack.length === 0) return;

    const currentId = subScreenStack.pop();
    const screen = document.getElementById(currentId);
    if (!screen) return;

    screen.classList.add('closing');
    screen.addEventListener('animationend', function handler() {
        screen.classList.remove('active', 'closing');
        screen.removeEventListener('animationend', handler);
    });
}

function closeAllSubScreens() {
    while (subScreenStack.length > 0) {
        const id = subScreenStack.pop();
        const screen = document.getElementById(id);
        if (screen) {
            screen.classList.remove('active', 'closing');
        }
    }
}

// ============================================
// BILLING DATA (Dati Fatturazione)
// ============================================

function hasBillingData() {
    try {
        const data = localStorage.getItem('trenord_billing');
        if (!data) return false;
        const billing = JSON.parse(data);
        return billing && billing.nome && billing.cognome && billing.codiceFiscale && billing.via && billing.numero && billing.cap && billing.paese && billing.comune;
    } catch (e) {
        return false;
    }
}

function getBillingData() {
    try {
        const data = localStorage.getItem('trenord_billing');
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

function saveBillingData() {
    const nome = document.getElementById('billing-nome').value.trim();
    const cognome = document.getElementById('billing-cognome').value.trim();
    const cf = document.getElementById('billing-cf').value.trim().toUpperCase();
    const via = document.getElementById('billing-via').value.trim();
    const numero = document.getElementById('billing-numero').value.trim();
    const cap = document.getElementById('billing-cap').value.trim();
    const paese = document.getElementById('billing-paese').value.trim();
    const comune = document.getElementById('billing-comune').value.trim();
    const pec = document.getElementById('billing-pec').value.trim();

    // Validate required fields
    if (!nome || !cognome || !cf || !via || !numero || !cap || !paese || !comune) {
        alert('Compila tutti i campi obbligatori (*)');
        return;
    }

    const billing = { nome, cognome, codiceFiscale: cf, via, numero, cap, paese, comune, pec };
    localStorage.setItem('trenord_billing', JSON.stringify(billing));

    // Close the edit form screen
    closeSubScreen();

    // If we came from the billing view, refresh it
    setTimeout(() => {
        const billingViewScreen = document.getElementById('screen-dati-fatturazione');
        if (billingViewScreen && billingViewScreen.classList.contains('active')) {
            renderBillingView();
        }
    }, 350);

    // If there's a pending ticket generation, proceed
    if (_pendingTicketGeneration) {
        const info = _pendingTicketGeneration;
        _pendingTicketGeneration = null;
        closeAllSubScreens();
        setTimeout(() => {
            generateTickets();
        }, 400);
    }
}

function loadBillingDataIntoForm() {
    const billing = getBillingData();
    document.getElementById('billing-nome').value = billing ? billing.nome : '';
    document.getElementById('billing-cognome').value = billing ? billing.cognome : '';
    document.getElementById('billing-cf').value = billing ? billing.codiceFiscale : '';
    document.getElementById('billing-via').value = billing ? billing.via : '';
    document.getElementById('billing-numero').value = billing ? billing.numero : '';
    document.getElementById('billing-cap').value = billing ? billing.cap : '';
    document.getElementById('billing-paese').value = billing ? billing.paese : '';
    document.getElementById('billing-comune').value = billing ? billing.comune : '';
    document.getElementById('billing-pec').value = billing ? (billing.pec || '') : '';
}

function renderBillingView() {
    const container = document.getElementById('billing-view-container');
    const billing = getBillingData();

    if (!billing) {
        // No data yet - show empty state with add button
        container.innerHTML = `
            <div style="text-align:center; padding:60px 20px; color:#8E8E93;">
                <p style="font-size:15px; margin-bottom:20px;">Nessun dato di fatturazione inserito</p>
            </div>
            <div style="padding:0 16px 20px;">
                <button class="billing-submit" style="background:transparent; color:#2C7F44; border:1.5px solid #2C7F44;" onclick="openSubScreen('screen-billing-edit')">Aggiungi Nuovo</button>
            </div>
        `;
    } else {
        const fullAddress = billing.via + ' ' + billing.numero + ', ' + billing.cap + ', ' + billing.comune + (billing.paese ? ' (' + billing.paese.substring(0,2).toUpperCase() + ')' : '') + ', Italia';
        container.innerHTML = `
            <div class="billing-saved-card">
                <div class="billing-saved-header">
                    <span class="billing-saved-label">INTESTATARIO</span>
                    <div class="billing-saved-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                </div>
                <div class="billing-saved-name">${escapeHtml(billing.nome)} ${escapeHtml(billing.cognome)}</div>
                <div class="billing-saved-cf">${escapeHtml(billing.codiceFiscale)}</div>
                <div class="billing-saved-address">${escapeHtml(fullAddress)}</div>
                <div class="billing-saved-edit" onclick="openSubScreen('screen-billing-edit')">
                    <span>Modifica dati fatturazione</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
            </div>
            <div style="padding:0 16px 20px;">
                <button class="billing-submit" style="background:transparent; color:#2C7F44; border:1.5px solid #2C7F44; margin-bottom:10px;" onclick="openSubScreen('screen-billing-edit')">Aggiungi Nuovo</button>
                <button class="billing-submit" onclick="closeSubScreen()">Conferma</button>
            </div>
        `;
    }
}

function goToBillingFromModal() {
    closeModal('billing-required-modal');
    setTimeout(() => {
        openSubScreen('screen-dati-fatturazione');
        setTimeout(() => {
            openSubScreen('screen-billing-edit');
        }, 380);
    }, 300);
}

// ============================================
// STORICO ACQUISTI (Purchase History / Orders)
// ============================================

function getOrders() {
    try {
        const data = localStorage.getItem('trenord_orders');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem('trenord_orders', JSON.stringify(orders));
}

function getDocCounter() {
    try {
        let counter = parseInt(localStorage.getItem('trenord_doc_counter') || '4994780');
        return counter;
    } catch (e) {
        return 4994780;
    }
}

function incrementDocCounter() {
    let counter = getDocCounter() + 1;
    localStorage.setItem('trenord_doc_counter', String(counter));
    return counter;
}

function generateOrderId(date) {
    const d = date instanceof Date ? date : new Date(date);
    const yy = String(d.getFullYear()).slice(-2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hex = Array.from(crypto.getRandomValues(new Uint8Array(4))).map(b => b.toString(16).padStart(2, '0')).join('');
    return 'tn-' + yy + mm + dd + '-as-' + hex;
}

function createOrder(generatedTickets, purchaseDate) {
    const orders = getOrders();
    const billing = getBillingData();
    const totalPrice = generatedTickets.reduce((sum, t) => sum + t.prezzo, 0);
    const docNumber = incrementDocCounter();

    const order = {
        orderId: generateOrderId(purchaseDate),
        date: purchaseDate.toISOString(),
        tickets: generatedTickets.map(t => ({
            viaggio: t.viaggio,
            fromZone: t.fromZone,
            toZone: t.toZone,
            prezzo: t.prezzo,
            classe: t.classe
        })),
        total: totalPrice,
        ticketCount: generatedTickets.length,
        paymentMethod: 'Carta di credito',
        billingSnapshot: billing ? { ...billing } : null,
        docNumber: docNumber,
        status: 'paid'
    };

    orders.unshift(order);
    saveOrders(orders);
}

let _storicoFilterFrom = null;
let _storicoFilterTo = null;

function renderStoricoAcquisti() {
    let orders = getOrders();
    const listEl = document.getElementById('storico-list');
    const dateTextEl = document.getElementById('storico-date-text');

    // Set date range text
    const now = new Date();
    if (_storicoFilterFrom && _storicoFilterTo) {
        dateTextEl.textContent = formatDateCompact(_storicoFilterFrom) + ' - ' + formatDateCompact(_storicoFilterTo);
        orders = orders.filter(o => {
            const d = new Date(o.date);
            return d >= _storicoFilterFrom && d <= _storicoFilterTo;
        });
    } else {
        const oneYearAgo = new Date(now);
        oneYearAgo.setFullYear(now.getFullYear() - 1);
        dateTextEl.textContent = formatDateCompact(oneYearAgo) + ' - ' + formatDateCompact(now);
    }

    if (orders.length === 0) {
        listEl.innerHTML = '<div class="storico-empty">Nessun acquisto trovato</div>';
        return;
    }

    let html = '';
    orders.forEach(order => {
        const d = new Date(order.date);
        const dateStr = formatDateFull(d);
        const timeStr = formatTimeShort(d);
        const itemsLabel = order.ticketCount + 'x Bigliett' + (order.ticketCount === 1 ? 'o' : 'i');
        const statusDate = formatDateCompact(d) + ', ' + timeStr;

        html += `
            <div class="order-card" onclick="openOrderDetail('${order.orderId}')">
                <div class="order-card-icon">
                    <svg class="order-card-ticket-icon" viewBox="0 0 44 44" aria-hidden="true"><path fill="#5C5C5C" d="M4.75,7.5h34.5c.05,0,.75.7.75.75v9c0,.92-4.29.37-4.49,3.54-.22,3.58,4.49,3.04,4.49,3.96v9c0,.05-.7.75-.75.75H4.75c-.05,0-.75-.7-.75-.75v-9c0-.92,4.29-.37,4.49-3.54.22-3.58-4.49-3.04-4.49-3.96v-9c0-.14.59-.5.75-.75Z"/><path fill="#fff" d="M37,10.5c-.25,1.31.34,3.59.03,4.69-.14.48-1.25.35-1.78.79-3.72,3.05-3.73,6.98,0,10.04.54.44,1.65.31,1.78.79.31,1.1-.28,3.38-.03,4.69H7c.25-1.31-.34-3.59-.03-4.69.14-.48,1.25-.35,1.78-.79,3.72-3.05,3.73-6.98,0-10.04-.54-.44-1.65-.31-1.78-.79-.31-1.1.28-3.38.03-4.69h30Z"/><path fill="#5C5C5C" d="M15.25,16.5h13.5c.99,0,.99,3,0,3h-13.5c-.82,0-1.2-2.51,0-3Z"/><path fill="#5C5C5C" d="M15.25,22.5h13.5c.99,0,.99,3,0,3h-13.5c-.82,0-1.2-2.51,0-3Z"/></svg>
                </div>
                <div class="order-card-info">
                    <div class="order-card-id">${escapeHtml(order.orderId)}</div>
                    <div class="order-card-date">${dateStr} ${timeStr}</div>
                    <div class="order-card-items">${itemsLabel}</div>
                    <div class="order-card-status">PAGATO IL ${statusDate}</div>
                </div>
                <div class="order-card-right">
                    <div class="order-card-price">${formatPrice(order.total)}</div>
                    <div class="order-card-chevron"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></div>
                </div>
            </div>
        `;
    });

    listEl.innerHTML = html;
}

function openOrderDetail(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    const d = new Date(order.date);
    const dateStr = formatDateCompact(d);
    const timeStr = formatTimeShort(d);

    let itemsHTML = '';
    order.tickets.forEach(t => {
        itemsHTML += `
            <div class="order-detail-item">
                <div class="order-detail-item-desc">
                    <div class="order-detail-item-name">1 Ordinario - STIBM</div>
                    <div class="order-detail-item-zone">${t.fromZone} - ${t.toZone}</div>
                </div>
                <div class="order-detail-item-price">${formatPrice(t.prezzo)}</div>
            </div>
        `;
    });

    const contentEl = document.getElementById('order-detail-content');
    contentEl.innerHTML = `
        <div class="order-detail-section">
            <div class="order-detail-id">Ordine n° ${escapeHtml(order.orderId)}</div>
            <div class="order-detail-date">Acquistato il ${dateStr} alle ${timeStr}</div>
            <div class="order-detail-payment">Metodo di pagamento  <strong>${escapeHtml(order.paymentMethod)}</strong></div>
            <div class="order-detail-badge">Pagato il ${dateStr}, ${timeStr}</div>
            <div class="order-detail-items-title">ACQUISTI</div>
            ${itemsHTML}
            <div class="order-detail-total">${formatPrice(order.total)}</div>
        </div>
    `;

    // Set up the download/receipt button
    const receiptBtn = document.getElementById('btn-view-receipt');
    receiptBtn.onclick = () => openReceipt(orderId);

    openSubScreen('screen-dettaglio-ordine');
}

function openReceipt(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    const d = new Date(order.date);
    const dateStr = formatDateFull(d);
    const timeStr = formatTimeShort(d);
    const billing = order.billingSnapshot || getBillingData() || {};

    function fmtEuro(v) {
        return '\u20ac' + Number(v || 0).toFixed(2);
    }

    // Group identical tickets
    const itemMap = new Map();
    order.tickets.forEach(t => {
        const desc = 'Ordinario - STIBM ' + (t.fromZone || '') + '-' + (t.toZone || '');
        const price = Number(t.prezzo || 0);
        const key = desc + '|' + price.toFixed(2);
        if (!itemMap.has(key)) {
            itemMap.set(key, { code: '8501', desc, qty: 0, price });
        }
        itemMap.get(key).qty += 1;
    });

    let itemsHTML = '';
    Array.from(itemMap.values()).forEach(it => {
        const tot = it.price * it.qty;
        itemsHTML += '<tr>'
            + '<td>' + it.code + '</td>'
            + '<td>' + escapeHtml(it.desc) + '</td>'
            + '<td class="text-right">' + it.qty + '</td>'
            + '<td class="text-right">' + fmtEuro(it.price) + '</td>'
            + '<td class="text-right">' + fmtEuro(tot) + '</td>'
            + '</tr>';
    });

    const nome = (billing.nome || '').trim().toUpperCase();
    const cognome = (billing.cognome || '').trim().toUpperCase();
    const billingName = (nome + ' ' + cognome).trim() || 'N.D.';
    const cf = (billing.codiceFiscale || '').trim().toUpperCase() || 'N.D.';

    document.getElementById('receipt-content').innerHTML = ''
        + '<div class="receipt-paper" id="receipt-paper">'

        // Header: logo + company info
        + '<div class="receipt-header">'
        +   '<img src="img/Trenord Store.png" alt="Trenord e-Store" class="receipt-logo-image">'
        +   '<div class="receipt-company-info">'
        +     'Trenord S.r.l<br>'
        +     'Piazzale Cadorna, 14 -20123 Milano - Italia<br>'
        +     'Tel. +39 02.85111 Fax. +39 02.85114708<br>'
        +     'PEC trenord@legalmail.it'
        +   '</div>'
        + '</div>'

        // Unified main table: 5 columns
        + '<table class="receipt-main-table">'
        +   '<colgroup><col><col><col><col><col></colgroup>'

        // Row 1: 4 invisible cells + intestatario
        +   '<tr>'
        +     '<td class="r-invis"></td>'
        +     '<td class="r-invis"></td>'
        +     '<td class="r-invis"></td>'
        +     '<td class="r-invis"></td>'
        +     '<td><strong>Intestatario Documento</strong>' + escapeHtml(billingName) + '</td>'
        +   '</tr>'

        // Row 2: meta info, title+value in same cell
        +   '<tr>'
        +     '<td><strong>Data</strong>' + d.toLocaleDateString('it-IT') + '</td>'
        +     '<td><strong>Tipo Documento</strong>Ricevuta fiscale</td>'
        +     '<td><strong>Numero Ordine</strong>' + escapeHtml(order.orderId) + '</td>'
        +     '<td><strong>Numero Documento</strong>' + order.docNumber + '</td>'
        +     '<td><strong>Codice Fiscale</strong>' + escapeHtml(cf) + '</td>'
        +   '</tr>'

        // Row 3: inoltro colspan=2, pagamento, 2 empty
        +   '<tr>'
        +     '<td colspan="2"><strong>Modalit\u00e0 di Inoltro</strong>Via email.<br>Documento generato il ' + dateStr + ' alle ' + timeStr + '</td>'
        +     '<td><strong>Modalit\u00e0 di pagamento</strong>Carta di credito: ' + Number(order.total || 0).toFixed(2) + ' \u20ac</td>'
        +     '<td></td>'
        +     '<td></td>'
        +   '</tr>'
        + '</table>'

        // Items table
        + '<table class="receipt-items-table">'
        +   '<tr>'
        +     '<th>Codice Articolo</th>'
        +     '<th>Descrizione</th>'
        +     '<th class="text-right">Quantit\u00e0</th>'
        +     '<th class="text-right">Prezzo Unitario</th>'
        +     '<th class="text-right">Totale Lordo</th>'
        +   '</tr>'
        +   itemsHTML
        +   '<tr class="receipt-total-row">'
        +     '<td colspan="2" class="total-empty"></td>'
        +     '<td colspan="2" class="total-label"><strong>Totale</strong></td>'
        +     '<td class="total-amount">' + fmtEuro(order.total) + '</td>'
        +   '</tr>'
        + '</table>'

        + '</div>';

    openSubScreen('screen-ricevuta');
}

async function shareReceipt() {
    const receiptPaper = document.getElementById('receipt-paper');
    if (!receiptPaper) return;

    try {
        // Show loading state
        const btn = document.getElementById('btn-share-receipt');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<div class="spinner" style="width:20px;height:20px;border-width:2px;margin:0;"></div>';
        btn.disabled = true;

        const canvas = await html2canvas(receiptPaper, {
            scale: 2,
            backgroundColor: '#ffffff',
            useCORS: true,
            logging: false
        });

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 8;
        const maxWidth = pageWidth - margin * 2;
        const maxHeight = pageHeight - margin * 2;

        const widthRatio = maxWidth / canvas.width;
        const heightRatio = maxHeight / canvas.height;
        const scale = Math.min(widthRatio, heightRatio);

        const imgWidth = canvas.width * scale;
        const imgHeight = canvas.height * scale;
        const offsetX = (pageWidth - imgWidth) / 2;
        const offsetY = margin;

        pdf.addImage(imgData, 'PNG', offsetX, offsetY, imgWidth, imgHeight);
        pdf.save('ricevuta-trenord.pdf');

        btn.innerHTML = originalHTML;
        btn.disabled = false;
    } catch (e) {
        console.error('PDF generation failed:', e);
        alert('Errore nella generazione del PDF');
        const btn = document.getElementById('btn-share-receipt');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';
        btn.disabled = false;
    }
}

// ============================================
// ELIMINA DATI
// ============================================

function confirmDeleteData() {
    openModal('delete-data-modal');
}

function executeDeleteData() {
    closeModal('delete-data-modal');

    // Preserve orders (ricevute) and doc counter
    const orders = localStorage.getItem('trenord_orders');
    const docCounter = localStorage.getItem('trenord_doc_counter');

    // Clear all localStorage
    localStorage.clear();

    // Restore preserved data
    if (orders) localStorage.setItem('trenord_orders', orders);
    if (docCounter) localStorage.setItem('trenord_doc_counter', docCounter);

    // Reload the app
    setTimeout(() => {
        window.location.reload(true);
    }, 300);
}

// ============================================
// AGGIORNA (Check Updates from Profilo)
// ============================================

function checkForUpdatesManual() {
    const statusEl = document.getElementById('aggiorna-status');
    const btn = document.getElementById('btn-aggiorna-check');
    statusEl.textContent = 'Controllo in corso...';
    btn.disabled = true;

    fetch('https://api.github.com/repos/' + GITHUB_REPO + '/commits?per_page=1', {
        cache: 'no-store'
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (!Array.isArray(data) || data.length === 0) {
            statusEl.textContent = 'Impossibile controllare';
            btn.disabled = false;
            return;
        }
        var latest = data[0];
        var sha = latest.sha;
        var savedSHA = localStorage.getItem('trenord_last_commit');

        if (!savedSHA) {
            localStorage.setItem('trenord_last_commit', sha);
            statusEl.textContent = '✓ App aggiornata all\'ultima versione';
            statusEl.style.color = '#2C7F44';
            btn.disabled = false;
            return;
        }

        if (sha !== savedSHA) {
            _latestCommitSHA = sha;
            statusEl.textContent = '⬆️ Nuova versione disponibile!';
            statusEl.style.color = '#E37603';
            btn.textContent = 'Aggiorna ora';
            btn.disabled = false;
            btn.onclick = function() {
                applyUpdate();
            };
        } else {
            statusEl.textContent = '✓ App aggiornata all\'ultima versione';
            statusEl.style.color = '#2C7F44';
            btn.disabled = false;
        }
    })
    .catch(function(err) {
        statusEl.textContent = '⚠️ Errore di connessione';
        statusEl.style.color = '#D32F2F';
        btn.disabled = false;
    });
}

// ============================================
// NOTIFICHE (Changelog in sub-screen)
// ============================================

let _notificheChangelogLoaded = false;

function fetchNotificheChangelog() {
    if (_notificheChangelogLoaded) return;
    
    const list = document.getElementById('notifiche-changelog-list');
    
    fetch('https://api.github.com/repos/' + GITHUB_REPO + '/commits?per_page=30', {
        cache: 'default'
    })
    .then(function(res) { return res.json(); })
    .then(function(commits) {
        _notificheChangelogLoaded = true;
        
        if (!Array.isArray(commits) || commits.length === 0) {
            list.innerHTML = '<div class="changelog-empty">Nessun commit disponibile</div>';
            return;
        }
        
        var html = '';
        var lastDate = null;
        
        commits.forEach(function(commit) {
            var msg = commit.commit.message || 'No message';
            var sha = commit.sha.substring(0, 7);
            var author = (commit.commit.author && commit.commit.author.name) || 'Unknown';
            var dateStr = '';
            var dateGroup = '';
            
            if (commit.commit.author && commit.commit.author.date) {
                var d = new Date(commit.commit.author.date);
                dateStr = d.toLocaleString('it-IT', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                dateGroup = d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
            }
            
            if (dateGroup && dateGroup !== lastDate) {
                html += '<div class="changelog-date-divider">' + dateGroup + '</div>';
                lastDate = dateGroup;
            }
            
            var emoji = '';
            var msgClean = msg;
            var emojiMatch = msg.match(/^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])/u);
            if (emojiMatch) {
                emoji = emojiMatch[1];
                msgClean = msg.substring(emoji.length).trim();
            }
            
            var lines = msgClean.split('\n');
            var title = lines[0];
            var description = lines.slice(1).join('\n').trim();
            
            html += '<div class="changelog-item">';
            html += '  <div class="changelog-item-header">';
            if (emoji) html += '    <span class="changelog-emoji">' + emoji + '</span>';
            html += '    <div class="changelog-item-title-wrap">';
            html += '      <span class="changelog-item-title">' + escapeHtml(title) + '</span>';
            html += '      <div class="changelog-item-meta">';
            html += '        <span class="changelog-sha">' + sha + '</span>';
            html += '      </div>';
            html += '    </div>';
            html += '  </div>';
            if (description) html += '  <div class="changelog-item-description">' + escapeHtml(description).replace(/\n/g, '<br>') + '</div>';
            html += '</div>';
        });
        
        list.innerHTML = html;
    })
    .catch(function(err) {
        list.innerHTML = '<div class="changelog-error">⚠️ Errore nel caricamento del changelog</div>';
    });
}

// ============================================
// PROFILO UTENTE (sub-screen)
// ============================================

function renderProfiloUtente() {
    const billing = getBillingData();
    const nome = billing ? (billing.nome + ' ' + billing.cognome) : 'Utente';
    const email = localStorage.getItem('trenord_email') || '';

    const nomeEl = document.getElementById('profilo-utente-nome');
    const emailEl = document.getElementById('profilo-utente-email');
    if (nomeEl) nomeEl.textContent = nome;
    if (emailEl) emailEl.value = email;
}

function saveProfiloEmail(value) {
    localStorage.setItem('trenord_email', value);
}

function updateProfiloDisplayName() {
    const billing = getBillingData();
    const el = document.getElementById('profilo-display-name');
    if (el && billing && billing.nome) {
        el.textContent = billing.nome + ' ' + billing.cognome;
    }
    updateProfiloEmail();
}

// ============================================
// ELIMINA ACCOUNT (full reset)
// ============================================

function confirmDeleteAccount() {
    openModal('delete-account-modal');
}

function executeDeleteAccount() {
    closeModal('delete-account-modal');
    localStorage.clear();
    setTimeout(function() {
        window.location.reload(true);
    }, 300);
}

// ============================================
// AUTOCOMPLETE – PAESE & COMUNE
// ============================================

const PAESI_LIST = ['Italia','Germania','Francia','Spagna','Regno Unito','Svizzera','Austria','Belgio','Paesi Bassi','Portogallo','Svezia','Norvegia','Danimarca','Finlandia','Irlanda','Polonia','Grecia','Romania','Ungheria','Repubblica Ceca','Croazia','Slovenia','Slovacchia','Bulgaria','Lussemburgo','Estonia','Lettonia','Lituania','Malta','Cipro'];
let _comuniCache = null;

function onPaeseInput(value) {
    const dropdown = document.getElementById('paese-dropdown');
    if (!value || value.length < 1) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
    }
    const query = value.toLowerCase();
    const matches = PAESI_LIST.filter(p => p.toLowerCase().includes(query)).slice(0, 8);
    if (matches.length === 0) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
    }
    dropdown.innerHTML = matches.map(p => {
        const idx = p.toLowerCase().indexOf(query);
        const highlighted = p.substring(0, idx) + '<span class="ac-highlight">' + p.substring(idx, idx + query.length) + '</span>' + p.substring(idx + query.length);
        return '<div class="billing-ac-item" onclick="selectSuggestion(\'billing-paese\',\'' + p + '\',\'paese-dropdown\')">' + highlighted + '</div>';
    }).join('');
    dropdown.classList.add('open');
}

function onComuneInput(value) {
    const dropdown = document.getElementById('comune-dropdown');
    if (!value || value.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
    }
    fetchComuniList().then(function(comuni) {
        const query = value.toLowerCase();
        const matches = comuni.filter(c => c.nome.toLowerCase().includes(query)).slice(0, 10);
        if (matches.length === 0) {
            dropdown.classList.remove('open');
            dropdown.innerHTML = '';
            return;
        }
        dropdown.innerHTML = matches.map(c => {
            const idx = c.nome.toLowerCase().indexOf(query);
            const highlighted = c.nome.substring(0, idx) + '<span class="ac-highlight">' + c.nome.substring(idx, idx + query.length) + '</span>' + c.nome.substring(idx + query.length);
            const label = highlighted + ' <span style="color:#8E8E93; font-size:13px;">(' + c.sigla + ')</span>';
            return '<div class="billing-ac-item" onclick="selectSuggestion(\'billing-comune\',\'' + c.nome.replace(/'/g, "\\'") + '\',\'comune-dropdown\')">' + label + '</div>';
        }).join('');
        dropdown.classList.add('open');
    });
}

function fetchComuniList() {
    if (_comuniCache) return Promise.resolve(_comuniCache);
    return fetch('https://raw.githubusercontent.com/matteocontrini/comuni-json/master/comuni.json')
        .then(function(res) { return res.json(); })
        .then(function(data) {
            _comuniCache = data;
            return data;
        })
        .catch(function() {
            return [];
        });
}

function selectSuggestion(inputId, value, dropdownId) {
    document.getElementById(inputId).value = value;
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.remove('open');
    dropdown.innerHTML = '';
}

// Close autocomplete dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.billing-autocomplete-field')) {
        document.querySelectorAll('.billing-autocomplete-dropdown').forEach(function(dd) {
            dd.classList.remove('open');
            dd.innerHTML = '';
        });
    }
});

// ============================================
// DATE FILTER MODAL (Storico) – Drum Picker
// ============================================

var DRUM_H = 44;
var _drumTab = 'dal';
var _drumDal = { day: 1, month: 0, year: 2025 };
var _drumAl  = { day: 1, month: 0, year: 2026 };
var MESI_IT = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
    'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

function openDateFilter() {
    var now = new Date();
    if (_storicoFilterFrom) {
        _drumDal = { day: _storicoFilterFrom.getDate(), month: _storicoFilterFrom.getMonth(), year: _storicoFilterFrom.getFullYear() };
    } else {
        _drumDal = { day: now.getDate(), month: now.getMonth(), year: now.getFullYear() };
    }
    if (_storicoFilterTo) {
        _drumAl = { day: _storicoFilterTo.getDate(), month: _storicoFilterTo.getMonth(), year: _storicoFilterTo.getFullYear() };
    } else {
        var ny = new Date(now);
        ny.setFullYear(ny.getFullYear() + 1);
        _drumAl = { day: ny.getDate(), month: ny.getMonth(), year: ny.getFullYear() };
    }
    _drumTab = 'dal';
    openModal('date-filter-modal');
    setTimeout(function() {
        document.getElementById('drum-tab-dal').classList.add('active');
        document.getElementById('drum-tab-al').classList.remove('active');
        buildDrumPicker();
        updateDrumTabs();
    }, 60);
}

function buildDrumPicker() {
    var d = _drumTab === 'dal' ? _drumDal : _drumAl;
    _buildDrumCol('drum-day', 1, 31, d.day, function(v) {
        if (_drumTab === 'dal') _drumDal.day = v; else _drumAl.day = v;
        updateDrumTabs();
    });
    _buildDrumMonths('drum-month', d.month, function(v) {
        if (_drumTab === 'dal') _drumDal.month = v; else _drumAl.month = v;
        updateDrumTabs();
    });
    _buildDrumCol('drum-year', 2020, 2030, d.year, function(v) {
        if (_drumTab === 'dal') _drumDal.year = v; else _drumAl.year = v;
        updateDrumTabs();
    });
}

function _buildDrumCol(id, min, max, sel, cb) {
    var col = document.getElementById(id);
    col.innerHTML = '';
    for (var i = min; i <= max; i++) {
        var el = document.createElement('div');
        el.className = 'drum-item';
        el.textContent = i;
        col.appendChild(el);
    }
    requestAnimationFrame(function() {
        col.scrollTop = (sel - min) * DRUM_H;
    });
    var t = null;
    col.onscroll = function() {
        clearTimeout(t);
        t = setTimeout(function() {
            var si = Math.round(col.scrollTop / DRUM_H);
            si = Math.max(0, Math.min(si, max - min));
            cb(min + si);
        }, 120);
    };
}

function _buildDrumMonths(id, sel, cb) {
    var col = document.getElementById(id);
    col.innerHTML = '';
    for (var i = 0; i < 12; i++) {
        var el = document.createElement('div');
        el.className = 'drum-item';
        el.textContent = MESI_IT[i];
        col.appendChild(el);
    }
    requestAnimationFrame(function() {
        col.scrollTop = sel * DRUM_H;
    });
    var t = null;
    col.onscroll = function() {
        clearTimeout(t);
        t = setTimeout(function() {
            var si = Math.round(col.scrollTop / DRUM_H);
            si = Math.max(0, Math.min(si, 11));
            cb(si);
        }, 120);
    };
}

function switchDrumTab(tab) {
    _drumTab = tab;
    document.getElementById('drum-tab-dal').classList.toggle('active', tab === 'dal');
    document.getElementById('drum-tab-al').classList.toggle('active', tab === 'al');
    buildDrumPicker();
}

function updateDrumTabs() {
    var df = String(_drumDal.day).padStart(2,'0') + '/' + String(_drumDal.month + 1).padStart(2,'0') + '/' + String(_drumDal.year).slice(-2);
    var af = String(_drumAl.day).padStart(2,'0') + '/' + String(_drumAl.month + 1).padStart(2,'0') + '/' + String(_drumAl.year).slice(-2);
    document.getElementById('drum-tab-dal').textContent = 'Dal ' + df;
    document.getElementById('drum-tab-al').textContent = 'Al ' + af;
}

function closeDateFilter() {
    closeModal('date-filter-modal');
}

function applyDateFilter() {
    _storicoFilterFrom = new Date(_drumDal.year, _drumDal.month, _drumDal.day);
    _storicoFilterTo = new Date(_drumAl.year, _drumAl.month, _drumAl.day, 23, 59, 59, 999);
    closeDateFilter();
    renderStoricoAcquisti();
}

// ============================================
// DATE FORMATTING HELPERS
// ============================================

function formatDateCompact(date) {
    const d = date instanceof Date ? date : new Date(date);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yy = String(d.getFullYear()).slice(-2);
    return dd + '/' + mm + '/' + yy;
}

function formatDateFull(date) {
    const d = date instanceof Date ? date : new Date(date);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
}

function formatTimeShort(date) {
    const d = date instanceof Date ? date : new Date(date);
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return hh + ':' + min;
}

// ============================================
// FAQ (Accordion toggle)
// ============================================

function toggleFaq(el) {
    const isOpen = el.classList.contains('open');
    // Close all other FAQs
    document.querySelectorAll('.faq-item.open').forEach(function(item) {
        item.classList.remove('open');
    });
    // Toggle current
    if (!isOpen) {
        el.classList.add('open');
    }
}

// ============================================
// DEVELOPER OPTIONS — Local Storage Viewer
// ============================================

function renderDevStorage() {
    const list = document.getElementById('dev-storage-list');
    const countEl = document.getElementById('dev-storage-count');
    if (!list) return;

    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
    }
    keys.sort();

    if (countEl) countEl.textContent = keys.length + ' chav' + (keys.length === 1 ? 'e' : 'i');

    if (keys.length === 0) {
        list.innerHTML = '<div style="text-align:center;padding:40px 16px;color:#8E8E93;font-size:14px;">Nessun dato nel Local Storage</div>';
        return;
    }

    list.innerHTML = keys.map(function(key) {
        var raw = localStorage.getItem(key) || '';
        var size = new Blob([raw]).size;
        var sizeLabel = size > 1024 ? (size / 1024).toFixed(1) + ' KB' : size + ' B';
        var formatted = raw;
        try {
            var parsed = JSON.parse(raw);
            formatted = JSON.stringify(parsed, null, 2);
        } catch(e) {}
        // Sanitize output to prevent XSS
        formatted = formatted.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return '<div class="dev-storage-item" onclick="this.classList.toggle(\'open\')">' +
            '<div class="dev-storage-key">' +
                '<span class="dev-storage-key-name">' + key.replace(/</g, '&lt;') + '</span>' +
                '<span class="dev-storage-key-size">' + sizeLabel + '</span>' +
            '</div>' +
            '<div class="dev-storage-value"><div class="dev-storage-value-inner"><pre>' + formatted + '</pre></div></div>' +
        '</div>';
    }).join('');
}

function refreshDevStorage() {
    renderDevStorage();
}

// ============================================
// DEVELOPER OPTIONS — Accordion Toggle
// ============================================

function toggleDevSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (!section) return;
    section.classList.toggle('open');
}

// ============================================
// DEVELOPER OPTIONS — Device Info
// ============================================

function renderDeviceInfo() {
    var container = document.getElementById('dev-device-info');
    if (!container) return;
    var ua = navigator.userAgent || 'N/A';
    var platform = navigator.platform || 'N/A';
    var lang = navigator.language || 'N/A';
    var viewport = window.innerWidth + ' × ' + window.innerHeight;
    var screen = window.screen.width + ' × ' + window.screen.height;
    var dpr = window.devicePixelRatio || 1;
    var online = navigator.onLine ? 'Online' : 'Offline';
    var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone === true);
    var swStatus = 'Non supportato';
    if ('serviceWorker' in navigator) {
        swStatus = navigator.serviceWorker.controller ? 'Attivo' : 'Registrato (nessun controller)';
    }
    var rows = [
        { label: 'User Agent', value: ua },
        { label: 'Piattaforma', value: platform },
        { label: 'Lingua', value: lang },
        { label: 'Viewport', value: viewport },
        { label: 'Schermo', value: screen },
        { label: 'DPR', value: dpr.toFixed(1) },
        { label: 'Connessione', value: online },
        { label: 'Modalità PWA', value: standalone ? 'Standalone' : 'Browser' },
        { label: 'Service Worker', value: swStatus }
    ];
    container.innerHTML = rows.map(function(r) {
        return '<div class="dev-info-row"><span class="dev-info-label">' +
            r.label + '</span><span class="dev-info-value">' +
            r.value.replace(/</g, '&lt;') + '</span></div>';
    }).join('');
}

// ============================================
// DEVELOPER OPTIONS — Performance
// ============================================

function renderDevPerformance() {
    var container = document.getElementById('dev-perf-info');
    if (!container) return;
    var rows = [];
    if (window.performance && performance.timing) {
        var t = performance.timing;
        var loadTime = t.loadEventEnd - t.navigationStart;
        if (loadTime > 0) rows.push({ label: 'Caricamento pagina', value: loadTime + ' ms' });
        var domReady = t.domContentLoadedEventEnd - t.navigationStart;
        if (domReady > 0) rows.push({ label: 'DOM Ready', value: domReady + ' ms' });
    }
    rows.push({ label: 'Nodi DOM', value: document.querySelectorAll('*').length.toString() });
    var totalSize = 0;
    for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        totalSize += new Blob([localStorage.getItem(k) || '']).size;
    }
    var sizeLabel = totalSize > 1024 ? (totalSize / 1024).toFixed(1) + ' KB' : totalSize + ' B';
    rows.push({ label: 'localStorage usato', value: sizeLabel });
    if (performance.memory) {
        var mem = performance.memory;
        rows.push({ label: 'Heap usato', value: (mem.usedJSHeapSize / 1048576).toFixed(1) + ' MB' });
        rows.push({ label: 'Heap totale', value: (mem.totalJSHeapSize / 1048576).toFixed(1) + ' MB' });
    }
    container.innerHTML = rows.map(function(r) {
        return '<div class="dev-info-row"><span class="dev-info-label">' +
            r.label + '</span><span class="dev-info-value">' + r.value + '</span></div>';
    }).join('');
}

// ============================================
// DEVELOPER OPTIONS — In-App Console
// ============================================

var _devConsoleLogs = [];
var _devConsoleInited = false;

function initDevConsole() {
    if (_devConsoleInited) return;
    _devConsoleInited = true;
    var origLog = console.log;
    var origWarn = console.warn;
    var origError = console.error;
    function addLine(type, args) {
        var now = new Date();
        var time = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        var text = Array.prototype.map.call(args, function(a) {
            if (typeof a === 'object') {
                try { return JSON.stringify(a); } catch(e) { return String(a); }
            }
            return String(a);
        }).join(' ');
        _devConsoleLogs.push({ type: type, time: time, text: text });
        if (_devConsoleLogs.length > 200) _devConsoleLogs.shift();
        renderDevConsole();
    }
    console.log = function() { origLog.apply(console, arguments); addLine('log', arguments); };
    console.warn = function() { origWarn.apply(console, arguments); addLine('warn', arguments); };
    console.error = function() { origError.apply(console, arguments); addLine('error', arguments); };
}

function renderDevConsole() {
    var output = document.getElementById('dev-console-output');
    var countEl = document.getElementById('dev-console-count');
    if (!output) return;
    if (countEl) countEl.textContent = _devConsoleLogs.length;
    output.innerHTML = _devConsoleLogs.map(function(l) {
        var cls = l.type === 'warn' ? ' warn' : l.type === 'error' ? ' error' : '';
        return '<div class="dev-console-line' + cls + '"><span class="dev-console-time">' +
            l.time + '</span>' + l.text.replace(/</g, '&lt;') + '</div>';
    }).join('');
    output.scrollTop = output.scrollHeight;
}

function clearDevConsole() {
    _devConsoleLogs = [];
    renderDevConsole();
}

// ============================================
// DEVELOPER OPTIONS — Export / Import
// ============================================

function devExportData() {
    var data = {};
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        data[key] = localStorage.getItem(key);
    }
    var json = JSON.stringify(data, null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'trenord_backup_' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function devImportData(event) {
    var file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.name.endsWith('.json')) {
        alert('Seleziona un file .json valido');
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var data = JSON.parse(e.target.result);
            if (typeof data !== 'object' || data === null || Array.isArray(data)) {
                alert('Formato JSON non valido');
                return;
            }
            var count = 0;
            for (var key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key) && typeof data[key] === 'string') {
                    localStorage.setItem(key, data[key]);
                    count++;
                }
            }
            alert('Importati ' + count + ' elementi. L\'app verrà ricaricata.');
            location.reload();
        } catch (err) {
            alert('Errore nel parsing del file JSON');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ============================================
// DEVELOPER OPTIONS — Reset App
// ============================================

function devResetApp() {
    if (!confirm('Sei sicuro? Tutti i dati verranno eliminati permanentemente.')) return;
    localStorage.clear();
    location.reload();
}

// ============================================
// STATISTICHE VIAGGIO
// ============================================

// STIBM zone midpoint radii from Milano Duomo (km), based on real geographic data
// Source: STIBM tariff zone boundaries — concentric rings around Milan
var STIBM_ZONE_RADIUS = {
    'Mi1': 3.5,   // Urban Milan (ATM) — avg trip ~3.5km from center
    'Mi3': 9.5,   // First suburban ring (7-12km)
    'Mi4': 15,    // Second suburban ring (12-18km)
    'Mi5': 22.5,  // Third suburban ring (18-27km)
    'Mi6': 31,    // Fourth suburban ring (27-35km)
    'Mi7': 40,    // Fifth suburban ring (35-45km)
    'Mi8': 50,    // Sixth suburban ring (45-55km)
    'Mi9': 62.5   // Outer ring (55-70km) — e.g. Varese, Como, Lecco
};

// Average CO2 emissions per km: train ~41g, car ~120g (source: ISPRA / EEA)
var CO2_TRAIN_G_KM = 41;
var CO2_CAR_G_KM = 120;

function getStatsSettings() {
    try {
        var s = JSON.parse(localStorage.getItem('trenord_stats_settings') || '{}');
        return {
            carCostKm: Number(s.carCostKm) || 0.35,          // €/km ACI 2024 avg
            fuelConsumption: Number(s.fuelConsumption) || 6.5, // L/100km
            fuelPrice: Number(s.fuelPrice) || 1.75,            // €/L
            parkingCostTrip: Number(s.parkingCostTrip) || 0     // €/trip avg parking
        };
    } catch(e) {
        return { carCostKm: 0.35, fuelConsumption: 6.5, fuelPrice: 1.75, parkingCostTrip: 0 };
    }
}

function saveStatsSettings(settings) {
    localStorage.setItem('trenord_stats_settings', JSON.stringify(settings));
}

function getZoneDistance(fromZone, toZone) {
    var r1 = STIBM_ZONE_RADIUS[fromZone];
    var r2 = STIBM_ZONE_RADIUS[toZone];
    if (r1 === undefined || r2 === undefined) return 0;
    // Distance ≈ difference in radii (concentric zones, approximate linear travel)
    // Apply 1.3x route factor for non-straight rail paths
    return Math.round(Math.abs(r2 - r1) * 1.3);
}

function renderStats() {
    var container = document.getElementById('stats-container');
    if (!container) return;

    var orders = [];
    try { orders = JSON.parse(localStorage.getItem('trenord_orders') || '[]'); } catch(e) {}

    if (!Array.isArray(orders) || orders.length === 0) {
        container.innerHTML =
            '<div class="stats-empty">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>' +
                '<p>Nessun dato disponibile.<br>Acquista un biglietto per visualizzare le statistiche.</p>' +
            '</div>';
        return;
    }

    var settings = getStatsSettings();
    var totalTickets = 0;
    var totalSpent = 0;
    var zoneCounts = {};
    var routeCounts = {};
    var allZones = ['Mi1', 'Mi3', 'Mi4', 'Mi5', 'Mi6', 'Mi7', 'Mi8', 'Mi9'];

    orders.forEach(function(order) {
        var tickets = order.tickets || order.items || [];
        tickets.forEach(function(item) {
            totalTickets++;
            totalSpent += (item.prezzo || 0);
            var viaggio = item.viaggio || '';
            var parts = viaggio.split(' | ');
            parts.forEach(function(z) {
                var zone = z.trim();
                if (zone) zoneCounts[zone] = (zoneCounts[zone] || 0) + 1;
            });
            // Route counting
            if (parts.length === 2) {
                var routeKey = parts[0].trim() + ' → ' + parts[1].trim();
                routeCounts[routeKey] = (routeCounts[routeKey] || 0) + 1;
            }
        });
    });

    // Realistic km calculation using STIBM zone radii
    var totalKm = 0;
    orders.forEach(function(order) {
        var tickets = order.tickets || order.items || [];
        tickets.forEach(function(item) {
            var v = item.viaggio || '';
            var from = (item.fromZone || v.split(' | ')[0] || '').trim();
            var to = (item.toZone || v.split(' | ')[1] || '').trim();
            if (from && to) {
                totalKm += getZoneDistance(from, to);
            }
        });
    });

    // CO2 calculations
    var co2Train = totalKm * CO2_TRAIN_G_KM;        // grams
    var co2Car = totalKm * CO2_CAR_G_KM;             // grams
    var co2Saved = Math.max(0, co2Car - co2Train);    // grams

    // Cost comparisons
    var fuelCost = totalKm * (settings.fuelConsumption / 100) * settings.fuelPrice;
    var totalCarCost = totalKm * settings.carCostKm + (totalTickets * settings.parkingCostTrip);
    var savings = Math.max(0, totalCarCost - totalSpent);

    var maxZoneCount = Math.max.apply(null, Object.values(zoneCounts).concat([1]));

    var html = '';
    html += '<div class="stats-header">';
    html += '<div class="stats-header-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#2C7F44" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div>';
    html += '<h2>Le tue statistiche</h2>';
    html += '<p>Riepilogo dei tuoi viaggi STIBM</p>';
    html += '</div>';

    // Primary stats cards
    html += '<div class="stats-cards">';
    html += '<div class="stats-card"><div class="stats-card-value">' + totalTickets + '</div><div class="stats-card-label">Biglietti acquistati</div></div>';
    html += '<div class="stats-card"><div class="stats-card-value">' + totalSpent.toFixed(2) + ' €</div><div class="stats-card-label">Spesa totale</div></div>';
    html += '<div class="stats-card"><div class="stats-card-value">~' + totalKm + ' km</div><div class="stats-card-label">Km percorsi</div></div>';
    html += '<div class="stats-card"><div class="stats-card-value">' + savings.toFixed(2) + ' €</div><div class="stats-card-label">Risparmio vs auto</div></div>';
    html += '</div>';

    // Environmental impact
    html += '<div class="stats-section-title">Impatto ambientale</div>';
    html += '<div class="stats-eco-card">';
    html += '<div class="stats-eco-row"><span class="stats-eco-icon">🌱</span><span class="stats-eco-label">CO₂ risparmiata</span><span class="stats-eco-value">' + (co2Saved / 1000).toFixed(1) + ' kg</span></div>';
    html += '<div class="stats-eco-row"><span class="stats-eco-icon">🚆</span><span class="stats-eco-label">Emissioni treno</span><span class="stats-eco-value">' + (co2Train / 1000).toFixed(1) + ' kg</span></div>';
    html += '<div class="stats-eco-row"><span class="stats-eco-icon">🚗</span><span class="stats-eco-label">Equivalente auto</span><span class="stats-eco-value">' + (co2Car / 1000).toFixed(1) + ' kg</span></div>';
    html += '</div>';

    // Cost comparison breakdown
    html += '<div class="stats-section-title">Confronto costi con auto</div>';
    html += '<div class="stats-eco-card">';
    html += '<div class="stats-eco-row"><span class="stats-eco-icon">⛽</span><span class="stats-eco-label">Costo carburante equiv.</span><span class="stats-eco-value">' + fuelCost.toFixed(2) + ' €</span></div>';
    html += '<div class="stats-eco-row"><span class="stats-eco-icon">🚘</span><span class="stats-eco-label">Costo totale auto</span><span class="stats-eco-value">' + totalCarCost.toFixed(2) + ' €</span></div>';
    html += '<div class="stats-eco-row"><span class="stats-eco-icon">💰</span><span class="stats-eco-label">La tua spesa treno</span><span class="stats-eco-value">' + totalSpent.toFixed(2) + ' €</span></div>';
    html += '<div class="stats-eco-row stats-eco-highlight"><span class="stats-eco-icon">✅</span><span class="stats-eco-label">Risparmio netto</span><span class="stats-eco-value stats-eco-green">' + savings.toFixed(2) + ' €</span></div>';
    html += '</div>';

    // Zone breakdown
    var zoneKeys = Object.keys(zoneCounts).sort();
    if (zoneKeys.length > 0) {
        html += '<div class="stats-section-title">Zone più utilizzate</div>';
        zoneKeys.forEach(function(zone) {
            var count = zoneCounts[zone];
            var pct = (count / maxZoneCount * 100).toFixed(0);
            html += '<div class="stats-zone-bar"><div class="stats-zone-row">' +
                '<span class="stats-zone-label">' + zone + '</span>' +
                '<div class="stats-zone-track"><div class="stats-zone-fill" style="width:' + pct + '%"></div></div>' +
                '<span class="stats-zone-count">' + count + '</span>' +
                '</div></div>';
        });
    }

    // Route breakdown
    var routeKeys = Object.keys(routeCounts).sort(function(a, b) {
        return routeCounts[b] - routeCounts[a];
    });
    if (routeKeys.length > 0) {
        html += '<div class="stats-section-title">Tratte più frequenti</div>';
        var maxRoute = routeCounts[routeKeys[0]];
        routeKeys.slice(0, 5).forEach(function(route) {
            var count = routeCounts[route];
            var pct = (count / maxRoute * 100).toFixed(0);
            html += '<div class="stats-zone-bar"><div class="stats-zone-row">' +
                '<span class="stats-zone-label" style="width:auto;min-width:80px;font-size:12px;">' + route + '</span>' +
                '<div class="stats-zone-track"><div class="stats-zone-fill" style="width:' + pct + '%"></div></div>' +
                '<span class="stats-zone-count">' + count + '</span>' +
                '</div></div>';
        });
    }

    // Info on km calculation method
    html += '<div class="stats-info-note">';
    html += '<svg viewBox="0 0 24 24" fill="none" stroke="#8E8E93" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';
    html += '<span>I km sono calcolati in base alle distanze reali tra zone STIBM (raggi concentrici da Milano Duomo) con fattore di percorso 1.3×. ' +
        'Costi auto basati su tariffa ACI ' + settings.carCostKm.toFixed(2) + ' €/km, consumo ' + settings.fuelConsumption.toFixed(1) + ' L/100km, carburante ' + settings.fuelPrice.toFixed(2) + ' €/L.' +
        '</span>';
    html += '</div>';

    // Settings button
    html += '<button class="stats-settings-btn" onclick="openStatsSettings()">⚙️ Personalizza parametri auto</button>';

    container.innerHTML = html;
}

function openStatsSettings() {
    var settings = getStatsSettings();
    var html = '';
    html += '<div class="stats-settings-form">';
    html += '<p class="stats-settings-desc">Personalizza i valori per un confronto più accurato con la tua auto.</p>';

    html += '<div class="stats-settings-field">';
    html += '<label>Costo complessivo auto (€/km)</label>';
    html += '<div class="stats-settings-hint">Carburante + assicurazione + manutenzione + ammortamento (ACI 2024: ~0.35 €/km)</div>';
    html += '<input type="number" id="stats-car-cost" value="' + settings.carCostKm.toFixed(2) + '" step="0.01" min="0.05" max="2.00">';
    html += '</div>';

    html += '<div class="stats-settings-field">';
    html += '<label>Consumo carburante (L/100km)</label>';
    html += '<input type="number" id="stats-fuel-consumption" value="' + settings.fuelConsumption.toFixed(1) + '" step="0.1" min="2" max="30">';
    html += '</div>';

    html += '<div class="stats-settings-field">';
    html += '<label>Prezzo carburante (€/L)</label>';
    html += '<input type="number" id="stats-fuel-price" value="' + settings.fuelPrice.toFixed(2) + '" step="0.01" min="0.50" max="5.00">';
    html += '</div>';

    html += '<div class="stats-settings-field">';
    html += '<label>Costo medio parcheggio per viaggio (€)</label>';
    html += '<div class="stats-settings-hint">Stima del costo medio di parcheggio per ogni viaggio in auto</div>';
    html += '<input type="number" id="stats-parking-cost" value="' + settings.parkingCostTrip.toFixed(2) + '" step="0.50" min="0" max="50">';
    html += '</div>';

    html += '<div style="display:flex;gap:8px;margin-top:16px;">';
    html += '<button class="modal-btn" style="flex:1;color:#8E8E93;border:1px solid #E5E5EA;border-radius:10px;padding:12px;" onclick="closeModal(\'stats-settings-modal\')">Annulla</button>';
    html += '<button class="modal-btn" style="flex:1;background:#2C7F44;color:#fff;border:none;border-radius:10px;padding:12px;font-weight:700;" onclick="saveStatsSettingsFromForm()">Salva</button>';
    html += '</div>';
    html += '</div>';

    document.getElementById('stats-settings-body').innerHTML = html;
    openModal('stats-settings-modal');
}

function saveStatsSettingsFromForm() {
    var settings = {
        carCostKm: parseFloat(document.getElementById('stats-car-cost').value) || 0.35,
        fuelConsumption: parseFloat(document.getElementById('stats-fuel-consumption').value) || 6.5,
        fuelPrice: parseFloat(document.getElementById('stats-fuel-price').value) || 1.75,
        parkingCostTrip: parseFloat(document.getElementById('stats-parking-cost').value) || 0
    };
    saveStatsSettings(settings);
    closeModal('stats-settings-modal');
    renderStats();
}

// ============================================
// NOTIFICA SCADENZA BIGLIETTO
// ============================================

var _expiryNotifiedTickets = {};

function checkTicketExpiryNotifications() {
    var now = Date.now();
    tickets.forEach(function(t) {
        if (t.status !== 'active' || !t.endDate) return;
        var end = new Date(t.endDate).getTime();
        var remaining = end - now;
        // Notify when 10 minutes or less remain, but ticket is still valid
        if (remaining > 0 && remaining <= 600000 && !_expiryNotifiedTickets[t.id]) {
            _expiryNotifiedTickets[t.id] = true;
            var mins = Math.ceil(remaining / 60000);
            showExpiryNotification(t, mins);
        }
    });
}

function showExpiryNotification(ticket, mins) {
    // Try native notification first
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Biglietto in scadenza', {
            body: ticket.viaggio + ' — scade tra ' + mins + ' minut' + (mins === 1 ? 'o' : 'i'),
            icon: 'icon.png',
            tag: 'expiry-' + ticket.id
        });
    }
    // Always show in-app banner
    showExpiryBanner(ticket, mins);
}

function showExpiryBanner(ticket, mins) {
    // Remove existing banners for this ticket
    var existing = document.getElementById('expiry-banner-' + ticket.id);
    if (existing) existing.remove();

    var banner = document.createElement('div');
    banner.id = 'expiry-banner-' + ticket.id;
    banner.className = 'expiry-banner';
    banner.innerHTML =
        '<div class="expiry-banner-icon">⏰</div>' +
        '<div class="expiry-banner-text">' +
            '<strong>' + ticket.viaggio + '</strong><br>' +
            'Scade tra ' + mins + ' minut' + (mins === 1 ? 'o' : 'i') + '!' +
        '</div>' +
        '<button class="expiry-banner-close" onclick="this.parentElement.remove()">✕</button>';
    document.body.appendChild(banner);
    // Auto-dismiss after 15 seconds
    setTimeout(function() {
        if (banner.parentElement) banner.remove();
    }, 15000);
}

// Request notification permission proactively
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// ============================================
// GUIDE STEP DEMOS — Animations
// ============================================

function initGuideDemos() {
    var demos = document.querySelectorAll('.home-step-demo');
    if (!demos.length) return;

    // Clear typing text — will be typed letter-by-letter on visibility
    demos.forEach(function(demo) {
        demo.querySelectorAll('.demo-type').forEach(function(el) {
            el.textContent = '';
        });
    });

    // IntersectionObserver to trigger animations on scroll
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    runTypewriterDemo(entry.target);
                }
            });
        }, { threshold: 0.3 });

        demos.forEach(function(demo) {
            observer.observe(demo);
        });
    } else {
        demos.forEach(function(demo) {
            demo.classList.add('visible');
            runTypewriterDemo(demo);
        });
    }
}

function runTypewriterDemo(demo) {
    var fields = demo.querySelectorAll('.demo-type');
    if (!fields.length) return;
    // Prevent double-run
    if (demo._typewriterRan) return;
    demo._typewriterRan = true;

    var fieldIndex = 0;
    function typeNextField() {
        if (fieldIndex >= fields.length) return;
        var el = fields[fieldIndex];
        var fullText = el.getAttribute('data-text') || '';
        var charIdx = 0;
        el.textContent = '';
        el.classList.add('typing-active');
        var interval = setInterval(function() {
            if (charIdx < fullText.length) {
                el.textContent += fullText[charIdx];
                charIdx++;
            } else {
                clearInterval(interval);
                el.classList.remove('typing-active');
                el.classList.add('typing-done');
                fieldIndex++;
                setTimeout(typeNextField, 200);
            }
        }, 55);
    }
    typeNextField();
}

function replayDemo(btn) {
    var demo = btn.closest('.home-step-demo');
    if (!demo) return;
    demo.classList.remove('visible');
    // Reset typewriter state
    demo._typewriterRan = false;
    demo.querySelectorAll('.demo-type').forEach(function(el) {
        el.textContent = '';
        el.classList.remove('typing-active', 'typing-done');
    });
    // Force reflow to restart animations
    void demo.offsetWidth;
    demo.classList.add('visible');
    runTypewriterDemo(demo);
}

// ============================================
// PROFILO — Update email display
// ============================================

function updateProfiloEmail() {
    var el = document.getElementById('profilo-display-email');
    if (el) {
        el.textContent = localStorage.getItem('trenord_email') || '';
    }
}
