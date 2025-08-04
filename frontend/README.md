# 🎨 Intern Portal Frontend

React.js frontend application for the Intern Portal 2025 project.

## 🛠 Tech Stack

- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── App.jsx        # Main app component
├── main.jsx       # Entry point
└── index.css      # Global styles
```

## 🎨 Pages

### Authentication
- **/login** - User login page (UI mockup)
- **/signup** - User registration page (UI mockup)

### Main Application
- **/dashboard** - Main dashboard with intern stats and rewards
- **/leaderboard** - Leaderboard showing top performers

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=https://intern-portal-backend-gafh.onrender.com
```

## 🚀 Deployment (Vercel)

1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `VITE_API_URL` - Your backend API URL
3. **Deploy** - Vercel will auto-deploy on push to main branch

## 🎨 Features

- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean, professional interface
- **Real-time Data** - Fetches data from backend API
- **Interactive Elements** - Copy referral codes, progress bars
- **Loading States** - Smooth user experience
- **Error Handling** - Graceful error states

## 🔗 API Integration

The frontend makes HTTP requests to the backend API:

- `GET /api/intern` - Fetch intern data
- `GET /api/leaderboard` - Fetch leaderboard data

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Key Components

- **Layout** - Navigation and page structure
- **Dashboard** - Main dashboard with stats and rewards
- **Leaderboard** - Top performers table
- **Login/Signup** - Authentication forms

## 🚀 Performance

- **Code Splitting** - Automatic route-based splitting
- **Optimized Build** - Vite for fast builds
- **Lazy Loading** - Components loaded on demand
- **Caching** - Browser caching for static assets 