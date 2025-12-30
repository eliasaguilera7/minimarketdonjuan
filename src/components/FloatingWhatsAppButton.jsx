import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsAppButton({ whatsapp }) {
  return (
    <a
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-[#4B9F36] hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-900/30 z-50 transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp size={28} className="animate-pulse group-hover:animate-none" />
    </a>
  );
}
