"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { FaSearch, FaUserCircle } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/asset/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-2xl font-semibold text-primary">
            <span className="text-[var(--primary)]">Resep</span> N
            <span className="text-[var(--primary)]">a</span>ks Kost
          </span>
        </Link>

        {/* Menu Navigasi */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-black hover:text-[var(--primary)]">
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-[var(--primary)]"
          >
            About
          </Link>
          <Link
            href="/recipes"
            className="text-black hover:text-[var(--primary)]"
          >
            Recipes
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-[var(--primary)]"
          >
            Contact
          </Link>

          {/* Search Bar dengan Icon */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full focus:ring focus:ring-[var(--primary)]"
            />
            <FaSearch className="absolute left-3 top-1/2 transform cursor-pointer -translate-y-1/2 text-gray-400" />
          </div>

          {/* Icon User */}
          <FaUserCircle
            size={30}
            className="text-gray-700 cursor-pointer"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <Link
              href="/"
              className="block px-6 py-3 text-gray-700 hover:text-[var(--primary)]"
            >
              Home
            </Link>
            <Link
              href="/recipes"
              className="block px-6 py-3 text-gray-700 hover:text-[var(--primary)]"
            >
              Recipes
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-3 text-gray-700 hover:text-[var(--primary)]"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
