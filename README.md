# Byte Space

An innovative, industry-grade **Next.js 16** platform tailored for scalable business logic and seamless user experience.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · React Hook Form + Zod · next-themes

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Setup environment variables (copy the example and edit)
cp .env.example .env.local

# Run development server
pnpm dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

### Available Scripts

| Script              | What it does                      |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Start the dev server (Turbopack)  |
| `pnpm build`        | Production build                  |
| `pnpm start`        | Run the production build          |
| `pnpm lint`         | Run ESLint                        |
| `pnpm typecheck`    | Type-check with `tsc --noEmit`    |
| `pnpm format`       | Format the codebase with Prettier |
| `pnpm format:check` | Check formatting without writing  |

### Environment Variables

All client-side variables must be prefixed with `NEXT_PUBLIC_`. They are validated at runtime with Zod in `src/lib/env.ts` — the application will refuse to start if any required variables are missing or invalid.

| Variable                 | Description             |
| ------------------------ | ----------------------- |
| `NEXT_PUBLIC_API_URL`    | REST API base URL       |

*(Note: `NEXT_PUBLIC_APP_NAME` is no longer required as the name is handled within the site config.)*

---

## 🏗 Architecture at a Glance

Byte Space follows a **feature-based (modular) architecture**. This keeps the application highly scalable and maintainable:

1. **`app/` is for routing only** — business logic lives exclusively in `features/`.
2. **Colocation** — everything a feature needs (UI, hooks, state, API, types) lives inside that feature's folder.
3. **Public API via barrels** — each feature exposes only what it wants through its `index.ts`; you should import features through this barrel rather than deep-linking into internal files.

> **Dependency Direction:** `app/` → `features/` → `lib/` + `store/` + `components/ui`. Lower layers never import from higher layers.

---

## 📂 Folder Structure

```
byte_space/
├── src/
│   ├── app/            # Routing layer (Next.js App Router)
│   ├── components/     # Shared UI components used across multiple features
│   ├── features/       # Self-contained business modules (The core logic)
│   ├── store/          # Global Redux store wiring and middleware
│   ├── lib/            # Framework-agnostic core (API client, socket, utilities)
│   ├── hooks/          # Generic, reusable React hooks
│   ├── config/         # Static configuration (e.g. metadata, navigation)
│   └── types/          # Global shared TypeScript definitions
├── proxy.ts            # Edge/Node request handling (middleware logic)
└── components.json     # shadcn/ui configuration
```

### `src/features/` — Business Modules (Core Logic)

Each feature is a vertical slice that owns its entire stack. 

| Sub-folder    | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `components/` | Feature-specific React components                    |
| `hooks/`      | Encapsulated feature logic (e.g., `useAuth`)         |
| `api/`        | RTK Query endpoints (colocated data layer)           |
| `store/`      | Redux slices for local client state                  |
| `schemas/`    | Zod schemas for form validation and typed data       |
| `types/`      | Feature-specific TypeScript models                   |
| `index.ts`    | **Barrel File** - The module's public API            |

**Adding a new feature:**
1. Create `src/features/<name>/` and populate the necessary sub-directories.
2. Register its Redux slice in `src/store/root-reducer.ts`.
3. Add RTK Query endpoints via `apiSlice.injectEndpoints`.
4. Export the public surface via `src/features/<name>/index.ts`.

---

## 🔒 Session Persistence & Auth

Tokens are **never stored in `localStorage`** to prevent XSS vulnerabilities.

- The **access token** is kept only in Redux memory.
- The **refresh token** is stored in an `httpOnly` cookie set by the backend.
- Upon app launch, the `AuthProvider` verifies the session. If the token is missing or expired, a silent refresh is triggered using the `httpOnly` cookie to restore the session securely.

## 🚨 Error Handling

| Layer             | Mechanism                                                             |
| ----------------- | --------------------------------------------------------------------- |
| Route Errors      | `src/app/error.tsx` (Per-segment error boundaries)                    |
| Root Crashes      | `src/app/global-error.tsx`                                            |
| 404 Not Found     | `src/app/not-found.tsx`                                               |
| API Errors        | Parsed via `getApiErrorMessage()` in `src/lib/api/error.ts` -> Toasts |

---

## 💡 Development Conventions

- **Imports:** Use the `@/` alias for `src/` directory imports.
- **Server Components:** Components are Server Components by default. Add `"use client"` only when hooks, state, or DOM APIs are strictly necessary.
- **Data Fetching:** Handled consistently through **RTK Query** (do not use raw `fetch` in components).
- **Styling:** Tailwind CSS + shadcn/ui. Ensure `pnpm format` is run before committing to maintain class ordering and consistent styles.
