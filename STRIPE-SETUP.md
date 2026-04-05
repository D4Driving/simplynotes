# SimplyNotes — Stripe Payment Links Setup Guide

## How it works

1. PDFs live in your GitHub repo at `simplynotes.co.uk/assets/pdfs/filename.pdf`
2. Each product has a Stripe Payment Link (`https://buy.stripe.com/xxxxx`)
3. Customer clicks "Buy PDF →" → Stripe checkout → pays → sees confirmation page
4. Confirmation page shows a direct download button for their PDF
5. Done — no email, no manual work

---

## STEP 1 — Upload your PDFs to GitHub

In your GitHub repo, go to `assets/` → **Add file → Upload files**

Upload each PDF with these exact filenames:

| Product | Filename |
|---|---|
| My Favourite Piano Adventures Book 1 | `my-favourite-piano-adventures-bk1.pdf` |
| My Favourite Piano Adventures Book 2 | `my-favourite-piano-adventures-bk2.pdf` |
| Rhythm Explorers Book 1 | `rhythm-explorers-bk1.pdf` |
| Piano Fun with Philip the Cat Book 1 | `piano-fun-philip-cat-bk1.pdf` |
| My First Book of Sight Reading | `my-first-sight-reading.pdf` |
| My First Quavers | `my-first-quavers.pdf` |
| My First Exercises in Eurythmics | `my-first-exercises-eurythmics.pdf` |
| Nursery Songs on Glockenspiel | `nursery-songs-glockenspiel.pdf` |

Once uploaded, each PDF is publicly accessible at:
`https://www.simplynotes.co.uk/assets/pdfs/FILENAME.pdf`

Test one in your browser before continuing.

---

## STEP 2 — Create a Payment Link in Stripe

Repeat this for every product (8 total).

1. Log into **dashboard.stripe.com**
2. In the left menu click **Payment Links → + New**
3. Click **+ Add a product**
4. Click **+ Create new product**
5. Fill in:
   - **Name:** e.g. `My Favourite Piano Adventures Book 1 — PDF`
   - **Price:** `3.20` · Currency: `GBP`
   - **Description** (optional): `Instant PDF download — SimplyNotes by Joanna Bernat`
6. Click **Add product**

---

## STEP 3 — Set the after-payment confirmation page

This is the key step — what the customer sees after paying.

1. Still on the Payment Link creation page, scroll down to **After payment**
2. Select **Show confirmation page**
3. Click **Customise page**
4. In the **Custom message** box, enter something like:

   ```
   Thank you for your purchase! Click the button below to download your PDF.
   ```

5. Under **Call to action**, enter:
   - **Button text:** `Download PDF`
   - **Button URL:** `https://www.simplynotes.co.uk/assets/pdfs/my-favourite-piano-adventures-bk1.pdf`
   *(change the filename for each product)*

6. Click **Done**

---

## STEP 4 — Copy the Payment Link URL

1. Click **Create link**
2. Copy the URL — it looks like `https://buy.stripe.com/aBcDeFgH`

---

## STEP 5 — Paste the link into sheet-music.html

In your GitHub repo, open `sheet-music.html` and find the product card.
Each card has a buy button like this:

```html
<a href="https://buy.stripe.com/REPLACE_WITH_YOUR_STRIPE_LINK"
   class="btn btn-red" ...>Buy PDF →</a>
```

Replace `REPLACE_WITH_YOUR_STRIPE_LINK` with your actual link, e.g.:

```html
<a href="https://buy.stripe.com/aBcDeFgH"
   class="btn btn-red" ...>Buy PDF →</a>
```

Repeat for all 8 products, then commit.

---

## STEP 6 — Test it

1. In Stripe, switch to **Test mode** (toggle at top of dashboard)
2. Create a test Payment Link using the same steps above
3. Click your test buy button on the site
4. Use test card: `4242 4242 4242 4242` · any expiry · any CVC
5. Confirm the PDF download link appears on the confirmation page
6. Switch Stripe back to **Live mode** when happy

---

## Notes

- **PDF security:** The PDF URLs are technically public on GitHub Pages. Anyone who knows
  the URL can access the file directly without paying. For a small music site this is an
  acceptable trade-off. If you want proper protection later, move to Netlify + serverless
  functions which generate time-limited signed URLs.

- **VAT:** If you're VAT-registered, enable tax collection in Stripe:
  Dashboard → Settings → Tax → Enable automatic tax calculation

- **Refunds:** Process refunds directly in the Stripe dashboard under Payments.

- **Updating a price:** Edit the product in Stripe → Products. You'll need to create a
  new Payment Link if you change the price (old links keep the old price).
