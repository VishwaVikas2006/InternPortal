import { useState, useEffect } from 'react'
import { Copy, DollarSign, User, Gift, TrendingUp, Target, Award } from 'lucide-react'
import axios from 'axios'

const Dashboard = () => {
  const [internData, setInternData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    fetchInternData()
  }, [])

  const fetchInternData = async () => {
    try {
      setLoading(true)
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const response = await axios.get(`${API_URL}/api/intern`)
      setInternData(response.data)
    } catch (err) {
      setError('Failed to fetch intern data')
      console.error('Error fetching intern data:', err)
    } finally {
      setLoading(false)
    }
  }

  const copyReferralCode = async () => {
    if (internData?.referralCode) {
      try {
        await navigator.clipboard.writeText(internData.referralCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }

  const rewards = [
    {
      id: 1,
      name: "Early Access Pass",
      description: "Get early access to new features",
      icon: Gift,
      unlocked: true,
      progress: 100
    },
    {
      id: 2,
      name: "Premium Badge",
      description: "Exclusive premium status badge",
      icon: Award,
      unlocked: false,
      progress: 75
    },
    {
      id: 3,
      name: "Mentor Session",
      description: "1-on-1 session with senior developer",
      icon: User,
      unlocked: false,
      progress: 50
    },
    {
      id: 4,
      name: "Conference Ticket",
      description: "Free ticket to tech conference",
      icon: Target,
      unlocked: false,
      progress: 25
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button 
          onClick={fetchInternData}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {internData?.name}! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Here's your Intern Portal dashboard
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Donations */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <p className="text-3xl font-bold text-gray-900">
                ${internData?.donations?.toLocaleString() || '0'}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+12% from last month</span>
            </div>
          </div>
        </div>

        {/* Referral Code */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Your Referral Code</p>
              <p className="text-xl font-mono font-bold text-primary-600">
                {internData?.referralCode || 'N/A'}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
              <User className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={copyReferralCode}
              className="flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? 'Copied!' : 'Copy code'}</span>
            </button>
          </div>
        </div>

        {/* Rank */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Rank</p>
              <p className="text-3xl font-bold text-gray-900">#1</p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-600">
              <span>Top performer this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Rewards & Unlockables</h2>
          <span className="text-sm text-gray-500">
            {rewards.filter(r => r.unlocked).length} of {rewards.length} unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewards.map((reward) => {
            const Icon = reward.icon
            return (
              <div
                key={reward.id}
                className={`relative p-4 rounded-lg border-2 transition-all ${
                  reward.unlocked
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                {reward.unlocked && (
                  <div className="absolute top-2 right-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                    reward.unlocked ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      reward.unlocked ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium text-sm ${
                      reward.unlocked ? 'text-green-800' : 'text-gray-700'
                    }`}>
                      {reward.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {reward.description}
                    </p>
                  </div>
                </div>

                {!reward.unlocked && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{reward.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all"
                        style={{ width: `${reward.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="font-medium">Make Donation</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <User className="w-5 h-5 text-primary-600" />
            <span className="font-medium">Invite Friends</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Award className="w-5 h-5 text-yellow-600" />
            <span className="font-medium">View Leaderboard</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Gift className="w-5 h-5 text-purple-600" />
            <span className="font-medium">Claim Rewards</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 