# Beds 4 Less

> Company website for [nolabeds.com](https://www.nolabeds.com) — a family-owned mattress retailer serving New Orleans, Kenner, Metairie, and Jefferson Parish.

---

## Desktop/Mobile Preview
### Click image below to view video

[![desktop and mobile video](/public/readMe/1.png)](https://youtu.be/lECg73mmMkA)

### nolabeds.com/review

* A secret page to let customers write reviews and share the website with friends.

![desktop and mobile video](/public/readMe/review.jpg)

---

## Tech Stack

| Layer    | Technologies                                                  |
| -------- | ------------------------------------------------------------- |
| Frontend | React 17, React Router DOM 5, CSS Modules, SweetAlert2       |
| Backend  | Node.js, Express 4, Nodemailer (SendGrid), Helmet, Morgan    |
| Testing  | Jest, React Testing Library                                   |
| SEO      | JSON-LD structured data, Open Graph, Twitter Cards, Sitemap   |
| Analytics| Google Analytics (gtag.js)                                    |

---

## Project Structure

```
b4l/
├── public/              # Static assets, images, SEO files, manifest
├── src/
│   ├── Aux/             # Business info & tracking IDs (gitignored)
│   ├── BodyText/        # Page copy (about, sos, shopping guide, yelp)
│   ├── Contact/         # Contact page & components (form, hours, map)
│   ├── Faq/             # FAQ pages (about, shop, sos)
│   ├── Functions/       # Utility helpers (map selector, time utils)
│   ├── Home/            # Homepage & components (Yelp reviews, snap grid)
│   ├── Layout/          # Shared layout (header, footer, modal, popup)
│   ├── Reviews/         # Customer reviews page
│   ├── App.js           # Root component & route definitions
│   └── index.js         # Entry point
├── backend/
│   ├── routes/
│   │   └── personalData.js   # Contact form email handler
│   ├── index.js              # Express server entry point
│   └── package.json
├── .env                 # Root env config (gitignored values vary)
├── .gitignore
├── package.json
└── README.md
```

---

## Routes

| Path       | Page          | Description                        |
| ---------- | ------------- | ---------------------------------- |
| `/`        | Home          | Landing page with Yelp reviews     |
| `/about`   | About         | Company information                |
| `/shop`    | Shopping Guide| Mattress shopping tips             |
| `/sos`     | SOS           | Support / help page                |
| `/contact` | Contact       | Contact form, hours, and map       |
| `/review`  | Reviews       | Customer review & social share page|

### Backend API

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| POST   | `/personaldata` | Contact form — forwards via email  |
| GET    | `/health`       | Health-check for uptime monitoring |

---

## Getting Started

### Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0

### Installation

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install
```

### Running Locally

```bash
# Start the React dev server (from project root)
npm start

# Start the backend server (from /backend)
cd backend && npm run dev
```

The frontend runs on `http://localhost:3000` and the backend on `http://localhost:2000` by default.

---

## Environment Variables

### Root `.env`

```
SKIP_PREFLIGHT_CHECK=true
```

### Backend `.env`

The backend requires its own `.env` file inside the `/backend` directory with credentials for email delivery (SendGrid/Nodemailer) and CORS configuration. Required variables include:

| Variable      | Description                              |
| ------------- | ---------------------------------------- |
| `PORT`        | Server port (default: `2000`)            |
| `CORS_ORIGIN` | Allowed origin (default: `http://localhost:3000`) |
| `NODE_ENV`    | `development` or `production`            |
| *(email)*     | SendGrid / SMTP credentials for Nodemailer |

---

## `.gitignore` Reference

The project uses two `.gitignore` files to keep secrets and build artifacts out of version control.

### Root `.gitignore`

| Entry                          | Purpose                                      |
| ------------------------------ | -------------------------------------------- |
| `/node_modules`                | Frontend dependencies                        |
| `/backend/node_modules`        | Backend dependencies                         |
| `/.pnp` / `.pnp.js`           | Plug'n'Play files (Yarn)                     |
| `/src/Aux`                     | Business info & tracking IDs (sensitive)     |
| `/backend/routes/apiKey.js`    | API keys / secrets                           |
| `/coverage`                    | Test coverage reports                        |
| `/build`                       | Production build output                      |
| `.DS_Store`                    | macOS finder metadata                        |
| `.env.local` / `.env.*.local`  | Local environment overrides                  |
| `npm-debug.log*`              | npm debug logs                               |
| `yarn-debug.log*` / `yarn-error.log*` | Yarn debug/error logs               |

### Backend `.gitignore` (`/backend/.gitignore`)

| Entry          | Purpose                        |
| -------------- | ------------------------------ |
| `node_modules/`| Backend dependencies           |
| `.env`         | Backend secrets & credentials  |
| `.DS_Store`    | macOS finder metadata          |

> **Note:** If you clone this repo, you will need to create `/src/Aux/businessInfo.js`, `/src/Aux/trackingIDs.js`, `/backend/routes/apiKey.js`, and `/backend/.env` manually — these files contain sensitive data and are not tracked in git.

---

## Instructions to Get Gmail Password for Nodemailer (backend dependency)

 Gmail Setup: You can use it with Gmail, but there's one important requirement — Google no longer allows "less secure app" access, so you need to use an App Password:

  1. Enable 2-Step Verification on your Google account
  2. Go to your Google Account > Security > App Passwords (or go to https://myaccount.google.com/apppasswords and generate one for "Mail")
  3. Generate an app password for "Mail"
  4. Use that 16-character password in your Nodemailer config (not your regular Gmail password)

  Gmail Limits: A free Gmail account lets you send ~500 emails/day.

  ---

## Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm start`       | Start React dev server             |
| `npm run build`   | Create optimized production build  |
| `npm test`        | Run tests with Jest                |
| `npm run lint`    | Lint source files with ESLint      |
| `npm run lint:fix`| Auto-fix lint issues               |
| `npm run analyze` | Analyze bundle with source-map-explorer |

