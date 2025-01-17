"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Voyage{" "}
          <span className="text-sm animate-pulse">Bahamas Pet Permits</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <nav
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 space-y-2">
          <Link href="/" className="block text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link
            href="/apply"
            className="block text-gray-600 hover:text-blue-600"
          >
            Apply Now
          </Link>
          <Link
            href="/restricted-breeds"
            className="block text-gray-600 hover:text-blue-600"
          >
            Restricted Breeds
          </Link>
          <Link
            href="/requirements"
            className="block text-gray-600 hover:text-blue-600"
          >
            Requirements
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 hover:text-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <nav className="hidden md:flex space-x-4 container mx-auto px-4 py-2">
        <Link href="/" className="text-gray-600 hover:text-blue-600">
          Home
        </Link>
        <Link href="/apply" className="text-gray-600 hover:text-blue-600">
          Apply Now
        </Link>
        <Link
          href="/restricted-breeds"
          className="text-gray-600 hover:text-blue-600"
        >
          Restricted Breeds
        </Link>
        <Link
          href="/requirements"
          className="text-gray-600 hover:text-blue-600"
        >
          Requirements
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-blue-600">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
