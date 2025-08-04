# 🚀 Intern Portal Backend

Express.js API server for the Intern Portal 2025 project.

## 🛠 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp env.example .env
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 📡 API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status and timestamp

### Intern Data
- **GET** `/api/intern`
- Returns intern information:
  ```json
  {
    "name": "Vishwa Vikas",
    "referralCode": "vishwavy2025",
    "donations": 7400
  }
  ```

### Leaderboard
- **GET** `/api/leaderboard`
- Returns top 5 interns with their stats

## 🚀 Deployment (Render)

1. **Create Render account** and connect your GitHub repo
2. **Create a new Web Service** with the following settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
3. **Set environment variables:**
   - `NODE_ENV=production`
   - `PORT=3000`
4. **Deploy** - Render will auto-deploy on push to main branch

## 🔧 Development

- **Port:** 5000 (default)
- **CORS:** Enabled for frontend domains
- **Security:** Helmet.js for security headers

## 📝 Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production) 