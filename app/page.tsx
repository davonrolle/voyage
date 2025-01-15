import Image from 'next/image'
import Link from 'next/link'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, HandshakeIcon, CheckSquare } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <Image
            src="/dusch.jpeg"
            alt="Dogs on a tropical beach"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Stress-Free Pet Permit Assistance for the Bahamas</h1>
              <p className="text-xl md:text-2xl mb-8">We simplify the process of applying for Bahamas pet permits so you can focus on your trip!</p>
              <Button className='bg-white text-black hover:bg-slate-300 font-bold animate-pulse' asChild size="lg">
                <Link href="/apply">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About the Service */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
            <p className="text-center text-xl mb-12">
              Bahamas Pet Permit is a third-party service. We assist in submitting your pet permit application to the appropriate government department. Final approval is made by the government.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Clock className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                  <p className="text-center">Quick turnaround times for your applications</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <HandshakeIcon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Assistance</h3>
                  <p className="text-center">Guidance from experienced professionals</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <CheckSquare className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
                  <p className="text-center">Clear communication throughout the application</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Fill out the form", icon: "FileText" },
                { step: 2, title: "Upload documents", icon: "Upload" },
                { step: 3, title: "We handle submission", icon: "Send" },
                { step: 4, title: "Receive your permit", icon: "Mail" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-center">{`Step ${item.step}`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "John D.", text: "Voyage made bringing my dog to the Bahamas so easy! Highly recommended." },
                { name: "Sarah M.", text: "Excellent service! They handled everything quickly and professionally." },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-6">
                    <Image
                      src={`/testimonials2.jpg`}
                      alt={`Pet of ${testimonial.name}`}
                      width={80}
                      height={80}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="italic mb-2">&quot;{testimonial.text}&quot;</p>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Previe */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Got Questions?</h2>
            <div className="space-y-8">
              {[
                { q: "How long does it take to process a permit?", a: "Permits are typically processed within 2–5 business days." },
                { q: "Do you issue permits directly?", a: "No, we assist with submitting applications on your behalf." },
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-blue-600 hover:underline">View all FAQs</Link>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="relative py-24">
          <Image
            src="/trusted.webp"
            alt="Happy pet in tropical setting"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Travel With Your Pet?</h2>
            <p className="text-xl mb-8">Start your application today and let us handle the rest!</p>
            <Button asChild size="lg">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

