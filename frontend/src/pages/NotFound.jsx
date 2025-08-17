import { Link } from 'react-router-dom'
import { Shield, Home, ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">PullGuard</span>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
          </p>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Link>
            
            <div className="text-center">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-500"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound