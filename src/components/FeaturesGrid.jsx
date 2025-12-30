export default function FeaturesGrid({ features }) {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.Icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-100"
              >
                <div className="bg-green-50 p-3 rounded-lg shadow-sm">
                  <Icon className="w-8 h-8 text-[#4B9F36]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1B2021]">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
