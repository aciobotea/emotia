export type PriceTier = {
  quantity: string;
  price: string;
  note: string;
};

export type EventItem = {
  slug: "weddings" | "anniversaries" | "birthdays" | "bachelorette";
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
  audience: string;
  heroStats: string[];
  features: string[];
  idealFor: string[];
  timeline: string[];
  pricing: PriceTier[];
  gallery: {
    src: string;
    title: string;
    caption: string;
  }[];
};

export const reviews = [
  {
    name: "Andreea & Mihai",
    event: "Revista nunții",
    quote:
      "Invitații noștri au fost surprinși de cât de bine a fost gândită și de cât de frumos a spus povestea noastră. A avut exact acel efect elegant și diferit pe care îl căutam.",
  },
  {
    name: "Bianca",
    event: "Revista bachelorette",
    quote:
      "A fost detaliul preferat al weekendului. A fost fun, personal și în același timp arăta foarte premium.",
  },
  {
    name: "Familia Popescu",
    event: "Revista zi de naștere",
    quote:
      "Am comandat mai multe exemplare pentru mese și totul a arătat foarte bine. S-a simțit personal, nu generic.",
  },
  {
    name: "Ioana",
    event: "Revista aniversării",
    quote:
      "A fost unul dintre puținele cadouri care au emoționat cu adevărat. Nu doar s-a oferit, ci s-a păstrat.",
  },
  {
    name: "Raluca & Vlad",
    event: "Revista nunții",
    quote:
      "Ne-a plăcut mult că a spus povestea noastră într-un mod coerent și frumos. Nu părea deloc ceva făcut în grabă.",
  },
  {
    name: "Diana",
    event: "Revista bachelorette",
    quote:
      "A adus energie întregului weekend și a rămas și ca amintire. Toată lumea a răsfoit-o imediat.",
  },
  {
    name: "Cristina",
    event: "Revista aniversării",
    quote:
      "Mi-a plăcut că nu a fost doar un obiect frumos, ci ceva cu sens. Se vede că e gândit să rămână.",
  },
];

export const pricingPreview = [
  { quantity: "1 bucată", price: "129 lei" },
  { quantity: "10 buc", price: "99 lei" },
  { quantity: "50 buc", price: "69 lei" },
  { quantity: "100 buc", price: "59 lei" },
];

