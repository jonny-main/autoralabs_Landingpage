import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Comparison from '@/components/Comparison'
import Solutions from '@/components/Solutions'
import Benefits from '@/components/Benefits'
import Process from '@/components/Process'
import CTAForm from '@/components/CTAForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Comparison />
      <Solutions />
      <Benefits />
      <Process />
      <CTAForm />
      <FAQ />
      <Footer />
    </main>
  )
}
