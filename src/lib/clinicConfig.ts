import beforeFacial from "@/assets/before-facial.jpg";
import beforeFacial2 from "@/assets/before-facial2.jpg";
import heroimg from "@/assets/hero.png";
import i18next from "i18next";

export const clinic = {
  name: "Veloura",
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

export const treatments: Treatment[] = [
  {
    id: "rejuvenescimento",
    name: i18next.t("treatments.rejuvenescimento.name"),
    category: i18next.t("treatments.categories.facial"),
    description: i18next.t(
      "treatments.rejuvenescimento.description"
    ),
    image:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/ed82589ca_generated_38596ff6.png",
  },
  {
    id: "harmonizacao",
    name: i18next.t("treatments.harmonizacao.name"),
    category: i18next.t("treatments.categories.facial"),
    description: i18next.t(
      "treatments.harmonizacao.description"
    ),
    image:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/33f25b361_generated_7b8b7ca2.png",
  },
  {
    id: "laser",
    name: i18next.t("treatments.laser.name"),
    category: i18next.t("treatments.categories.technology"),
    description: i18next.t("treatments.laser.description"),
    image:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/2887bd121_generated_b3a00f8f.png",
  },
  {
    id: "corporal",
    name: i18next.t("treatments.corporal.name"),
    category: i18next.t("treatments.categories.body"),
    description: i18next.t("treatments.corporal.description"),
    image:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/7a585ecf0_generated_e9080043.png",
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
    id: "dra-aishwarya",
    name: "Dra. Aishwara Vidal",
    title: i18next.t("doctors.titles.dermatologist"),
    specialty: i18next.t("doctors.draAishwarya.specialty"),
    experience: i18next.t("doctors.draAishwarya.experience"),
    image:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/9438ddce6_generated_ac3d2d88.png",
  },
  {
    id: "dra-meera",
    name: "Dra. Marina Nunes",
    title: i18next.t("doctors.titles.dermatologist"),
    specialty: i18next.t("doctors.draMeera.specialty"),
    experience: i18next.t("doctors.draMeera.experience"),
    image:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/9512a6b85_generated_17f3bc1d.png",
  },
  {
    id: "dra-rhea",
    name: "Dra. Helena Castro",
    title: i18next.t("doctors.titles.specialist"),
    specialty: i18next.t("doctors.draRhea.specialty"),
    experience: i18next.t("doctors.draRhea.experience"),
    image:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/97cff2f89_generated_7c5d24c5.png",
  },
];

export type ResultPair = {
  id: string;
  treatment: string;
  description: string;
  timeframe: string;
  before: string;
  after: string;
};

export const results: ResultPair[] = [
  {
    id: "r1",
    treatment: i18next.t("results.r1.treatment"),
    description: i18next.t("results.r1.description"),
    timeframe: i18next.t("results.r1.timeframe"),
    before: beforeFacial,
    after:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/d5c8c82f6_generated_3b02c0ef.png",
  },
  {
    id: "r2",
    treatment: i18next.t("results.r2.treatment"),
    description: i18next.t("results.r2.description"),
    timeframe: i18next.t("results.r2.timeframe"),
    before: beforeFacial2,
    after:
      "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/ff2da31df_generated_ceb9e980.png",
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

export const heroImage = heroimg;

export const aboutImage =
  "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/6142bc0bf_generated_ef5f6ed8.png";

export const featuredImage =
  "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/940f902e5_generated_02fadd40.png";