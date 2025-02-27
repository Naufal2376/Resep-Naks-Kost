"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const categories = [
  "Semua",
  "Mie Goreng",
  "Mie Kuah",
  "Mie Pedas",
  "Nasi",
  "Sarden Kaleng",
  "Lainnya",
]

const recipes = [
  {
    id: 1,
    category: "Mie Goreng",
    name: "Mie Goreng CLBK",
    description:
      "Dikira nostalgia, padahal cuma butuh sesuatu yang gampang dimasak! Mie goreng ini solusi buat perut yang kosong, bukan hati yang kosong.",
    img: "/asset/mie-clbk.jpg",
  },
  {
    id: 2,
    category: "Sarden Kaleng",
    name: "Sarden Kaleng Rasa Janji Manis",
    description:
      "Dibuka penuh harapan, aromanya menggoda, rasanya manis di awal. Tapi lama-lama sadar, isinya nggak sebanyak yang dibayangkan.",
    img: "/asset/Resep-Sarden-ABC.jpg",
  },
  {
    id: 3,
    category: "Nasi",
    name: "Nasi Goreng Squad",
    description:
      "Selalu siap menemani di saat lapar melanda, sederhana tapi penuh rasa. Tapi meski sering diandalkan, tetap aja dianggap biasa.",
    img: "/asset/nasi-goreng-squad.jpg",
  },
  {
    id: 4,
    category: "Mie Kuah",
    name: "Mie Berendam dalam Kenangan",
    description:
      "Direbus dengan air panas, seperti hati yang pernah membara. Begitu diangkat, tetap lekat di ingatan, meski kuahnya perlahan mengering.",
    img: "/asset/mie-rendam.jpg",
  },
  {
    id: 5,
    category: "Mie Pedas",
    name: "Mie Pedas Ghosting",
    description:
      "Awalnya menggoda, bikin penasaran dan terasa hangat di lidah. Tapi makin lama, pedasnya menusuk. Bikin air mata keluar tanpa sadar!",
    img: "/asset/mie-ghosting.jpg",
  },
  {
    id: 6,
    category: "Mie Goreng",
    name: "Mie Rasa yang Pernah Ada",
    description:
      "Dulu direbus dengan penuh cinta, sekarang cuma jadi kenangan di dapur kosong. Rasanya masih ada, tapi nggak sehangat dulu.",
    img: "/asset/mie-rasa.jpg",
  },
]

const RecipeCard = ({
  id,
  name,
  description,
  img,
}: {
  id: number
  img: string
  name: string
  description: string
}) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col h-full"
    layout
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <img src={img} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4 flex text-left flex-col flex-grow">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-xs mt-2 text-gray-600 dark:text-gray-300 flex-grow">
        {description}
      </p>
      <div className="flex justify-between items-center mt-5">
        <p className="text-xs">Waktu-Tingkat Kesulitan-Rating</p>
        <button className="p-2 text-xs text-black bg-white border border-black rounded-full hover:bg-[var(--primary)] hover:text-white">
          LIHAT RESEPNYA
        </button>
      </div>
    </div>
  </motion.div>
)

export default function Recipe() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const filteredRecipes =
    selectedCategory === "Semua"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory)

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold">
        MAU MASAK APA <br /> HARI INI?
      </h2>
      <p className="text-gray-500 mt-2 text-xs">
        Dengan berbagai resep mie yang beragam, kami punya sesuatu <br /> untuk
        memuaskan setiap pecinta kuliner.
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-16">
        {categories.map((category) => (
          <button
            key={category}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--primary)] hover:text-white",
              selectedCategory === category
                ? "bg-[var(--primary)] text-white"
                : "bg-gray-200 text-gray-700"
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Animated Recipe List */}
      <motion.div
        key={selectedCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
