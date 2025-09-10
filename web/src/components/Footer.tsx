export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">LoanReady Growth</h3>
            <p className="text-gray-300 mb-4">
              Transforming profitable restaurants into bankable businesses through data-driven sales optimization and DSCR improvement.
            </p>
            <p className="text-gray-400 text-sm">
              90 days to bankable. Guaranteed results. Proven system.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">DSCR Health Check</a></li>
              <li><a href="#" className="hover:text-white transition-colors">90-Day Bankability Sprint</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bank Package Creation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Loan Coaching</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">DSCR Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Restaurant Loan Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 LoanReady Growth. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Legal Disclaimer:</strong> LoanReady Growth provides business consulting and financial analysis services. 
              We do not guarantee loan approval, as lending decisions are made solely by financial institutions based on their 
              own criteria. Our success statistics are based on historical client results and may not reflect future performance. 
              All financial projections are estimates based on implemented strategies and market conditions. Individual results may vary. 
              We are not licensed financial advisors or loan brokers. Consult with qualified professionals for specific financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}