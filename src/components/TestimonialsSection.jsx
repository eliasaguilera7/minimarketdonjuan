import { Star } from 'lucide-react';

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B2021]">Lo que dicen nuestros vecinos</h2>
          <p className="text-gray-500 mt-2">La confianza de nuestros clientes es nuestra mejor garantía.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="flex gap-1 mb-4 text-[#F4A900]">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D12028]/10 rounded-full flex items-center justify-center font-bold text-[#D12028]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#1B2021]">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
