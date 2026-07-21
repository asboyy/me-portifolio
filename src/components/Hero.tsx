import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { PERSONAL_INFO } from "../data";
import { TranslationSchema } from "../translations";

// Properti untuk komponen Hero
interface HeroProps {
  onViewProjects: () => void; // Fungsi callback untuk berpindah ke bagian Proyek
  onContactMe: () => void; // Fungsi callback untuk berpindah ke bagian Kontak
  translations: TranslationSchema["hero"]; // Objek lokalisasi konten teks Hero
}

// Koleksi kelas font yang bergantian untuk efek animasi kreatif "Hello"
const fonts = [
  { id: 0, class: "font-poppins" },
  { id: 1, class: "font-bebas" },
  { id: 2, class: "font-display" },
  { id: 3, class: "font-outfit" },
  { id: 4, class: "font-sora" },
  { id: 5, class: "font-playfair" },
];

export default function Hero({
  onViewProjects,
  onContactMe,
  translations,
}: HeroProps) {
  const [fontIndex, setFontIndex] = useState(0);

  // Mengubah indeks font secara berkala setiap 3.5 detik (jeda 2.8s + transisi 0.7s)
  useEffect(() => {
    const timer = setInterval(() => {
      setFontIndex((prev: number) => (prev + 1) % fonts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Listener scroll halaman yang dioptimalkan kinerjanya
  const { scrollY } = useScroll();

  // Mengubah nilai skala abu-abu (grayscale) dari 1.0 ke 0.0 berdasarkan jarak scroll (0-250px)
  const grayscaleValue = useTransform(scrollY, [0, 250], [1, 0]);
  const filterValue = useTransform(
    grayscaleValue,
    (val: number) => `grayscale(${val})`,
  );

  return (
    <section
      id="home"
      className="py-12 md:py-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* 1. Animated Greeting ("Hello") - Kept fixed in place to prevent any layout shifts */}
      <div className="h-24 sm:h-32 flex items-center justify-center mb-6 select-none w-full">
        <AnimatePresence mode="wait">
          <motion.span
            key={fontIndex}
            className={`text-6xl sm:text-8xl font-black text-black tracking-tight ${fonts[fontIndex].class}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            Hello
          </motion.span>
        </AnimatePresence>
      </div>

      {/* 2. Profile Photo - Features an elegant loading entry & dynamic color scroll transition */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8,
        }}
      >
        <div className="bg-white p-3 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center overflow-hidden">
          <motion.img
            src={PERSONAL_INFO.avatarUrl}
            alt="Fahmi's portrait"
            className="w-full h-full object-cover rounded-xl border-2 border-black"
            style={{ filter: filterValue }}
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* 3. Short Introduction */}
      <motion.div
        className="max-w-2xl px-2 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-xl sm:text-2xl font-extrabold text-black tracking-tight leading-relaxed">
          {translations.subtitle}
        </p>
      </motion.div>

      {/* 4. Call-to-action Buttons */}
      <motion.div
        className="w-full max-w-md flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button
          onClick={onViewProjects}
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-black tracking-wider border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 cursor-pointer"
        >
          {translations.viewProjects}
        </button>

        <button
          onClick={onContactMe}
          className="w-full sm:w-auto px-8 py-4 bg-[#2563eb] text-white text-lg font-black tracking-wider border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 cursor-pointer"
        >
          {translations.contactMe}
        </button>
      </motion.div>
    </section>
  );
}
