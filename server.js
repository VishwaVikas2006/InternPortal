const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://intern-portal-gules.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Intern Portal API is running',
    timestamp: new Date().toISOString()
  });
});

// Main intern data endpoint
app.get('/api/intern', (req, res) => {
  try {
    const internData = {
      name: "Vishwa Vikas",
      referralCode: "vishwavy2025",
      donations: 7400
    };
    
    res.json(internData);
  } catch (error) {
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Leaderboard endpoint (bonus feature)
app.get('/api/leaderboard', (req, res) => {
  try {
    const leaderboardData = [
      {
        rank: 1,
        name: "Vishwa Vikas",
        referralCode: "vishwavy2025",
        donations: 7400,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vishwa"
      },
      {
        rank: 2,
        name: "Sarah Johnson",
        referralCode: "sarahj2025",
        donations: 6800,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
      },
      {
        rank: 3,
        name: "Mike Chen",
        referralCode: "mikec2025",
        donations: 6200,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike"
      },
      {
        rank: 4,
        name: "Emily Davis",
        referralCode: "emilyd2025",
        donations: 5800,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily"
      },
      {
        rank: 5,
        name: "Alex Rodriguez",
        referralCode: "alexr2025",
        donations: 5200,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
      }
    ];
    
    res.json(leaderboardData);
  } catch (error) {
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: error.message 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Intern Portal Backend running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`👤 Intern data: http://localhost:${PORT}/api/intern`);
  console.log(`🏆 Leaderboard: http://localhost:${PORT}/api/leaderboard`);
}); 