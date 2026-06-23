// All UI copy, keyed by locale. Components read this via getLangFromUrl +
// useTranslations. Keep the two locales structurally identical.

export const defaultLang = "en" as const;
export type Lang = "en" | "fr";

export const ui = {
  en: {
    nav: {
      home: "Pinkha home",
      features: "Features",
      screens: "Screens",
      source: "Source",
      cta: "Get the beta",
    },
    hero: {
      bowlAlt: "Pinkha bowl logo — a small terracotta bowl.",
      eyebrow: "pinkha · v1.0 beta",
      title1: "Take a leaf.",
      title2: "Grow a library.",
      subtitle:
        "Notes you'll actually want to come back to. Native on iPhone, iPad and Mac. Rich text in Rust.",
      subtitleEmphasis: "Open source.",
      ctaPrimary: "Join the TestFlight beta",
      ctaSecondary: "Star on GitHub",
      baseline: "free · iOS 26+ · ipad & mac coming",
    },
    features: {
      eyebrow: "A library, not a feed",
      title1: "Take, bind, shelve.",
      title2: "Notes that grow with you.",
      items: [
        {
          glyph: "leaf",
          glyphLabel: "leaf",
          title: "Leaves",
          body: "Rich-text notes powered by a Rust core. Inline styles, nested blocks, callouts, todos, code, embeds. Native iOS feel, zero lag — even on a leaf the size of a novel chapter.",
        },
        {
          glyph: "book",
          glyphLabel: "book",
          title: "Books",
          body: "Notion-style databases. Properties, filters, sorts, views — table, kanban, calendar, gallery. Every row is a real Leaf, with its own page underneath.",
        },
        {
          glyph: "shelf",
          glyphLabel: "shelf",
          title: "Shelves",
          body: "Folders that hold loose leaves and bound books. Build a library that matches the way you think — not what an app dictates.",
        },
      ],
    },
    manifesto: {
      eyebrow: "Why pinkha",
      title1: "The apps we use to think",
      title2: "shape how we think.",
      intro: "Pinkha is built on three small ideas.",
      tenets: [
        {
          glyph: "leaf",
          line: "Notes should look like writing, not data. Serif headlines, generous line-height, paper-coloured paper.",
        },
        {
          glyph: "book",
          line: "Structure when you want it. Whitespace when you don't. The library shape is yours to draw — not the app's to enforce.",
        },
        {
          glyph: "feather",
          line: "Your second brain should outlive any single app. So we publish the source, dual-license MIT/Apache, and keep your data on your device.",
        },
      ],
    },
    screens: {
      eyebrow: "Native to the bone",
      title1: "SwiftUI on top.",
      title2: "Rust underneath.",
      shots: [
        {
          src: "/screens/editor.png",
          label: "leaf",
          caption: "An editor that disappears.",
          body: "Markdown shortcuts, inline color, drag to reorder. Undo 1000 steps deep.",
        },
        {
          src: "/screens/book.png",
          label: "book",
          caption: "Databases that feel like paper.",
          body: "Table, kanban, calendar. Properties, filters, sorts. Native iOS, native speed.",
        },
        {
          src: "/screens/library.png",
          label: "library",
          caption: "A home that breathes.",
          body: "Recents, shelves, books, compost. Everything you need, nothing you don't.",
        },
      ],
    },
    source: {
      eyebrow: "Open source",
      title1: "A rich text editor in Rust",
      title2: "didn't exist. Now it does.",
      intro:
        "Every piece is in the open. Read the code, fork it, ship it in your own app. MIT or Apache 2.0 — your pick.",
      repos: [
        { desc: "The app. Rust core + SwiftUI front. iOS 26+." },
        { desc: "Standalone rich-text editor crate. Use it in your own Rust app." },
        { desc: "Read & write Realm v9 binary. Powers the Craft importer." },
      ],
      outroPrefix: "Built solo, in the open, with love.",
      outroLink: "Send a PR.",
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      github: "GitHub",
      contact: "Contact",
      rights: "All rights reserved.",
      sourceUnder: "Source under",
    },
    legal: {
      back: "← back to pinkha",
      lastUpdated: "Last updated",
    },
    meta: {
      homeTitle: "Pinkha — Beautiful native notes for iPhone, iPad and Mac",
      homeDescription:
        "Pinkha is a native notes app with a Rust-powered rich-text editor and Notion-style databases. iOS 26+, open source under MIT or Apache 2.0. Join the TestFlight beta.",
    },
    langSwitch: { label: "Language" },
  },

  fr: {
    nav: {
      home: "Accueil Pinkha",
      features: "Fonctions",
      screens: "Écrans",
      source: "Source",
      cta: "Obtenir la bêta",
    },
    hero: {
      bowlAlt: "Logo Pinkha — un petit bol en terre cuite.",
      eyebrow: "pinkha · v1.0 bêta",
      title1: "Prenez une feuille.",
      title2: "Cultivez une bibliothèque.",
      subtitle:
        "Des notes sur lesquelles vous aurez vraiment envie de revenir. Natives sur iPhone, iPad et Mac. Texte enrichi en Rust.",
      subtitleEmphasis: "Open source.",
      ctaPrimary: "Rejoindre la bêta TestFlight",
      ctaSecondary: "Star sur GitHub",
      baseline: "gratuit · iOS 26+ · ipad & mac à venir",
    },
    features: {
      eyebrow: "Une bibliothèque, pas un fil",
      title1: "Prenez, reliez, rangez.",
      title2: "Des notes qui grandissent avec vous.",
      items: [
        {
          glyph: "leaf",
          glyphLabel: "feuille",
          title: "Feuilles",
          body: "Des notes en texte enrichi propulsées par un cœur en Rust. Styles en ligne, blocs imbriqués, encarts, todos, code, intégrations. Sensation iOS native, zéro latence — même sur une feuille de la taille d'un chapitre de roman.",
        },
        {
          glyph: "book",
          glyphLabel: "livre",
          title: "Livres",
          body: "Des bases de données façon Notion. Propriétés, filtres, tris, vues — table, kanban, calendrier, galerie. Chaque ligne est une vraie Feuille, avec sa propre page en dessous.",
        },
        {
          glyph: "shelf",
          glyphLabel: "étagère",
          title: "Étagères",
          body: "Des dossiers qui accueillent feuilles volantes et livres reliés. Composez une bibliothèque qui épouse votre façon de penser — pas celle qu'une app vous impose.",
        },
      ],
    },
    manifesto: {
      eyebrow: "Pourquoi pinkha",
      title1: "Les apps qu'on utilise pour penser",
      title2: "façonnent notre façon de penser.",
      intro: "Pinkha repose sur trois petites idées.",
      tenets: [
        {
          glyph: "leaf",
          line: "Une note doit ressembler à de l'écriture, pas à de la donnée. Titres en serif, interlignes généreux, du papier couleur papier.",
        },
        {
          glyph: "book",
          line: "De la structure quand vous en voulez. Du blanc quand vous n'en voulez pas. La forme de la bibliothèque, c'est à vous de la dessiner — pas à l'app de l'imposer.",
        },
        {
          glyph: "feather",
          line: "Votre second cerveau devrait survivre à n'importe quelle app. Alors on publie le code source, en double licence MIT/Apache, et vos données restent sur votre appareil.",
        },
      ],
    },
    screens: {
      eyebrow: "Native jusqu'à l'os",
      title1: "SwiftUI au-dessus.",
      title2: "Rust en dessous.",
      shots: [
        {
          src: "/screens/editor.png",
          label: "feuille",
          caption: "Un éditeur qui s'efface.",
          body: "Raccourcis Markdown, couleur en ligne, glisser pour réorganiser. Annulation sur 1000 niveaux.",
        },
        {
          src: "/screens/book.png",
          label: "livre",
          caption: "Des bases de données qui ont le toucher du papier.",
          body: "Table, kanban, calendrier. Propriétés, filtres, tris. iOS natif, vitesse native.",
        },
        {
          src: "/screens/library.png",
          label: "bibliothèque",
          caption: "Un accueil qui respire.",
          body: "Récents, étagères, livres, compost. Tout ce qu'il vous faut, rien de superflu.",
        },
      ],
    },
    source: {
      eyebrow: "Open source",
      title1: "Un éditeur de texte enrichi en Rust",
      title2: "n'existait pas. Maintenant si.",
      intro:
        "Tout est à ciel ouvert. Lisez le code, forkez-le, embarquez-le dans votre propre app. MIT ou Apache 2.0 — au choix.",
      repos: [
        { desc: "L'app. Cœur en Rust + interface SwiftUI. iOS 26+." },
        { desc: "Crate d'éditeur de texte enrichi autonome. À utiliser dans votre propre app Rust." },
        { desc: "Lit et écrit le binaire Realm v9. Propulse l'import Craft." },
      ],
      outroPrefix: "Fait en solo, à ciel ouvert, avec amour.",
      outroLink: "Envoyez une PR.",
    },
    footer: {
      privacy: "Confidentialité",
      terms: "Conditions",
      github: "GitHub",
      contact: "Contact",
      rights: "Tous droits réservés.",
      sourceUnder: "Code source sous",
    },
    legal: {
      back: "← retour à pinkha",
      lastUpdated: "Dernière mise à jour",
    },
    meta: {
      homeTitle: "Pinkha — De belles notes natives pour iPhone, iPad et Mac",
      homeDescription:
        "Pinkha est une app de notes native avec un éditeur de texte enrichi propulsé par Rust et des bases de données façon Notion. iOS 26+, open source sous licence MIT ou Apache 2.0. Rejoignez la bêta TestFlight.",
    },
    langSwitch: { label: "Langue" },
  },
} as const;
