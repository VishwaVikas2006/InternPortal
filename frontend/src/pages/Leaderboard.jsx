import { useState, useEffect } from 'react'
import { Trophy, Medal, Crown, TrendingUp, DollarSign, User } from 'lucide-react'
import axios from 'axios'

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchLeaderboardData()
  }, [])

  const fetchLeaderboardData = async () => {
    try {
      setLoading(true)
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const response = await axios.get(`${API_URL}/api/leaderboard`)
      setLeaderboardData(response.data)
    } catch (err) {
      setError('Failed to fetch leaderboard data')
      console.error('Error fetching leaderboard data:', err)
    } finally {
      setLoading(false)
    }
  }

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-gray-400">#{rank}</span>
    }
  }

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white'
      case 3:
        return 'bg-gradient-to-r from-amber-500 to-amber-700 text-white'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

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
          onClick={fetchLeaderboardData}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <span>Leaderboard</span>
            </h1>
            <p className="text-gray-600 mt-1">
              Top performers this month
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>Updated daily</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Participants</p>
              <p className="text-3xl font-bold text-gray-900">{leaderboardData.length}</p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
              <User className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <p className="text-3xl font-bold text-gray-900">
                ${leaderboardData.reduce((sum, intern) => sum + intern.donations, 0).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average per Person</p>
              <p className="text-3xl font-bold text-gray-900">
                ${Math.round(leaderboardData.reduce((sum, intern) => sum + intern.donations, 0) / leaderboardData.length).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Top Performers</h2>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>1st Place</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span>2nd Place</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              <span>3rd Place</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {leaderboardData.map((intern, index) => (
            <div
              key={intern.rank}
              className={`flex items-center p-4 rounded-lg border transition-all ${
                index === 0
                  ? 'border-yellow-200 bg-yellow-50'
                  : index === 1
                  ? 'border-gray-200 bg-gray-50'
                  : index === 2
                  ? 'border-amber-200 bg-amber-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              {/* Rank */}
              <div className="flex items-center justify-center w-12 h-12 mr-4">
                {getRankIcon(intern.rank)}
              </div>

              {/* Avatar */}
              <div className="flex-shrink-0 mr-4">
                <img
                  src={intern.avatar}
                  alt={intern.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
              </div>

              {/* Intern Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{intern.name}</h3>
                <p className="text-sm text-gray-500 font-mono">{intern.referralCode}</p>
              </div>

              {/* Donations */}
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  ${intern.donations.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">donations</p>
              </div>

              {/* Rank Badge */}
              <div className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${getRankBadge(intern.rank)}`}>
                #{intern.rank}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Section */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
              <Trophy className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-green-800">First Place!</p>
              <p className="text-sm text-green-600">Vishwa Vikas reached #1</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-blue-800">Milestone Reached</p>
              <p className="text-sm text-blue-600">$30K total donations</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-purple-800">New Participant</p>
              <p className="text-sm text-purple-600">Alex joined the leaderboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Want to climb the ranks?</h3>
          <p className="text-primary-100 mb-4">
            Start making donations and see your name on the leaderboard!
          </p>
          <button className="bg-white text-primary-600 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
            Make a Donation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard 