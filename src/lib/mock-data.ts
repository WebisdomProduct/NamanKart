import type { Category, Product } from "./types";

export const categories: Category[] = [
  { slug: "tulsi-malas", name: "Tulsi Malas", description: "Sacred tulsi wood japa & kanthi malas.", emoji: "📿", isFeatured: true },
  { slug: "rudraksha", name: "Rudraksha & Other Malas", description: "Rudraksha, neem and antique malas.", emoji: "🕉️", isFeatured: true },
  { slug: "bracelets", name: "Bracelets", description: "Rudraksha & gemstone bracelets.", emoji: "🧿" },
  { slug: "jewellery", name: "Devotional Jewellery", description: "Tulsi tops & sacred jewellery.", emoji: "💍" },
  { slug: "lockets", name: "Lockets & Pendants", description: "Deity lockets and pendants.", emoji: "🪬", isFeatured: true },
  { slug: "puja-items", name: "Puja Items", description: "Thali sets, kumkum, samagri.", emoji: "🪔", isFeatured: true },
  { slug: "dhoop-incense", name: "Dhoop, Baati & Incense", description: "Agarbatti, dhoop and havan samagri.", emoji: "🪨" },
  { slug: "attar", name: "Perfume & Attar", description: "Rose, mogra, chandan attars.", emoji: "🌸" },
  { slug: "copper-brass", name: "Copper & Brass", description: "Bottles, kalash, akhand jyot.", emoji: "🏺", isFeatured: true },
  { slug: "deities", name: "Brass Deities", description: "Hand-crafted brass idols.", emoji: "🛕" },
  { slug: "books-idols", name: "Books & Idols", description: "Scriptures and deity idols.", emoji: "📖" },
  { slug: "charan-paduka", name: "Charan Paduka", description: "Sacred wooden paduka.", emoji: "👣" },
  { slug: "prasad", name: "Prasad", description: "56 Bhog & temple prasad packs.", emoji: "🍯", isFeatured: true },
  { slug: "combos", name: "Combo Packs", description: "Bhakti starter & premium packs.", emoji: "🎁" },
];

let id = 0;
const nextId = () => String(++id).padStart(4, "0");

// Real product photography from Pexels (free, royalty-free, no attribution required
// but appreciated). Swap with your own photos once available.
const img = (pid: number) =>
  `https://images.pexels.com/photos/${pid}/pexels-photo-${pid}.jpeg?auto=compress&cs=tinysrgb&w=900`;

const IMG: Record<string, string[]> = {
  "tulsi-japa-mala-108": [img(9271144), img(9271172), img(13736490)],
  "tulsi-kanthi-mala": [img(31513865), img(6083683), img(13319597)],
  "tulsi-mahamantra-mala": [img(10133414), img(9271144), img(13736490)],
  "tulsi-locket-mala": [img(9271156), img(9271180), img(9271147)],
  "rudraksha-5-mukhi-mala": [img(9271144), img(9271172), img(13736490)],
  "neem-wood-mala": [img(10133414), img(13319597), img(31513865)],
  "rudraksha-bracelet": [img(31757022), img(9271144), img(20429577)],
  "pyrite-bracelet": [img(36854165), img(31757022), img(20429577)],
  "tulsi-ear-tops": [img(31757022), img(31513865), img(36854165)],
  "radha-krishna-locket": [img(18906862), img(31513875), img(31689680)],
  "ram-naam-pendant": [img(31689680), img(9271180), img(9271156)],
  "puja-thali-set": [img(26245461), img(31513869), img(12517422)],
  "ashtagandh-powder": [img(9271156), img(9271180), img(9271147)],
  "havan-samagri": [img(30711078), img(29039041), img(774378)],
  "dhoop-sticks": [img(774378), img(17840022), img(17840020)],
  "rose-attar": [img(12456282), img(12456278), img(774378)],
  "chandan-attar": [img(13970073), img(36188472), img(15124740)],
  "copper-water-bottle": [img(8634411), img(13871766), img(8634417)],
  "akhand-jyot-diya": [img(35736633), img(29629443), img(18194577)],
  "brass-ganesh-idol": [img(19982575), img(28010215), img(32665109)],
  "brass-krishna-idol": [img(18906862), img(31689680), img(31513875)],
  "bhagavad-gita-book": [img(31513875), img(31513865), img(31513863)],
  "wooden-charan-paduka": [img(12306754), img(11473711), img(9442883)],
  "56-bhog-prasad": [img(35149452), img(38015723), img(37015886)],
  "bhakti-starter-pack": [img(31513869), img(9271156), img(774378)],
  "bhakti-premium-pack": [img(26245461), img(12456282), img(35149452)],
};

function p(partial: Omit<Product, "id" | "rating" | "reviewCount" | "stock" | "images" | "tags"> & Partial<Product>): Product {
  const slug = partial.slug as string;
  return {
    id: nextId(),
    rating: +(3.8 + Math.random() * 1.2).toFixed(1),
    reviewCount: Math.floor(20 + Math.random() * 480),
    stock: 25,
    images: IMG[slug] ?? [img(9271144)],
    tags: [],
    ...partial,
  } as Product;
}

