# 🚀 Quick Render Deployment Guide

## Backend Deployment Steps

### 1. Push Backend to GitHub
```bash
cd backend
git init
git add .
git commit -m "Initial commit: Intern Portal Backend for Render"
git branch -M main
git remote add origin https://github.com/yourusername/intern-portal-backend.git
git push -u origin main
```

### 2. Deploy to Render
1. Go to [Render.com](https://render.com)
2. Sign in with GitHub
3. Click **"New Web Service"**
4. Connect your backend repository
5. Configure settings:
   - **Name**: `intern-portal-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. Set Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `3000`
7. Click **"Create Web Service"**

### 3. Get Your Render URL
- Copy the deployment URL (e.g., `https://your-app-name.onrender.com`)
- Test the endpoints:
  - `https://your-app-name.onrender.com/api/health`
  - `https://your-app-name.onrender.com/api/intern`

### 4. Update Frontend
1. Update your frontend environment variable:
   ```env
   VITE_API_URL=https://your-app-name.onrender.com
   ```
2. Redeploy frontend to Vercel

## ✅ Verification Checklist
- [ ] Backend deployed to Render
- [ ] API endpoints responding
- [ ] Frontend updated with new API URL
- [ ] Data loading correctly on dashboard
- [ ] CORS working properly

## 🔧 Troubleshooting
- **Cold Start**: Render free tier has cold starts (first request may be slow)
- **CORS Issues**: Ensure your Vercel domain is allowed in backend CORS settings
- **Environment Variables**: Double-check all variables are set correctly in Render dashboard 