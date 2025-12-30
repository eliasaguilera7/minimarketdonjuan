import { Heart, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16 bg-[#1B2021] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D12028] rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4B9F36] rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="images/minimercado2.jpeg"
                alt="Mini Market Don Juan"
                className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500 border-4 border-[#D12028]/50"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-[#1B2021] p-4 rounded-xl shadow-lg max-w-xs hidden md:block border-l-4 border-[#D12028]">
                <p className="font-bold text-lg">&quot;Tu vecino de confianza&quot;</p>
                <p className="text-sm text-gray-500">Desde 2015</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <span className="text-[#D12028] font-bold tracking-wider text-sm uppercase mb-2 block">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Más que un mercado, somos familia</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Mini Market Don Juan nació con la idea de acercar productos frescos y de calidad a las familias del
              barrio. Entendemos que no solo vendemos productos, sino que somos parte de tu día a día: desde el
              desayuno hasta la cena.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Heart className="text-[#D12028] w-5 h-5" />
                <span>Atención personalizada y amable</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-[#4B9F36] w-5 h-5" />
                <span>Compromiso con la calidad</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
