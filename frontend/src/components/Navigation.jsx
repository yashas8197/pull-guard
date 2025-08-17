import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'nav-blur shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-blue-500" />
              <div className="absolute inset-0 animate-pulse">
                <Shield className="h-8 w-8 text-blue-400 opacity-30" />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">PullGuard</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Features
            </a>
            <Link 
              to="/pricing" 
              className={`transition-opacity ${
                isActive('/pricing') 
                  ? 'text-blue-400' 
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/docs" 
              className={`transition-opacity ${
                isActive('/docs') 
                  ? 'text-blue-400' 
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              Docs
            </Link>
            <Link 
              to="/login" 
              className={`transition-opacity ${
                isActive('/login') 
                  ? 'text-blue-400' 
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              Login
            </Link>
            
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 opacity-70 hover:opacity-100 transition-opacity rounded-lg hover:bg-white/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Link to="/signup" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card rounded-lg mt-2 border border-white/10">
              <a 
                href="#features" 
                className="block px-3 py-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                Features
              </a>
              <Link 
                to="/pricing" 
                className="block px-3 py-2 opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/docs" 
                className="block px-3 py-2 opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link 
                to="/login" 
                className="block px-3 py-2 opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation