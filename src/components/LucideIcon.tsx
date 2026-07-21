import { 
  Smartphone, 
  Figma, 
  Atom, 
  FileCode2, 
  Layers, 
  Code2, 
  Server, 
  GitBranch, 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Instagram,
  MessageCircle,
  X, 
  ExternalLink,
  ArrowRight,
  Send,
  CheckCircle,
  Menu
} from "lucide-react";

// Properti yang diterima oleh komponen LucideIcon
interface LucideIconProps {
  name: string;        // Nama ikon Lucide yang ingin ditampilkan
  className?: string;  // Kelas Tailwind tambahan (opsional)
  size?: number;       // Ukuran ikon piksel (opsional, bawaan 24)
}

// Komponen pembungkus untuk memetakan nama string ke komponen ikon Lucide yang sesuai
export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  switch (name) {
    case "Smartphone":
      return <Smartphone className={className} size={size} />;
    case "Figma":
      return <Figma className={className} size={size} />;
    case "Atom":
      return <Atom className={className} size={size} />;
    case "FileCode2":
      return <FileCode2 className={className} size={size} />;
    case "Layers":
      return <Layers className={className} size={size} />;
    case "Code2":
      return <Code2 className={className} size={size} />;
    case "Server":
      return <Server className={className} size={size} />;
    case "GitBranch":
      return <GitBranch className={className} size={size} />;
    case "Github":
      return <Github className={className} size={size} />;
    case "Linkedin":
      return <Linkedin className={className} size={size} />;
    case "Mail":
      return <Mail className={className} size={size} />;
    case "Twitter":
      return <Twitter className={className} size={size} />;
    case "Instagram":
      return <Instagram className={className} size={size} />;
    case "MessageCircle":
      return <MessageCircle className={className} size={size} />;
    case "X":
      return <X className={className} size={size} />;
    case "ExternalLink":
      return <ExternalLink className={className} size={size} />;
    case "ArrowRight":
      return <ArrowRight className={className} size={size} />;
    case "Send":
      return <Send className={className} size={size} />;
    case "CheckCircle":
      return <CheckCircle className={className} size={size} />;
    case "Menu":
      return <Menu className={className} size={size} />;
    default:
      return <Code2 className={className} size={size} />;
  }
}
