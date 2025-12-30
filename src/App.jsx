import AboutSection from './components/AboutSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturesGrid from './components/FeaturesGrid';
import FinalCTA from './components/FinalCTA';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LocationSection from './components/LocationSection';
import Navbar from './components/Navbar';
import PromotionsSection from './components/PromotionsSection';
import UpdatesSection from './components/UpdatesSection';
import TestimonialsSection from './components/TestimonialsSection';
import TopBar from './components/TopBar';
import {
  businessInfo,
  categories,
  features,
  promotions,
  updates,
  testimonials,
} from './data/donJuanData';

export default function App() {
  const handleWhatsApp = () => {
    const message = 'Hola Don Juan, estoy viendo la web y quiero hacer un pedido.';
    window.open(
      `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
    );
  };

  const handlePedidosYa = () => {
    window.open(businessInfo.pedidosYaUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1B2021]">
      <TopBar schedule={businessInfo.schedule} />
      <Navbar onWhatsApp={handleWhatsApp} />
      <Hero
        logoSrc={`${import.meta.env.BASE_URL}${businessInfo.logo}`}
        slogan={businessInfo.slogan}
        schedule={businessInfo.schedule}
        onWhatsApp={handleWhatsApp}
        onPedidosYa={handlePedidosYa}
      />
      <FeaturesGrid features={features} />
      <CategoriesSection categories={categories} />
      <AboutSection />
      <PromotionsSection promotions={promotions} onWhatsApp={handleWhatsApp} />
      <UpdatesSection updates={updates} onWhatsApp={handleWhatsApp} />
      <TestimonialsSection testimonials={testimonials} />
      <LocationSection
        address={businessInfo.address}
        schedule={businessInfo.schedule}
        whatsapp={businessInfo.whatsapp}
        whatsappDisplay={businessInfo.whatsappDisplay}
        mapsUrl={businessInfo.mapsUrl}
        googleMapsEmbed={businessInfo.googleMapsEmbed}
      />
      <FinalCTA onWhatsApp={handleWhatsApp} onPedidosYa={handlePedidosYa} />
      <Footer name={businessInfo.name} />
      <FloatingWhatsAppButton whatsapp={businessInfo.whatsapp} />
    </div>
  );
}
