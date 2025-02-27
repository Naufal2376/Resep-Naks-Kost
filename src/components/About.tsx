export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-6 mt-10 -mb-5 flex flex-col md:flex-row justify-evenly items-center gap-8"
    >
      {/* Teks About */}
      <div className="bg-[var(--thirdy)] border border-gray-200 rounded-lg p-6 max-w-2xl shadow-md">
        <span className="bg-red-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          Tentang Kita
        </span>
        <h2 className="text-2xl font-bold mt-3">Resep Naks Kost</h2>
        <p className="text-sm text-gray-700 mt-2">
          Perjalanan kuliner kami dirancang untuk para pejuang dapur sederhana.
          Dengan kreativitas, kepraktisan, dan bahan yang mudah didapat, kami
          menghadirkan resep-resep lezat yang bisa dibuat tanpa ribet. Dari mie
          instan hingga olahan sederhana lainnya, kami siap menemani setiap
          suapan anak kost yang ingin makan enak tanpa banyak usaha. Mari
          jelajahi dunia masak-masak praktis bersama kami! 🔥
        </p>
        <button className="mt-4 px-4 py-2 text-sm font-semibold bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
          Baca Selengkapnya
        </button>
      </div>

      {/* Judul Besar */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center">
        SELAMAT <br /> DATANG DI <br /> RESEP NAKS <br /> KOST
      </h1>
    </section>
  )
}
