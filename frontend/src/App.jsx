import { useState, useEffect } from 'react'
import { 
  Shield, 
  Github, 
  CheckCircle2, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  ArrowRight, 
  Star,
  Users,
  Clock,
  Target,
  GitPullRequest,
  Settings,
  Play,
  Mail
} from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">PullGuard</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</a>
              <a href="#login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</a>
              <button className="btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered Code Reviews for{' '}
                <span className="gradient-text">Every Pull Request</span>
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Automate code quality checks with intelligent feedback directly in your GitHub workflow. 
                Save time, catch bugs early, and maintain consistent code standards across your team.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>View Demo</span>
                </button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">pull-request.js</span>
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
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-medium mb-8">Join thousands of developers who ship better code</p>
            
            {/* Company Logos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center mb-12">
              <div className="flex justify-center items-center h-12">
                <div className="text-gray-400 font-semibold text-lg">TechCorp</div>
              </div>
              <div className="flex justify-center items-center h-12">
                <div className="text-gray-400 font-semibold text-lg">DevFlow</div>
              </div>
              <div className="flex justify-center items-center h-12">
                <div className="text-gray-400 font-semibold text-lg">CodeBase</div>
              </div>
              <div className="flex justify-center items-center h-12">
                <div className="text-gray-400 font-semibold text-lg">StartupX</div>
              </div>
              <div className="flex justify-center items-center h-12 md:col-span-1 col-span-2">
                <div className="text-gray-400 font-semibold text-lg">InnovateLab</div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <GitPullRequest className="h-8 w-8 text-primary-600 mr-2" />
                <div className="text-3xl font-bold text-gray-900">10,000+</div>
              </div>
              <div className="text-gray-600 font-medium">Pull requests reviewed</div>
              <div className="text-sm text-gray-500 mt-1">This month alone</div>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle2 className="h-8 w-8 text-green-600 mr-2" />
                <div className="text-3xl font-bold text-gray-900">99%</div>
              </div>
              <div className="text-gray-600 font-medium">Review accuracy</div>
              <div className="text-sm text-gray-500 mt-1">Based on developer feedback</div>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <Clock className="h-8 w-8 text-secondary-600 mr-2" />
                <div className="text-3xl font-bold text-gray-900">2 min</div>
              </div>
              <div className="text-gray-600 font-medium">Average response time</div>
              <div className="text-sm text-gray-500 mt-1">From PR creation to feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Intelligent Code Review, <span className="gradient-text">Automated</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wasting time on manual code reviews. Let AI handle the routine checks 
              while your team focuses on architecture and business logic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Reviews</h3>
              <p className="text-gray-600 leading-relaxed">
                Set up once, review forever. Our AI analyzes every pull request automatically, 
                checking for bugs, security issues, and style violations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Comments</h3>
              <p className="text-gray-600 leading-relaxed">
                Get contextual feedback on every line. Our AI understands your codebase 
                and provides actionable suggestions that actually make sense.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Track quality trends across projects. Monitor team performance, 
                identify patterns, and continuously improve your development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Setup takes less than 5 minutes. Start getting AI-powered reviews immediately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Github className="h-8 w-8 text-primary-600" />
              </div>
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect GitHub Repos</h3>
              <p className="text-gray-600">
                Link your GitHub repositories with one click. We'll automatically 
                detect your codebase structure and language preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-secondary-600" />
              </div>
              <div className="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Configure Review Preferences</h3>
              <p className="text-gray-600">
                Customize review rules to match your team's standards. Set severity levels, 
                enable specific checks, and define coding guidelines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GitPullRequest className="h-8 w-8 text-purple-600" />
              </div>
              <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get AI Feedback on Every PR</h3>
              <p className="text-gray-600">
                Every pull request gets instant, intelligent feedback. Your team 
                can focus on high-level architecture while AI handles the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to improve your code quality?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
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
                  className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                />
              </div>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold text-white">PullGuard</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                AI-powered code review automation for modern development teams. 
                Maintain code quality without the manual overhead.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center space-x-1">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PullGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
