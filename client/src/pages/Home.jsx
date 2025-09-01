import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent leading-tight">
              {t('tagline')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the authentic taste of Zimbabwe through our carefully curated selection of fresh, organic produce directly from local farmers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products" className="btn-primary text-lg px-8 py-4">
                🌾 Browse Products
              </Link>
              <Link to="/register" className="btn-secondary text-lg px-8 py-4">
                👨‍🌾 Join as Farmer
              </Link>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-32"></div>
            <img 
              src="/images/people.jpg" 
              alt="Zimbabwean farmers" 
              className="hero-image" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Tigashire Varimi?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to bringing you the freshest, highest quality produce while supporting local farmers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">100% Organic</h3>
            <p className="text-gray-600 leading-relaxed">
              All our products are grown using sustainable farming methods without harmful chemicals.
            </p>
          </div>
          
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Direct from Farm</h3>
            <p className="text-gray-600 leading-relaxed">
              Skip the middleman and get fresh produce directly from local Zimbabwean farmers.
            </p>
          </div>
          
          <div className="card p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">💚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Support Local</h3>
            <p className="text-gray-600 leading-relaxed">
              Every purchase supports local farmers and helps sustain traditional farming communities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular fresh produce from trusted local farmers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center group">
            <img src="/images/freshtomatoes.jpg" alt="Fresh Tomatoes" className="featured-image" />
            <h3 className="font-semibold text-gray-800">Fresh Tomatoes</h3>
            <p className="text-sm text-gray-600">From Harare Valley</p>
          </div>
          
          <div className="card p-6 text-center group">
            <img src="/images/redbeans.jpg" alt="Organic Beans" className="featured-image" />
            <h3 className="font-semibold text-gray-800">Organic Beans</h3>
            <p className="text-sm text-gray-600">From Midlands Province</p>
          </div>
          
          <div className="card p-6 text-center group">
            <img src="/images/sweetcorn.jpg" alt="Sweet Corn" className="featured-image" />
            <h3 className="font-semibold text-gray-800">Sweet Corn</h3>
            <p className="text-sm text-gray-600">From Mashonaland</p>
          </div>
          
          <div className="card p-6 text-center group">
            <img src="/images/freshgreens.jpg" alt="Fresh Greens" className="featured-image" />
            <h3 className="font-semibold text-gray-800">Fresh Greens</h3>
            <p className="text-sm text-gray-600">From Eastern Highlands</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/products" className="btn-primary text-lg px-8 py-4">
            View All Products →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl mx-4 sm:mx-6 lg:mx-8 p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Taste the Difference?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of customers who trust us for their daily fresh produce needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/register" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </Link>
          <Link to="/products" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  )
}
