import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { RestrictedBreedsTable } from "../_components/RestrictedBreedsTable";

export default function RestrictedBreedsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Restricted Breeds for Bahamas Pet Travel</h1>
        <p className="text-lg text-center mb-8">
          The following breeds are restricted from entry into the Bahamas. Please review this list carefully before applying for a pet permit.
        </p>
        <RestrictedBreedsTable />
      </main>
      <Footer />
    </div>
  )
}

