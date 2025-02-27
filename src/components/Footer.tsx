import Image from "next/image"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0A0E1A] text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Berlangganan */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src="/asset/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-semibold text-primary">
              <span className="text-[var(--primary)]">Resep</span> N
              <span className="text-[var(--primary)]">a</span>ks Kost
            </span>
          </div>
          <p className="text-sm mt-2">
            Dapatkan informasi terbaru dan terpopuler!
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="px-3 py-2 rounded-md text-black w-full sm:w-auto"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Menu Navigasi */}
        <div>
          <h3 className="font-semibold text-lg border-b border-gray-400 pb-1 mb-3">
            Menu Navigasi
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak Kami */}
        <div>
          <h3 className="font-semibold text-lg border-b border-gray-400 pb-1 mb-3">
            Kontak Kami
          </h3>
          <p className="text-sm">Alamat: Jl. Lampung 2, Timbangan</p>
          <p className="text-sm">Telepon: 0812-3456-7890</p>
          <p className="text-sm">Email: ResepNaksKost@gmail.com</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:underline">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:underline">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:underline">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-500 pt-4">
        © 2025 Resep Naks Kost. All Rights Reserved. Dibuat dengan cinta untuk
        anak kost ❤️
      </div>
    </footer>
  )
}
