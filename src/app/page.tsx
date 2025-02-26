import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import MarqueeDemo from "@/components/CardAnimate"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="bg-[var(--secondary)] rounded-xl p-6">
            <h2 className="text-3xl font-semibold mb-3">Resep Populer</h2>
            <MarqueeDemo />
          </div>
        </div>
      </main>
    </>
  )
}
