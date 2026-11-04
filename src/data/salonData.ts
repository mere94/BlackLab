import { ServiceItem, StepItem, GalleryItem, BusinessHours } from '../types';

export const SALON_INFO = {
  name: 'BLACK LAB',
  companyName: 'Black Lab Hair Spa',
  subtitle: 'HAIR SPA · TORINO',
  address: 'Corso Casale, 205/I',
  cityPostal: '10132 Torino (TO)',
  vatNumber: 'IT13202390012',
  rea: 'TO-1320239',
  chamberOfCommerce: 'Registro Imprese di Torino',
  pec: 'blacklabhs@pec.it',
  email: 'info@blacklabhairspa.it',
  phone: '+39 375 946 0567',
  phoneHref: 'tel:+393759460567',
  bookingUrl: 'https://wa.me/393759460567?text=Buongiorno%2C%20vorrei%20prenotare%20un%20appuntamento.',
  bewellyUrl: 'https://www.bewelly.it/black-lab-torino-6844',
  whatsappUrl: 'https://wa.me/393759460567?text=Buongiorno%2C%20vorrei%20un%20consiglio%20per%20i%20miei%20capelli.',
  whatsappBookingUrl: 'https://wa.me/393759460567?text=Buongiorno%2C%20vorrei%20prenotare%20un%20appuntamento.',
  whatsappGeneralUrl: 'https://wa.me/393759460567',
  instagramUrl: 'https://www.instagram.com/blacklabhairspa/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Black+Lab+Hair+Spa+Corso+Casale+205%2FI+Torino',
  logoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWei-PTUcSZ8OxYM5sgjZNK5u9bxRp2S2Xrcj_BHhp_e97qJSo=w72-h72-p-rp-mo-br100',
  heroImageUrl: './assets/images/01_BlackLab_874b6428.jpeg',
  featureImageUrl: './assets/images/02_BlackLab_99db5a4b.jpg',
  methodImageUrl: './assets/images/03_BlackLab_56623de4.jpeg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'hair-care',
    number: '01',
    title: 'Hair care',
    description: 'Nutrimento, idratazione profonda e trattamenti mirati per ritrovare equilibrio, forza e vitalità.',
    details: 'Protocolli rigeneranti per capelli secchi, sfibrati o trattati chimicamente. Utilizziamo formule ricche di principi attivi naturali per ripristinare il film idrolipidico e la naturale elasticità della fibra capillare.'
  },
  {
    id: 'colore',
    number: '02',
    title: 'Colore',
    description: 'Studio del colore, balayage e riflessi pensati per armonizzarsi con la tua pelle e la tua personalità.',
    details: 'Consulenza cromatica accurata, schiariture sfumate, gloss lucidanti e tonalizzazioni delicate. Ogni nuance viene calibrata su misura per valorizzare il tuo incarnato e la luminosità del viso.'
  },
  {
    id: 'disciplina',
    number: '03',
    title: 'Disciplina',
    description: 'Soluzioni anticrespo, stirature e trattamenti texturizzanti per gestire ogni volume, nel rispetto del capello.',
    details: 'Trattamenti alla cheratina, laminazione organica e disciplinanti anticrespo duraturi che facilitano lo styling quotidiano a casa, lasciando le lunghezze morbide, sane e corpose.'
  },
  {
    id: 'hair-spa',
    number: '04',
    title: 'Hair spa',
    description: 'Un momento di puro relax dedicato alla cura, al massaggio e al benessere profondo di cute e lunghezze.',
    details: 'Esperienza sensoriale completa: scrub e detossinazione cutanea, massaggio linfodrenante al lavatesta, impacchi con panni caldi e aromaterapia per un autentico stacco dallo stress.'
  }
];

export const METHOD_STEPS: StepItem[] = [
  {
    number: '01 / Consulenza',
    label: '01 / Consulenza',
    title: 'Conosciamoci'
  },
  {
    number: '02 / Diagnosi',
    label: '02 / Diagnosi',
    title: 'Capire i capelli'
  },
  {
    number: '03 / Percorso',
    label: '03 / Percorso',
    title: 'Scegliere insieme'
  },
  {
    number: '04 / Risultato',
    label: '04 / Risultato',
    title: 'Prendersene cura'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    imageUrl: './assets/images/01_BlackLab_-_Lo_Spazio_f4867ed1.jpeg',
    title: 'Lo spazio',
    caption: '01 / Black Lab · Lo spazio',
    alt: 'Postazioni styling, specchi e arredo moderno di Black Lab Hair Spa in Corso Casale a Torino'
  },
  {
    id: 2,
    imageUrl: './assets/images/02_BlackLab_-_Prodotti_6542038b.jpeg',
    title: 'Prodotti',
    caption: '02 / Black Lab · Prodotti',
    alt: 'Piega a onde morbide con sfumature balayage bionde e prodotti professionali per capelli'
  },
  {
    id: 3,
    imageUrl: './assets/images/03_BlackLab_-_Relax_41d18916.jpeg',
    title: 'Relax',
    caption: '03 / Black Lab · Relax',
    alt: 'Hairstyle biondo platino luminoso con styling a onde e consulenza su misura'
  },
  {
    id: 4,
    imageUrl: './assets/images/04_BlackLab_-Design_7e7f8f73.jpeg',
    title: 'Design',
    caption: '04 / Black Lab · Design',
    alt: 'Taglio caschetto bob moderno con sfumature castane e bionde'
  },
  {
    id: 5,
    imageUrl: './assets/images/05_BlackLab_-_Cura_64f19a65.jpeg',
    title: 'Cura',
    caption: '05 / Black Lab · Cura',
    alt: 'Diagnosi e consulenza personalizzata della cute con microcamera professionale tricologica'
  },
  {
    id: 6,
    imageUrl: './assets/images/06_BlackLab_-_Atmosfera_bdcca2c1.jpeg',
    title: 'Atmosfera',
    caption: '06 / Black Lab · Atmosfera',
    alt: 'Sfumature calde balayage caramello su capelli lunghi scalati a Torino'
  },
  {
    id: 7,
    imageUrl: './assets/images/07_BlackLab_-_Listino_640db05a.jpeg',
    title: 'Listino Prezzi',
    caption: '07 / Black Lab · Listino',
    alt: 'Listino prezzi ufficiale di Black Lab Hair Spa Torino con costi di taglio, piega, colore e trattamenti hair spa'
  }
];

export const SCHEDULE: BusinessHours[] = [
  { day: 'Lunedì', hours: 'Chiuso', isClosed: true },
  { day: 'Martedì', hours: '9:00 - 18:00' },
  { day: 'Mercoledì', hours: '9:00 - 18:00' },
  { day: 'Giovedì', hours: '12:00 - 20:30' },
  { day: 'Venerdì', hours: '9:00 - 18:00' },
  { day: 'Sabato', hours: '9:00 - 18:00' },
  { day: 'Domenica', hours: 'Chiuso', isClosed: true }
];
