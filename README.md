# 🚆 Trenord — Biglietto Digitale STIBM

> Progressive Web App che simula la generazione e gestione di biglietti digitali STIBM (Sistema Tariffario Integrato del Bacino di Mobilità) per il sistema di trasporto pubblico lombardo.

⚠️ **Disclaimer**: Questo è un progetto **didattico/dimostrativo**. I biglietti generati **non sono validi** per viaggi reali su Trenord o altre reti di trasporto.

---

## ✨ Funzionalità

### 🏠 Home
- Schermata di benvenuto con accesso rapido alle sezioni principali

### 🛒 Acquista
- **Ricerca Comuni**: database di **190 comuni** dell'area STIBM con ricerca in tempo reale e autocompletamento
- **Selezione per Comune (Da → A)**: inserimento partenza e arrivo con calcolo automatico delle zone tariffarie
- **Selezione per Zone STIBM**: slider interattivo a doppio cursore (Mi1, Mi3–Mi9) con mappa visuale delle zone
- **Mappa zone**: rappresentazione grafica con pinch-to-zoom delle 8 zone tariffarie concentriche
- **Calcolo tariffa**: tabella tariffaria non lineare con distinzione percorsi Mi1 vs non-Mi1
- **Selezione passeggeri**: configurazione quantità biglietti (1–9)
- **Scelta data/ora**: impostazione partenza con calcolo automatico validità

### 💳 Wallet
- **Lista biglietti attivi**: card con design nativo iOS (gradient verde Trenord `#006B32`)
- **Dettaglio biglietto**: espansione con animazione per visualizzare QR Code, PNR, dati di viaggio
- **Generazione QR Code**: animazione "Epic Assembly" con griglia 21×21, finder patterns 7×7, simulazione terminale e progress bar
- **Aggiornamento**: pulsante per forzare il reload con pulizia cache del Service Worker

### 📍 Gite
- Mappa interattiva delle zone STIBM con legenda cromatica e pinch-to-zoom

### 👤 Profilo
- Dati utente (demo)
- **Documentazione tecnica**: sezione accordion con dettagli su architettura, gestione zone, tariffe e logica QR
- **Credits** con link GitHub e Instagram

---

## 🛠️ Stack Tecnologico

| Tecnologia | Utilizzo |
|------------|----------|
| **HTML5** | Struttura semantica, 5 schermate + modali |
| **CSS3** | Design system iOS-native, animazioni keyframe, dark gradients |
| **Vanilla JavaScript** | Logica applicativa (~1500 righe), nessun framework |
| **Service Worker** | Cache offline, strategia cache-first |
| **Web App Manifest** | Installazione PWA, standalone mode |
| **qrcodejs** | Generazione QR Code via CDN |
| **GitHub API** | Controllo versione con popup di aggiornamento |
| **localStorage** | Persistenza biglietti e versione app |

---

## 📂 Struttura del Progetto

```
Trenord/
├── index.html          # App shell — 5 schermate, modali, tab bar
├── style.css           # Design system completo (~2350 righe)
├── app.js              # Logica applicativa (~1500 righe)
├── sw.js               # Service Worker con cache management
├── manifest.json       # Web App Manifest per PWA
├── icon.png            # Icona app 512×512
└── README.md           # Questo file
```

---

## 🚀 Avvio Rapido

### Utilizzo diretto (GitHub Pages)
L'app è accessibile come PWA e può essere aggiunta alla home screen del dispositivo:

1. Apri il link GitHub Pages nel browser mobile
2. **iOS**: Safari → Condividi → "Aggiungi a Home"
3. **Android**: Chrome → Menu → "Installa app"

### Sviluppo locale
```bash
# Clona il repository
git clone https://github.com/sjmvne/Trenord.git
cd Trenord

# Avvia un server locale (necessario per Service Worker)
npx serve .
# oppure
python -m http.server 8000
```

> ⚠️ Il Service Worker richiede HTTPS o `localhost` per funzionare.

---

## 🎨 Design

L'interfaccia replica fedelmente il design nativo iOS con:

- **Colore primario**: Verde Trenord `#006B32`
- **Tipografia**: `-apple-system, BlinkMacSystemFont, 'SF Pro'`
- **Componenti**: Card con bordi arrotondati, accordion con chevron animato, bottom tab bar con 5 sezioni
- **Animazioni**: transizioni fluide cubic-bezier, animazione QR "Epic Assembly" con terminale simulato (~20s)
- **Safe area**: supporto notch con `env(safe-area-inset-*)`

---

## 🗺️ Zone STIBM

L'app gestisce le 8 zone tariffarie del sistema STIBM:

| Zona | Colore | Hex |
|------|--------|-----|
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
