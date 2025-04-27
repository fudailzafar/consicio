# 🤖 Consicio  

Consicio is a modern, responsive web application focused on enhancing productivity and collaboration through seamless task management and streamlined workflows. Built using cutting-edge web technologies, Consicio delivers a clean user experience optimized for both desktop and mobile users. 

## 🚀 Features   

- **✨ AI-powered** – Text summarization for efficient content digestion
- **⚡ Clerk** – Authentication system (Login, Sign Up)
- **🛠️ Personal Dashboard** – Personal dashboard to check out summaries and moderate content
- **📄 SSR** – Dynamic pages with server-side rendering (SSR)
- **📱Easy Accessibility** – Fully responsive across mobile, tablet, and desktop devices

## 🛠️ Tech Stack  

- **Frontend:** Next.js (App Router), React.js  
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
    ├── middleware.ts
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── schema.sql
    ├── tsconfig.json
    ├── actions/
    │   ├── summary-actions.ts
    │   └── upload-actions.ts
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── (logged-in)/
    │   │   ├── dashboard/
    │   │   │   └── page.tsx
    │   │   ├── summaries/
    │   │   │   └── [id]/
    │   │   │       └── page.tsx
    │   │   └── upload/
    │   │       └── page.tsx
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
    │   │   ├── footer.tsx
    │   │   ├── header.tsx
    │   │   ├── motion-wrapper.tsx
    │   │   └── nav-link.tsx
    │   ├── home/
    │   │   ├── cta-section.tsx
    │   │   ├── demo-section.tsx
    │   │   ├── hero-section.tsx
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
    │   │   └── sonner.tsx
    │   └── upload/
    │       ├── upload-form-input.tsx
    │       ├── upload-form.tsx
    │       └── upload-header.tsx
    ├── lib/
    │   ├── db.ts
    │   ├── geminiai.ts
    │   ├── langchain.ts
    │   ├── openai.ts
    │   ├── summaries.ts
    │   └── utils.ts
    ├── public/
    └── utils/
        ├── constants.ts
        ├── format-utils.ts
        ├── prompts.ts
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

Run the development server:  
```bash
npm start
```
or  
```bash
yarn start
```
Visit `http://localhost:3000` in your browser.

## 📦 Deployment  

To build the project for production:  
```bash
npm run build
```
This generates a `build/` folder with optimized static files, ready for deployment.  

## 🎯 Performance Scores  

✅ **Desktop:** **Performance (98), Accessibility (87), Best Practices (100), SEO (91)**  
✅ **Mobile:** **Performance (92), Accessibility (86), Best Practices (96), SEO (91)**  

## 📜 License  

This project is licensed under the **MIT License**.

---

**📢 Contributions are welcome!** Feel free to fork this repository, submit issues, or open pull requests. 🚀  
