import { ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FinalCTA({ onWhatsApp, onPedidosYa }) {
  return (
    <section className="py-14 bg-[#D12028] relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Te antojaste de algo?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          No te quedes con las ganas. Escribinos ahora mismo o buscanos en tu app favorita y te lo llevamos a la
          puerta de tu casa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onWhatsApp}
            className="bg-[#4B9F36] hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg border-2 border-transparent transition transform hover:-translate-y-1 flex justify-center items-center gap-2"
          >
            <FaWhatsapp size={24} />
            <span>Pedir por WhatsApp Ahora</span>
          </button>
          <button
            type="button"
            onClick={onPedidosYa}
            className="bg-white hover:bg-gray-100 text-[#D12028] font-bold py-4 px-8 rounded-xl shadow-lg border-2 border-white transition transform hover:-translate-y-1 flex justify-center items-center gap-2"
          >
            <ExternalLink className="w-6 h-6" />
            <span>Ir a PedidosYa</span>
          </button>
        </div>
      </div>
    </section>
  );
}
