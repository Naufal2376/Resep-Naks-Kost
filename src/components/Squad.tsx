import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const squads = [
  {
    id: 1,
    name: "M. Dimas Anwar",
    nim: "09031182429019",
    body: "“Naks Kost lahir sebagai tempat berbagi resep simpel, hemat, tapi tetap bikin bangga. Karena di dunia anak kos, yang penting bukan cuma kenyang, tapi juga menikmati setiap suapan dengan bahagia! 🔥”",
    img: "/asset/dhimaz.png",
    width: 200,
    height: 300,
    translateX: 10, // Geser ke kiri (-) atau kanan (+)
    translateY: -21, // Geser ke atas (-) atau bawah (+)
  },
  {
    id: 2,
    name: "M. Naufal Rafif Pratama",
    nim: "09031282429112",
    body: "“Ngoding itu kayak masak, butuh resep yang pas biar nggak error. Bedanya, kalau masak gagal masih bisa dimakan, kalau ngoding gagal ya... selamat begadang.”",
    img: "/asset/pall.png",
    width: 220,
    height: 300,
    translateX: 10,
    translateY: -23,
  },
  {
    id: 3,
    name: "M. Ghalib Assidiq Gusri",
    nim: "09031282429094",
    body: "“Kode yang rapi itu kayak resep yang pas—kalau asal-asalan, hasilnya berantakan. Makanya, di dunia ngoding dan dapur kos, sabar dan teliti adalah kunci biar nggak crash di tengah jalan.”",
    img: "/asset/libsek.png",
    width: 200,
    height: 300,
    translateX: 0,
    translateY: -23,
  },
  {
    id: 4,
    name: "M. Luthfi Erfe",
    nim: "09031282429037",
    body: "“Masakan anak kos itu bukan sekadar bertahan hidup, tapi seni mengubah yang sederhana jadi luar biasa. Karena dengan kreativitas, mie instan pun bisa terasa bintang lima!”",
    img: "/asset/fii.png",
    width: 260,
    height: 300,
    translateX: 0,
    translateY: -23,
  },
]

const SquadCard = ({
  id,
  img,
  name,
  nim,
  body,
  width,
  height,
  translateX,
  translateY,
}: {
  id: number
  img: string
  name: string
  nim: string
  body: string
  width: number
  height: number
  translateX: number
  translateY: number
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 overflow-visible rounded-xl border flex flex-col items-center gap-4",
        "border-gray-950/[.1] bg-[var(--thirdy)] hover:bg-[var(--thirdy)]/80",
        "dark:border-gray-50/[.1] dark:bg-[var(--thirdy)] dark:hover:bg-[var(--thirdy)]/80"
      )}
    >
      {/* Background */}
      <div
        className="w-full h-52 bg-cover bg-center rounded-t-md"
        style={{
          backgroundImage: "url('/asset/bg-rabbit.jpeg')",
          backgroundSize: "cover",
        }}
      />

      {/* Foto mengambang */}
      <img
        className="absolute top-[-70px] object-cover"
        alt={name}
        src={img}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate(${translateX}px, ${translateY}px)`,
        }}
      />

      {/* Konten Kartu */}
      <figcaption className="text-xl font-semibold text-center dark:text-white z-50 overflow-hidden">
        {name}
        <p className="text-xl font-semibold  text-black">{nim}</p>
      </figcaption>
      <blockquote className="text-sm text-center px-4 mb-4">{body}</blockquote>
    </figure>
  )
}

export function Squad() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-visible">
      <Marquee className="[--duration:20s]">
        {squads.map((squad) => (
          <SquadCard key={squad.id} {...squad} />
        ))}
      </Marquee>
    </div>
  )
}

export default Squad
