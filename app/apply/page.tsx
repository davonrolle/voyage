
import { ApplyForm } from '../_components/apply-form'
import { Footer } from '../_components/Footer'
import { Header } from '../_components/Header'

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Apply for a Bahamas Pet Permit</h1>
        <ApplyForm />
      </main>
      <Footer />
    </div>
  )
}

