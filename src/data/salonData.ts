import { ServiceItem, StepItem, GalleryItem, BusinessHours } from '../types';

export const SALON_INFO = {
  name: 'BLACK LAB',
  subtitle: 'HAIR SPA · TORINO',
  address: 'Corso Casale, 205/I',
  cityPostal: '10132 Torino (TO)',
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
  heroImageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0TkFxmi8TsKRQ2WsdwL0gCElc84uPMhxFx6qqGJjjBvtE13Yue1Fe0XqWkUdwKKvFx5SDBThT5F_wgtgQTBKb5ijlcSkzZSLaZ_RAlX3kdabW7ML3KKatarTJ44bDLEXlMTWenYyrVnqy=s680-w680-h510-rw',
  featureImageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S8yY_b7HeKNiWV25UYhb64dXvJQqvMihUTJOP8DB2h_F2-M-cy8r-a3j-VDQeeH9zKTB1SvZ5q-ekAnIiCoQBWQv27Hpps2o-aHGikY89DAmEnbPnvn3imFW9L2hQ13tcKAWRb1ffP011v=s680-w680-h510-rw',
  methodImageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SoVvH9fDRS5eTekEQKXbdgHRgYXu9z4r6FkaiQTk5TWi8n8TSuENnIJO6A8e-N242JnmU7at0vU2-R8h5wScyr7NMgDLtigjIqjTLH_26U7QUPYPPlaIF5qRFDZTm9Ew0WL4cb0Il572D7=s680-w680-h510-rw',
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
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SGIUWxKgoNy3p6LRc-kiSAhoz0O0xnJE3JywItpbwHXpWvUdkYnGBwIT4zMYXAnprQLCGyZmR5T4DrW0EKVTvBK3tF4yy84CQBUaV0I8J7-6heA87P7U2qB9oQ8vCWwtmy7ePVqlU4p8kZ=s680-w680-h510-rw',
    title: 'Postazioni taglio luminose',
    caption: '01 / Lo spazio'
  },
  {
    id: 2,
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QOU_5MhqWgORTPWhWq2cOYicF6-CnA-rKHsCrYj1jAKIuIG6geL81kQugiUs27nfNR1KrYI57OM-3OWpECXN4DOk06OiiC9m57t5FrI2ZAJt6l0zh075k4jnSOsrck0NPCF8pj-FL6Cuk4=s680-w680-h510-rw',
    title: 'Prodotti professionali in esposizione',
    caption: '02 / Prodotti'
  },
  {
    id: 3,
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SiLg09gThqjPQ0GflkhI3GL83e-zo7M07kaXihIk36QafYOUASevavisTNlsW8k39kkEeH29ndbpvzK11wjHH3xiR4HD4BB4bU7g34BYunErFP0y597WaJ-oPjb4aviLrsSduo6bWRCR_L=s680-w680-h510-rw',
    title: 'Area lavatesta rilassante',
    caption: '03 / Relax'
  },
  {
    id: 4,
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TQ0gX3k9NMu0AHQ7PNfzJ8VAQeEJmOJyxkKqXR2kptNjGQQUhyzi_nqni8jIZZ8aI89vQP0ko4unAYcuOul7BAnrhSRGGqfm541THdqnHvd3-o2Dzwu5Tnx9delYm6QGcFODHTg2dtqf2D=s680-w680-h510-rw',
    title: 'Specchi di design',
    caption: '04 / Design'
  },
  {
    id: 5,
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ReQ8eGEkaW_Z2Z6uQC-R64crn_oRaMRIYmYqyqVYX8YFjFBw5bnC9JYW7iIoNKUYAC2kumo5-PAWShbGxR_uyfI777a5-cNddEoc5YoS9ZE1MmJ67vgIEXdMMfKRlco7j9zYSp1nw05x2U=s680-w680-h510-rw',
    title: 'Strumenti professionali',
    caption: '05 / Cura'
  },
  {
    id: 6,
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QV46auu5sz8hbSlVxGF1ckoYOaT-QCABEYXlhu5LrqLQfgyc7QagaNhw2Gmw9iDtjPveoFGSuVPrcR-QrmJscP9XgGW0xDe40t1KX__U7JdUNF241o6qNGE9CSV9Z6p-hbQqsxDzGPxuQ=s680-w680-h510-rw',
    title: 'Dettagli d\'arredo del salone',
    caption: '06 / Atmosfera'
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
