# Guida: aggiornare i contenuti del sito (senza programmare)

Il sito legge i testi da file **JSON** nella cartella `content/`.  
Modifichi quei file su GitHub → il sito si ricostruisce da solo in pochi minuti.

---

## Cosa serve

| Requisito | Dettaglio |
|-----------|-----------|
| Account GitHub | Gratuito su [github.com](https://github.com) |
| Permessi sul repo | Ruolo **Write** o **Admin** (chiedi a chi gestisce il repository) |
| Pazienza | Dopo ogni salvataggio attendi **2–5 minuti** prima di vedere le modifiche online |

**Non serve** installare Node.js né usare il terminale se modifichi solo da browser.

---

## Configurazione su GitHub (una tantum, per chi amministra il repo)

Chi ha accesso **Admin** al repository deve verificare questi punti:

### 1. GitHub Pages con Actions

1. Apri il repository su GitHub (es. `sadaga/sadaga.github.io`).
2. **Settings** → **Pages** (menu a sinistra).
3. In **Build and deployment** → **Source** scegli **GitHub Actions** (non “Deploy from a branch”).
4. Salva se necessario.

Il deploy è gestito dal file `.github/workflows/deploy.yml`: ogni modifica su `main` avvia build e pubblicazione.

### 2. Actions abilitate

1. **Settings** → **Actions** → **General**.
2. In **Actions permissions** seleziona **Allow all actions and reusable workflows** (o almeno consenti le action di questo repo).
3. Salva.

### 3. Dare accesso agli editor

1. **Settings** → **Collaborators** (o **Manage access** in un’organizzazione).
2. **Add people** → inserisci l’email o username GitHub.
3. Ruolo consigliato: **Write** (possono modificare i file, non cancellare il repo).

### 4. Controllare che il deploy funzioni

1. Tab **Actions** → workflow **Deploy to GitHub Pages**.
2. L’ultima esecuzione su `main` deve essere **verde** (success).
3. Se è **rossa**, apri il log: spesso è JSON non valido (virgola mancante, virgolette sbagliate).

---

## Come modificare un file dal browser

Esempio: aggiungere un evento.

1. Vai al repository su GitHub.
2. Apri la cartella **`content`**.
3. Clicca su **`events.json`**.
4. Clicca l’icona **matita** (Edit this file).
5. Modifica il testo (vedi sezione [Eventi](#file-contenteventsjson) sotto).
6. Scorri in basso:
   - **Commit message**: breve descrizione, es. `Aggiunto evento lettura di giugno`
   - Scegli **Commit directly to the `main` branch**
7. Clicca **Commit changes**.
8. Vai in **Actions** e attendi che il deploy finisca (segno verde).
9. Apri il sito (hard refresh: `Ctrl+F5` o svuota cache) per vedere le novità.

---

## File da conoscere

| File | Cosa aggiorna sul sito |
|------|-------------------------|
| `content/events.json` | Pagina **Eventi** |
| `content/chi-siamo.json` | Pagina **Chi siamo** |
| `content/books.json` | Libri consigliati in **Home** |
| `content/social.json` | Pagina **Social** (link Instagram, YouTube, TikTok) |
| Cartella **`gallery/incoming/`** | Galleria foto in **Home** (scorrimento automatico) |
| `gallery/gallery.config.json` | Titolo galleria in home (`subtitle` opzionale) |

Modelli completi e regole: cartella `content/schemas/` (riferimento per chi ha dubbi sui campi).

---

## Galleria foto (Home)

Le foto **non** si modificano in un JSON a mano: si mettono nella cartella **`gallery/incoming/`** sul repository.

### Passi

1. Su GitHub apri **`gallery`** → **`incoming`**.
2. **Add file** → carica le immagini (JPG, PNG o WebP).
3. Commit su `main`.
4. Attendi il deploy verde in **Actions** (2–5 minuti).

Il sito le ridimensiona da solo (anche se sono ~2 MB o verticali/orizzontali) e mostra al massimo **50** foto (se ne carichi di più, restano le 50 più recenti).

### Consigli

| Cosa | Dettaglio |
|------|-----------|
| Nomi file | Es. `workshop-aprile-02.jpg` (aiuta la descrizione per chi non vede l’immagine) |
| Orientamento | Verticale o orizzontale: entrambi vanno bene |
| Dimensione originale | Anche 2 MB per foto è accettabile; online saranno molto più leggere |
| Rimuovere una foto | Elimina il file da `gallery/incoming/` e fai commit |
| Titolo sezione | Modifica `gallery/gallery.config.json` |

**Non** modificare i file in `public/gallery/`: sono creati in automatico dal deploy.

---

## File `content/events.json`

È un **elenco** `[ ... ]` di eventi. Ogni evento è un blocco tra `{` e `}`.

### Evento semplice (in arrivo o passato)

```json
{
  "id": 6,
  "title": "Titolo dell'evento",
  "date": "20 Giugno 2026",
  "time": "18:00",
  "location": "Nome del luogo",
  "description": "Testo breve che appare sulla scheda.",
  "status": "upcoming"
}
```

- **`id`**: numero **unico** (non ripetere un id già usato).
- **`status`**: solo uno tra:
  - `"upcoming"` → compare in **Prossimi eventi**
  - `"past"` → compare in **Eventi passati**
  - `"special"` → compare in **Eventi speciali** (layout diverso)

### Evento speciale (con dettagli extra)

Usa `"status": "special"` e aggiungi il blocco `details`:

```json
{
  "id": 7,
  "title": "Nome evento speciale",
  "date": "1 Luglio 2026",
  "time": "10:00",
  "location": "Luogo",
  "description": "Descrizione breve.",
  "status": "special",
  "details": {
    "subtitle": "Sottotitolo o frase d'impatto",
    "whatToBring": "Cosa portare (o scrivere che non serve nulla)",
    "refreshment": "Info su rinfresco, se c'è",
    "contact": "Come iscriversi (es. scrivici in DM su Instagram)"
  }
}
```

### Aggiungere un evento

1. Copia un blocco evento esistente.
2. Incollalo **prima** della parentesi quadra finale `]`.
3. Metti una **virgola** dopo la `}` dell’evento precedente.
4. Cambia tutti i campi e assegna un **nuovo `id`**.

### Spostare un evento nel passato

Cambia solo `"status": "past"` (la data resta quella che hai scritto).

---

## Regole JSON (errori frequenti)

| Regola | Esempio corretto | Errore tipico |
|--------|------------------|---------------|
| Virgolette doppie | `"title": "Ciao"` | virgolette singole `'Ciao'` |
| Virgola tra elementi | `}, {` tra due eventi | virgola dopo l’ultimo elemento |
| Nessuna virgola finale | `}` poi `]` | `},]` o `,}` |
| Testo con virgolette | `"title": "Il \"libro\""` | virgolette non escaped |
| Numeri | `"id": 6` | `"id": "6"` |

Se il deploy fallisce, apri **Actions** → ultimo workflow fallito → cerca `validate:content` o `JSON`.

---

## Verifica in locale (opzionale, per chi usa il computer)

```bash
npm run validate:content
npm run build
```

Se `validate:content` non segnala errori, il JSON è ok per il deploy.

---

## Domande frequenti

**Quanto tempo per vedere le modifiche?**  
Di solito 2–5 minuti dopo il commit su `main`.

**Ho sbagliato e il sito non si aggiorna**  
Controlla **Actions**: se è rosso, correggi il JSON (o chiedi aiuto a chi ha accesso al repo).

**Posso caricare foto?**  
Galleria home: cartella `gallery/incoming/` (vedi sezione Galleria sopra). Altrove: file in `public/`.

---

## File `content/chi-siamo.json`

Testi della pagina **Chi siamo**. Niente emoji nei testi: il tono può restare leggero, ma il layout è pulito.

### Attività (`activities`)

Ogni voce ha `title` e, opzionale, `description`:

```json
{
  "title": "Workshop di scrittura poetica",
  "description": "Laboratori pratici per sperimentare forma e voce."
}
```

### Valori (`values.items`)

```json
{
  "title": "Inclusività",
  "description": "Testo breve che spiega il valore."
}
```

### Team / creatori (`team`)

Quando vorrete presentarvi, aggiungete oggetti in `members`:

```json
"members": [
  {
    "name": "Nome Cognome",
    "role": "Coordinamento / Scrittura",
    "bio": "Due righe su di voi (opzionale).",
    "image": "/sadaga.github.io/team/nome.webp"
  }
]
```

- Con `members` **vuoto** e `placeholderSlots: 3` compaiono **3 schede segnaposto** (“Presentazioni in arrivo”).
- Per nascondere i segnaposto: `"placeholderSlots": 0`.
- Foto: file in `public/team/` (create la cartella), percorso come sopra con prefisso `/sadaga.github.io/`.

### Chiusura (`cta`)

`linkHref` di solito `/social`; `linkLabel` è il testo del pulsante.

**Chi può pubblicare?**  
Solo utenti con permesso **Write** o superiore sul repository GitHub.
