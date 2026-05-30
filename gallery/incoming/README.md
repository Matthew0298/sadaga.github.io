# Foto galleria (cartella sorgente)

Carica qui le foto **originali** (JPG, PNG o WebP). Non serve ridimensionarle a mano: lo fa il sito in automatico.

## Cosa fare

1. Copia le foto in questa cartella (`gallery/incoming/`).
2. Su GitHub: carica i file in questa cartella e fai commit su `main`.
3. La pipeline elabora le immagini e pubblica il sito (2–5 minuti).

In locale, dopo aver aggiunto foto:

```bash
npm run gallery:process
```

## Regole utili

| Regola | Dettaglio |
|--------|-----------|
| Massimo foto | **50** (se ne metti di più, restano le 50 più recenti) |
| Formati | `.jpg`, `.jpeg`, `.png`, `.webp` |
| Dimensione originale | Anche **2 MB** va bene; per il web verranno compresse (~80–200 KB) |
| Orientamento | Verticali e orizzontali sono ok: il script legge larghezza/altezza e mantiene le proporzioni |
| Nome file | Usa nomi chiari, es. `lettura-maggio-03.jpg` (servono per il testo alternativo) |

## Titolo della sezione (opzionale)

Modifica `gallery/gallery.config.json` per cambiare titolo e sottotitolo in home.

## Non committare

I file in `public/gallery/` sono generati automaticamente: **non** modificarli a mano.
