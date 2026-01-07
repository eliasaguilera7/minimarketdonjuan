import { FaFacebook } from 'react-icons/fa';

export default function Footer({ name }) {
  return (
    <footer className="bg-[#1B2021] text-gray-500 py-10 border-t border-[#2A3031]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h3 className="text-white font-bold text-xl tracking-tight">{name}</h3>
          <p className="text-sm mt-2 max-w-xs mx-auto md:mx-0">Calidad, precio y la mejor atención de barrio.</p>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} {name}. Paraguay.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/1DRq2CuThK/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#F4A900] flex items-center gap-3"
            aria-label="Compartir en Facebook"
          >
            <FaFacebook size={60} />
            <span className="text-white font-semibold">Minimarket Don Juan Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