export const events: EventItem[] = [
  {
    slug: "weddings",
    name: "Revista nunții",
    shortName: "Revista nunții",
    tagline:
      "O alternativă modernă la mărturii — pentru invitații tăi. Un mod elegant și diferit de a spune povestea voastră.",
    intro:
      "A custom wedding magazine that feels like a luxury publication, filled with your story, timeline, couple profile, editorial imagery, and personal touches for guests.",
    audience:
      "Perfect for ceremony seating, welcome bags, table styling, bridal party gifts, and keepsake copies for family.",
    heroStats: ["12-28 pages", "Luxury editorial design", "Tailored to your day"],
    features: [
      "Custom cover design with your names, date, and editorial headlines",
      "Storytelling sections for the proposal, timeline, venue, dress code, and couple Q&A",
      "Magazine layouts designed to match your wedding palette and atmosphere",
      "Print-ready files prepared for intimate batches or larger guest orders",
    ],
    idealFor: [
      "Black tie or destination weddings",
      "Luxury welcome kits",
      "Couples who want a strong design-led keepsake",
    ],
    timeline: [
      "We collect your photos, event details, and tone references",
      "We design the first editorial concept and cover direction",
      "You review the layout and request final refinements",
      "We prepare the final files for your chosen quantity tier",
    ],
    pricing: [
      { quantity: "1-9 copies", price: "EUR24 / copy", note: "Best for sample runs and close family gifts" },
      { quantity: "10-24 copies", price: "EUR20 / copy", note: "Popular for welcome bags and head tables" },
      { quantity: "25-49 copies", price: "EUR17 / copy", note: "Ideal for medium guest lists" },
      { quantity: "50+ copies", price: "Custom quote", note: "Volume pricing for full wedding distribution" },
    ],
    gallery: [
      { src: "/editorial/wedding-cover.svg", title: "Editorial Cover", caption: "Magazine-inspired cover styling with soft romantic typography." },
      { src: "/editorial/wedding-story.svg", title: "Love Story Spread", caption: "A narrative spread for your timeline, vows, or proposal story." },
      { src: "/editorial/wedding-details.svg", title: "Guest-Facing Details", caption: "Useful event details presented in an elegant print format." },
    ],
  },
  {
    slug: "anniversaries",
    name: "Revista aniversării",
    shortName: "Revista aniversării",
    tagline:
      "Pentru voi doi — o poveste care continuă. Transformă amintirile în ceva ce rămâne.",
    intro:
      "A personalized anniversary issue that documents milestones, favorite memories, family notes, and visual highlights in a format that feels timeless and substantial.",
    audience:
      "Designed for milestone dinners, vow renewals, family gatherings, and surprise gifts that deserve more than a standard photo album.",
    heroStats: ["Memory-led storytelling", "Elegant milestone layouts", "Gift-ready format"],
    features: [
      "Cover and contents page customized for the couple and celebration year",
      "Memory timelines, portraits, family tributes, and archival photo sections",
      "Tone can range from classic black-tie to warm family documentary",
      "Adaptable print runs for intimate gifting or larger party tables",
    ],
    idealFor: [
      "10th, 25th, 40th, and 50th anniversary events",
      "Family celebrations with archival photography",
      "Elegant keepsake gifting",
    ],
    timeline: [
      "We collect milestone memories, photos, and family notes",
      "We shape the editorial flow around the couple's story",
      "You review the layouts and captions before final sign-off",
      "The magazine is finalized according to your chosen quantity",
    ],
    pricing: [
      { quantity: "1-9 copies", price: "EUR22 / copy", note: "Suited to family gifts and small celebrations" },
      { quantity: "10-24 copies", price: "EUR18 / copy", note: "A balanced option for dinner tables" },
      { quantity: "25-49 copies", price: "EUR15 / copy", note: "Strong value for larger anniversary events" },
      { quantity: "50+ copies", price: "Custom quote", note: "Best for large family or venue distribution" },
    ],
    gallery: [
      { src: "/editorial/anniversary-cover.svg", title: "Milestone Cover", caption: "A celebratory cover built around dates, portraits, and milestones." },
      { src: "/editorial/anniversary-archive.svg", title: "Archive Spread", caption: "Old and new memories presented with a magazine archive feel." },
      { src: "/editorial/anniversary-toast.svg", title: "Tribute Pages", caption: "Ideal for letters, quotes, and family appreciation notes." },
    ],
  },
  {
    slug: "birthdays",
    name: "Revista zi de naștere",
    shortName: "Revista zi de naștere",
    tagline:
      "Un cadou personal pentru cineva drag. O surpriză care spune mai mult decât „La mulți ani”.",
    intro:
      "Birthday magazines are playful, polished, and heavily personalized, with feature pages, personality-led interviews, party details, and visual storytelling that make the event feel branded.",
    audience:
      "Ideal for milestone birthdays, themed parties, dinner celebrations, and statement tabletop styling.",
    heroStats: ["Bold editorial layouts", "Perfect for themed parties", "Scales with guest count"],
    features: [
      "Statement cover with custom headlines, colors, and party theme",
      "Feature pages for fun facts, memories, quizzes, playlists, and party details",
      "Energetic layouts that still feel premium and print-worthy",
      "Flexible pricing tiers for both small and large party orders",
    ],
    idealFor: [
      "18th, 21st, 30th, 40th, and 50th birthdays",
      "Branded or color-themed parties",
      "Hosts who want a conversation-starting print piece",
    ],
    timeline: [
      "We gather the party theme, references, and personal details",
      "We build the cover concept and editorial pacing",
      "You review the pages and approve final edits",
      "We finalize production files based on the required quantity",
    ],
    pricing: [
      { quantity: "1-9 copies", price: "EUR20 / copy", note: "Ideal for gifting and styling a smaller event" },
      { quantity: "10-24 copies", price: "EUR17 / copy", note: "Most common for birthday table settings" },
      { quantity: "25-49 copies", price: "EUR14 / copy", note: "Good fit for larger milestone parties" },
      { quantity: "50+ copies", price: "Custom quote", note: "Volume option for extensive guest lists" },
    ],
    gallery: [
      { src: "/editorial/birthday-cover.svg", title: "Party Cover", caption: "A bold, graphic lead page that sets the party tone immediately." },
      { src: "/editorial/birthday-feature.svg", title: "Feature Spread", caption: "Magazine-style pages for milestones, lists, and personality moments." },
      { src: "/editorial/birthday-table.svg", title: "Tabletop Impact", caption: "Styled to look striking when placed across guest tables." },
    ],
  },
  {
    slug: "bachelorette",
    name: "Revista bachelorette",
    shortName: "Revista bachelorette",
    tagline:
      "Pentru weekendul vostru — fun, personal și memorabil. Un mix de ghid, amintiri și cadou pentru mireasă sau prietene.",
    intro:
      "A bachelorette edition combines humor, beautiful styling, insider details, and group memories in a format that feels elevated and unmistakably custom.",
    audience:
      "Made for destination weekends, party packs, welcome gifts, itinerary handouts, and group keepsakes.",
    heroStats: ["Fun but polished", "Weekend itinerary ready", "Great for gifting"],
    features: [
      "Custom cover and visual identity tailored to the bride and trip theme",
      "Sections for itinerary, bride facts, games, inside jokes, and group photos",
      "Glossy editorial styling that balances playful content with premium design",
      "Pricing tiers structured for bridal party sizes and guest add-ons",
    ],
    idealFor: [
      "Destination bachelorettes",
      "Weekend welcome packs",
      "Bridal parties that want a standout custom detail",
    ],
    timeline: [
      "We receive the trip theme, names, schedule, and photo references",
      "We create the cover direction and content structure",
      "You refine the jokes, details, and group pages",
      "We finalize the issue for your selected order quantity",
    ],
    pricing: [
      { quantity: "1-9 copies", price: "EUR18 / copy", note: "Works well for compact bridal parties" },
      { quantity: "10-24 copies", price: "EUR15 / copy", note: "Best for full party kits and welcome bags" },
      { quantity: "25-49 copies", price: "EUR13 / copy", note: "Efficient for larger groups and extras" },
      { quantity: "50+ copies", price: "Custom quote", note: "Available for extended guest or add-on orders" },
    ],
    gallery: [
      { src: "/editorial/bachelorette-cover.svg", title: "Weekend Cover", caption: "A glossy party-forward cover with strong personality." },
      { src: "/editorial/bachelorette-itinerary.svg", title: "Itinerary Spread", caption: "Easy-to-read plans turned into a stylish printed guide." },
      { src: "/editorial/bachelorette-group.svg", title: "Group Memories", caption: "A fun editorial layout for bridal party photos and inside jokes." },
    ],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
