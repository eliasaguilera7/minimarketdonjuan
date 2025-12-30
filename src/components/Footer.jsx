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
      </div>
    </footer>
  );
}
