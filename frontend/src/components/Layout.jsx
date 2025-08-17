import Navigation from './Navigation'
import Footer from './Footer'
import { useTheme } from '../contexts/ThemeContext'

function Layout({ children, showFooter = true, showNavigation = true }) {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen flex flex-col theme-bg relative">
      {/* Background decorative elements for theme consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-blue-900/5 to-orange-900/5 pointer-events-none"></div>
      
      {showNavigation && <Navigation />}
      <main className="flex-grow relative z-10">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout