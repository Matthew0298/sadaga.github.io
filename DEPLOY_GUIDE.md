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
3. Sotto "Build and deployment":
   - Scegli **Deploy from a branch**
   - Branch: seleziona `main`
   - Cartella: `/root`
4. Clicca **Save**

GitHub genererà automaticamente il sito all'indirizzo: `https://USERNAME.github.io`

## Step 6: Abilitare GitHub Actions (Opzionale ma Consigliato)

GitHub Actions automatizza il build e il deployment ad ogni push.

**I file sono già configurati!** È sufficiente il file `.github/workflows/deploy.yml` che abbiamo creato.

Ogni volta che fai un `git push`:
1. GitHub Actions esegue automaticamente `npm install` e `npm run build`
2. Genera i file statici in `out/`
3. Pubblica il sito

## Step 7: Deployments Futuri

Dopo il setup iniziale, per aggiornare il sito:

```bash
# Modificare i file (ad es. aggiungere un nuovo evento)
# Poi:

git add .
git commit -m "Descrizione dei cambiamenti"
git push
```

GitHub Pages e GitHub Actions si aggiorneranno automaticamente! ✨

## Troubleshooting

### Il sito non appare dopo 24 ore
- Verifica che il repository sia **public**
- Controlla le impostazioni di GitHub Pages (Settings > Pages)
- Guarda il log di GitHub Actions (Actions tab)

### GitHub Pages mostra errore 404
- Assicurati che il branch sia `main` (non `master`)
- Verifica che la cartella sia `/root`
- Clearizza la cache del browser (Ctrl+Shift+Delete)

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

✅ Aggiornare il tuo profilo Instagram/YouTube nei social  
✅ Aggiungere gli URL reali dei social nel file `app/social/page.tsx`  
✅ Personalizzare gli eventi in `app/eventi/page.tsx`  
✅ Cambiare colori e stile in `tailwind.config.ts`

**Buon lavoro con Sadaga!** 🎉📚
