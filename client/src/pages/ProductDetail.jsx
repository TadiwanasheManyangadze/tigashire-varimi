import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../lib/api'
import { useCart } from '../lib/store'
import { useTranslation } from 'react-i18next'

export default function ProductDetail() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const add = useCart(s => s.add)
  const { t } = useTranslation()

  useEffect(() => {
    setLoading(true)
    api.get(`/api/products/${id}`)
      .then(r => {
        setP(r.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  const handleAddToCart = () => {
    if (p) {
      add({ ...p, qty: quantity })
      // Show success message or notification
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        <p className="mt-4 text-gray-600 text-lg">Loading product details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Product not found</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <button 
          onClick={() => window.history.back()} 
          className="btn-primary"
        >
          Go Back
        </button>
      </div>
    )
  }

  if (!p) return null

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><a href="/" className="hover:text-primary-600 transition-colors">Home</a></li>
          <li><span className="mx-2">/</span></li>
          <li><a href="/products" className="hover:text-primary-600 transition-colors">Products</a></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-800 font-medium">{p.title}</li>
        </ol>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-6">
          <div className="relative">
            <img 
              src={p.imageUrl} 
              alt={p.title} 
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg" 
            />
            <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              🌱 Organic
            </div>
            <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              🚚 Farm Fresh
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl mb-2">🌾</div>
              <div className="text-sm text-gray-600">Origin</div>
              <div className="font-semibold text-gray-800">Zimbabwe</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl mb-2">📦</div>
              <div className="text-sm text-gray-600">Available</div>
              <div className="font-semibold text-gray-800">In Stock</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl mb-2">⭐</div>
              <div className="text-sm text-gray-600">Rating</div>
              <div className="font-semibold text-gray-800">4.8/5</div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{p.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{p.description}</p>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-2xl">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-primary-600">${p.price}</span>
              <span className="text-lg text-gray-600">per {p.unit}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Free delivery on orders over $50</p>
          </div>

          {/* Farmer Info */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="text-accent-500 mr-2">👨‍🌾</span>
              Meet the Farmer
            </h3>
            <p className="text-gray-600 mb-2"><strong>Name:</strong> {p.farmerName}</p>
            <p className="text-gray-600 mb-2"><strong>Location:</strong> Zimbabwe</p>
            <p className="text-gray-600"><strong>Experience:</strong> 15+ years of organic farming</p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-primary-500 transition-colors"
                >
                  -
                </button>
                <span className="w-16 text-center text-lg font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-primary-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="btn-primary w-full text-lg py-4"
            >
              🛒 Add to Cart - ${(p.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Product Features */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Product Features</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                100% Organic & Natural
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                No Pesticides or Chemicals
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Freshly Harvested
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Supports Local Farmers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
