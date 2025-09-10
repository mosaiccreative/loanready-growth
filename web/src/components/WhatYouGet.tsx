export default function WhatYouGet() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform from profitable to bankable in 90 days
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-blue-600 text-5xl mb-6">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Real-Time DSCR Dashboard
            </h3>
            <p className="text-gray-600 mb-4">
              Track your debt service coverage ratio improvement daily. See exactly how each strategy impacts your bankability score.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Live DSCR calculation</li>
              <li>• Revenue trend analysis</li>
              <li>• Goal progress tracking</li>
              <li>• Lender-ready reports</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-green-600 text-5xl mb-6">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Weekly Strategy Implementation
            </h3>
            <p className="text-gray-600 mb-4">
              Proven revenue optimization strategies deployed one per week, with measurable impact on your bottom line.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Menu engineering templates</li>
              <li>• Staff training protocols</li>
              <li>• Customer retention campaigns</li>
              <li>• Upselling scripts</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-purple-600 text-5xl mb-6">📈</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Financial Projections Package
            </h3>
            <p className="text-gray-600 mb-4">
              Professional financial projections that banks trust, based on your actual improved performance data.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• 3-year financial projections</li>
              <li>• Cash flow forecasting</li>
              <li>• DSCR improvement documentation</li>
              <li>• Risk mitigation strategies</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-orange-600 text-5xl mb-6">🏦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Bank-Ready Loan Package
            </h3>
            <p className="text-gray-600 mb-4">
              Complete loan application package with executive summary, supporting documents, and presentation coaching.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Executive summary</li>
              <li>• Supporting financials</li>
              <li>• Business growth narrative</li>
              <li>• Presentation templates</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-red-600 text-5xl mb-6">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              One-on-One Coaching Calls
            </h3>
            <p className="text-gray-600 mb-4">
              Weekly 60-minute coaching calls with restaurant industry experts to ensure proper implementation and results.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Strategy implementation support</li>
              <li>• Performance review and optimization</li>
              <li>• Bank meeting preparation</li>
              <li>• Q&A and troubleshooting</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-indigo-600 text-5xl mb-6">🔧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Implementation Toolkit
            </h3>
            <p className="text-gray-600 mb-4">
              Ready-to-use templates, scripts, and tools to implement each strategy without guesswork.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Menu analysis spreadsheets</li>
              <li>• Staff training materials</li>
              <li>• Customer survey templates</li>
              <li>• Marketing campaign templates</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Success Guarantee
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              If we don't improve your DSCR by at least 0.15 points within 90 days, we'll work with you for free until we do.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">0.23</div>
                <div className="text-gray-600">Average DSCR Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <div className="text-gray-600">Loan Approval Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">22%</div>
                <div className="text-gray-600">Average Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-8">
            <strong>Value:</strong> What would getting that $150K growth loan be worth to your business?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}