# Sadaga - Sito Vetrina Gruppo Letterario

Sito ufficiale del gruppo letterario Sadaga. Realizzato con Next.js, React, TypeScript e Tailwind CSS.

## Struttura del Progetto

```
├── app/
│   ├── layout.tsx          # Layout principale con navbar e footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Stili globali
│   ├── contatti/
│   │   └── page.tsx        # Pagina contatti con form validato
│   ├── social/
│   │   └── page.tsx        # Pagina social media
│   └── eventi/
│       └── page.tsx        # Pagina eventi organizzati
├── package.json            # Dipendenze del progetto
├── next.config.js          # Configurazione Next.js per GitHub Pages
├── tsconfig.json           # Configurazione TypeScript
├── tailwind.config.ts      # Configurazione Tailwind CSS
└── postcss.config.js       # Configurazione PostCSS
```

## Pagine

- **Home** (`/`): Pagina principale con overview del gruppo
- **Contatti** (`/contatti`): Form di contatto con validazione email
- **Social** (`/social`): Link a Instagram, YouTube, e altri social media
- **Eventi** (`/eventi`): Elenco degli eventi organizzati

## Tecnologie Utilizzate

- **Next.js 14**: Framework React per siti statici e dinamici
- **React 18**: Libreria UI
- **TypeScript**: Linguaggio tipizzato per maggiore sicurezza
- **Tailwind CSS**: Framework CSS utility-first
- **PostCSS + Autoprefixer**: Processamento CSS

## Installazione

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Setup

```bash
# Installare le dipendenze
npm install

# Avviare il server di sviluppo
npm run dev

# Aprire http://localhost:3000 nel browser
```

## Validazione Form

Il form di contatto include:
- Validazione dei campi obbligatori (nome, cognome, email)
- Validazione email con regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Messaggi di errore personalizzati
- Feedback visivo

## Deployment su GitHub Pages

### 1. Configurare il repository

```bash
# Se non l'hai fatto già
git init
git remote add origin https://github.com/USERNAME/sadaga.github.io.git
git branch -M main
```

### 2. Build del progetto

```bash
npm run build
```

Questo genererà una cartella `out/` con il sito statico pronto per il deployment.

### 3. Deploy su GitHub Pages

#### Opzione A: Usare GitHub Actions (Consigliato)

Crea il file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: sadaga.github.io
```

#### Opzione B: Deploy manuale

```bash
# Fare il build
npm run build

# Andare nella cartella out
cd out

# Inizializzare git e fare push
git init
git add .
git commit -m "Deploy sito"
git push -u origin main
```

### 4. Configurare GitHub Pages

1. Vai su **Settings** del repository
2. Sezione **Pages**
3. Seleziona `main` branch e `/root` folder
4. Salva

Il sito sarà disponibile su: `https://USERNAME.github.io`

## Personalizzazione

### Aggiungere i social media

Modifica il file `app/social/page.tsx` e aggiorna gli URL dei social:

```typescript
const socials = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/sadaga',  // ← Aggiungi qui
    // ...
  },
  // ...
];
```

### Cambiare colori

I colori sono definiti in `tailwind.config.ts`. Modifica la sezione `colors` per personalizzare:

```typescript
colors: {
  slate: { /* colori attuali */ }
}
```

### Aggiungere nuove pagine

Crea una nuova cartella in `app/` con un file `page.tsx`:

```
app/
  └── nuova-pagina/
      └── page.tsx
```

La pagina sarà automaticamente accessibile da `/nuova-pagina`.

## Stile Minimalista

Il sito utilizza:
- Palette colori neutra (bianco, grigio, nero)
- Font system di default (Clean e leggibile)
- Spaziatura generosa
- Animazioni sottili
- Responsive design

## Script npm

```bash
npm run dev      # Avvia server di sviluppo
npm run build    # Build per production
npm start        # Avvia server production
npm run lint     # Esegui linter
```

## Troubleshooting

### "node/npm non riconosciuto"
- Installa Node.js da https://nodejs.org/
- Riavvia il terminale

### Errori di build
```bash
# Pulisci cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Le pagine non funzionano dopo il deploy
- Controlla che `next.config.js` abbia `output: 'export'`
- Verifica le impostazioni di GitHub Pages

## Licenza

© 2026 Sadaga - Gruppo Letterario

## Supporto

Per domande o problemi, contatta: info@sadaga.it