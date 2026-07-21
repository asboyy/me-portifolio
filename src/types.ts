// Definisikan struktur data untuk Keahlian (Skill)
export interface Skill {
  name: string; // Nama keahlian (contoh: React, TypeScript)
  iconName: string; // Nama ikon Lucide yang dipetakan
  color: string; // Warna latar belakang lencana (Neo-brutalisme)
  category: string; // Kategori keahlian (contoh: Frontend, Tools)
}

// Definisikan struktur data untuk Proyek (Project)
export interface Project {
  id: string; // ID unik proyek
  title: string; // Judul proyek
  category: string; // Kategori proyek (contoh: Web App, Mobile App)
  description: string; // Deskripsi singkat proyek
  imageUrl: string; // URL gambar proyek
  tags: string[]; // Tag teknologi atau fitur
  liveUrl?: string; // Tautan demo langsung (opsional)
  githubUrl?: string; // Tautan kode sumber GitHub (opsional)
  details: {
    // Rincian proyek lebih detail untuk modal
    problem: string; // Masalah yang ingin dipecahkan
    solution: string; // Solusi yang ditawarkan
    features: string[]; // Fitur-fitur utama proyek
    techStack: string[]; // Daftar lengkap teknologi yang digunakan
  };
}

// Definisikan struktur data untuk Saluran Kontak (ContactChannel)
export interface ContactChannel {
  name: string; // Nama platform (contoh: GitHub, Email)
  iconName: string; // Nama ikon Lucide yang dipetakan
  url: string; // Tautan ke profil atau email
  username: string; // Nama pengguna atau alamat email untuk ditampilkan
  color: string; // Warna latar belakang elemen (Neo-brutalisme)
}