export const products: Product[] = [
  p({ slug: "tulsi-japa-mala-108", name: "Tulsi Japa Mala (108 Beads)", categorySlug: "tulsi-malas", shortDescription: "Authentic Vrindavan tulsi wood japa mala.", description: "Hand-knotted 108-bead japa mala crafted from genuine Vrindavan tulsi wood. Ideal for daily naam jap and meditation.", basePrice: 999, salePrice: 799, variants: [
    { id: "v1", name: "6mm beads", price: 799, stock: 30, attributes: { size: "6mm" } },
    { id: "v2", name: "7mm beads", price: 899, stock: 22, attributes: { size: "7mm" } },
    { id: "v3", name: "8mm beads", price: 999, stock: 15, attributes: { size: "8mm" } },
  ], isFeatured: true, isBestSeller: true, tags: ["tulsi", "japa", "mala"] }),

  p({ slug: "tulsi-kanthi-mala", name: "Tulsi Kanthi Mala", categorySlug: "tulsi-malas", shortDescription: "Traditional neck-worn tulsi mala.", description: "Hand-strung kanthi mala worn around the neck by devotees of Lord Krishna.", basePrice: 499, salePrice: 399, isFeatured: true, tags: ["tulsi", "kanthi"] }),

  p({ slug: "tulsi-mahamantra-mala", name: "Tulsi MahaMantra Mala", categorySlug: "tulsi-malas", shortDescription: "For Hare Krishna & Ram Naam jap.", description: "Premium hand-knotted mala for chanting the MahaMantra.", basePrice: 1299, salePrice: 1099, tags: ["mahamantra", "tulsi"] }),

  p({ slug: "tulsi-locket-mala", name: "Tulsi Locket Mala", categorySlug: "tulsi-malas", shortDescription: "Tulsi mala with deity locket.", description: "Tulsi mala finished with a hand-painted Radha-Krishna locket.", basePrice: 1499, salePrice: 1199, isNew: true, tags: ["locket"] }),

  p({ slug: "rudraksha-5-mukhi-mala", name: "5 Mukhi Rudraksha Mala", categorySlug: "rudraksha", shortDescription: "Authentic Nepali 5-mukhi rudraksha.", description: "108-bead rudraksha mala sourced from Nepal, lab-certified for authenticity.", basePrice: 1799, salePrice: 1499, isFeatured: true, isBestSeller: true, tags: ["rudraksha"] }),

  p({ slug: "neem-wood-mala", name: "Neem Wood Mala", categorySlug: "rudraksha", shortDescription: "Pure neem wood japa mala.", description: "Lightweight 108-bead neem wood mala.", basePrice: 199, salePrice: 149, tags: ["neem"] }),

  p({ slug: "rudraksha-bracelet", name: "Rudraksha Bracelet", categorySlug: "bracelets", shortDescription: "Stretchable rudraksha bracelet.", description: "Comfortable stretch-fit rudraksha bracelet for daily wear.", basePrice: 799, salePrice: 599, tags: ["rudraksha", "bracelet"] }),

  p({ slug: "pyrite-bracelet", name: "Pyrite Prosperity Bracelet", categorySlug: "bracelets", shortDescription: "Natural pyrite gemstone bracelet.", description: "Hand-cut pyrite stones, said to attract wealth and abundance.", basePrice: 999, salePrice: 749, isNew: true, tags: ["pyrite"] }),

  p({ slug: "tulsi-ear-tops", name: "Tulsi Wood Ear Tops", categorySlug: "jewellery", shortDescription: "Delicate tulsi wood ear tops.", description: "Hand-turned tulsi wood ear tops, hypoallergenic posts.", basePrice: 349, salePrice: 299, tags: ["jewellery"] }),

  p({ slug: "radha-krishna-locket", name: "Radha-Krishna Locket", categorySlug: "lockets", shortDescription: "Hand-painted deity locket.", description: "Brass-framed Radha-Krishna locket with glass cover.", basePrice: 1499, salePrice: 1199, isFeatured: true, tags: ["locket"] }),

  p({ slug: "ram-naam-pendant", name: "Ram Naam Pendant", categorySlug: "lockets", shortDescription: "Engraved Ram Naam pendant.", description: "Sterling-finish brass pendant engraved with Ram Naam.", basePrice: 899, salePrice: 699, tags: ["pendant"] }),

  p({ slug: "puja-thali-set", name: "Brass Puja Thali Set (9 piece)", categorySlug: "puja-items", shortDescription: "Complete daily puja thali.", description: "9-piece brass puja thali with diya, kalash, bell, agarbatti stand, kumkum bowls, and spoon.", basePrice: 1499, salePrice: 1099, isFeatured: true, isBestSeller: true, tags: ["thali", "puja"] }),

  p({ slug: "ashtagandh-powder", name: "Ashtagandh Tilak Powder", categorySlug: "puja-items", shortDescription: "Traditional 8-herb tilak powder.", description: "Authentic ashtagandh powder for tilak and abhishek.", basePrice: 249, salePrice: 199, tags: ["tilak"] }),

  p({ slug: "havan-samagri", name: "Havan Samagri (500g)", categorySlug: "dhoop-incense", shortDescription: "Pure havan samagri mix.", description: "Traditional havan samagri made from 27 sacred herbs.", basePrice: 399, salePrice: 299, tags: ["havan"] }),

  p({ slug: "dhoop-sticks", name: "Sandal Dhoop Sticks (Pack of 12)", categorySlug: "dhoop-incense", shortDescription: "Long-burning sandal dhoop.", description: "Hand-rolled sandal dhoop sticks. Each stick burns for ~25 mins.", basePrice: 299, salePrice: 229, tags: ["dhoop"] }),

  p({ slug: "rose-attar", name: "Pure Rose Attar (10ml)", categorySlug: "attar", shortDescription: "Steam-distilled rose attar.", description: "100% natural rose attar from Kannauj, in a glass roll-on bottle.", basePrice: 599, salePrice: 449, isNew: true, tags: ["attar"] }),

  p({ slug: "chandan-attar", name: "Chandan Attar (10ml)", categorySlug: "attar", shortDescription: "Real Mysore sandalwood attar.", description: "Aged in pure sandalwood — earthy and long-lasting.", basePrice: 899, salePrice: 699, tags: ["attar"] }),

  p({ slug: "copper-water-bottle", name: "Hammered Copper Water Bottle (1L)", categorySlug: "copper-brass", shortDescription: "Ayurvedic copper water bottle.", description: "Pure hand-hammered copper, leak-proof cap. Ayurveda-approved.", basePrice: 1299, salePrice: 899, isFeatured: true, isBestSeller: true, tags: ["copper"] }),

  p({ slug: "akhand-jyot-diya", name: "Brass Akhand Jyot Diya", categorySlug: "copper-brass", shortDescription: "All-day oil lamp.", description: "Large brass akhand jyot, holds enough oil for 12+ hours.", basePrice: 1499, salePrice: 1099, tags: ["diya"] }),

  p({ slug: "brass-ganesh-idol", name: "Brass Ganesh Idol (4 inch)", categorySlug: "deities", shortDescription: "Hand-cast brass Ganesh.", description: "Antique-finish brass Ganesh idol, perfect for home temple.", basePrice: 2499, salePrice: 1799, isFeatured: true, tags: ["ganesh"] }),

  p({ slug: "brass-krishna-idol", name: "Brass Krishna with Flute (5 inch)", categorySlug: "deities", shortDescription: "Hand-cast Krishna idol.", description: "Solid brass Krishna playing flute, traditional Vrindavan style.", basePrice: 2999, salePrice: 2299, tags: ["krishna"] }),

  p({ slug: "bhagavad-gita-book", name: "Bhagavad Gita (Hindi/English)", categorySlug: "books-idols", shortDescription: "Hardcover Bhagavad Gita.", description: "Bilingual edition with shloka, transliteration and commentary.", basePrice: 599, salePrice: 449, tags: ["book"] }),

  p({ slug: "wooden-charan-paduka", name: "Wooden Charan Paduka", categorySlug: "charan-paduka", shortDescription: "Hand-carved sacred paduka.", description: "Devotional wooden paduka for puja altar.", basePrice: 749, salePrice: 649, tags: ["paduka"] }),

  p({ slug: "56-bhog-prasad", name: "56 Bhog Prasad Box", categorySlug: "prasad", shortDescription: "Temple-blessed 56 bhog box.", description: "Curated 56 bhog prasad box, directly from temple kitchens.", basePrice: 1499, salePrice: 1199, isFeatured: true, isBestSeller: true, isNew: true, tags: ["prasad"] }),

  p({ slug: "bhakti-starter-pack", name: "Bhakti Starter Pack", categorySlug: "combos", shortDescription: "Mala + tilak + dhoop combo.", description: "Tulsi mala, ashtagandh tilak and dhoop sticks — everything to begin.", basePrice: 599, salePrice: 449, isFeatured: true, tags: ["combo"] }),

  p({ slug: "bhakti-premium-pack", name: "Bhakti Premium Pack", categorySlug: "combos", shortDescription: "Complete devotional starter.", description: "Mala, tilak, dhoop, attar, locket and puja book — premium gift box.", basePrice: 999, salePrice: 849, isNew: true, tags: ["combo", "gift"] }),
];

export function findProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function findCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}

export function relatedProducts(p: Product, limit = 4) {
  return products.filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id).slice(0, limit);
}

export function searchProducts(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(s) ||
      p.shortDescription.toLowerCase().includes(s) ||
      p.tags.some((t) => t.includes(s)),
  );
}