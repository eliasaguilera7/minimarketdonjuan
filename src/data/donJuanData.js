import {
  CreditCard,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const COLORS = {
  red: '#D12028',
  charcoal: '#1B2021',
  green: '#4B9F36',
  yellow: '#F4A900',
};

export const businessInfo = {
  name: 'Mini Market Don Juan',
  slogan: 'Calidad y frescura en tu barrio',
  logo: 'images/donjuanlogo2.png',
  whatsapp: '595981965254',
  whatsappDisplay: '0981 965 254',
  address: 'Sub Oficial Mayor Ignacio R. Verá C/ Avda Ykua Karanday.',
  pedidosYaUrl:
    'https://www.pedidosya.com.py/restaurantes/luque/minimarket-don-juan-df8c7efe-3166-447b-bafb-ab410735b387-menu',
  mapsQuery: 'Mini Market Don Juan, Sub Oficial Mayor Ignacio R. Verá y Avda Ykua Karanday',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Mini%20Market%20Don%20Juan%2C%20Sub%20Oficial%20Mayor%20Ignacio%20R.%20Ver%C3%A1%20y%20Avda%20Ykua%20Karanday',
  googleMapsEmbed:
    'https://www.google.com/maps?q=Mini%20Market%20Don%20Juan%2C%20Sub%20Oficial%20Mayor%20Ignacio%20R.%20Ver%C3%A1%20y%20Avda%20Ykua%20Karanday&output=embed',
  schedule: 'Lunes a Domingos: 06:30 - 00:00 hs',
};

export const promotions = [
  {
    id: 2,
    title: 'Promocion 1',
    description: 'Promoción especial',
    price: '',
    image: 'images/promo2.jpeg',
    tag: 'Promo',
  },
  {
    id: 3,
    title: 'Promocion 2',
    description: 'Promoción especial',
    price: '',
    image: 'images/promo3.jpeg',
    tag: 'Promo',
  },
];

export const updates = [
  {
    id: 1,
    title: 'Próximo servicio',
    description: 'Estamos anunciando un nuevo servicio que llegará próximamente. Mantente atento para más detalles.',
    image: 'images/anuncio1.jpeg',
  },
  {
    id: 2,
    title: 'Novedad',
    description: 'Nueva actualización disponible.',
    image: 'images/novedad1.jpeg',
  },
];

export const categories = [
  {
    name: 'Bebidas',
    image: 'images/coca-cola.jpg',
  },
  {
    name: 'Verdulería',
    image:
      'https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Limpieza',
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Carnicería',
    image:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=400&auto=format&fit=crop',
  },
];

export const features = [
  {
    Icon: Truck,
    title: 'Delivery Rápido',
    text: 'Llegamos a tu puerta en minutos.',
  },
  {
    Icon: ShieldCheck,
    title: 'Productos Frescos',
    text: 'Calidad garantizada todos los días.',
  },
  {
    Icon: CreditCard,
    title: 'Todos los Pagos',
    text: 'Aceptamos QR, tarjetas y efectivo.',
  },
];

export const testimonials = [
  {
    name: 'Shirley Cardozo',
    text: 'Muy buena atención',
    stars: 5,
  },
  {
    name: 'Hugo Vera Baez',
    text: 'Buena atención',
    stars: 5,
  },
  {
    name: 'Gabriel Schneiderman',
    text: 'Bien surtido!!! Excelentes precios!!!',
    stars: 5,
  },
];
