import { useCart } from '../lib/store'
import api from '../lib/api'
import { useState } from 'react'

export default function Cart() {
  const { items, clear, removeItem, updateQuantity } = useCart()
  const [loading, setLoading] = useState(false)
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  const checkout = async () => {
    if (items.length === 0) return
    
    setLoading(true)
    try {
      const r = await api.post('/api/checkout/create-session', {
        items: items.map(i => ({ title: i.title, price: i.price, quantity: i.qty }))
      })
      window.location = r.data.url
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Checkout failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleQuantityChange = (itemId, newQty) => {
    if (newQty <= 0) {
      removeItem(itemId)
    } else {
      updateQuantity(itemId, newQty)
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-400 text-6xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added any fresh produce to your cart yet. Start shopping to fill it up!
        </p>
        <a 
          href="/products" 
          className="btn-primary text-lg px-8 py-4 inline-block"
        >
          🌾 Browse Products
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
        <p className="text-lg text-gray-600">
          Review your items and proceed to checkout
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item._id} className="card p-6">
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-20 h-20 object-cover rounded-xl bg-gray-50" 
                  />
                </div>
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="text-accent-500 mr-2">👨‍🌾</span>
                    {item.farmerName}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-bold text-primary-600">
                      ${item.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      per {item.unit}
                    </span>
                  </div>
                </div>
                
                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => handleQuantityChange(item._id, item.qty - 1)}
                    className="w-8 h-8 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-primary-500 transition-colors text-gray-600 hover:text-primary-600"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold text-gray-800">
                    {item.qty}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(item._id, item.qty + 1)}
                    className="w-8 h-8 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-primary-500 transition-colors text-gray-600 hover:text-primary-600"
                  >
                    +
                  </button>
                </div>
                
                {/* Total & Remove */}
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800 mb-2">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                  <button 
                    onClick={() => removeItem(item._id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
            
            {/* Summary Items */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.length} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${(total * 0.15).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total</span>
                  <span>${(total * 1.15).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {/* Checkout Button */}
            <button 
              onClick={checkout}
              disabled={loading || items.length === 0}
              className="btn-primary w-full flex justify-center items-center text-lg py-4"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                '🚀 Proceed to Checkout'
              )}
            </button>
            
            {/* Clear Cart */}
            <button 
              onClick={clear}
              className="btn-outline w-full mt-3"
            >
              🗑️ Clear Cart
            </button>
            
            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Free shipping on orders over $50
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Secure payment processing
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Fresh produce guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
