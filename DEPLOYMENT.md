# 🚀 Deployment Guide

This guide will help you deploy both the frontend and backend of the Intern Portal project.

## 📋 Prerequisites

- GitHub account
- Render account (for backend)
- Vercel account (for frontend)
- Node.js installed locally

## 🔧 Backend Deployment (Render)

### Step 1: Prepare Backend Repository

1. **Create a new GitHub repository** for the backend:
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial commit: Intern Portal Backend"
   git branch -M main
   git remote add origin https://github.com/yourusername/intern-portal-backend.git
   git push -u origin main
   ```

### Step 2: Deploy to Render

1. **Go to [Render.com](https://render.com)** and sign in with GitHub
2. **Click "New Web Service"** → "Connect a repository"
3. **Select your backend repository**
4. **Configure the service**:
   - **Name**: `intern-portal-backend` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. **Set environment variables** in Render dashboard:
   ```
   NODE_ENV=production
   PORT=3000
   ```
6. **Deploy** - Render will build and deploy automatically

### Step 3: Get Backend URL

1. **Copy the Render deployment URL** (e.g., `https://your-app-name.onrender.com`)
2. **Test the API endpoints**:
   - `https://your-app-name.onrender.com/api/health`
   - `https://your-app-name.onrender.com/api/intern`
   - `https://your-app-name.onrender.com/api/leaderboard`

## 🎨 Frontend Deployment (Vercel)

### Step 1: Prepare Frontend Repository

1. **Create a new GitHub repository** for the frontend:
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial commit: Intern Portal Frontend"
   git branch -M main
   git remote add origin https://github.com/yourusername/intern-portal-frontend.git
   git push -u origin main
   ```

### Step 2: Update API URL

1. **Update the API calls** in the frontend to use your Render URL:
   ```javascript
   // In Dashboard.jsx and Leaderboard.jsx
   const response = await axios.get('https://your-app-name.onrender.com/api/intern')
   ```

2. **Create environment variable** in frontend:
   ```bash
   # frontend/.env
   VITE_API_URL=https://your-app-name.onrender.com
   ```

3. **Update API calls to use environment variable**:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
   const response = await axios.get(`${API_URL}/api/intern`)
   ```

### Step 3: Deploy to Vercel

1. **Go to [Vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "New Project"** → Import your frontend repository
3. **Configure project settings**:
   - Framework Preset: Vite
   - Root Directory: `./frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Set environment variables**:
   ```
   VITE_API_URL=https://your-app-name.onrender.com
   ```
5. **Deploy** - Vercel will build and deploy automatically

## 🔗 Connect Frontend to Backend

### Update CORS Settings

1. **Update backend CORS** to allow your Vercel domain:
   ```javascript
   // In backend/server.js
   app.use(cors({
     origin: process.env.NODE_ENV === 'production' 
       ? ['https://your-frontend-domain.vercel.app'] 
       : ['http://localhost:5173', 'http://localhost:3000'],
     credentials: true
   }));
   ```

2. **Redeploy backend** after making changes

## 🧪 Testing Deployment

### Backend Testing

```bash
# Test health endpoint
curl https://your-app-name.onrender.com/api/health

# Test intern data
curl https://your-app-name.onrender.com/api/intern

# Test leaderboard
curl https://your-app-name.onrender.com/api/leaderboard
```

### Frontend Testing

1. **Visit your Vercel URL**
2. **Test all pages**:
   - `/login` - Should show login form
   - `/signup` - Should show signup form
   - `/dashboard` - Should load data from backend
   - `/leaderboard` - Should show leaderboard data

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Ensure backend CORS includes your Vercel domain
   - Check that environment variables are set correctly

2. **API Connection Issues**:
   - Verify Render URL is correct
   - Check that backend is running and accessible
   - Test API endpoints directly

3. **Build Failures**:
   - Check that all dependencies are in package.json
   - Verify Node.js version compatibility
   - Check build logs in deployment platform

### Environment Variables Checklist

**Backend (Render)**:
- [ ] `NODE_ENV=production`
- [ ] `PORT=3000`

**Frontend (Vercel)**:
- [ ] `VITE_API_URL=https://your-app-name.onrender.com`

## 📊 Monitoring

### Render Monitoring
- Check Render dashboard for logs
- Monitor resource usage
- Set up alerts for downtime

### Vercel Monitoring
- Check Vercel dashboard for build status
- Monitor performance metrics
- Set up custom domains if needed

## 🔄 Continuous Deployment

Both Render and Vercel support automatic deployments:
- **Push to main branch** → Automatic deployment
- **Pull requests** → Preview deployments (Vercel)
- **Environment variables** → Automatically available

## 🎯 Final Checklist

- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] API endpoints working
- [ ] CORS configured correctly
- [ ] Environment variables set
- [ ] All pages loading correctly
- [ ] Data fetching from backend
- [ ] Mobile responsiveness working
- [ ] Performance optimized

## 📞 Support

If you encounter issues:
1. Check the deployment platform logs
2. Verify environment variables
3. Test API endpoints directly
4. Check browser console for errors
5. Review this guide for common solutions 