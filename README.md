<<<<<<< HEAD
# 🧠 Intern Portal 2025

A full-stack web application for managing intern information, donations tracking, and leaderboards.

## 🚀 Project Structure

```
InternPortal/
├── frontend/          # React.js frontend application
├── backend/           # Node.js + Express backend API
└── README.md         # This file
```

## 🛠 Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Deployment**: Vercel

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **CORS**: Enabled for cross-origin requests
- **Deployment**: Render

## 📋 Features

- **Authentication Pages**: Login and Signup UI (mockup)
- **Dashboard**: Display intern information, referral code, and donations
- **Leaderboard**: Static leaderboard showing top interns
- **Rewards System**: Visual representation of unlockable rewards
- **Responsive Design**: Mobile-friendly interface

## 🚀 Quick Start

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The backend will be running at `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will be running at `http://localhost:5173`

## 📡 API Endpoints

### GET /api/intern
Returns intern information including name, referral code, and total donations.

**Response:**
```json
{
  "name": "Vishwa Vikas",
  "referralCode": "vishwavy2025",
  "donations": 7400
}
```

## 🎨 Pages

1. **/login** - Authentication login page (UI only)
2. **/signup** - User registration page (UI only)
3. **/dashboard** - Main dashboard with intern stats and rewards
4. **/leaderboard** - Static leaderboard of top interns

## 🚀 Deployment

### Backend (Render)
- Repository: [Backend GitHub Repo]
- Live URL: [Render Deployment URL]

### Frontend (Vercel)
- Repository: [Frontend GitHub Repo]
- Live URL: [Vercel Deployment URL]

## 📝 Environment Variables

### Backend (.env)
```
PORT=3000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for Intern Portal 2025** 
=======
�� QUICK FIXES
1. Backend (Render) - Auto-deploying now
✅ CORS is fixed to allow all domains
✅ Backend will redeploy automatically
2. Frontend (Vercel) - Set Environment Variable
Go to your Vercel dashboard:
Find your project: internportal2025
Go to Settings → Environment Variables
Add this variable:
Name: VITE_API_URL
Value: https://intern-portal-backend-gafh.onrender.com
Environment: Production, Preview, Development
Save and redeploy
3. Test Your URLs
Backend (Working):
✅ https://intern-portal-backend-gafh.onrender.com/api/health
✅ https://intern-portal-backend-gafh.onrender.com/api/intern
✅ https://intern-portal-backend-gafh.onrender.com/api/leaderboard
Frontend (After setting env var):
🎯 https://internportal2025.vercel.app
🎯 The Issue
The frontend is trying to fetch data but doesn't have the correct API URL. Once you set the VITE_API_URL environment variable in Vercel, everything will work!
Your project will be fully functional once you set that one environment variable in Vercel!
