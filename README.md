**CodeConnect**
---

# 🔐 Environment — `.env` examples

## Backend (`/backend/.env`)

```bash
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

## Frontend (`/frontend/.env`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

> Keep secrets safe. Use your host's secrets manager for production.

---

# ▶️ Local development (quick start)

## Backend

```bash
cd backend
npm install
# create .env from example
npm run dev
```

The backend runs on `http://localhost:3000` by default (see .env).

## Frontend

```bash
cd frontend
npm install
# create .env from example
npm run dev
```

The frontend runs on `http://localhost:5173` by default (Vite).

---


**Q:** Where to change the NeonMatrix theme?
**A:** `frontend/src/styles/theme-neonmatrix.*` — contains color tokens, Tailwind config overrides and global CSS.
