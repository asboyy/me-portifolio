import { useState } from "react";
import LucideIcon from "./LucideIcon";
import { TranslationSchema } from "../translations";

// Properti untuk komponen Navbar
interface NavbarProps {
  activeSection: string; // Bagian halaman yang sedang aktif saat ini
  onNavigate: (sectionId: string) => void; // Fungsi callback untuk navigasi antar bagian
  locale: "en" | "id"; // Bahasa aktif saat ini ("en" untuk Inggris, "id" untuk Indonesia)
  onLocaleChange: (newLocale: "en" | "id") => void; // Fungsi callback untuk mengubah bahasa
  translations: TranslationSchema["nav"]; // Objek lokalisasi menu navigasi
}

export default function Navbar({ activeSection, onNavigate, locale, onLocaleChange, translations }: NavbarProps) {
  // State untuk menyimpan apakah menu seluler (mobile menu) sedang terbuka atau ditutup
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Daftar item menu yang akan dirender di navigasi
  const menuItems = [
    { label: translations.home, id: "home" },
    { label: translations.about, id: "about" },
    { label: translations.skills, id: "skills" },
    { label: translations.projects, id: "projects" },
    { label: translations.contact, id: "contact" }
  ];

  // Fungsi untuk menangani klik item menu baik di versi desktop maupun mobile
  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false); // Otomatis tutup menu seluler setelah diklik
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-y-4 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nama Brand */}
          <button 
            onClick={() => handleItemClick("home")}
            className="text-2xl font-black tracking-wider text-black hover:scale-105 transition-transform duration-100 flex items-center gap-1 cursor-pointer"
          >
            FAHMI<span className="text-blue-600 font-extrabold">.</span>
          </button>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3.5 py-1.5 text-sm font-bold border-2 transition-all duration-150 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-x-[1px] -translate-y-[1px]"
                    : "text-black border-transparent hover:border-black hover:bg-gray-100 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Tombol Pemilih Bahasa (Inggris / Indonesia) */}
            <button
              onClick={() => onLocaleChange(locale === "en" ? "id" : "en")}
              className="ml-2 px-3 py-1.5 bg-yellow-300 text-black border-2 border-black font-extrabold text-xs rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-yellow-400 transition-all flex items-center gap-1.5 cursor-pointer uppercase"
            >
              <span>🌐 {locale === "en" ? "ID" : "EN"}</span>
            </button>
          </div>

          {/* Panel Tombol Menu Seluler dan Pengalih Bahasa Cepat */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Pengalih Bahasa Cepat di Seluler */}
            <button
              onClick={() => onLocaleChange(locale === "en" ? "id" : "en")}
              className="px-2.5 py-1.5 bg-yellow-300 text-black border-2 border-black font-extrabold text-xs rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-yellow-400 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>{locale === "en" ? "ID" : "EN"}</span>
            </button>

            {/* Tombol Buka/Tutup Drawer Menu Seluler */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-gray-100 transition-all rounded"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <LucideIcon name="X" size={24} className="text-black" />
              ) : (
                <LucideIcon name="Menu" size={24} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Seluler Drawer (Tampil ketika tombol menu di klik) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-white p-4 space-y-2 animate-fadeIn">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`w-full text-left px-4 py-3 text-lg font-black border-2 border-black rounded transition-all flex justify-between items-center cursor-pointer ${
                activeSection === item.id
                  ? "bg-blue-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-y-[-2px] translate-x-[-2px]"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <span>{item.label}</span>
              <LucideIcon name="ArrowRight" size={18} className={activeSection === item.id ? "text-white" : "text-black"} />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
