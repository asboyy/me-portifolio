import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { TranslationSchema } from "../translations";
import LucideIcon from "./LucideIcon";

// Properti untuk komponen ProjectModal
interface ProjectModalProps {
  project: Project | null; // Objek proyek yang dipilih untuk ditampilkan, atau null jika ditutup
  onClose: () => void; // Fungsi callback untuk menutup modal
  translations: TranslationSchema["projects"]; // Objek lokalisasi teks untuk modal proyek
}

export default function ProjectModal({
  project,
  onClose,
  translations,
}: ProjectModalProps) {
  // Jika tidak ada proyek yang aktif (null), jangan merender apapun
  if (!project) return null;

  // Mendapatkan teks bahasa yang sesuai dengan ID proyek
  const localized = translations.items[project.id] || {
    title: project.title,
    category: project.category,
    problem: project.details.problem,
    solution: project.details.solution,
    features: project.details.features,
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Lapisan Latar Belakang Gelap (Backdrop overlay) */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Panel Konten Utama Modal */}
        <motion.div
          className="relative bg-white border-4 border-black rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Header Modal */}
          <div className="sticky top-0 bg-white border-b-4 border-black p-4 flex justify-between items-center z-20">
            <div>
              <span className="text-xs font-black tracking-widest text-blue-600 uppercase bg-blue-100 px-2 py-1 rounded border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] mr-2">
                {localized.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-black mt-1">
                {localized.title}
              </h3>
            </div>

            {/* Tombol Tutup Kustom Bergaya Neo-Brutalis */}
            <button
              onClick={onClose}
              className="p-2 border-2 border-black bg-white rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 cursor-pointer"
              aria-label="Close details"
            >
              <LucideIcon name="X" size={20} className="text-black" />
            </button>
          </div>

          {/* Isi Modal (Modal Body) */}
          <div className="p-6 space-y-6">
            {/* Gambar Proyek Utama */}
            <div className="border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] aspect-video">
              <img
                src={project.imageUrl}
                alt={localized.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Rincian Masalah & Solusi (Challenge & Solution) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 bg-red-50 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-red-800 text-sm uppercase tracking-wider mb-2">
                  {translations.challenge}
                </h4>
                <p className="text-sm font-bold text-gray-800 leading-relaxed">
                  {localized.problem}
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green-50 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-green-800 text-sm uppercase tracking-wider mb-2">
                  {translations.solution}
                </h4>
                <p className="text-sm font-bold text-gray-800 leading-relaxed">
                  {localized.solution}
                </p>
              </div>
            </div>

            {/* Fitur Utama */}
            <div>
              <h4 className="font-black text-black text-base uppercase tracking-wider mb-3">
                {translations.keyFeatures}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {localized.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm font-bold text-gray-700"
                  >
                    <span className="text-green-600 mt-0.5 shrink-0">
                      <LucideIcon name="CheckCircle" size={16} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Daftar Tumpukan Teknologi (Tech Stack) */}
            <div>
              <h4 className="font-black text-black text-base uppercase tracking-wider mb-3">
                {translations.techStack}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.details.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-yellow-100 text-black border-2 border-black font-extrabold text-xs rounded-lg shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bagian Tombol Aksi Kaki Modal */}
          <div className="sticky bottom-0 bg-white border-t-4 border-black p-4 flex flex-col sm:flex-row gap-3 justify-end z-20">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black text-white text-sm font-black tracking-wider border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 text-center flex items-center justify-center gap-2"
            >
              <LucideIcon name="Github" size={16} />
              <span>{translations.sourceCode}</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-black tracking-wider border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 text-center flex items-center justify-center gap-2"
            >
              <LucideIcon name="ExternalLink" size={16} />
              <span>{translations.liveDemo}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
