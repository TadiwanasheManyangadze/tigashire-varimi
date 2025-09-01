import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../lib/store'

export default function Layout() {
  const { t, i18n } = useTranslation()
  const { user, logout } = useAuth(s => ({ user: s.user, logout: s.logout }))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl">🌾</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/products" className="nav-link">
                {t('products')}
              </Link>
              <Link to="/cart" className="nav-link relative">
                {t('cart')}
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  🛒
                </span>
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <select
                className="border-2 border-gray-200 rounded-xl px-3 py-2 text-sm font-medium focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue={i18n.language}
                aria-label={t('language')}
              >
                <option value="en">🇺🇸 English</option>
                <option value="sn">🇿🇼 Shona</option>
                <option value="nd">🇿🇼 Ndebele</option>
              </select>

              {/* Auth Buttons */}
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 font-medium">
                    Welcome, {user.name}
                  </span>
                  <button 
                    onClick={logout}
                    className="btn-outline text-sm px-4 py-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/login" className="btn-outline text-sm px-4 py-2">
                    {t('login')}
                  </Link>
                  <Link to="/register" className="btn-primary text-sm px-4 py-2">
                    {t('register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-earth-800 to-earth-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {t('title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Connecting Zimbabwean farmers with consumers worldwide. 
                Fresh, organic produce delivered with care and sustainability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Products</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 Harare, Zimbabwe</p>
                <p>📧 manyangadzetadiwanashe@gmail.com</p>
                <p>📞 +263 771 975 808</p>
              </div>
            </div>
          </div>

          <div className="border-t border-earth-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Tigashire Varimi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
