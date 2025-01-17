
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Header } from "../_components/Header"
import { Footer } from "../_components/Footer"
import { RequirementsList } from "../_components/requirement-list"

export default function RequirementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Requirements for Pet Travel to the Bahamas</h1>
        <p className="text-lg text-center mb-8">
          Before applying for a pet permit, please ensure you meet all the following requirements. Failure to comply may result in delays or denial of entry for your pet.
        </p>
        <RequirementsList />
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/apply">Apply for Pet Permit</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

