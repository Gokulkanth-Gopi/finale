<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f2012dc2-130b-489e-9619-95879b00a454

## Run Locally

**Prerequisites:** Node.js (recommended LTS)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` from `.env.example` and set your secrets:

   ```bash
   cp .env.example .env.local
   # edit .env.local and add your GEMINI_API_KEY
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   npm run start
   ```

Notes:
- This project uses the Next.js App Router (the `app/` directory).
- Tailwind CSS configuration is in `tailwind.config.cjs`.
