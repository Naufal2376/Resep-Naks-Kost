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
      <main id="home" className="flex min-h-screen flex-col overflow-x-hidden">
        <Navbar />
        <Hero />
        <Explore />
        <About />
        <div className="w-full py-16 text-center">
          <h2 className="text-3xl font-bold mb-3 pb-16 rounded-full">
            Anggota Kelompok
          </h2>
          <div className="bg-[var(--secondary)] rounded-xl p-6 mb-10">
            <Squad />
          </div>
          <h2 className="text-3xl font-bold mb-3 rounded-full">
            Resep Populer
          </h2>
          <div className="bg-[var(--secondary)] rounded-xl p-6">
            <StarRecipe />
          </div>
        </div>
        <Recipe />
        <Footer />
      </main>
    </>
  )
}
