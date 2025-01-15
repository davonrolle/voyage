import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/apply" className="hover:text-blue-600">Apply Now</Link>
              <Link href="/restricted-breeds" className="hover:text-blue-600">Restricted Breeds</Link>
              <Link href="/requirements" className="hover:text-blue-600">Requirements</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Information</h3>
            <p>Email: info@voyagebahamas.com</p>
            <p>Phone: +1 (242) 123-4567</p>
            <p>Office Hours: Mon-Fri, 9am-5pm EST</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm">
          <p>Disclaimer: Bahamas Pet Permit is not affiliated with the government. Final approval is made by the relevant government department.</p>
        </div>
      </div>
    </footer>
  )
}

