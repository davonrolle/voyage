
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'
import { Header } from "../_components/Header"
import { Footer } from "../_components/Footer"
import { ContactForm } from "../_components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg mb-6">
              Have questions about bringing your pet to the Bahamas? We&apos;re here to help! Fill out the form below or use our contact information to get in touch with us.
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>support@voyagebahamas.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>+1 (242) 123-4567</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>123 Paradise Island, Nassau, Bahamas</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
