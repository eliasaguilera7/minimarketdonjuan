import { FaInfoCircle } from 'react-icons/fa';

export default function UpdatesSection({ updates, onWhatsApp }) {
  if (!updates || updates.length === 0) return null;

  return (
    <section id="updates" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-[#D12028] font-bold tracking-wider text-sm uppercase">Novedades</span>
          <h2 className="text-3xl font-bold text-[#1B2021] mt-2">Actualizaciones</h2>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {updates.map((u) => (
            <div key={u.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="w-full flex items-center justify-center bg-gray-50">
                <img src={u.image} alt={u.title} className="w-auto max-h-72 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1B2021] mb-2">{u.title}</h3>
                <p className="text-gray-600 mb-4">{u.description}</p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onWhatsApp}
                    className="inline-flex items-center gap-2 bg-[#D12028] text-white py-2 px-4 rounded-xl font-bold hover:bg-red-700 transition"
                  >
                    <FaInfoCircle /> Más info
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
