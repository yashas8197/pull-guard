import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Mail, Lock, ArrowRight, Shield, Eye, EyeOff } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { isDark } = useTheme()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement login logic
    setTimeout(() => {
      console.log('Login:', { email, password })
      setIsLoading(false)
    }, 1500)
  }

  const handleGitHubLogin = () => {
    // TODO: Implement GitHub OAuth
    console.log('GitHub login')
  }

  return (
    <div className="theme-bg min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with n8n-inspired gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-orange-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-10 w-10 text-blue-500" />
              <div className="absolute inset-0 animate-pulse">
                <Shield className="h-10 w-10 text-blue-400 opacity-50" />
              </div>
            </div>
            <span className="text-3xl font-bold gradient-text">PullGuard</span>
          </div>
        </div>
        
        <h2 className="mt-8 text-center text-3xl font-bold animate-fade-in-up">
          Welcome back
        </h2>
        <p className="mt-3 text-center text-sm opacity-80 animate-fade-in-up">
          Sign in to your account to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="glass-card rounded-2xl py-8 px-6 sm:px-10 animate-fade-in-up">
          {/* GitHub Login */}
          <div className="mb-6">
            <button
              onClick={handleGitHubLogin}
              className="w-full flex justify-center items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 glass-card"
            >
              <Github className="h-5 w-5 mr-3" />
              Continue with GitHub
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-sm opacity-70">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-90">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input pl-10 pr-4 py-3 text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 opacity-90">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input pl-10 pr-12 py-3 text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-80 transition-opacity"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm opacity-80">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex justify-center items-center text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="text-sm opacity-70">Don't have an account? </span>
                <Link to="/signup" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Create account
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Additional decorative elements */}
        <div className="mt-8 text-center">
          <p className="text-xs opacity-50">
            Secure authentication powered by industry standards
          </p>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
  )
}

export default LoginPage