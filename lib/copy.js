// lib/copy.js — cijeli vidljivi tekst landing stranice. Hrvatski jezik.
// loncherafeliz.aprende-hoy.shop.

export const copy = {
  metadata: {
    title:
      "Zdravi obroci za djecu | 500 brzih i ukusnih recepata",
    description:
      "Otkrijte 500 recepata za zdrave dječje užine, gotove za manje od 15 minuta. Uključuje 9 besplatnih bonusa. Posebna ponuda: 8.90 €.",
    productName: "Priručnik za zdrave dječje užine",
  },

  hero: {
    urgencyBar:
      "⚡ VREMENSKI OGRANIČENA PONUDA! Samo danas: 95% popusta",
    badge: "Gotovo za manje od 15 minuta",
    headline: {
      before: "Promijenite prehranu svoje djece uz ",
      accent: "zdrave užine",
      after: ", koje su i brze i nevjerojatno ukusne",
    },
    subheadline:
      "Jednostavni i hranjivi recepti koje će vaši najdraži obožavati – idealni za školu ili kod kuće. 500 ideja kojima ćete se pobrinuti za njihovo zdravlje bez gubljenja dragocjenog vremena!",
    ctaLabel: "Kupi sada i uštedi 95%!",
    starsAriaLabel: "5 zvjezdica",
    socialProof: "+5.000 zadovoljnih obitelji",
    trustChips: [
      { icon: "🥗", text: "500 recepata" },
      { icon: "🎁", text: "Bonusi u vrijednosti preko 90 € NA POKLON" },
      { icon: "🛡️", text: "14 dana jamstva bez rizika" },
    ],
    image: {
      src: "/hero-snacks.webp",
      alt: "Transformacija iz nezdrave hrane u zdrave užine za manje od 15 minuta",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Gotovo za", bottom: "15 min" },
      discount: { icon: "💚", top: "95%", bottom: "popusta" },
    },
  },

  story: {
    kicker: "Naša priča",
    paragraphs: [
      "Vaše dijete jede nekoliko puta dnevno, a ono što unosi u sebe izravno utječe na njegovo zdravlje, energiju i raspoloženje.",
      "Nije problem ako mu s vremena na vrijeme date keks. Problem nastaje kada to, zbog nedostatka vremena ili ideja, postane svakodnevica.",
      "Nije da vam nije stalo. Jednostavno, između umora, kućanskih poslova i tisuću dnevnih obaveza, ponekad vam treba nešto stvarno brzo i jednostavno.",
      "„ZDRAVE UŽINE ZA DJECU” osmišljene su upravo za takve roditelje – one koji brinu o zdravlju svoje djece, ali traže praktična rješenja, a ne komplicirane recepte i neizvedive ideje.",
    ],
  },

  benefits: {
    kicker: "Ključne prednosti",
    headline: "Uz Priručnik za zdrave dječje užine reći ćete zbogom...",
    items: [
      {
        icon: "🍪",
        title: "Nezdravoj hrani",
        desc: "Brzi recepti s prirodnim sastojcima, bez umjetnih dodataka i konzervansa.",
      },
      {
        icon: "⏱️",
        title: "Nedostatku vremena",
        desc: "Recepti gotovi za samo 15 minuta, savršeni za ljude s pretrpanim rasporedom.",
      },
      {
        icon: "🥦",
        title: "Brigama oko prehrane vaše djece", // ISPRAVLJENO: Brigama (preocupaciones)
        desc: "Užine prepune važnih vitamina i minerala koje će svi obožavati.",
      },
      {
        icon: "😩",
        title: "Stresu oko pripreme jela",
        desc: "Ukusni recepti zbog kojih će vaši najdraži jedva čekati ono što im pripremate.",
      },
    ],
  },

  transformation: {
    kicker: "Transformacija koju tražite",
    headline: "Pogledajte kako će se promijeniti prehrana i energija vaše djece",
    before: {
      tag: "PRIJE",
      title: "Bez energije i nutrijenata",
      desc: "Prerađena hrana, puna šećera i aditiva koji ne donose ništa dobro.",
    },
    after: {
      tag: "POSLIJE",
      title: "Sretni i puni energije",
      desc: "Prirodne, ukusne i hranjive užine koje djeca obožavaju.",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Transformacija: tužno dijete vs sretno dijete uz zdrave užine",
    },
  },

  samples: {
    headline: "Neodoljivi recepti koje će zavoljeti",
    subheadline:
      "Zavirite u mali dio ukusnih recepata koje ćete pronaći u e-knjizi",
    items: [
      {
        image: "/recipe-pancakes.webp",
        title: "Zdrave palačinke",
        desc: "Mekane i zlatne, sa svježim voćem i pravim pčelinjim medom.",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Bezglutenska pizza",
        desc: "Ukusna pizza sa svježim povrćem i otopljenim sirom.",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Prirodni smoothieji",
        desc: "Šareni voćni smoothieji koji će ih oduševiti.",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Zobeni keksi",
        desc: "Hrskavi domaći keksi sa zobenim pahuljicama i bademima.",
      },
    ],
    footnote: "Svih 500 recepata čeka vas u cjelovitoj e-knjizi",
  },

  testimonials: {
    kicker: "DOKAZANI REZULTATI",
    headline: "Preko 5000 obitelji već je promijenilo svoj način prehrane",
    subheadline:
      "Pridružite se tisućama roditelja koji već uživaju u zdravijoj hrani bez nepotrebnog stresa",
    rating: 5,
    ratingLabel: "5/5",
    reviewCount: "150 recenzija",
    items: [
      {
        initial: "G",
        name: "Gordana",
        role: "majka dvoje male djece",
        quote:
          "Nikad nisam vjerovala da će moj sin tako brzo prihvatiti zdrave užine! Recepti su ne samo vrlo jednostavni, već mu se i strašno sviđaju. Hvala vam što ste mi olakšali život!",
      },
      {
        initial: "N",
        name: "Nikola",
        role: "otac troje djece",
        quote:
          "Prije sam se jako brinuo o tome što dajem svojoj djeci, ali s ovom knjigom sam pronašao izuzetno ukusne i zdrave opcije. Sada svi jedemo kvalitetnije!",
      },
      {
        initial: "J",
        name: "Jelena",
        role: "nutricionistica i majka",
        quote:
          "Kao stručnjakinja mogu potvrditi da su ovi recepti savršeno izbalansirani. Moja djeca ih obožavaju, a ja sam mirna znajući da se dobro hrane.",
      },
      {
        initial: "D",
        name: "Danijela",
        role: "zaposlena majka",
        quote:
          "Zbog pretrpanog rasporeda nisam imala vremena za kuhanje. Ova knjiga je promijenila sve: recepti gotovi za 15 minuta koje moja djeca traže iznova i iznova. Vrijedi svakog centa!", // ISPRAVLJENO: centa (euro)
      },
    ],
  },

  whatYouGet: {
    kicker: "ŠTO JE UKLJUČENO?",
    headline: "Sve što ćete pronaći u ovoj nevjerojatnoj e-knjizi",
    subheadline: "Potpuni priručnik za zdravu dječju prehranu",
    items: [
      "500 brzih recepata za zdrave užine u školi i kod kuće",
      "Gotovi tjedni jelovnici + ekonomični popisi za kupovinu",
      "Ideje za savršeno kombiniranje doručka, međuobroka i večere",
      "Jednostavne upute za pripremu korak po korak",
      "Popis zdravih zamjena kada vam nedostaje neki sastojak",
      "Besplatna ažuriranja s novim receptima i jelovnicima",
      "I još mnogo toga…",
    ],
    footnote: {
      line1: "I to nije sve...",
      line2: "Ima još puno toga!",
      line3: "Također ćete dobiti...",
    },
  },

  bonuses: {
    flagline: "🔥 SAMO DANAS!",
    headline: "Preuzmite BESPLATNE bonuse u vrijednosti preko 90 € uz današnju kupnju",
    subheadline:
      "U vrijednosti od 92.95 € — potpuno VAŠ POKLON uz današnju kupnju!",
    badgeLabel: "BESPLATNO",
    valueLabel: "Vrijednost:",
    items: [
      {
        value: "27.99 €",
        title: "Recepti za muffine i pizze bez šećera i glutena",
        desc: "Zdrave verzije omiljene hrane bez dodanog šećera i glutena, gotove u nekoliko minuta.",
      },
      {
        value: "19.99 €",
        title: "Vodič za organizaciju i zamrzavanje hrane",
        desc: "Naučite kako sve pripremiti odjednom i imati hranu za cijeli tjedan uz minimalno truda.",
      },
      {
        value: "14.99 €",
        title: "Posebni recepti za djecu s alergijama",
        desc: "Sigurni recepti bez mlijeka, jaja, soje ili kikirikija.",
      },
      {
        value: "14.99 €",
        title: "Recepti za ukusne i zdrave deserte",
        desc: "Zamijenite kupovne slatkiše zdravim poslasticama od prirodnih sastojaka.",
      },
      {
        value: "14.99 €",
        title: "Zdravi i svježi sokovi",
        desc: "Praktični recepti za prirodne sokove koji će osvježiti dan vašim najdražima.",
      },
    ],
    totalLabel: "🎁 Ukupna vrijednost bonusa: 92.95 €",
    totalCta: "DOBIVATE IH POTPUNO BESPLATNO UZ SVOJU DANAŠNJU KUPNJU!",
  },

  exclusiveBonuses: {
    kicker: "OSIM TOGA.. ⭐ EKSKLUZIVNI BONUSI!",
    headline: "Samo danas! Preuzmite i ove dodatne ekskluzivne bonuse",
    subheadline: "kako biste preobrazili zdravlje svoje djece",
    badgeLabel: "BESPLATNO",
    valueLabel: "Vrijednost:",
    items: [
      {
        value: "18.99 €",
        title: "Domaći voćni gumeni bomboni s vitaminom C",
        desc: "Prirodni bomboni za jačanje imuniteta na zabavan način, bez dodanog šećera.",
      },
      {
        value: "19.99 €",
        title: "Kako navesti djecu da zavole povrće",
        desc: "Pretvorite povrće u ukusnu avanturu. Recepti uz koje će djeca jesti povrće s veseljem.",
      },
      {
        value: "17.99 €",
        title: "Vodič kroz užine za izbirljivu djecu",
        desc: "Hranjive užine idealne za djecu sa slabim apetitom.",
      },
      {
        value: "17.99 €",
        title: "Vodič kroz superhranu za djecu",
        desc: "Naučite kako uključiti najvrijednije namirnice u jednostavne recepte.",
      },
    ],
    totalLabel: "🎁 Ukupna vrijednost SVIH bonusa: 167.91 €",
    totalCta: "DOBIVATE IH POTPUNO BESPLATNO UZ SVOJU DANAŠNJU KUPNJU!",
  },

  finalCta: {
    flagline: "⏰ PONUDA VRIJEDI SAMO DANAS!",
    headline: "Cijeli paket u vrijednosti od 201 €",
    subheadline: "Danas ga dobivate s čak 95% popusta",
    regularPriceLabel: "Standardna cijena:",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    bundleList: [
      "✅ 500 recepata za zdrave užine (vrijednost 34 €)",
      "✅ 9 ekskluzivnih bonusa (vrijednost 167.91 €) — GRATIS!",
      "✅ Recepti gotovi za manje od 15 minuta",
      "✅ Trenutni i doživotni pristup",
      "✅ 14-dnevno jamstvo povrata novca",
    ],
    button: "Kupi sada i uštedi 95%!",
    trustRow: "🔒 100% sigurno plaćanje • ⚡ Trenutni pristup • ✅ 14 dana jamstva",
    bonusesBadge: "✓ 9 BESPLATNIH BONUSA",
    discountStickerLabel: "Samo danas",
    discountStickerValue: "-95%",
    imageAlt: "Cjelokupni paket: E-knjiga Zdrave užine + 9 bonusa",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    headline: "Vaša je kupnja 100% zaštićena našim 14-dnevnim jamstvom",
    tag: "NULA RIZIKA ZA VAS",
    body: "Toliko smo sigurni da će vam se ovaj priručnik svidjeti da vam nudimo bezuvjetno 14-dnevno jamstvo. Ako niste 100% zadovoljni, vratit ćemo vam svaki cent. Bez pitanja.",
    footer: "✅ Zajamčen potpuni povrat novca • ✅ Bez pitanja • ✅ Trenutna procedura",
  },

  faq: {
    kicker: "ČPP",
    headline: "Često postavljana pitanja",
    items: [
      {
        q: "Za koju je dobnu skupinu priručnik namijenjen?",
        a: "Priručnik je namijenjen djeci od 2 do 12 godina, iako se recepti lako mogu prilagoditi svim uzrastima.",
      },
      {
        q: "Je li prikladan za djecu s alergijama?",
        a: "Da! Nudimo recepte prilagođene najčešćim alergijama poput mlijeka, jaja, soje i kikirikija.",
      },
      {
        q: "Moram li biti dobar kuhar?",
        a: "Ne, recepti su osmišljeni da budu maksimalno jednostavni, s malo sastojaka i jasnim koracima.",
      },
      {
        q: "Jesu li sastojci skupi?",
        a: "Ne, svi sastojci su pristupačni i lako ih je pronaći u svakom standardnom supermarketu.",
      },
      {
        q: "Koliko traje priprema užina?",
        a: "Recepti su iznimno brzi, a većina je gotova za manje od 15 minuta.",
      },
      {
        q: "Mogu li platiti u svojoj lokalnoj valuti?",
        a: "Da! Naš sustav automatski preračunava iznos. Platiti ćete točno onu cijenu koju vidite, bez skrivenih troškova.",
      },
    ],
  },

  closing: {
    kicker: "POSLJEDNJA PRILIKA! ⚡ Ova ponuda uskoro istječe",
    headline: "Preobrazite prehranu svoje obitelji još danas!",
    subheadline: "Potpuni priručnik + 9 bonusa NA POKLON! Sve po cijeni jedne večere vani.",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    ctaLabel: "DA, ŽELIM SVOJ PRIRUČNIK SADA!",
    trustRow: "🔒 100% sigurno plaćanje • ⚡ Trenutni pristup • ✅ 14-dnevno jamstvo bez rizika",
  },

  footer: {
    madeWith: "Napravljeno s",
    forWho: "za zdrave obitelji",
    copyright: "© 2026 Zdrave užine. Sva prava pridržana.",
  },

  stickyCta: {
    label: "8.90 €",
    ctaLabel: "Kupi sada i uštedi 95%!",
    urgency: "⚡ Vremenski ograničena ponuda",
  },
};