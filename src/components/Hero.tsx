export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center mx-14 mt-24 rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/asset/hero.jpg')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Konten Hero */}
      <div className="relative z-10 p-6">
        <h1 className="text-5xl monserrat font-bold text-white drop-shadow-lg">
          NOODLE LOVERS <br /> AND SIMPLE EATS
        </h1>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
          Jelajahi dunia rasa, temukan resep praktis nan lezat,
          <br /> dan biarkan aroma semangat memasak kami <br /> menghampiri
          dapurmu.🍜
        </p>
        <a
          href="#recipes"
          className="mt-10 inline-block bg-[var(--primary)] text-black font-semibold px-6 py-3 rounded-3xl shadow-md hover:bg-opacity-80 transition"
        >
          Jelajahi Resep
        </a>
      </div>
    </section>
  )
}
