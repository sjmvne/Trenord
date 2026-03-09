# Trenord+ — Biglietto Digitale STIBM

Progressive Web App che simula la generazione e gestione di biglietti digitali STIBM (Sistema Tariffario Integrato del Bacino di Mobilità) per il sistema di trasporto pubblico lombardo.

> **Disclaimer**: Questo è un progetto **esclusivamente didattico e dimostrativo**. I biglietti generati **non hanno alcuna validità legale** e **non possono essere utilizzati come titolo di viaggio**. Per viaggiare è necessario acquistare biglietti validi tramite i canali ufficiali Trenord o ATM. L'applicazione non è affiliata, sponsorizzata o connessa a Trenord S.r.l., ATM S.p.A. o qualsiasi ente del trasporto pubblico. I marchi citati sono proprietà dei rispettivi titolari.

---

## Funzionalità

### Home — Guida completa
- Panoramica delle sezioni con icone animate
- Guide passo-passo per acquisto, attivazione e verifica QR
- **Demo interattive** con animazioni IntersectionObserver (form auto-fill, slider zone, generazione biglietto, Tap & Go, assemblaggio QR)
- Consigli utili per installazione PWA, eliminazione biglietti e ricevute PDF

### Acquista
- **Ricerca comuni** Da → A con autocompletamento su database di 190 comuni STIBM
- **Slider zone** interattivo doppio cursore (Mi1, Mi3-Mi9) con mappa visuale
- Calcolo tariffa automatico con formula non lineare
- Selezione quantità biglietti (1-10), carnet e abbonamenti
- Sezione MXP dedicata per biglietti aeroportuali

### Wallet
- Card biglietti con design nativo iOS e swipe-to-delete
- **Tap & Go**: attivazione biglietto con countdown validità
- **QR Code** con animazione di assemblaggio (griglia 21×21, finder patterns, progress bar)
- Protezione anti-screenshot (blur on tap)
- Visualizzazione dati QR raw (base64 + JSON payload + checksum + UUID)
- Sezioni separate per biglietti, carnet e abbonamenti

### Changelog
- Cronologia aggiornamenti dal repository GitHub (via GitHub API)

### Profilo
- **Profilo utente** con email e gestione account
- **Dati fatturazione** (privato/azienda) con autocompletamento comuni e paesi
- **Storico acquisti** con filtro date drum picker e ricevute PDF scaricabili
- **Statistiche viaggio** — contatore biglietti, spesa totale, km stimati, risparmio vs auto, zone più utilizzate
- **Disclaimer e note legali** — 8 sezioni complete (scopo, validità, animazione, dati, affiliazione, IP, responsabilità, accettazione)
- **Opzioni sviluppatore** — Local Storage viewer, info dispositivo, performance, console in-app, esporta/importa dati JSON, reset app
- **Notifiche scadenza** — avviso in-app e notifica nativa 10 minuti prima della scadenza del biglietto
- FAQ con 11 domande e risposte
- Come funziona — documentazione tecnica con formule di calcolo e struttura QR
- Aggiornamento app con verifica via GitHub API

---

## Stack tecnologico

| Tecnologia | Utilizzo |
|---|---|
| HTML5 | Struttura semantica, schermate multiple + sub-screen + modali |
| CSS3 | Design iOS-native, animazioni keyframe, safe area support |
| Vanilla JavaScript | Logica applicativa completa, nessun framework |
| Service Worker | Cache offline, strategia cache-first |
| Web App Manifest | Installazione PWA, standalone mode |
| qrcodejs | Generazione QR Code (CDN) |
| html2canvas + jsPDF | Generazione ricevute PDF |
| GitHub API | Changelog e controllo aggiornamenti |
| localStorage | Persistenza completa lato client |

---

## Struttura del progetto

```
Trenord/
├── index.html          # App shell — schermate, sub-screen, modali, tab bar
├── style.css           # Design system completo
├── app.js              # Logica applicativa
├── sw.js               # Service Worker con cache management
├── manifest.json       # Web App Manifest
├── icon.png            # Icona app 512×512
├── README.md           # Documentazione
├── STIBM Areas/        # Immagini mappe zone tariffarie
└── SVG Icons/          # Icone SVG personalizzate
```

---

## Avvio locale

```bash
# Clona il repository
git clone https://github.com/sjmvne/Trenord.git
cd Trenord

# Avvia un server locale (necessario per Service Worker e fetch)
npx serve .
# oppure
python -m http.server 8000
```

Il Service Worker richiede HTTPS o `localhost` per funzionare. Aprire i file con `file://` causerà errori CORS.

Su mobile è possibile installare l'app come PWA:
- **iOS**: Safari → Condividi → "Aggiungi alla schermata Home"
- **Android**: Chrome → Menu → "Installa app"

---

## Privacy

Tutti i dati restano nel `localStorage` del browser. Nessuna informazione viene trasmessa a server esterni. L'app non usa cookie, analytics o sistemi di tracciamento.

---

## Licenza

Progetto didattico. I marchi Trenord, STIBM e correlati sono proprietà dei rispettivi titolari.

Sviluppato da un pendolare stanco dei ritardi e dei treni soppressi.
| Mi1 | Viola rigato | `#BDA3C8` |
| Mi3 | Viola | `#BDA3C8` |
| Mi4 | Blu | `#585DA4` |
| Mi5 | Verde | `#63A166` |
| Mi6 | Giallo | `#E1DD70` |
| Mi7 | Arancione | `#DDA165` |
| Mi8 | Arancione scuro | `#E37603` |
| Mi9 | Rosso rigato | `#A61D27` |

---

## 🔄 Aggiornamento Automatico

L'app controlla automaticamente la disponibilità di nuove versioni tramite l'API GitHub:

1. Al caricamento, viene verificato l'ultimo commit del repository
2. Se il SHA differisce da quello salvato in `localStorage`, viene mostrato un popup con il messaggio del commit
3. L'utente può scegliere **"Aggiorna"** (svuota cache + reload) o **"Dopo"** (ignora)

---

## 📱 PWA Features

- ✅ Installabile su home screen (iOS + Android)
- ✅ Funzionamento offline (Service Worker cache-first)
- ✅ Orientamento portrait bloccato
- ✅ Splash screen nativo
- ✅ Status bar personalizzata
- ✅ Aggiornamento automatico con notifica

---

## 👨‍💻 Autore

Sviluppato con ❤️ da **[@sjmvne](https://github.com/sjmvne)**

- 🐙 [GitHub](https://github.com/sjmvne)
- 📸 [Instagram](https://instagram.com/sjmvne)

---

## 📄 Licenza

Questo progetto è rilasciato a scopo didattico e dimostrativo. Non è affiliato né approvato da Trenord S.r.l. o dal sistema STIBM.
