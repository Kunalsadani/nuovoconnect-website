# replit.md

## Overview

NuovoConnect (formerly NexGenVAS) is a B2B marketing/corporate website for a global digital micropayments platform. The site showcases mobile top-ups, data bundles, gaming pins, utility payments, gift cards, and crypto vouchers. It's a multi-page React application with a contact form that submits inquiries to a PostgreSQL database via an Express API. The brand identity uses a warm orange/amber color palette with the "Outfit" and "Plus Jakarta Sans" font families. Logo font uses Geist Black (weight 900).

**Domain**: www.nuovoconnect.com

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, built with Vite
- **Routing**: Wouter (lightweight client-side router) with pages: Home, Who We Serve (+ sub-pages under /who-we-serve/*), Products, Network, Solutions (formerly About Us), Contact
- **Styling**: Tailwind CSS with CSS variables for theming, using shadcn/ui component library (new-york style)
- **Animations**: Framer Motion for scroll animations and interactive elements
- **Forms**: react-hook-form with Zod validation via @hookform/resolvers
- **Data Fetching**: TanStack React Query for server state management
- **Icons**: Lucide React

The frontend lives in `client/src/`. Path aliases are configured: `@/` maps to `client/src/`, `@shared/` maps to `shared/`.

### Backend
- **Framework**: Express 5 running on Node.js with TypeScript (via tsx)
- **Architecture**: Single `server/routes.ts` file registers API endpoints on the Express app. Storage layer (`server/storage.ts`) abstracts database operations behind an `IStorage` interface.
- **API Design**: A shared route manifest (`shared/routes.ts`) defines API paths, HTTP methods, input schemas, and response schemas using Zod. This keeps frontend and backend in sync.
- **Dev Server**: Vite dev server runs as middleware inside Express during development (`server/vite.ts`), providing HMR. In production, Express serves static built files from `dist/public`.

### Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation from table definitions
- **Schema Location**: `shared/schema.ts` — shared between frontend and backend
- **Current Tables**:
  - `contact_inquiries`: id (serial PK), name (text), email (text), company (text), message (text), createdAt (timestamp)
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)

### Build System
- **Client Build**: Vite builds to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`, with selective dependency bundling (allowlist in `script/build.ts`) to reduce cold start times
- **Scripts**: `npm run dev` for development, `npm run build` for production build, `npm start` to run production, `npm run db:push` to sync schema to database

### Email Notifications
- **Service**: Zoho Mail SMTP (smtp.zoho.com, port 465, SSL)
- **Library**: Nodemailer
- **Config**: `server/email.ts` — sends branded HTML email notifications to kunal@nuovoconnect.com on contact form submission
- **Env Vars**: `ZOHO_EMAIL`, `ZOHO_APP_PASSWORD`, `ZOHO_SMTP_HOST`, `ZOHO_SMTP_PORT`

### GitHub Integration
- **Library**: @octokit/rest via Replit GitHub connector
- **Config**: `server/github.ts` — authenticates via Replit connector OAuth tokens
- **Endpoint**: `POST /api/github/push` — pushes project files to GitHub repository

### Vercel Deployment
- **Config**: `vercel.json` — Vite framework, builds to `dist/public`
- **Serverless Function**: `api/contact.ts` — standalone contact form handler for Vercel
- **External DB**: Neon PostgreSQL (separate from Replit's DB) for Vercel deployment
- **Required Vercel Env Vars**: `DATABASE_URL`, `ZOHO_EMAIL`, `ZOHO_APP_PASSWORD`, `ZOHO_SMTP_HOST`, `ZOHO_SMTP_PORT`

### API Endpoints
- `POST /api/contact` — Validates and stores contact form submissions, sends email notification to kunal@nuovoconnect.com. Accepts `{ name, email, company, message }`. Returns 201 with the created record or 400 with validation errors.
- `POST /api/github/push` — Pushes project files to a GitHub repository. Accepts `{ repoName }`.

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts` — Drizzle table definitions and Zod insert schemas
- `routes.ts` — API route manifest with paths, methods, and validation schemas

## External Dependencies

- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable using `pg` (node-postgres) connection pool
- **Google Fonts** — Outfit, Plus Jakarta Sans, DM Sans, Fira Code, Geist Mono, Architects Daughter loaded via CDN
- **Replit Plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` used in development on Replit
- **connect-pg-simple** — Listed as dependency (session store for PostgreSQL), though session management isn't currently implemented in routes
