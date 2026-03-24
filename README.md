# Drivin Guru — Next.js Website

Built with Next.js 14, React, and Tailwind CSS.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Import the repo in Vercel
3. Vercel will auto-detect Next.js and deploy

## Pages

- `/` — Main landing page
- `/instructors` — Instructor recruitment
- `/terms` — Terms & conditions

## Project Structure

```
app/
  layout.js          # Root layout + metadata
  page.js            # Home page
  globals.css        # Global styles
  instructors/
    page.js          # Instructor recruitment page
  terms/
    page.js          # Terms & conditions
components/
  Nav.js             # Navigation (mobile responsive)
  Footer.js          # Footer
  DGMark.js          # DG logo SVG component
  Marquee.js         # Scrolling ticker
```
