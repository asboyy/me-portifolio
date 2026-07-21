// Definisikan struktur translasi multi-bahasa (Inggris & Indonesia)
export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    heading: string;
    bio: string;
    student: string;
    frontend: string;
    uiux: string;
    problemSolver: string;
  };
  skills: {
    heading: string;
  };
  projects: {
    heading: string;
    description: string;
    viewDetails: string;
    challenge: string;
    solution: string;
    keyFeatures: string;
    techStack: string;
    sourceCode: string;
    liveDemo: string;
    items: {
      [id: string]: {
        title: string;
        category: string;
        description: string;
        problem: string;
        solution: string;
        features: string[];
      };
    };
  };
  contact: {
    heading: string;
    dropLine: string;
    yourName: string;
    yourEmail: string;
    yourMessage: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMsg: string;
  };
  footer: {
    text: string;
    neobrutalist: string;
    fast: string;
  };
}

export const translations: Record<"en" | "id", TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      subtitle:
        "Hi, I'm Muhammad Fahmi. A passionate Software Engineering student building digital experiences.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      heading: "About",
      bio: "I am a Software Engineering student focused on Backend Development. I build functional systems and applications with an understanding of Front-End Development, UI/UX Design, and Video Editing to create more complete digital solutions.",
      student: "🎓 Student",
      frontend: "💻 Front-End Dev",
      uiux: "🎨 UI/UX Design",
      problemSolver: "⚡ Problem Solver",
    },
    skills: {
      heading: "Skills",
    },
    projects: {
      heading: "Projects & Works",
      description:
        "Swipe or scroll horizontally to explore my engineering projects.",
      viewDetails: "View Details",
      challenge: "⚠️ The Challenge",
      solution: "✅ The Solution",
      keyFeatures: "⭐ Key Features",
      techStack: "🔧 Tech Stack",
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
      items: {
        "ecommerce-redesign": {
          title: "E-Commerce App Redesign",
          category: "Mobile App Design & Dev",
          description:
            "High-fidelity mobile e-commerce redesign focusing on custom animations, seamless checkout flows, and user-centric interfaces.",
          problem:
            "Traditional mobile e-commerce apps suffer from high drop-off rates during checkout due to multi-step friction and cluttered interfaces.",
          solution:
            "Redesigned the app with a single-page drawer checkout, collapsible card components, and spring-based Micro-interactions to make shopping fluid.",
          features: [
            "Gesture-controlled swipe to add to cart",
            "Interactive 3D-like card payments container",
            "Fast checkouts with smart address completions",
            "Personalized product recommendation feeds based on user interest",
          ],
        },
        "smart-task-manager": {
          title: "Smart Task Manager",
          category: "Web App Development",
          description:
            "An intuitive daily planner with drag-and-drop task organizing, priority tagging, and offline-first client syncing.",
          problem:
            "Users often feel overwhelmed by giant to-do lists and fail to prioritize tasks that align with their active focus goals.",
          solution:
            "Created an elegant, neo-brutalist Kanban board featuring time-boxing, focus timers, and smart priority categorization.",
          features: [
            "Drag-and-drop boards using React DnD",
            "Pomodoro Timer with ambient sound synthesizer",
            "Daily productivity reports with interactive data graphs",
            "Robust offline sync utilizing LocalStorage and IndexedDB",
          ],
        },
        "saas-analytics-dashboard": {
          title: "SaaS Analytics Dashboard",
          category: "Fullstack Web App",
          description:
            "A high-performance SaaS monitoring dashboard with real-time user metrics, chart visualizations, and modular widgets.",
          problem:
            "Many monitoring dashboards lack modularity, leading to high CPU load when updating high-frequency analytical data in real-time.",
          solution:
            "Engineered a low-latency, modular widget dashboard backed by a light-weight Node/Express server and optimized D3 renderings.",
          features: [
            "Interactive live user-traffic bar charts and charts",
            "Customizable drag-reorder widget layout",
            "Exportable PDF and CSV weekly performance audits",
            "Fast and light data fetches with optimal client memoization",
          ],
        },
      },
    },
    contact: {
      heading: "Contact",
      dropLine: "Drop me a line",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent Successfully!",
      successDesc:
        "Thanks for reaching out! I will respond to your email shortly.",
      placeholderName: "Enter your name",
      placeholderEmail: "name@example.com",
      placeholderMsg: "What would you like to build together?",
    },
    footer: {
      text: "Fahmi. Built with modern React & Tailwind CSS.",
      neobrutalist: "🚀 Neo-Brutalist",
      fast: "⚡ Ultra Fast",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      subtitle:
        "Hai, saya Muhammad Fahmi. Seorang mahasiswa Rekayasa Perangkat Lunak yang berdedikasi tinggi dalam membangun pengalaman digital.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
    },
    about: {
      heading: "Tentang",
      bio: "Saya adalah mahasiswa Rekayasa Perangkat Lunak yang berfokus pada Backend Development. Saya membangun sistem dan aplikasi yang fungsional dengan pemahaman pada Front-End Development, UI/UX Design, serta Video Editing untuk menciptakan solusi digital yang lebih lengkap.",
      student: "🎓 Mahasiswa",
      frontend: "💻 Developer Front-End",
      uiux: "🎨 Desain UI/UX",
      problemSolver: "⚡ Pemecah Masalah",
    },
    skills: {
      heading: "Keahlian",
    },
    projects: {
      heading: "Proyek & Karya",
      description:
        "Geser atau gulir secara horizontal untuk menjelajahi proyek rekayasa saya.",
      viewDetails: "Lihat Detail",
      challenge: "⚠️ Tantangan",
      solution: "✅ Solusi",
      keyFeatures: "⭐ Fitur Utama",
      techStack: "🔧 Teknologi",
      sourceCode: "Kode Sumber",
      liveDemo: "Demo Langsung",
      items: {
        "ecommerce-redesign": {
          title: "Redesain Aplikasi E-Commerce",
          category: "Desain & Pengembangan Aplikasi Mobile",
          description:
            "Redesain e-commerce mobile berkualitas tinggi yang berfokus pada animasi kustom, alur checkout yang mulus, dan antarmuka ramah pengguna.",
          problem:
            "Aplikasi e-commerce mobile tradisional seringkali memiliki tingkat drop-off checkout yang tinggi karena alur yang rumit dan berantakan.",
          solution:
            "Mendesain ulang aplikasi dengan sistem checkout drawer satu halaman, komponen kartu lipat, dan mikro-interaksi berbasis pegas untuk navigasi yang lancar.",
          features: [
            "Geser gestur untuk menambahkan barang ke keranjang",
            "Wadah pembayaran kartu interaktif bergaya 3D",
            "Checkout cepat dengan pengisian alamat pintar",
            "Umpan rekomendasi produk personal berbasis preferensi pengguna",
          ],
        },
        "smart-task-manager": {
          title: "Manajer Tugas Pintar",
          category: "Pengembangan Aplikasi Web",
          description:
            "Perencana harian intuitif dengan pengaturan tugas seret-dan-lepas, tag prioritas, dan sinkronisasi klien luring pertama.",
          problem:
            "Pengguna sering merasa kewalahan dengan daftar tugas yang menumpuk dan kesulitan memprioritaskan tugas yang sesuai dengan fokus harian.",
          solution:
            "Membuat papan Kanban bergaya neo-brutalis yang dilengkapi pembatasan waktu (time-boxing), timer fokus, dan kategori prioritas pintar.",
          features: [
            "Papan seret-dan-lepas menggunakan React DnD",
            "Timer Pomodoro dengan synthesizer suara latar ambient",
            "Laporan produktivitas harian dengan grafik data interaktif",
            "Sinkronisasi luring yang andal menggunakan LocalStorage dan IndexedDB",
          ],
        },
        "saas-analytics-dashboard": {
          title: "Dasbor Analitis SaaS",
          category: "Aplikasi Web Fullstack",
          description:
            "Dasbor pemantauan SaaS berkinerja tinggi dengan metrik pengguna waktu nyata, visualisasi grafik, dan widget modular.",
          problem:
            "Banyak dasbor pemantauan kurang modular, menyebabkan beban CPU tinggi saat memperbarui data analitik frekuensi tinggi secara waktu nyata.",
          solution:
            "Merancang dasbor widget modular latensi rendah yang didukung oleh server Node/Express ringan dan rendering D3 yang dioptimalkan.",
          features: [
            "Grafik batang lalu lintas pengguna interaktif secara langsung",
            "Tata letak reorder widget dengan seret-dan-lepas",
            "Ekspor laporan mingguan berupa PDF dan CSV",
            "Pengambilan data cepat dan ringan dengan memoisasi klien optimal",
          ],
        },
      },
    },
    contact: {
      heading: "Hubungi",
      dropLine: "Hubungi Saya",
      yourName: "Nama Anda",
      yourEmail: "Email Anda",
      yourMessage: "Pesan Anda",
      sendButton: "Kirim Pesan",
      sending: "Mengirim...",
      successTitle: "Pesan Berhasil Terkirim!",
      successDesc:
        "Terima kasih telah menghubungi! Saya akan segera membalas email Anda.",
      placeholderName: "Masukkan nama Anda",
      placeholderEmail: "nama@contoh.com",
      placeholderMsg: "Apa yang ingin Anda bangun bersama?",
    },
    footer: {
      text: "Fahmi. Dibuat dengan React & Tailwind CSS modern.",
      neobrutalist: "🚀 Neo-Brutalis",
      fast: "⚡ Sangat Cepat",
    },
  },
};
