# 🤖 Consicio

Consicio is a modern, responsive web application focused on enhancing productivity and collaboration through seamless task management and streamlined workflows. Built using cutting-edge web technologies, Consicio delivers a clean user experience optimized for both desktop and mobile users.

## 🚀 Features

- **✨ AI-powered** – Text summarization for efficient content digestion
- **⚡ Clerk** – Authentication system (Login, Sign Up)
- **🛠️ Personal Dashboard** – Personal dashboard to check out summaries and moderate content
- **📄 SSR** – Dynamic pages with server-side rendering (SSR)
- **📱Easy Accessibility** – Fully responsive across mobile, tablet, and desktop devices

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend:** TypeScript, Zod (via API routes)
- **Database:** UploadThing, NeonDB
- **Styling:** Tailwind CSS, ShadcnUI
- **Authentication & Security:** Clerk
- **AI and Parsing:** LangChain, OpenAI, Gemini

## 📂 Folder Structure

```bash
Directory structure:
└── fudailzafar-consicio/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── LICENSE
    ├── middleware.ts
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── schema.sql
    ├── tsconfig.json
    ├── .example.env.local
    ├── actions/
    │   ├── summary-actions.ts
    │   └── upload-actions.ts
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── manifest.ts
    │   ├── not-found.tsx
    │   ├── page.tsx
    │   ├── (logged-in)/
    │   │   ├── dashboard/
    │   │   │   ├── loading.tsx
    │   │   │   └── page.tsx
    │   │   ├── summaries/
    │   │   │   └── [id]/
    │   │   │       ├── loading.tsx
    │   │   │       └── page.tsx
    │   │   └── upload/
    │   │       └── page.tsx
    │   ├── [...not-found]/
    │   │   └── page.tsx
    │   ├── api/
    │   │   └── uploadthing/
    │   │       ├── core.ts
    │   │       └── route.ts
    │   ├── sign-in/
    │   │   └── [[...sign-in]]/
    │   │       └── page.tsx
    │   └── sign-up/
    │       └── [[...sign-up]]/
    │           └── page.tsx
    ├── components/
    │   ├── common/
    │   │   ├── bg-gradient.tsx
    │   │   ├── footer.jsx
    │   │   ├── header.tsx
    │   │   ├── motion-wrapper.tsx
    │   │   ├── nav-link.tsx
    │   │   ├── plan-badge.tsx
    │   │   └── upgrade-required.tsx
    │   ├── home/
    │   │   ├── cta-section.tsx
    │   │   ├── demo-section.tsx
    │   │   ├── hero-section.tsx
    │   │   ├── how-it-works-section.tsx
    │   │   ├── how-it-works.tsx
    │   │   ├── pricing-section.tsx
    │   │   └── TiltChipLinkExample.jsx
    │   ├── summaries/
    │   │   ├── content-section.tsx
    │   │   ├── delete-button.tsx
    │   │   ├── download-summary-button.tsx
    │   │   ├── empty-summary-state.tsx
    │   │   ├── navigation-controls.tsx
    │   │   ├── progress-bar.tsx
    │   │   ├── source-info.tsx
    │   │   ├── summary-card.tsx
    │   │   ├── summary-header.tsx
    │   │   └── summary-viewer.tsx
    │   ├── ui/
    │   │   ├── badge.tsx
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── dialog.tsx
    │   │   ├── input.tsx
    │   │   ├── skeleton.tsx
    │   │   └── sonner.tsx
    │   └── upload/
    │       ├── loading-skeleton.tsx
    │       ├── upload-form-input.tsx
    │       ├── upload-form.tsx
    │       └── upload-header.tsx
    ├── lib/
    │   ├── db.ts
    │   ├── gemini-ai.ts
    │   ├── geminiai.ts
    │   ├── langchain.ts
    │   ├── openai.ts
    │   ├── payments.ts
    │   ├── summaries.ts
    │   ├── user.ts
    │   └── utils.ts
    ├── public/
    │   ├── robots.txt
    │   └── sitemap.xml
    └── utils/
        ├── constants.ts
        ├── format-utils.ts
        ├── helpers.ts
        ├── prompts.ts
        ├── summary-helper.ts
        ├── summary-helpers.ts
        └── uploadthing.ts
```

## 💻 Getting Started

### Prerequisites

Make sure you have:

- **Node.js v14 or later**
- **npm or yarn**

### Installation

Clone the repository:

```bash
git clone https://github.com/fudailzafar/consicio.git
cd consicio
```

Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### Environment Setup

1. Copy the example environment file:

```bash
cp .env.example .env.local
```

2. Fill in the required environment variables in `.env.local`:

```bash
# Authentication (Clerk)
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"

# Database
DATABASE_URL="your_database_connection_string"

# AI Services
GEMINI_API_KEY="your_gemini_api_key"
OPENAI_API_KEY="your_openai_api_key"

# File Upload
UPLOADTHING_TOKEN="your_uploadthing_token"
```

3. Get your environment variables:
   - **Clerk**: Sign up at [clerk.com](https://clerk.com) and get your keys from the dashboard
   - **Database**: Set up a PostgreSQL database (Neon, Supabase, or similar)
   - **Gemini**: Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - **OpenAI**: Get API key from [OpenAI Platform](https://platform.openai.com/api-keys)
   - **UploadThing**: Sign up at [uploadthing.com](https://uploadthing.com) and get your token

Run the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Visit `http://localhost:3000` in your browser.

## 📦 Deployment

To build the project for production:

```bash
npm run build
```

This generates a `build/` folder with optimized static files, ready for deployment.

## 📜 License

This project is licensed under the **MIT License**.

---

**📢 Contributions are welcome!** Feel free to fork this repository, submit issues, or open pull requests. 🚀
