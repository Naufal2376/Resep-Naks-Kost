import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const recipes = [
  {
    id: 1,
    name: "Sarden Kaleng Rasa Janji Manis",
    body: "Dibuka penuh harapan, aromanya menggoda, rasanya manis di awal. Tapi lama-lama sadar, isinya nggak sebanyak yang dibayangkan.",
    img: "/asset/Resep-Sarden-ABC.jpg",
  },
  {
    id: 2,
    name: "Mie Goreng CLBK (Cuma Laper Bukan Kangen)",
    body: "Dikira nostalgia, padahal cuma butuh sesuatu yang gampang dimasak! Mie goreng ini solusi buat perut yang kosong, bukan hati yang kosong.",
    img: "/asset/mie-clbk.jpg",
  },
  {
    id: 3,
    name: "Nasi Goreng Squad",
    body: "Selalu siap menemani di saat lapar melanda, sederhana tapi penuh rasa. Tapi meski sering diandalkan, tetap aja dianggap biasa. yaa ini pilihan yang tepat buat anak kost yang gak mau ribet.",
    img: "/asset/nasi-goreng-squad.jpg",
  },
  {
    id: 4,
    name: "Kentang Goreng Pedas Ditampar Kenyataan",
    body: "Gurihnya bikin jatuh cinta di gigitan pertama, tapi pedasnya mulai terasa setelah beberapa suapan. Awalnya dinikmati, lama-lama bikin kepedesan sendiri. Yaa ini hanya tentang kentang.",
    img: "/asset/kentang-mustofa.jpg",
  },
]

const RecipeCard = ({
  id,
  img,
  name,
  body,
}: {
  id: number
  img: string
  name: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-visible rounded-xl border flex flex-col items-center gap-4",
        "border-gray-950/[.1] bg-[var(--thirdy)] hover:bg-[var(--thirdy)]/80",
        "dark:border-gray-50/[.1] dark:bg-[var(--thirdy)] dark:hover:bg-[var(--thirdy)]/80"
      )}
    >
      <img
        className="w-full h-40 rounded-t-md object-cover"
        alt={name}
        src={img}
      />
      <figcaption className="text-lg  roboto font-semibold dark:text-white text-center">
        {name}
      </figcaption>
      <blockquote className="text-sm text-center px-2 mb-1">{body}</blockquote>
    </figure>
  )
}

export function StarRecipe() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-visible">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </Marquee>
    </div>
  )
}

export default StarRecipe
