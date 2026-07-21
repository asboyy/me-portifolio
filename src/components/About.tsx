import { motion } from "motion/react";
import { TranslationSchema } from "../translations";

// Properti untuk komponen Tentang (About)
interface AboutProps {
  translations: TranslationSchema["about"]; // Objek lokalisasi teks untuk bagian About
}

export default function About({ translations }: AboutProps) {
  return (
    <section id="about" className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center">
        {/* Judul Bagian */}
        <motion.h2 
          className="text-4xl sm:text-5xl font-black text-black mb-8 tracking-tight text-center uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {translations.heading}
        </motion.h2>

        {/* Wadah Kartu Biografi */}
        <motion.div 
          className="w-full bg-white border-4 border-black p-6 sm:p-10 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg sm:text-xl font-bold text-gray-800 leading-relaxed text-center sm:text-justify">
            {translations.bio}
          </p>
          
          {/* Lencana Info Cepat Bergaya Neo-Brutalis */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-yellow-300 text-black border-2 border-black font-extrabold text-sm rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {translations.student}
            </span>
            <span className="px-4 py-2 bg-purple-300 text-black border-2 border-black font-extrabold text-sm rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {translations.frontend}
            </span>
            <span className="px-4 py-2 bg-green-300 text-black border-2 border-black font-extrabold text-sm rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {translations.uiux}
            </span>
            <span className="px-4 py-2 bg-pink-300 text-black border-2 border-black font-extrabold text-sm rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {translations.problemSolver}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
