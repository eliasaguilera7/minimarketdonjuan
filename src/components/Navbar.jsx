import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar({ onWhatsApp }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#D12028] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-end items-center">

        <div className="hidden md:flex space-x-8 items-center font-medium text-white">
          <a href="#categorias" className="hover:text-[#F4A900] transition">
            Productos
          </a>
          <a href="#promos" className="hover:text-[#F4A900] transition">
            Ofertas
          </a>
          <a href="#nosotros" className="hover:text-[#F4A900] transition">
            Nosotros
          </a>
          <a href="#ubicacion" className="hover:text-[#F4A900] transition">
            Contacto
          </a>
          <button
            type="button"
            onClick={onWhatsApp}
            className="bg-[#4B9F36] hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-bold transition shadow-lg flex items-center gap-2 border-2 border-transparent hover:border-white"
          >
            <FaWhatsapp size={18} />
            <span>Hacer Pedido</span>
          </button>
        </div>

        <div className="md:hidden text-white">
          <button type="button" onClick={() => setIsMenuOpen((v) => !v)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#D12028] border-t border-red-700 px-4 py-4 space-y-4 shadow-xl">
          <a
            href="#categorias"
            className="block text-white font-medium hover:text-[#F4A900]"
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </a>
          <a
            href="#promos"
            className="block text-white font-medium hover:text-[#F4A900]"
            onClick={() => setIsMenuOpen(false)}
          >
            Ofertas
          </a>
          <a
            href="#nosotros"
            className="block text-white font-medium hover:text-[#F4A900]"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </a>
          <a
            href="#ubicacion"
            className="block text-white font-medium hover:text-[#F4A900]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              onWhatsApp();
            }}
            className="w-full bg-[#4B9F36] text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </button>
        </div>
      )}
    </nav>
  );
}
