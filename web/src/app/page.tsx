import Hero from '@/components/Hero'
import IsThisYou from '@/components/IsThisYou'
import HowItWorks from '@/components/HowItWorks'
import WhatYouGet from '@/components/WhatYouGet'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IsThisYou />
      <HowItWorks />
      <WhatYouGet />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
