import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const reviews = [
  {
    id: 1,
    name: "Sarden Kaleng ABC",
    body: "Sarden ABC selalu jadi penyelamat akhir bulan! Cepat, enak, dan bergizi.",
    img: "/asset/Resep-Sarden-ABC.jpg",
  },
  {
    id: 2,
    name: "Mie Instan Pedas",
    body: "Mie instan ini punya rasa pedas yang bikin ketagihan. Cocok buat anak kost!",
    img: "/asset/Mie-Instan-Pedas.jpg",
  },
  {
    id: 3,
    name: "Nasi Goreng Kecap",
    body: "Resep simpel tapi nikmat. Hanya butuh nasi, kecap, dan telur!",
    img: "/asset/Nasi-Goreng-Kecap.jpg",
  },
  {
    id: 4,
    name: "Telur Dadar Crispy",
    body: "Telur dadar ini beda dari biasanya, ada sensasi crispy yang mantap!",
    img: "/asset/Telur-Dadar-Crispy.jpg",
  },
]

const ReviewCard = ({
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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6 flex flex-col items-center gap-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img
        className="w-full h-40 rounded-xl object-cover"
        alt={name}
        src={img}
      />
      <figcaption className="text-lg font-semibold dark:text-white text-center">
        {name}
      </figcaption>
      <blockquote className="text-sm text-center">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueeDemo
