import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Github, 
  CheckCircle2, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  ArrowRight, 
  Clock,
  GitPullRequest,
  Settings,
  Play
} from 'lucide-react'
import Layout from '../components/Layout'
import { useTheme } from '../contexts/ThemeContext'

function LandingPage() {
  const [email, setEmail] = useState('')
  const { isDark } = useTheme()

  return (
    <Layout>
      <div className="theme-bg min-h-screen relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-orange-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  AI-Powered Code Reviews for{' '}
                  <span className="gradient-text">Every Pull Request</span>
                </h1>
                
                <p className="mt-6 text-xl opacity-80 leading-relaxed">
                  Automate code quality checks with intelligent feedback directly in your GitHub workflow. 
                  Save time, catch bugs early, and maintain consistent code standards across your team.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/signup" className="btn-primary flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button className="btn-secondary flex items-center justify-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>View Demo</span>
                  </button>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <div className="glass-card rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm opacity-60 ml-4">pull-request.js</span>
                  </div>
                  <div className="code-block">
                    <div className="text-green-400">// PullGuard AI Review</div>
                    <div className="text-blue-400">function validateInput(data) {'{'}</div>
                    <div className="text-yellow-400 pl-4">// 🤖 Suggestion: Add null check</div>
                    <div className="text-gray-300 pl-4">if (!data) return false;</div>
                    <div className="text-blue-400">{'}'}</div>
                    <div className="mt-2 text-green-400">✅ Security: No vulnerabilities found</div>
                    <div className="text-green-400">✅ Performance: Optimized</div>
                    <div className="text-green-400">✅ Style: Consistent with team standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="relative z-10 py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-medium mb-8 opacity-80">Join thousands of developers who ship better code</p>
              
              {/* Company Logos */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center mb-12">
                {['TechCorp', 'DevFlow', 'CodeBase', 'StartupX', 'InnovateLab'].map((company, index) => (
                  <div key={index} className="flex justify-center items-center h-12">
                    <div className="font-semibold text-lg opacity-40">{company}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass-card p-6 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <GitPullRequest className="h-8 w-8 text-blue-500 mr-2" />
                  <div className="text-3xl font-bold">10,000+</div>
                </div>
                <div className="font-medium opacity-80">Pull requests reviewed</div>
                <div className="text-sm opacity-60 mt-1">This month alone</div>
              </div>
              
              <div className="text-center glass-card p-6 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mr-2" />
                  <div className="text-3xl font-bold">99%</div>
                </div>
                <div className="font-medium opacity-80">Review accuracy</div>
                <div className="text-sm opacity-60 mt-1">Based on developer feedback</div>
              </div>
              
              <div className="text-center glass-card p-6 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 text-orange-500 mr-2" />
                  <div className="text-3xl font-bold">2 min</div>
                </div>
                <div className="font-medium opacity-80">Average response time</div>
                <div className="text-sm opacity-60 mt-1">From PR creation to feedback</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Intelligent Code Review, <span className="gradient-text">Automated</span>
              </h2>
              <p className="mt-4 text-xl opacity-80 max-w-3xl mx-auto">
                Stop wasting time on manual code reviews. Let AI handle the routine checks 
                while your team focuses on architecture and business logic.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Automated Reviews</h3>
                <p className="opacity-80 leading-relaxed">
                  Set up once, review forever. Our AI analyzes every pull request automatically, 
                  checking for bugs, security issues, and style violations.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Comments</h3>
                <p className="opacity-80 leading-relaxed">
                  Get contextual feedback on every line. Our AI understands your codebase 
                  and provides actionable suggestions that actually make sense.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Team Dashboard</h3>
                <p className="opacity-80 leading-relaxed">
                  Track quality trends across projects. Monitor team performance, 
                  identify patterns, and continuously improve your development process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Get Started in <span className="gradient-text">3 Simple Steps</span>
              </h2>
              <p className="mt-4 text-xl opacity-80">
                Setup takes less than 5 minutes. Start getting AI-powered reviews immediately.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Github className="h-8 w-8 text-blue-500" />
                </div>
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Connect GitHub Repos</h3>
                <p className="opacity-80">
                  Link your GitHub repositories with one click. We'll automatically 
                  detect your codebase structure and language preferences.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-green-500" />
                </div>
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Configure Review Preferences</h3>
                <p className="opacity-80">
                  Customize review rules to match your team's standards. Set severity levels, 
                  enable specific checks, and define coding guidelines.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GitPullRequest className="h-8 w-8 text-purple-500" />
                </div>
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Get AI Feedback on Every PR</h3>
                <p className="opacity-80">
                  Every pull request gets instant, intelligent feedback. Your team 
                  can focus on high-level architecture while AI handles the details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to improve your code quality?
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who trust PullGuard to maintain high code standards 
                and accelerate their development workflow.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input w-full px-4 py-3"
                    />
                  </div>
                  <Link to="/signup" className="btn-primary px-6 py-3 whitespace-nowrap">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </Layout>
  )
}

export default LandingPage