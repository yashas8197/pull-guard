import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Mail,
  Lock,
  User,
  ArrowRight,
  Shield,
  CheckCircle2,
  Eye,
  EyeOff,
  Zap,
  Clock,
  Star,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { isDark } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!agreedToTerms) {
      alert("Please agree to the terms of service");
      return;
    }

    setIsLoading(true);
    // TODO: Implement signup logic
    setTimeout(() => {
      console.log("Signup:", formData);
      setIsLoading(false);
    }, 2000);
  };

  const handleGitHubSignup = () => {
    // TODO: Implement GitHub OAuth
    console.log("GitHub signup");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const features = [
    { icon: CheckCircle2, text: "14-day free trial", color: "text-green-400" },
    { icon: Zap, text: "Unlimited repositories", color: "text-blue-400" },
    { icon: Clock, text: "Real-time AI reviews", color: "text-purple-400" },
    { icon: Star, text: "Enterprise-grade security", color: "text-orange-400" },
  ];

  return (
    <div className="theme-bg min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with n8n-inspired gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-orange-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,43,226,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

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
          Start your journey
        </h2>
        <p className="mt-3 text-center text-sm opacity-80 animate-fade-in-up">
          Join thousands of developers improving code quality
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="glass-card rounded-2xl py-8 px-6 sm:px-10 animate-fade-in-up">
          {/* Features showcase */}
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className={`h-4 w-4 ${feature.color}`} />
                  <span className="text-xs font-medium opacity-90">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Signup */}
          <div className="mb-6">
            <button
              onClick={handleGitHubSignup}
              className="w-full flex justify-center items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 glass-card group"
            >
              <Github className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
              Continue with GitHub
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-sm opacity-70">
                Or create with email
              </span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 opacity-90"
                >
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input pl-10 pr-4 py-3 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 opacity-90"
                >
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
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input pl-10 pr-4 py-3 text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2 opacity-90"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input pl-10 pr-12 py-3 text-sm"
                    placeholder="Create a password"
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

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium mb-2 opacity-90"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-input pl-10 pr-12 py-3 text-sm"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-80 transition-opacity"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="h-4 w-4 mt-0.5 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
              />
              <label
                htmlFor="terms"
                className="ml-3 block text-xs leading-5 opacity-80"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading || !agreedToTerms}
                className="btn-primary w-full flex justify-center items-center text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating account...
                  </>
                ) : (
                  <>
                    Start free trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="text-sm opacity-70">
                  Already have an account?{" "}
                </span>
                <Link
                  to="/login"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-xs opacity-50">
            🔒 SOC 2 compliant • 🛡️ Enterprise security • ⚡ 99.9% uptime
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs opacity-40">
            <span>Trusted by 10,000+ developers</span>
            <span>•</span>
            <span>5-star security rating</span>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
}

export default SignupPage;
