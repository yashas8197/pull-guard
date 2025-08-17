import { Link } from 'react-router-dom'
import { Shield, Github } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function Footer() {
  const { isDark } = useTheme()
  
  return (
    <footer className="glass-card border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-500" />
                <div className="absolute inset-0 animate-pulse">
                  <Shield className="h-8 w-8 text-blue-400 opacity-30" />
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">PullGuard</span>
            </div>
            <p className="opacity-70 mb-4 max-w-md">
              AI-powered code review automation for modern development teams. 
              Maintain code quality without the manual overhead.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 opacity-90">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="opacity-70 hover:opacity-100 transition-opacity">Features</a></li>
              <li><Link to="/pricing" className="opacity-70 hover:opacity-100 transition-opacity">Pricing</Link></li>
              <li><Link to="/docs" className="opacity-70 hover:opacity-100 transition-opacity">Documentation</Link></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 opacity-90">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Privacy</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Terms</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Support</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity flex items-center space-x-1">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center opacity-60">
          <p>&copy; 2024 PullGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer