# 📘 Guida al Deployment su GitHub Pages

## Step 1: Preparare il Repository GitHub

1. Vai su [github.com](https://github.com)
2. Crea un nuovo repository denominato **`sadaga.github.io`** (IMPORTANTE: deve essere esattamente questo nome!)
3. Copia l'URL del repository (es: `https://github.com/USERNAME/sadaga.github.io.git`)

## Step 2: Configurare Git Locale

```bash
# Inizializzare il repository locale
git init

# Aggiungere il remote
git remote add origin https://github.com/USERNAME/sadaga.github.io.git
git branch -M main

# Configurare git
git config user.name "Il Tuo Nome"
git config user.email "tua-email@example.com"
```

## Step 3: Aggiungere i File

```bash
# Aggiungere tutti i file (escluso node_modules e .next)
git add .

# Committare
git commit -m "Configurazione iniziale sito Sadaga"
```

## Step 4: Push Iniziale

```bash
# Prima volta (configura il tracking del branch)
git push -u origin main
```

## Step 5: Configurare GitHub Pages

1. Vai su **Settings** del tuo repository
2. Seleziona **Pages** nel menu sinistro
3. Sotto **Build and deployment** → **Source**:
   - Scegli **GitHub Actions** (non "Deploy from a branch")
4. Salva

Il workflow `.github/workflows/deploy.yml` pubblica la cartella `out/` dopo ogni push su `main`.

URL tipico: `https://USERNAME.github.io/sadaga.github.io/` (con `basePath` configurato in `next.config.js`)

### Permessi per chi aggiorna i contenuti

1. **Settings** → **Collaborators** → aggiungi le persone con ruolo **Write**
2. Per modificare solo testi/eventi senza programmare, vedi **[content/GUIDA_CONTENUTI.md](content/GUIDA_CONTENUTI.md)**

## Step 6: Abilitare GitHub Actions (Opzionale ma Consigliato)

GitHub Actions automatizza il build e il deployment ad ogni push.

**I file sono già configurati!** È sufficiente il file `.github/workflows/deploy.yml` che abbiamo creato.

Ogni volta che fai un `git push`:
1. GitHub Actions esegue automaticamente `npm install` e `npm run build`
2. Genera i file statici in `out/`
3. Pubblica il sito

## Step 7: Aggiornare contenuti (eventi, testi, social)

### Da browser (consigliato per non programmatori)

1. Apri `content/events.json` (o altri file in `content/`) su GitHub
2. Clicca **Edit** (matita), modifica, **Commit changes** su `main`
3. Attendi 2–5 minuti e controlla **Actions** (deve essere verde)

Dettagli, esempi e regole JSON: **[content/GUIDA_CONTENUTI.md](content/GUIDA_CONTENUTI.md)**

### Da computer (chi usa Git)

```bash
# Modifica content/*.json, poi:
npm run validate:content   # opzionale ma utile
git add content/
git commit -m "Aggiornati eventi"
git push
```

Se il JSON è errato, il workflow **Deploy to GitHub Pages** fallisce al passo `Validate content JSON` e il sito non si aggiorna (così eviti pagine rotte).

## Troubleshooting

### Il sito non appare dopo 24 ore
- Verifica che il repository sia **public**
- Controlla le impostazioni di GitHub Pages (Settings > Pages)
- Guarda il log di GitHub Actions (Actions tab)

### GitHub Pages mostra errore 404
- Verifica che **Source** sia **GitHub Actions** (Settings → Pages)
- Controlla che l'ultimo deploy in **Actions** sia riuscito
- L'URL include il `basePath` (es. `/sadaga.github.io/`) se configurato in `next.config.js`
- Svuota la cache del browser (Ctrl+Shift+Delete)

### Il deploy fallisce
1. Vai al tab **Actions** del repository
2. Clicca sul workflow fallito
3. Leggi i log per capire l'errore
4. Di solito è un problema di dipendenze mancanti → esegui `npm install` localmente

## Link Utili

- 📖 [Documentazione GitHub Pages](https://docs.github.com/pages)
- 📖 [Documentazione GitHub Actions](https://docs.github.com/actions)
- 📖 [Documentazione Next.js Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

## Dopo il Deployment

Una volta online, puoi:

✅ Aggiornare eventi in `content/events.json`  
✅ Aggiornare link social in `content/social.json`  
✅ Modificare testi Chi siamo in `content/chi-siamo.json`  
✅ Cambiare colori e stile in `tailwind.config.ts` (serve chi conosce il codice)

**Buon lavoro con Sadaga!** 🎉📚
