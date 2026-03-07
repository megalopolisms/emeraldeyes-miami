"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "es" | "pt" | "de" | "fr" | "zh" | "ja";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

const VALID_LANGS: Lang[] = ["en", "es", "pt", "de", "fr", "zh", "ja"];

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang") as Lang | null;
  if (urlLang && VALID_LANGS.includes(urlLang)) return urlLang;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const t = (key: string): string => {
    const dict = translations[lang] ?? translations.en;
    return dict[key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Chat messages
    "chat.welcome":
      "Welcome to Emerald Eyes Miami. Let's build your perfect day on the water.",
    "chat.occasion": "What's the occasion?",
    "chat.groupSize": "Great choice! How many guests?",
    "chat.date": "When are you thinking?",
    "chat.email": "What's your email? We'll send the quote there.",
    "chat.phone": "And your phone number?",
    "chat.duration": "How long on the water?",
    "chat.addons": "Want to make it unforgettable? Pick as many as you'd like:",
    "chat.pickup": "Where are you staying? We can pick you up.",
    "chat.contact": "Almost there. How do we reach you?",
    "chat.summary": "Here's your experience:",
    "chat.confirmation": "We'll confirm within 1 hour. Talk soon!",
    // Chat UI
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "Yacht Rentals",
    "chat.online": "online",
    "chat.repliesIn": "replies in",
    "chat.typing": "typing...",
    "chat.back": "Back",
    "chat.restart": "restart",
    "chat.continue": "Continue",
    "chat.skip": "Skip",
    "chat.ok": "OK",
    "chat.sendRequest": "Send My Request",
    "chat.sending": "Sending...",
    "chat.continueWhatsApp": "Continue on WhatsApp",
    "chat.or": "or",
    "chat.planAnother": "Plan Another Trip",
    "chat.reviewQuote": "Review My Quote",
    // Chat summary
    "summary.yourCharter": "Your Charter",
    "summary.occasion": "Occasion",
    "summary.guests": "Guests",
    "summary.date": "Date",
    "summary.duration": "Duration",
    "summary.addons": "Add-ons",
    "summary.pickup": "Pickup",
    "summary.estimate": "Estimate",
    "summary.disclaimer":
      "Planning range. Final quote confirmed within 1 hour.",
    // Contact form
    "form.name": "Your name",
    "form.phone": "Phone number",
    "form.email": "Email",
    "form.notes": "Special requests (optional)",
    "form.required": "Required",
    "form.validEmail": "Enter a valid email",
    // Occasion reactions
    "reaction.birthday": "Happy birthday! Let's make it one to remember.",
    "reaction.bachelor": "Oh it's going to be a movie. Let's set it up.",
    "reaction.sunset":
      "The golden hour on the water hits different. Great pick.",
    "reaction.proposal":
      "We love a good love story. Let's plan the perfect moment.",
    "reaction.corporate":
      "Impressive setting for impressive people. Let's talk details.",
    "reaction.vibes": "No agenda, just ocean. We got you.",
    // Options
    "opt.birthday": "Birthday",
    "opt.bachelor": "Bachelor/ette",
    "opt.sunset": "Sunset Date",
    "opt.proposal": "Proposal",
    "opt.corporate": "Corporate",
    "opt.vibes": "Just Vibes",
    "opt.intimate": "Intimate",
    "opt.smallGroup": "Small group",
    "opt.party": "Party",
    "opt.bigGroup": "Big group",
    "opt.event": "Event",
    "opt.2hr": "2 Hours",
    "opt.4hr": "4 Hours",
    "opt.8hr": "8 Hours",
    "opt.fullday": "Full Day",
    "opt.multiday": "Multi-Day",
    "opt.customQuote": "Custom quote",
    "opt.photo": "Photo Package",
    "opt.sushi": "Sushi Chef",
    "opt.dj": "DJ / Music",
    "opt.bottles": "Bottle Service",
    "opt.jetski": "Jet Skis",
    "opt.transport": "Transport",
    "opt.hookah": "Hookah",
    "opt.cigar": "Cigar Lounge",
    "opt.sax": "Live Sax Player",
    "opt.none": "Keep It Simple",
    "opt.self": "I'll get there myself",
    // Trust
    "trust.responds": "Responds in 1 hour",
    "trust.charters": "100+ charters/year",
    // Scroll
    "scroll.label": "Scroll",
    // Sasha section
    "sasha.role": "Partner & Director of Operations",
    "sasha.title": "Meet",
    "sasha.name": "Sasha",
    "sasha.p1":
      "Born and raised in Miami, Sasha holds a degree in Merchant Marine Science and has spent her career on the water. As our partner and Director of Operations, she personally oversees every charter — from the first message to the moment you step back on the dock.",
    "sasha.p2.pre":
      "When she's not coordinating charters, you'll find her on a",
    "sasha.p2.jetski": "jet ski",
    "sasha.p2.mid":
      ", diving, or exploring the coastline she knows like the back of her hand. With",
    "sasha.p2.hundred": "over a hundred rentals a year",
    "sasha.p2.post":
      "across Biscayne Bay, Haulover, and the Gulf Stream, Sasha brings the kind of hands-on knowledge that only comes from",
    "sasha.p2.living": "living",
    "sasha.p2.end": "this life — not just managing it.",
    "sasha.quote":
      "My favorite part? Making sure every guest walks away saying it was the best day they've ever had on the water.",
    "sasha.badge1": "Merchant Marine Graduate",
    "sasha.badge2": "100+ Charters / Year",
    "sasha.badge3": "Miami Local & Water Enthusiast",
    // Below-fold sections
    "exp.title": "Experiences",
    "exp.subtitle":
      "Every charter is designed around your occasion. Pick one, or let us create something custom.",
    "sax.label": "Signature Add-On",
    "sax.title.pre": "Live ",
    "sax.title.highlight": "Sax",
    "sax.title.post": " on the Water",
    "sax.p1":
      "Imagine cruising through Biscayne Bay as the sun melts into the horizon — and a professional saxophonist sets the soundtrack to your evening. Smooth jazz, deep house remixes, or soulful melodies — the vibe is yours to choose.",
    "sax.p2":
      "Whether it's a sunset date, a proposal, or a night out with friends, live sax transforms your charter into something cinematic. It's the detail guests never expect — and never forget.",
    "sax.quote":
      "The moment the sax hit during golden hour, everyone just stopped and looked at each other. Pure magic.",
    "sax.badge1": "Professional Musician",
    "sax.badge2": "Perfect for Sunset Cruises",
    "sax.badge3": "Jazz, House & Soul",
    "sushi.label": "Signature Add-On",
    "sushi.title.pre": "Private ",
    "sushi.title.highlight": "Sushi Chef",
    "sushi.p1":
      "A dedicated sushi chef boards your yacht with the freshest ingredients Miami has to offer — and prepares an omakase-style experience right before your eyes. Nigiri, sashimi, specialty rolls, all crafted on deck while you cruise.",
    "sushi.p2":
      "Whether it's a corporate event, a birthday celebration, or an intimate date night, a live sushi bar elevates your charter into a five-star dining experience — surrounded by nothing but ocean and skyline.",
    "sushi.quote":
      "Fresh tuna, open water, sunset views. It doesn't get better than this.",
    "sushi.badge1": "Omakase-Style Service",
    "sushi.badge2": "Professional Chef On Board",
    "sushi.badge3": "Freshest Local Ingredients",
    "trust.uscg": "USCG Inspected",
    "trust.uscg.sub": "Fully compliant & safe vessels",
    "trust.captains": "Licensed Captains",
    "trust.captains.sub": "Experienced professional crew",
    "trust.location": "North Miami Based",
    "trust.location.sub": "Haulover, Aventura, Sunny Isles",
    "why.title": "Why Emerald Eyes",
    "why.1.title": "Curated, Not Generic",
    "why.1.text":
      "Every charter is tailored to your group, your vibe, your vision.",
    "why.2.title": "We Handle Everything",
    "why.2.text": "From pickup to playlist to photos — you just show up.",
    "why.3.title": "North Miami Native",
    "why.3.text":
      "We know these waters. Haulover, Biscayne, Sunny Isles, the Gulf Stream — this is home.",
    "how.title": "How It Works",
    "how.1.title": "Chat With Us",
    "how.1.text":
      "Tell us the occasion, group size, and date. We build a quote in minutes.",
    "how.2.title": "We Confirm",
    "how.2.text":
      "Get your custom itinerary with pricing, yacht details, and add-ons.",
    "how.3.title": "Board & Enjoy",
    "how.3.text":
      "We handle every detail. You just step aboard and make memories.",
  },

  es: {
    // Chat messages
    "chat.welcome":
      "Bienvenido a Emerald Eyes Miami. Vamos a crear tu dia perfecto en el agua.",
    "chat.occasion": "Cual es la ocasion?",
    "chat.groupSize": "Excelente eleccion! Cuantos invitados?",
    "chat.date": "Cuando estas pensando?",
    "chat.email": "Cual es tu email? Enviaremos la cotizacion ahi.",
    "chat.phone": "Y tu numero de telefono?",
    "chat.duration": "Cuanto tiempo en el agua?",
    "chat.addons": "Quieres hacerlo inolvidable? Elige los que quieras:",
    "chat.pickup": "Donde te hospedas? Podemos recogerte.",
    "chat.contact": "Ya casi. Como te contactamos?",
    "chat.summary": "Tu experiencia:",
    "chat.confirmation": "Confirmaremos en 1 hora. Hablamos pronto!",
    // Chat UI
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "Alquiler de Yates",
    "chat.online": "en linea",
    "chat.repliesIn": "responde en",
    "chat.typing": "escribiendo...",
    "chat.back": "Atras",
    "chat.restart": "reiniciar",
    "chat.continue": "Continuar",
    "chat.skip": "Omitir",
    "chat.ok": "OK",
    "chat.sendRequest": "Enviar Mi Solicitud",
    "chat.sending": "Enviando...",
    "chat.continueWhatsApp": "Continuar en WhatsApp",
    "chat.or": "o",
    "chat.planAnother": "Planear Otro Viaje",
    "chat.reviewQuote": "Revisar Mi Cotizacion",
    // Chat summary
    "summary.yourCharter": "Tu Charter",
    "summary.occasion": "Ocasion",
    "summary.guests": "Invitados",
    "summary.date": "Fecha",
    "summary.duration": "Duracion",
    "summary.addons": "Extras",
    "summary.pickup": "Recogida",
    "summary.estimate": "Estimado",
    "summary.disclaimer":
      "Rango estimado. Cotizacion final confirmada en 1 hora.",
    // Contact form
    "form.name": "Tu nombre",
    "form.phone": "Numero de telefono",
    "form.email": "Correo electronico",
    "form.notes": "Solicitudes especiales (opcional)",
    "form.required": "Requerido",
    "form.validEmail": "Ingresa un email valido",
    // Occasion reactions
    "reaction.birthday": "Feliz cumpleanos! Vamos a hacerlo inolvidable.",
    "reaction.bachelor": "Va a ser de pelicula. Vamos a armarlo.",
    "reaction.sunset": "La hora dorada en el agua es otra cosa. Gran eleccion.",
    "reaction.proposal":
      "Nos encanta una buena historia de amor. Planifiquemos el momento perfecto.",
    "reaction.corporate":
      "Un escenario impresionante para gente impresionante.",
    "reaction.vibes": "Sin agenda, solo oceano. Te tenemos.",
    // Options
    "opt.birthday": "Cumpleanos",
    "opt.bachelor": "Despedida",
    "opt.sunset": "Atardecer",
    "opt.proposal": "Propuesta",
    "opt.corporate": "Corporativo",
    "opt.vibes": "Solo Vibras",
    "opt.intimate": "Intimo",
    "opt.smallGroup": "Grupo pequeno",
    "opt.party": "Fiesta",
    "opt.bigGroup": "Grupo grande",
    "opt.event": "Evento",
    "opt.2hr": "2 Horas",
    "opt.4hr": "4 Horas",
    "opt.8hr": "8 Horas",
    "opt.fullday": "Dia Completo",
    "opt.multiday": "Varios Dias",
    "opt.customQuote": "Cotizacion personalizada",
    "opt.photo": "Paquete de Fotos",
    "opt.sushi": "Chef de Sushi",
    "opt.dj": "DJ / Musica",
    "opt.bottles": "Servicio de Botellas",
    "opt.jetski": "Motos de Agua",
    "opt.transport": "Transporte",
    "opt.hookah": "Hookah",
    "opt.cigar": "Sala de Puros",
    "opt.sax": "Saxofonista en Vivo",
    "opt.none": "Mantenerlo Simple",
    "opt.self": "Llego por mi cuenta",
    // Trust
    "trust.responds": "Responde en 1 hora",
    "trust.charters": "100+ charters/ano",
    // Scroll
    "scroll.label": "Desliza",
    // Sasha section
    "sasha.role": "Socia y Directora de Operaciones",
    "sasha.title": "Conoce a",
    "sasha.name": "Sasha",
    "sasha.p1":
      "Nacida y criada en Miami, Sasha tiene un titulo en Ciencia de la Marina Mercante y ha dedicado su carrera al agua. Como nuestra socia y Directora de Operaciones, supervisa personalmente cada charter — desde el primer mensaje hasta que regresas al muelle.",
    "sasha.p2.pre":
      "Cuando no esta coordinando charters, la encontraras en una",
    "sasha.p2.jetski": "moto de agua",
    "sasha.p2.mid":
      ", buceando, o explorando la costa que conoce como la palma de su mano. Con",
    "sasha.p2.hundred": "mas de cien alquileres al ano",
    "sasha.p2.post":
      "en Biscayne Bay, Haulover y el Gulf Stream, Sasha trae el tipo de conocimiento practico que solo viene de",
    "sasha.p2.living": "vivir",
    "sasha.p2.end": "esta vida — no solo administrarla.",
    "sasha.quote":
      "Mi parte favorita? Asegurarme de que cada invitado se vaya diciendo que fue el mejor dia de su vida en el agua.",
    "sasha.badge1": "Graduada en Marina Mercante",
    "sasha.badge2": "100+ Charters / Ano",
    "sasha.badge3": "Local de Miami y Amante del Agua",
    // Below-fold sections
    "exp.title": "Experiencias",
    "exp.subtitle":
      "Cada charter esta disenado para tu ocasion. Elige uno, o dejanos crear algo a medida.",
    "sax.label": "Servicio Exclusivo",
    "sax.title.pre": "Sax ",
    "sax.title.highlight": "en Vivo",
    "sax.title.post": " en el Agua",
    "sax.p1":
      "Imagina navegar por Biscayne Bay mientras el sol se funde en el horizonte — y un saxofonista profesional pone la banda sonora de tu velada. Jazz suave, remixes de deep house o melodias llenas de alma — la vibra es tu eleccion.",
    "sax.p2":
      "Ya sea una cita al atardecer, una propuesta de matrimonio o una noche con amigos, el sax en vivo transforma tu charter en algo cinematografico. Es el detalle que nadie espera — y nadie olvida.",
    "sax.quote":
      "Cuando el sax sono durante la hora dorada, todos se miraron. Magia pura.",
    "sax.badge1": "Musico Profesional",
    "sax.badge2": "Perfecto para Atardeceres",
    "sax.badge3": "Jazz, House y Soul",
    "sushi.label": "Servicio Exclusivo",
    "sushi.title.pre": "Chef de ",
    "sushi.title.highlight": "Sushi Privado",
    "sushi.p1":
      "Un chef de sushi dedicado sube a tu yate con los ingredientes mas frescos de Miami — y prepara una experiencia estilo omakase ante tus ojos. Nigiri, sashimi, rolls especiales, todo elaborado en cubierta mientras navegas.",
    "sushi.p2":
      "Ya sea un evento corporativo, un cumpleanos o una cita intima, un bar de sushi en vivo eleva tu charter a una experiencia gastronomica de cinco estrellas — rodeado solo de oceano y horizonte.",
    "sushi.quote":
      "Atun fresco, mar abierto, vistas al atardecer. No hay nada mejor.",
    "sushi.badge1": "Servicio Estilo Omakase",
    "sushi.badge2": "Chef Profesional a Bordo",
    "sushi.badge3": "Ingredientes Locales Frescos",
    "trust.uscg": "Inspeccion USCG",
    "trust.uscg.sub": "Embarcaciones seguras y certificadas",
    "trust.captains": "Capitanes Licenciados",
    "trust.captains.sub": "Tripulacion profesional con experiencia",
    "trust.location": "Base en North Miami",
    "trust.location.sub": "Haulover, Aventura, Sunny Isles",
    "why.title": "Por Que Emerald Eyes",
    "why.1.title": "Curado, No Generico",
    "why.1.text": "Cada charter se adapta a tu grupo, tu estilo, tu vision.",
    "why.2.title": "Nos Encargamos de Todo",
    "why.2.text":
      "Desde el transporte hasta la playlist y las fotos — tu solo apareces.",
    "why.3.title": "Nativos de North Miami",
    "why.3.text":
      "Conocemos estas aguas. Haulover, Biscayne, Sunny Isles, el Gulf Stream — esto es casa.",
    "how.title": "Como Funciona",
    "how.1.title": "Escríbenos",
    "how.1.text":
      "Dinos la ocasion, cuantos son y la fecha. Armamos tu cotizacion en minutos.",
    "how.2.title": "Confirmamos",
    "how.2.text":
      "Recibe tu itinerario personalizado con precios, detalles del yate y extras.",
    "how.3.title": "Sube a Bordo",
    "how.3.text":
      "Nosotros manejamos cada detalle. Tu solo sube y crea recuerdos.",
  },

  // Placeholder for other languages — fallback to English
  pt: {} as Record<string, string>,
  de: {} as Record<string, string>,
  fr: {} as Record<string, string>,
  zh: {} as Record<string, string>,
  ja: {} as Record<string, string>,
};
