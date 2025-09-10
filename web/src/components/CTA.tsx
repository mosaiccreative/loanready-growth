export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Restaurant Into a Bankable Business?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join the 85% of restaurant owners who get approved for their growth loan after our 90-day sprint
        </p>
        
        <div className="bg-white rounded-lg p-8 text-gray-900 mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Book Your Free Strategy Call</h3>
          <p className="text-gray-600 mb-6">
            In this 30-minute call, we'll analyze your current DSCR, identify your biggest opportunities, 
            and show you exactly how we can get you to 1.25+ in 90 days.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-2">
              <strong>What we'll cover:</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>• Your current DSCR calculation and trending</li>
              <li>• 3 immediate improvements you can make this week</li>
              <li>• Revenue optimization opportunities specific to your restaurant</li>
              <li>• Timeline and realistic expectations for loan approval</li>
            </ul>
          </div>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Restaurant Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Owner Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Monthly Revenue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="number"
                placeholder="Desired Loan Amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <textarea
              placeholder="Tell us about your loan denial or funding challenge..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Book My Free Strategy Call
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            No sales pitch. Just valuable insights about your specific situation and a clear path forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
          <div>
            <div className="text-3xl font-bold text-blue-100">⏱️</div>
            <p className="text-blue-100">30-minute call</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-100">🎯</div>
            <p className="text-blue-100">Personalized strategy</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-100">🆓</div>
            <p className="text-blue-100">Completely free</p>
          </div>
        </div>
        
        <p className="text-blue-200 text-sm">
          Join 120+ restaurant owners who've improved their DSCR and secured funding with our proven system
        </p>
      </div>
    </section>
  )
}