import { FaWhatsapp } from 'react-icons/fa';

export default function PromotionsSection({ promotions, onWhatsApp }) {
  return (
    <section id="promos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#D12028] font-bold tracking-wider text-sm uppercase">Ahorrá hoy</span>
          <h2 className="text-3xl font-bold text-[#1B2021] mt-2">Ofertas de la Semana</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="w-full relative overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="max-h-72 md:max-h-96 w-auto object-contain transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#F4A900] text-[#1B2021] text-sm md:text-base font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {promo.tag}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1B2021] mb-2">{promo.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">{promo.description}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-3xl font-extrabold text-[#D12028]">{promo.price}</span>
                    {promo.oldPrice ? (
                      <span className="text-sm text-gray-400 line-through">{promo.oldPrice}</span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={onWhatsApp}
                    className="w-full bg-[#D12028] text-white py-3 rounded-xl font-bold hover:bg-red-700 transition flex justify-center items-center gap-2 shadow-md"
                  >
                    <FaWhatsapp size={18} />
                    Pedir ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
