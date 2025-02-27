import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import StarRecipe from "@/components/StarRecipe"
import Squad from "@/components/Squad"
import Recipe from "@/components/Recipe"
import Footer from "@/components/Footer"
import Explore from "@/components/Explore"
import About from "@/components/About"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <Explore />
        <About />
        <div className="w-screen py-16 text-center">
          <div className="bg-[var(--secondary)] rounded-xl p-6 mb-10">
            <h2 className="text-3xl font-semibold mb-3">Anggota Kelompok</h2>
            <Squad />
          </div>
          <div className="bg-[var(--secondary)] rounded-xl p-6">
            <h2 className="text-3xl font-semibold mb-3">Resep Populer</h2>
            <StarRecipe />
          </div>
        </div>
        <Recipe />
      </main>
      <Footer />
    </>
  )
}
