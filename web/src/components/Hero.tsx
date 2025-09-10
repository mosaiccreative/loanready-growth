export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            90 Days to Bankable
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            A Sales Sprint That Lifts Your DSCR
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
            Stop guessing what lenders want. We give you the data-backed plan to improve cash flow and get funded.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg">
              Get Your Bankability Growth Plan
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Free DSCR Health Check
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-6">
            ✓ No long-term contracts ✓ 85% loan approval rate ✓ Average 0.23 DSCR improvement
          </p>
        </div>
      </div>
    </section>
  )
}