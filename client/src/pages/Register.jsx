import { useState } from 'react'
import api from '../lib/api'
import { useAuth } from '../lib/store'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('buyer')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const login = useAuth(s => s.login)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      const r = await api.post('/api/auth/register', { name, email, password, role })
      login(r.data.token)
      navigate('/')
    } catch (e) {
      setError(e.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-white text-2xl">🌾</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Join Tigashire Varimi</h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your account to start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="mt-8 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              <div className="flex items-center">
                <span className="text-red-500 mr-2">⚠️</span>
                {error}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input 
                id="name"
                type="text" 
                required
                className="input-field" 
                placeholder="Enter your full name" 
                value={name} 
                onChange={e => setName(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input 
                id="email"
                type="email" 
                required
                className="input-field" 
                placeholder="Enter your email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input 
                id="password"
                type="password" 
                required
                className="input-field" 
                placeholder="Create a password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input 
                id="confirmPassword"
                type="password" 
                required
                className="input-field" 
                placeholder="Confirm your password" 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                I want to
              </label>
              <select 
                id="role"
                className="input-field" 
                value={role} 
                onChange={e => setRole(e.target.value)}
              >
                <option value="buyer">🛒 Buy fresh produce</option>
                <option value="farmer">👨‍🌾 Sell my produce</option>
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full flex justify-center items-center"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                Sign in here
              </Link>
            </p>
          </div>
        </form>

        {/* Benefits */}
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Why join Tigashire Varimi?
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Access to fresh, organic produce
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Support local Zimbabwean farmers
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Secure payment and delivery
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Join a sustainable food community
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
