# Deployment Guide for Vercel

This guide helps you deploy the **Frontend Documentation & Landing Page** (`aba-payway-docs`) to Vercel.

---

## 1. Project Overview

| Project | Repo Name | Type | Deploy Target |
| :--- | :--- | :--- | :--- |
| **Frontend** | `rithsila/aba-payway-docs` | Next.js 15 + Fumadocs | Vercel |
| **Backend / SDK** | `rithsila/aba-payway-unofficial` | Node.js TypeScript SDK | npm / GitHub |

---

## 2. Deploy Frontend to Vercel

### Option A: Deploy with Vercel Web Dashboard (Fastest)

1. Open [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account.
3. Select the repository: **`rithsila/aba-payway-docs`**.
4. Configure Project Settings:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Click **Deploy**.

---

### Option B: Deploy with Vercel CLI

Run these commands in terminal:

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to production
vercel --prod
```

---

## 3. Verify Deployment

After deploy finishes:
1. Open your Vercel URL (e.g. `https://aba-payway-docs.vercel.app`).
2. Test the following routes:
   - Landing page: `/`
   - Documentation: `/docs`
   - Code preview tabs: Check status, KHQR generation, Webhook samples.

---

## 4. How Backend SDK Links with Frontend

- The frontend landing page links directly to GitHub: `https://github.com/rithsila/aba-payway-unofficial`.
- Users can install the backend SDK via:
  ```bash
  npm install aba-payway-sdk-unofficial
  ```
- To update repository links or author names, edit `lib/shared.ts`.
