import { Clock } from 'lucide-react';

export default function TopBar({ schedule }) {
  return (
    <div className="bg-[#1B2021] text-white text-xs py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <Clock size={14} className="text-[#F4A900]" /> {schedule}
        </span>
        <span className="hidden md:inline">Envíos a todo el barrio sin costo mínimo</span>
      </div>
    </div>
  );
}
