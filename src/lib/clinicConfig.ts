import i18next from "i18next";

export const clinic = {
  name: "Espaco Sueli Pereira",
  tagline: i18next.t("clinic.tagline"),
  whatsappNumber: "554396169287", // Número internacional para WhatsApp sem caracteres especiais
  whatsappDisplay: i18next.t("clinic.whatsappDisplay"),
  phone: i18next.t("clinic.phone"),
  email: i18next.t("clinic.mail"),
  address: i18next.t("clinic.address"),
  addressShort: i18next.t("clinic.addressShort"),

  hours: [
    {
      day: i18next.t("clinic.hours.weekdays"),
      time: "08h — 19h",
    },
    {
      day: i18next.t("clinic.hours.saturday"),
      time: "08h — 17h",
    },
    {
      day: i18next.t("clinic.hours.sunday"),
      time: i18next.t("clinic.hours.closed"),
    },
  ],

  // NOVA localização do Google Maps
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117289.89581596253!2d-51.22903440080711!3d-23.26821050220205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb43b442274551%3A0xc4269f9ed1b06cae!2sEspa%C3%A7o%20Sueli%20Pereira%2C%20Fisioterapia%20manual%2C%20massoterapia%20e%20est%C3%A9tica%20integrativa!5e0!3m2!1spt-BR!2sbr!4v1791237850793!5m2!1spt-BR!2sbr",

  // Link para abrir a localização no Google Maps
  mapsLink:
    "https://maps.app.goo.gl/RNoMkpomP6TQV9XM7",

  social: {
    instagram:
      "https://www.instagram.com/fisiosuelipereira?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    google: "https://google.com",
  },

  googleRating: {
    score: 4.9,
    count: 218,
    url: "https://google.com",
  },
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(
    message ?? i18next.t("clinic.whatsappDefaultMessage")
  )}`;

export const navLinks = [
  {
    label: i18next.t("menu.home"),
    href: "#inicio",
  },
  {
    label: i18next.t("menu.sobre"),
    href: "#sobre",
  },
  {
    label: i18next.t("menu.tratamentos"),
    href: "#tratamentos",
  },
  {
    label: i18next.t("menu.resultados"),
    href: "#resultados",
  },
  {
    label: i18next.t("menu.especialistas"),
    href: "#especialistas",
  },
  {
    label: i18next.t("menu.depoimentos"),
    href: "#depoimentos",
  },
  {
    label: i18next.t("menu.contato"),
    href: "#contato",
  },
];

export type Treatment = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

// export const treatments: Treatment[] = [
//   {
//     id: "Limpeza de pele",
//     name: i18next.t("treatments.Limpeza de pele.name"),
//     category: i18next.t("treatments.categories.facial"),
//     description: i18next.t(
//       "treatments.rejuvenescimento.description"
//     ),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
//   {
//     id: "Microagulhamento facial",
//     name: i18next.t("treatments.harmonizacao.name"),
//     category: i18next.t("treatments.categories.facial"),
//     description: i18next.t(
//       "treatments.harmonizacao.description"
//     ),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
//   {
//     id: "Peeling facial",
//     name: i18next.t("treatments.laser.name"),
//     category: i18next.t("treatments.categories.technology"),
//     description: i18next.t("treatments.laser.description"),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
//   {
//     id: "Massagem Detox facial",
//     name: i18next.t("treatments.corporal.name"),
//     category: i18next.t("treatments.categories.body"),
//     description: i18next.t("treatments.corporal.description"),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
//   {
//     id: "Pós-Operatório de cirurgia plástica",
//     name: i18next.t("treatments.corporal.name"),
//     category: i18next.t("treatments.categories.body"),
//     description: i18next.t("treatments.corporal.description"),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
//   {
//     id: "Drenagem Linfática",
//     name: i18next.t("treatments.corporal.name"),
//     category: i18next.t("treatments.categories.body"),
//     description: i18next.t("treatments.corporal.description"),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
//   {
//     id: "Massagem Detox Corporal",
//     name: i18next.t("treatments.corporal.name"),
//     category: i18next.t("treatments.categories.body"),
//     description: i18next.t("treatments.corporal.description"),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
//   {
//     id: "Pilates",
//     name: i18next.t("treatments.corporal.name"),
//     category: i18next.t("treatments.categories.body"),
//     description: i18next.t("treatments.corporal.description"),
//     image:
//       "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
//   },
// ];

export const treatments: Treatment[] = [
  {
    id: "Limpeza de pele",
    name: "Limpeza de pele",
    category: "Facial",
    description:
      "Limpeza profunda para remover impurezas, desobstruir os poros e melhorar a aparência da pele.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "Microagulhamento facial",
    name: "Microagulhamento facial",
    category: "Facial",
    description:
      "Procedimento estético que estimula a renovação da pele e auxilia na melhora da textura e aparência.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "Peeling facial",
    name: "Peeling facial",
    category: "Facial",
    description:
      "Tratamento que promove a renovação da pele, contribuindo para uma textura mais uniforme.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "Massagem Detox facial",
    name: "Massagem Detox facial",
    category: "Facial",
    description:
      "Massagem facial voltada ao relaxamento e à melhora da aparência da pele.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "Pós-Operatório de cirurgia plástica",
    name: "Pós-operatório de cirurgia plástica",
    category: "Corporal",
    description:
      "Acompanhamento fisioterapêutico individualizado para auxiliar na recuperação após cirurgia plástica.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "Drenagem Linfática",
    name: "Drenagem linfática",
    category: "Corporal",
    description:
      "Técnica manual que auxilia o fluxo linfático e pode contribuir para a redução de inchaços, conforme indicação profissional.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "Massagem Detox Corporal",
    name: "Massagem Detox corporal",
    category: "Corporal",
    description:
      "Massagem corporal voltada ao relaxamento e ao bem-estar.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "Pilates",
    name: "Pilates",
    category: "Corporal",
    description:
      "Prática de exercícios que trabalha força, flexibilidade, equilíbrio e consciência corporal, com orientação profissional.",
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
];


export type Doctor = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    id: "Sueli pereira",
    name: "Sueli pereira",
    title: i18next.t("doctors.titles.dermatologist"),
    specialty: i18next.t("Fisioterapia e cuidado para o seu corpo"),
    experience: i18next.t("17 anos de experiência"),
    image:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
];

const resultsValues = {
    "eyebrow": "Resultados reais",
    "title": "Resultados que",
    "title_2": "falam por si.",
    "description": "Veja transformações reais e descubra o impacto de um tratamento pensado para você.",
    "ver_todos": "Ver todos os resultados",
    "antes": "Antes",
    "depois": "Depois",
    "aviso": "",
    "r1": {
      "treatment": "Microagulhamento Facial",
      "description": "Pele mais luminosa e uniforme após protocolo personalizado.",
      "timeframe": ""
    },
    "r2": {
      "treatment": "Limpeza de pele",
      "description": "Redução visível de manchas com tecnologia de laser.",
      "timeframe": ""
    }
  }

export type ResultPair = {
  id: string;
  treatment: string;
  description: string;
  timeframe: string;
  after: string;
};

export const results: ResultPair[] = [
  {
    id: "r1",
    treatment: resultsValues.r1.treatment,
    description: resultsValues.r1.description,
    timeframe: resultsValues.r1.timeframe,
    after:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
  {
    id: "r2",
    treatment: resultsValues.r2.treatment,
    description: resultsValues.r2.description,
    timeframe: resultsValues.r2.timeframe,
    after:
      "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg",
  },
];

// Testimonials — structured to receive real Google Business Profile reviews.
// Replace `reviews` with data fetched from the Google Places API.
export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
};

export type TestimonialData = {
  aggregate: {
    score: number;
    count: number;
    source: string;
  };
  reviews: Review[];
  googleUrl: string;
};

export const testimonials: TestimonialData = {
  aggregate: {
    score: clinic.googleRating.score,
    count: clinic.googleRating.count,
    source: i18next.t("testimonials.source"),
  },

  googleUrl: clinic.googleRating.url,

  reviews: [
    {
      id: "t1",
      author: "Carla M.",
      rating: 5,
      text: i18next.t("testimonials.t1.text"),
      date: i18next.t("testimonials.t1.date"),
      verified: true,
    },
    {
      id: "t2",
      author: "Renata S.",
      rating: 5,
      text: i18next.t("testimonials.t2.text"),
      date: i18next.t("testimonials.t2.date"),
      verified: true,
    },
    {
      id: "t3",
      author: "Beatriz L.",
      rating: 5,
      text: i18next.t("testimonials.t3.text"),
      date: i18next.t("testimonials.t3.date"),
      verified: true,
    },
  ],
};

export const heroImage = 'https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg';

export const aboutImage =
  "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg";

export const featuredImage =
  "https://res.cloudinary.com/xiupvhfs/image/upload/v1792096918/WhatsApp_Image_2026-10-12_at_17.58.34.jpg";