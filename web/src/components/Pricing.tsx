export default function Pricing() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One investment. 90 days. Bankable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">DSCR Health Check</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$197</div>
              <p className="text-gray-600">Get started with immediate insights</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Complete DSCR analysis</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Improvement opportunities identified</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Quick win recommendations</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Baseline dashboard setup</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">30-minute strategy call</span>
              </li>
            </ul>
            
            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Health Check
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Perfect if you just want to understand your current position
            </p>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-8 border-2 border-orange-500 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">90-Day Bankability Sprint</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$3,997</div>
              <p className="text-gray-600">Complete transformation to bankable</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700"><strong>Everything in Health Check, plus:</strong></span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">12 weekly coaching calls (60 min each)</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Revenue optimization strategies</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Real-time DSCR tracking dashboard</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Bank-ready loan package</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Implementation toolkit & templates</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Bank meeting coaching</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700"><strong>Success guarantee</strong></span>
              </li>
            </ul>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Your Sprint
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              For restaurant owners serious about getting funded
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Optional Success Fee Structure
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Pay 2% of your approved loan amount instead of upfront fees
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">$100K Loan</div>
                <div className="text-gray-600">= $2,000 success fee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">$150K Loan</div>
                <div className="text-gray-600">= $3,000 success fee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">$200K+ Loan</div>
                <div className="text-gray-600">= $4,000+ success fee</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Available for qualified restaurants with $30K+ monthly revenue. Fee only paid upon successful loan approval.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Average ROI: 4,200% (based on $150K loan approval)
          </p>
          <p className="text-gray-600 mb-8">
            What's the cost of waiting another 6 months for funding?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg">
              Book Your Strategy Call
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Download Free DSCR Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}