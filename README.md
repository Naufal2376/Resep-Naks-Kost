# 🍽️ Resep Naks Kost

**Resep Naks Kost** adalah aplikasi web yang menyediakan berbagai resep makanan sederhana dan praktis, cocok untuk anak kos yang ingin memasak dengan mudah! Dibangun menggunakan **Next.js**, **TypeScript**, dan **Tailwind CSS** untuk tampilan yang responsif dan modern.

---

## ✨ Fitur Utama

✅ **Tampilan Halaman Utama** - Menampilkan daftar resep unggulan dengan UI yang menarik.  
✅ **Eksplor Resep** - Jelajahi berbagai resep dengan kategori yang beragam.  
✅ **Detail Resep** - Lihat bahan-bahan dan langkah-langkah memasak secara lengkap.  
✅ **Squad Developer** - Kenali tim yang mengembangkan aplikasi ini.  

---

## 📂 Struktur Folder

```
📦 Resep-Naks-Kost-main
├── 📜 .gitignore
├── 📜 README.md
├── 📜 components.json
├── 📜 next.config.ts
├── 📜 package-lock.json
├── 📜 package.json
├── 📜 postcss.config.mjs
├── 📜 tailwind.config.ts
├── 📜 tsconfig.json
├── 📂 public
│   ├── 🖼️ berbagai aset gambar & ikon
├── 📂 src
│   ├── 📂 app
│   │   ├── 🎨 globals.css (Gaya utama)
│   │   ├── 📄 layout.tsx (Tata letak utama)
│   │   ├── 🏠 page.tsx (Halaman utama)
│   ├── 📂 components
│   │   ├── 🔹 About.tsx (Tentang aplikasi)
│   │   ├── 🔹 Explore.tsx (Eksplorasi resep)
│   │   ├── 🔹 Footer.tsx (Bagian footer)
│   │   ├── 🔹 Hero.tsx (Bagian header utama)
│   │   ├── 🔹 Navbar.tsx (Navigasi utama)
│   │   ├── 🔹 Recipe.tsx (Kartu resep)
│   │   ├── 🔹 Squad.tsx (Tampilan squad developer)
│   │   ├── 🔹 StarRecipe.tsx (Resep favorit)
│   │   ├── 📂 magicui
│   │   │   ├── 🎠 marquee.tsx (Efek marquee)
│   │   ├── 📂 ui
│   │   │   ├── 🖋️ input.tsx (Komponen input UI)
│   ├── 📂 lib
│   │   ├── 🛠️ utils.ts (Helper functions)
```

---

## 🚀 Navigasi Aplikasi

🔹 **Halaman Utama (`/`)** - Tampilan awal dengan hero section dan daftar resep unggulan.  
🔹 **Eksplor (`/explore`)** - Menampilkan daftar resep yang bisa dicoba.  
🔹 **Detail Resep (`/recipe/[id]`)** - Informasi lengkap tentang resep yang dipilih.  
🔹 **Squad (`/squad`)** - Mengenal lebih dekat tim developer.  

---

## 🛠️ Cara Menjalankan Proyek

1️⃣ **Clone repository**:
   ```bash
   git clone https://github.com/Naufal2376/Resep-Naks-Kost
   cd Resep-Naks-Kost
   ```
2️⃣ **Install dependencies**:
   ```bash
   npm install
   ```
3️⃣ **Jalankan proyek**:
   ```bash
   npm run dev
   ```

🚀 Proyek akan berjalan di `http://localhost:3000/`.
