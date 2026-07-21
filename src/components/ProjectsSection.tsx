import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { TranslationSchema } from "../translations";

// Properti untuk komponen ProjectsSection
interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void; // Fungsi callback ketika sebuah proyek diklik untuk menampilkan modal
  translations: TranslationSchema["projects"]; // Objek lokalisasi teks untuk bagian Projects
}

export default function ProjectsSection({ onSelectProject, translations }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col">
        {/* Judul Bagian */}
        <motion.h2 
          className="text-4xl sm:text-5xl font-black text-black mb-4 tracking-tight text-center uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {translations.heading}
        </motion.h2>
        
        <p className="text-center font-bold text-gray-600 mb-10 max-w-md mx-auto">
          {translations.description}
        </p>

        {/* Tata Letak Geser Horisontal (Carousel) */}
        <div className="flex overflow-x-auto pb-8 pt-2 px-2 gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
          {PROJECTS.map((project, index) => {
            // Melakukan translasi deskripsi & judul proyek berdasarkan locale yang aktif
            const localized = translations.items[project.id] || {
              title: project.title,
              category: project.category,
              description: project.description
            };

            return (
              <motion.div
                key={project.id}
                className="min-w-[280px] sm:min-w-[340px] max-w-[380px] bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 snap-start flex flex-col justify-between"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Gambar Kartu Proyek dan Lencana Tag */}
                <div className="relative border-b-4 border-black aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={localized.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-yellow-300 text-black border-2 border-black font-extrabold text-xs rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                    {project.tags[0]}
                  </span>
                </div>

                {/* Konten Utama Kartu Proyek */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="text-xs font-black tracking-wider text-blue-600 uppercase">
                      {localized.category}
                    </span>
                    <h3 className="text-xl font-black text-black mt-1 line-clamp-1">
                      {localized.title}
                    </h3>
                    <p className="text-sm font-bold text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                      {localized.description}
                    </p>
                  </div>

                  {/* Lencana Kecil Teknologi yang Digunakan */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-800 border border-black font-bold text-[10px] rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Interaktif untuk Buka Detail */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 bg-white text-black font-black tracking-wider border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 text-center cursor-pointer"
                  >
                    {translations.viewDetails}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
