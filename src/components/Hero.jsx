import { useEffect, useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function getAsuncionMinutesNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/Asuncion',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0');
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');
  return hour * 60 + minute;
}

function parseHours(schedule) {
  const match = schedule?.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
  if (!match) return { startMinutes: 6 * 60 + 30, endMinutes: 24 * 60 };

  const [startH, startM] = match[1].split(':').map(Number);
  const [endH, endM] = match[2].split(':').map(Number);

  const startMinutes = startH * 60 + startM;
  const endMinutes = (endH === 0 && endM === 0 ? 24 : endH) * 60 + endM;

  return { startMinutes, endMinutes };
}

export default function Hero({ logoSrc, slogan, schedule, onWhatsApp, onPedidosYa }) {
  const { startMinutes, endMinutes } = useMemo(() => parseHours(schedule), [schedule]);
  const [minutesNow, setMinutesNow] = useState(() => getAsuncionMinutesNow());

  useEffect(() => {
    const id = setInterval(() => setMinutesNow(getAsuncionMinutesNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  const isOpen = minutesNow >= startMinutes && minutesNow < endMinutes;

  return (
    <header className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <div className="bg-[#1B2021] px-6 py-5 rounded-2xl shadow-lg border border-white/10 ring-1 ring-[#D12028]/30">
              <img
                src={logoSrc}
                alt="Mini Market Don Juan"
                className="h-24 md:h-28 lg:h-32 w-auto object-contain"
              />
            </div>
          </div>
          <div
            className={
              isOpen
                ? 'inline-flex items-center gap-2 bg-[#4B9F36]/15 text-[#4B9F36] px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-[#4B9F36]/25'
                : 'inline-flex items-center gap-2 bg-[#D12028]/15 text-[#D12028] px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-[#D12028]/25'
            }
          >
            <span
              className={
                isOpen
                  ? 'w-2 h-2 rounded-full bg-[#4B9F36] animate-pulse'
                  : 'w-2 h-2 rounded-full bg-[#D12028]'
              }
            ></span>
            {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1B2021] mb-6 leading-tight tracking-tight">
            {slogan}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
            Encontrá desde frutas frescas hasta bebidas frías. Todo lo que tu hogar necesita, a la vuelta de la esquina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              type="button"
              onClick={onWhatsApp}
              className="bg-[#D12028] hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-red-900/20 flex justify-center items-center gap-2 transition transform hover:-translate-y-1"
            >
              <FaWhatsapp size={20} />
              <span>Pedir por WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={onPedidosYa}
              className="bg-white hover:bg-gray-100 text-[#D12028] border-2 border-[#D12028] font-bold py-3.5 px-8 rounded-xl shadow-lg flex justify-center items-center gap-2 transition transform hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
              <span>PedidosYa</span>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="bg-[#F4A900] rounded-full p-2 absolute -top-4 -right-4 z-20 shadow-lg animate-bounce">
            <span className="text-[#1B2021] font-bold text-xs px-2">¡OFERTAS!</span>
          </div>
          <img
            src="images/minimercado4.jpeg"
            alt="Mini Market Don Juan"
            className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500 border-4 border-white"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-[#D12028]/20 to-transparent rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </header>
  );
}
