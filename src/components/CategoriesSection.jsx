import { ChevronRight } from 'lucide-react';

export default function CategoriesSection({ categories }) {
  return (
    <section id="categorias" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2021]">Nuestras Secciones</h2>
            <div className="h-1 w-20 bg-[#D12028] mt-2 rounded-full"></div>
          </div>
          <button
            type="button"
            className="hidden md:flex items-center text-[#D12028] font-bold hover:text-red-700"
          >
            Ver todo <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-md cursor-pointer border border-gray-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1B2021]/80 via-[#1B2021]/20 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-lg">{cat.name}</span>
              </div>
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-[#D12028] text-white p-1 rounded-full">
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
