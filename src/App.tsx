/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsList from "./components/SkillsList";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ProjectModal from "./components/ProjectModal";
import { Project } from "./types";
import { translations } from "./translations";

export default function App() {
  // State untuk melacak ID bagian halaman yang saat ini sedang dilihat oleh pengguna (active section)
  const [activeSection, setActiveSection] = useState("home");
  // State untuk melacak proyek mana yang sedang dipilih untuk ditampilkan detailnya di Modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Menyetel bahasa default. Jika sudah tersimpan di penyimpanan lokal browser (local storage), gunakan itu, jika tidak gunakan bawaan "id" (Bahasa Indonesia)
  const [locale, setLocale] = useState<"en" | "id">(() => {
    const saved = localStorage.getItem("fahmi_portfolio_locale");
    if (saved === "en" || saved === "id") return saved;
    return "id";
  });

  // Fungsi untuk mengubah bahasa aktif dan menyimpannya di local storage browser
  const handleLocaleChange = (newLocale: "en" | "id") => {
    setLocale(newLocale);
    localStorage.setItem("fahmi_portfolio_locale", newLocale);
  };

  // Kamus terjemahan aktif berdasarkan locale yang dipilih
  const t = translations[locale];

  // Menggulung halaman (scroll) ke bagian tertentu secara halus (smooth scroll) ketika menu diklik
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Memantau peristiwa penggulungan halaman (scrolling) untuk memperbarui menu aktif secara otomatis menggunakan IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.3 } // Memicu callback saat 30% dari bagian halaman tersebut terlihat di viewport
      );

      observer.observe(el);
      return { observer, el };
    });

    // Melakukan pembersihan observer saat komponen dihancurkan (unmounted) untuk mencegah kebocoran memori
    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-black pb-12 selection:bg-yellow-300 selection:text-black">
      {/* Dynamic Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        locale={locale} 
        onLocaleChange={handleLocaleChange}
        translations={t.nav}
      />

      {/* Main Sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Banner Section */}
        <Hero 
          onViewProjects={() => handleNavigate("projects")} 
          onContactMe={() => handleNavigate("contact")} 
          translations={t.hero}
        />

        {/* Divider line */}
        <hr className="border-t-4 border-black my-4" />

        {/* About Bio Section */}
        <About translations={t.about} />

        {/* Divider line */}
        <hr className="border-t-4 border-black my-4" />

        {/* Skills Grid Section */}
        <SkillsList translations={t.skills} />

        {/* Divider line */}
        <hr className="border-t-4 border-black my-4" />

        {/* Projects Horizontal Swipeable Section */}
        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)} 
          translations={t.projects}
        />

        {/* Divider line */}
        <hr className="border-t-4 border-black my-4" />

        {/* Contact Links & Contact Form Section */}
        <ContactSection translations={t.contact} />
      </main>

      {/* Footer bar */}
      <footer className="mt-16 border-t-4 border-black bg-white py-8 text-center px-4 shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-extrabold text-sm text-black">
            © {new Date().getFullYear()} {t.footer.text}
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-yellow-200 border-2 border-black rounded-md text-xs font-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              {t.footer.neobrutalist}
            </span>
            <span className="px-3 py-1 bg-blue-200 border-2 border-black rounded-md text-xs font-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              {t.footer.fast}
            </span>
          </div>
        </div>
      </footer>

      {/* Detail view Modal popup overlay */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        translations={t.projects}
      />
    </div>
  );
}

