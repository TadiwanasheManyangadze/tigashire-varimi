import { Link } from 'react-router-dom'

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mx-auto h-24 w-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-8">
          <span className="text-white text-4xl">✓</span>
        </div>
        
        {/* Success Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          Thank you for supporting Zimbabwean farmers! Your order has been confirmed and is being processed.
        </p>
        
        {/* Order Details */}
        <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What happens next?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Order Confirmation</h3>
              <p className="text-sm text-gray-600">
                You'll receive an email confirmation with your order details
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Processing & Delivery</h3>
              <p className="text-sm text-gray-600">
                Your fresh produce will be carefully packed and delivered within 2-3 business days
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Track Your Order</h3>
              <p className="text-sm text-gray-600">
                You'll receive updates on your order status via email and SMS
              </p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/products" className="btn-primary text-lg px-8 py-4">
            🌾 Continue Shopping
          </Link>
          <Link to="/" className="btn-outline text-lg px-8 py-4">
            🏠 Back to Home
          </Link>
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:support@tigashirevarimi.com" className="text-primary-600 hover:text-primary-700 font-medium">
              📧 support@tigashirevarimi.com
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">
              📞 +263 123 456 789
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
