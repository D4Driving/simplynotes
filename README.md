# SimplyNotes — GitHub Pages Setup Guide

**Tech stack:** Pure HTML · CSS · JavaScript  
**Hosting:** GitHub Pages (free)  
**Monthly cost:** £0  
**Build step:** None — push files and the site is live

---

## STEP 1 — Create a GitHub account

1. Go to **github.com** and sign up for a free account
2. Verify your email address

---

## STEP 2 — Create a repository

1. Click the **+** icon → **New repository**
2. Name it: `simplynotes`
3. Set visibility to **Public** (required for free GitHub Pages)
4. Leave all other settings as default
5. Click **Create repository**

---

## STEP 3 — Upload the site files

1. On your new repo page, click **Add file → Upload files**
2. Drag and drop **all files and folders** from this ZIP
   - Make sure folder structure is preserved (assets/, etc.)
3. Write a commit message: `Initial site upload`
4. Click **Commit changes**

---

## STEP 4 — Enable GitHub Pages

1. In your repo, go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)`
4. Click **Save**

GitHub will give you a URL like `https://d4driving.github.io/simplynotes`  
Your site is now live on that address within about 60 seconds.

---

## STEP 5 — Connect your custom domain (simplynotes.co.uk)

### At GitHub
1. In **Settings → Pages → Custom domain**
2. Enter: `www.simplynotes.co.uk`
3. Click **Save**
4. Tick **Enforce HTTPS** (once it appears — may take a few minutes)

### At Wix (your current domain registrar)
While your Wix site stays live, you'll change the nameservers OR DNS records.

**Option A — Change just the DNS records (keeps Wix as registrar, faster)**

In your Wix domain dashboard → DNS settings, add these records:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| CNAME | www  | d4driving.github.io      |
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |

Replace `d4driving` with your actual GitHub username.

DNS propagation takes **up to 48 hours** but is usually under 2 hours.

**Option B — Transfer domain away from Wix entirely**  
Follow Wix's domain transfer process to move to a registrar like Namecheap (£8-10/year). Then point DNS to GitHub as above. More steps but gives you full control.

---

## STEP 6 — Set up the contact form (Formspree)

The contact page uses [Formspree](https://formspree.io) — free for up to 50 submissions/month.

1. Go to **formspree.io** → Sign up (free)
2. Click **New Form** → name it "SimplyNotes Contact"
3. Copy your **form ID** (looks like `xknbzrjw`)
4. In your repo, open `contact.html`
5. Find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
6. Replace `YOUR_FORMSPREE_ID` with your actual form ID
7. Commit the change — Formspree will now email Joanna on every submission

---

## STEP 7 — Set up MailerLite (free download sign-up)

1. Create free account at **mailerlite.com**
2. Go to **Forms → Create form → Embedded form**
3. Design a simple form (email field only)
4. Click **Embed** → copy the `data-form` value from the embed code
5. In your repo, open `index.html` and `free-downloads.html`
6. Find:
   ```html
   <div class="ml-embedded" data-form="YOUR_MAILERLITE_FORM_UID"></div>
   ```
7. Replace `YOUR_MAILERLITE_FORM_UID` with your actual UID
8. Add the MailerLite universal script just before `</body>` on both pages:
   ```html
   <script>
   (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},
   l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],
   n.parentNode.insertBefore(l,n);})(window,document,'script',
   'https://assets.mailerlite.com/js/universal.js','ml');
   ml('account', 'YOUR_MAILERLITE_ACCOUNT_ID');
   </script>
   ```
9. Set up an **Automation** in MailerLite:
   - Trigger: Subscriber joins group
   - Action: Send email with the 5 PDF download links

---

## STEP 8 — Add Joanna's photos

Replace the placeholder image paths in the HTML with real photos:

| File to create | Used on | Recommended size |
|---|---|---|
| `assets/images/joanna-hero.jpg` | Homepage hero | 520×720px, face near top |
| `assets/images/joanna-about.jpg` | About page | 400×480px |

Upload via GitHub: **Add file → Upload files** in the `assets/images/` folder.

---

## Making changes after launch

Every change follows the same simple process:

1. Open the file in GitHub (click the filename → pencil icon to edit)
2. Make your change
3. Click **Commit changes**
4. GitHub Pages redeploys in about 60 seconds

---

## File structure

```
simplynotes/
├── index.html              Homepage
├── about.html              About Joanna
├── sheet-music.html        Sheet music catalogue
├── music-downloads.html    Audio / Spotify page
├── books.html              Amazon books
├── free-downloads.html     Free pieces + email sign-up
├── contact.html            Contact form (Formspree)
├── 404.html                Not found page
├── CNAME                   Custom domain declaration
├── .nojekyll               Disables Jekyll processing
├── assets/
│   ├── css/
│   │   ├── style.css       Brand styles (Montserrat, navy/red/gold)
│   │   └── pages.css       Inner page styles
│   ├── js/
│   │   ├── components.js   Shared nav + footer (edit once, updates all pages)
│   │   ├── main.js         Mobile nav, scroll reveal
│   │   └── site.js         Free pieces list
│   └── images/             Add Joanna's photos here
└── README.md               This guide
```

---

## When you're ready to add a shop later

When you want to sell PDFs and audio directly on the site, the easiest upgrade path from here is:

- **Gumroad** — upload files, get buy links, paste them into the HTML. Zero code. ~10% fee.
- **Stripe Payment Links** — generate checkout URLs in the Stripe dashboard. 1.5% + 20p. No code.

Both work with pure GitHub Pages and slot into the existing design with minimal changes.
