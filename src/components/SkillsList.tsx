import { motion } from "motion/react";
import { SKILLS } from "../data";
import { TranslationSchema } from "../translations";
import LucideIcon from "./LucideIcon";

// Properti untuk komponen SkillsList
interface SkillsListProps {
  translations: TranslationSchema["skills"]; // Objek lokalisasi teks untuk bagian Skills
}

export default function SkillsList({ translations }: SkillsListProps) {
  return (
    <section id="skills" className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center">
        {/* Judul Bagian */}
        <motion.h2 
          className="text-4xl sm:text-5xl font-black text-black mb-10 tracking-tight text-center uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {translations.heading}
        </motion.h2>

        {/* Tata Letak Grid Keahlian */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white border-4 border-black rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Wadah Ikon dengan warna latar belakang khusus masing-masing teknologi */}
              <div className={`w-14 h-14 ${skill.color} text-white rounded-xl border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-200`}>
                <LucideIcon name={skill.iconName} size={28} />
              </div>

              {/* Nama Keahlian */}
              <h3 className="text-lg font-black text-black tracking-tight">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
