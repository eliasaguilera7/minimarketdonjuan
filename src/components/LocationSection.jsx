import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';

export default function LocationSection({
  address,
  schedule,
  whatsapp,
  whatsappDisplay,
  mapsUrl,
  googleMapsEmbed,
}) {
  return (
    <section id="ubicacion" className="py-16 bg-[#1B2021] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">¿Dónde estamos?</h2>
              <p className="text-gray-400 text-lg">
                Acercate a nuestro local o pedí delivery. Estamos en el corazón del barrio.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#2A3031] p-3 h-fit rounded-lg">
                  <MapPin className="text-[#D12028]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Dirección</h4>
                  <p className="text-gray-300 mt-1">{address}</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#D12028] text-sm hover:underline mt-2 inline-flex items-center gap-1"
                  >
                    Abrir en Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#2A3031] p-3 h-fit rounded-lg">
                  <Clock className="text-[#D12028]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horario de Atención</h4>
                  <p className="text-gray-300 mt-1">{schedule}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#2A3031] p-3 h-fit rounded-lg">
                  <Phone className="text-[#D12028]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Contacto Directo</h4>
                  <p className="text-[#F4A900] font-mono text-xl mt-1">
                    {whatsappDisplay ?? `+${whatsapp}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#2A3031] relative">
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
