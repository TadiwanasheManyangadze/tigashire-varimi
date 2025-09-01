import { useEffect, useState } from 'react'
import api from '../lib/api'
import { Link } from 'react-router-dom'

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    api.get('/api/products')
      .then(r => {
        setItems(r.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        <p className="mt-4 text-gray-600 text-lg">Loading fresh produce...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-400 text-6xl mb-4">🌾</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No products available</h2>
        <p className="text-gray-600">Check back later for fresh produce from our farmers.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Fresh Produce from Zimbabwe</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of organic fruits, vegetables, and grains directly from local farmers.
        </p>
      </div>

      {/* Products Grid */}
      <div className="image-grid">
        {items.map(p => (
          <Link 
            key={p._id} 
            to={`/products/${p._id}`} 
            className="image-grid-item group"
          >
            <div className="image-container">
              <img 
                src={p.imageUrl} 
                alt={p.title} 
                className="product-image" 
              />
              <div className="product-badge">Fresh</div>
              <div className="product-badge-organic">🌱 Organic</div>
            </div>
            
            <div className="p-6 space-y-3">
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="text-accent-500 mr-2">👨‍🌾</span>
                {p.farmerName}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">
                  ${p.price}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  per {p.unit}
                </span>
              </div>
            </div>
            
            <div className="px-6 pb-6">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>🌱 Organic</span>
                <span>🚚 Farm Fresh</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center py-12">
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Contact us to request specific products or to learn about seasonal availability.
          </p>
          <button className="btn-outline">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
