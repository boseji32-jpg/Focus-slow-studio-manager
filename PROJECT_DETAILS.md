# FocusFlow Studio Manager - Project Documentation

## 1. Project Overview
**FocusFlow Studio** is a premium, full-stack web application designed for creative studios and production houses in India. It serves as an specialized Operating System (OS) for booking management, equipment tracking, and financial invoicing.

The application has been modernized with a **"Lite Violet"** aesthetic, featuring clean flat design, glassmorphism elements, and a high-performance full-width layout.

## 2. Technology Stack
*   **Framework:** Next.js 14 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Library:** Shadcn/UI (Radix Primitives)
*   **State/Data:** React Hooks, Server Actions
*   **Authentication:** NextAuth.js v4
*   **Charts:** Recharts
*   **Animiations:** Framer Motion
*   **Icons:** Lucide React
*   **Theme Management:** next-themes (Light/Dark/System)
*   **Database:** SQLite (via Prisma/Direct SQL per configuration)

## 3. Key Features
### 🔐 Authentication & Security
*   **NextAuth Integration:** Secure sign-in (`/login`) and sign-up (`/signup`) flows.
*   **Protected Routes:** Middleware protection for `/dashboard`, `/settings`, `/equipment`, etc.
*   **Session Management:** Persistent user sessions.

### 📊 Dashboard (Studio OS)
*   **Performance:** Lazy-loaded charts to ensure instant page loads.
*   **Metrics:** Real-time visual cards for Revenue, Sessions, and Equipment usage.
*   **Widgets:**
    *   **TimerWidget:** Precision stopwatch for studio session tracking.
    *   **CostCalculator:** Rapid estimation tool for booking costs.

### 🎨 Design & UX
*   **Full-Width Ambience:** All pages utilize 100% screen real estate (`w-full`) for a professional, dashboard-like feel.
*   **Theme Switching:** Seamless Day/Night mode toggle with persistent state.
*   **Modern Aesthetic:** "Light Violet" brand color (`#8b5cf6`), consistent rounded corners (`rounded-xl`), and subtle glass effects.

### 🛠️ Core Modules
*   **Equipment Catalog:** Filterable inventory system for Cameras, Lighting, and Audio gear.
*   **Pricing:** Tiered pricing display with INR currency support.
*   **History:** Tabular view of past sessions with invoice generation status.
*   **Settings:** Comprehensive configuration for Profile, Regional (Timezone/Currency), and System preferences.
*   **Contact & About:** Informational pages with integrated forms and maps.

## 4. Project Structure
```
focus-flow-studio/
├── app/
│   ├── (auth)/             # Login/Signup routes
│   ├── (protected)/        # Dashboard & App routes (Layout with Sidebar)
│   │   ├── dashboard/      # Main Analytics View
│   │   ├── equipment/      # Gear Inventory
│   │   ├── history/        # Booking History
│   │   └── settings/       # User Preferences
│   ├── (site)/             # Marketing routes (Landing, About, Pricing)
│   ├── api/auth/           # NextAuth Endpoints
│   ├── globals.css         # Global Styles & Theme Variables
│   └── layout.tsx          # Root Layout (Providers)
├── components/
│   ├── dashboard/          # Dashboard-specific widgets (Charts, Sidebar)
│   ├── ui/                 # Reusable UI components (Buttons, Cards, Inputs)
│   ├── landing-page.tsx    # Main Marketing Page
│   ├── mode-toggle.tsx     # Theme Switcher
│   ├── navbar.tsx          # Global Navigation
│   └── providers.tsx       # Context Providers (Theme, Auth)
└── public/                 # Static Assets
```

## 5. Master Prompt / Specification
*The following is the conceptual "Prompt" that defines the current state of the application. function as a requirement document.*

---

### **Application Name:** FocusFlow Studio Manager
### **Objective:**
Build a high-performance, aesthetically pleasing web application for managing rental studios. The app must bridge the gap between a marketing website and a professional SaaS dashboard.

### **Design Requirements:**
1.  **Architecture:** Use **Full-Width Layouts** only. No boxed containers (80% width). Content should breathe and stretch across the screen with `px-12` padding.
2.  **Theme:**
    *   **Primary Color:** Violet (`#8b5cf6`).
    *   **Style:** Clean, flat, modern. Avoid heavy diagonal skews or excessive 3D transforms.
    *   **Dark Mode:** Deep nice backgrounds (`#0a0a0a`) with violet accents.
    *   **Cards:** Use a custom `modern-card` utility: standard border, subtle hover lift, clean white/gray backgrounds.
3.  **Responsiveness:** Mobile-first, but optimized for desktop dashboards.

### **Functional Requirements:**
1.  **Landing Page:** A convincing SaaS landing page with Hero, Stats, Features, and CTA.
2.  **Auth:** Standard Email/Password flow.
3.  **Dashboard:**
    *   Must load instantly (under 1s).
    *   Include a functional Timer Widget.
    *   Include a Cost Estimator.
    *   Show visual charts for "Monthly Revenue" and "Session Traffic".
4.  **Equipment Page:** A visual grid of gear with filtering (Cameras, Audio, Lighting).
5.  **Settings:** Detailed form for user profile and app preferences (Currency, Language).

### **Specific Customizations:**
*   **Currency:** Default to INR (₹) for the Indian market context.
*   **Locations:** References to "Dindigul, Tamil Nadu" in About/Contact pages.
*   **Navigation:** Top sticky navbar with Pill-shaped links and a Theme Toggle.

---

## 6. Setup Instructions

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    npm start
    ```
