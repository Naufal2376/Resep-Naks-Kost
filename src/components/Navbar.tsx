"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-yellow-500">
            Resep <span className="text-gray-900">Naks Kost</span>
          </span>
        </Link>

        {/* Menu Navigasi */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-yellow-500">Home</Link>
          <Link href="/recipes" className="text-gray-700 hover:text-yellow-500">Recipes</Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <Link href="/" className="block px-6 py-3 text-gray-700 hover:text-yellow-500">Home</Link>
            <Link href="/recipes" className="block px-6 py-3 text-gray-700 hover:text-yellow-500">Recipes</Link>
            <Link href="/contact" className="block px-6 py-3 text-gray-700 hover:text-yellow-500">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
