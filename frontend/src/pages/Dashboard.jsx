import { useState } from "react";
import {
  Shield,
  GitPullRequest,
  CheckCircle2,
  AlertCircle,
  Clock,
  BarChart3,
  Settings,
  Plus,
  Github,
  Search,
  TrendingUp,
  Users,
  Zap,
  Moon,
  Sun,
  Bell,
  Filster,
  Download,
  Eye,
  MessageSquare,
  Star,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { isDark, toggleTheme } = useTheme();

  // Mock data - replace with real API calls
  const stats = {
    totalReviews: 1247,
    pendingReviews: 23,
    passedReviews: 1156,
    failedReviews: 68,
    teamMembers: 12,
    avgScore: 94,
  };

  const recentReviews = [
    {
      id: 1,
      repo: "user/my-awesome-app",
      pr: "#142: Add user authentication",
      status: "passed",
      score: 95,
      time: "2 minutes ago",
      author: "john.doe",
      avatar: "JD",
      comments: 3,
      lines: "+127 -45",
    },
    {
      id: 2,
      repo: "user/api-service",
      pr: "#87: Fix security vulnerability",
      status: "failed",
      score: 67,
      time: "15 minutes ago",
      author: "jane.smith",
      avatar: "JS",
      comments: 8,
      lines: "+23 -12",
    },
    {
      id: 3,
      repo: "user/frontend-app",
      pr: "#203: Update dependencies",
      status: "pending",
      score: null,
      time: "1 hour ago",
      author: "mike.wilson",
      avatar: "MW",
      comments: 2,
      lines: "+891 -234",
    },
    {
      id: 4,
      repo: "user/backend-service",
      pr: "#56: Optimize database queries",
      status: "passed",
      score: 98,
      time: "3 hours ago",
      author: "sarah.johnson",
      avatar: "SJ",
      comments: 1,
      lines: "+67 -89",
    },
  ];

  const quickActions = [
    { icon: Plus, label: "Add Repository", color: "text-blue-400" },
    { icon: Users, label: "Invite Team", color: "text-green-400" },
    { icon: Settings, label: "Configure Rules", color: "text-purple-400" },
    { icon: Download, label: "Export Data", color: "text-orange-400" },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "passed":
        return <CheckCircle2 className="h-5 w-5 text-green-400" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-400" />;
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "passed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "failed":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with n8n-inspired gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-orange-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Header */}
      <div className="relative z-10 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Shield className="h-8 w-8 text-blue-500" />
                  <div className="absolute inset-0 animate-pulse">
                    <Shield className="h-8 w-8 text-blue-400 opacity-30" />
                  </div>
                </div>
                <span className="text-xl font-bold gradient-text">
                  PullGuard
                </span>
              </div>
              <span className="text-white/30">|</span>
              <h1 className="text-lg font-medium opacity-90">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 opacity-70 hover:opacity-100 transition-opacity">
                <Bell className="h-5 w-5" />
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button className="btn-primary flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Repository</span>
              </button>

              <button className="p-2 opacity-70 hover:opacity-100 transition-opacity">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 animate-fade-in">
            Welcome back! 👋
          </h2>
          <p className="opacity-70 animate-fade-in-up">
            Here's what's happening with your code reviews today
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="dashboard-card p-4 flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-200 group"
            >
              <action.icon
                className={`h-6 w-6 ${action.color} group-hover:scale-110 transition-transform`}
              />
              <span className="text-sm font-medium opacity-90">
                {action.label}
              </span>
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div className="dashboard-card p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium opacity-70">
                    Total Reviews
                  </p>
                  <p className="text-2xl font-bold">
                    {stats.totalReviews.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-green-400 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+12%</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-70">Pending</p>
                <p className="text-2xl font-bold">{stats.pendingReviews}</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-70">Passed</p>
                <p className="text-2xl font-bold">{stats.passedReviews}</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-70">Failed</p>
                <p className="text-2xl font-bold">{stats.failedReviews}</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Star className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-70">Avg Score</p>
                <p className="text-2xl font-bold">{stats.avgScore}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="dashboard-card">
          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
              <h2 className="text-lg font-medium">Recent Reviews</h2>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input pl-10 pr-4 py-2 text-sm w-64"
                  />
                </div>

                <button className="flex items-center space-x-2 px-3 py-2 glass-card rounded-lg text-sm hover:scale-105 transition-all">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {recentReviews.map((review) => (
              <div
                key={review.id}
                className="px-6 py-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      {getStatusIcon(review.status)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-1">
                        <Github className="h-4 w-4 opacity-50" />
                        <span className="text-sm font-medium opacity-90">
                          {review.repo}
                        </span>
                        <span className="text-xs opacity-50">
                          {review.lines}
                        </span>
                      </div>
                      <p className="text-sm opacity-70 truncate">{review.pr}</p>

                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                            {review.avatar}
                          </div>
                          <span className="text-xs opacity-60">
                            {review.author}
                          </span>
                        </div>

                        <div className="flex items-center space-x-1 text-xs opacity-60">
                          <MessageSquare className="h-3 w-3" />
                          <span>{review.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {review.score && (
                      <div className="text-right">
                        <p className="text-sm font-medium opacity-90">
                          {review.score}/100
                        </p>
                        <div className="w-16 bg-white/10 rounded-full h-1 mt-1">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-1 rounded-full transition-all duration-500"
                            style={{ width: `${review.score}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        review.status
                      )}`}
                    >
                      {review.status}
                    </span>

                    <div className="text-right">
                      <p className="text-xs opacity-60">{review.time}</p>
                      <button className="mt-1 text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-4 bg-white/5 text-center">
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              View all reviews →
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
  );
}

export default Dashboard;
