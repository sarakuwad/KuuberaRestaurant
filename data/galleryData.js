/**
 * ============================================================================
 * KUUBERA PURE VEG — OWNER EDITABLE INSTAGRAM & RESTAURANT GALLERY
 * ============================================================================
 * Official Instagram: @_kuubera_ (https://www.instagram.com/_kuubera_/)
 *
 * Instructions for Restaurant Owner:
 * To replace any gallery placeholder with your original photograph from
 * @_kuubera_ or your camera:
 * 1. Save your WebP/JPG photo inside `assets/images/gallery/`
 * 2. Update `imageUrl: "assets/images/gallery/your-photo.webp"` below
 * 3. Or use the interactive "Owner Admin Mode" in the website footer!
 * ============================================================================
 */

window.KUUBERA_GALLERY_CATEGORIES = [
  "All",
  "Restaurant Interiors",
  "Exterior & Entrance",
  "Food Photographs",
  "Family Dining",
  "Ambience & Views",
  "Food Preparation"
];

window.KUUBERA_GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Spacious Royal Dining Hall",
    category: "Restaurant Interiors",
    caption: "Thoughtfully designed, spacious, neat, and welcoming main dining hall at Kuubera Pure Veg, Varve Budruk.",
    instagramRef: "@_kuubera_ • Interior Showcase",
    gridSpan: "col-span-12 md:col-span-7 row-span-2", // Large hero tile in asymmetrical grid
    aspectClass: "min-h-[340px] md:min-h-[460px]",
    imageUrl: "", // Owner: Put path e.g. "assets/images/gallery/interior-main.webp"
    recommendedPath: "assets/images/gallery/interior-main.webp",
    placeholderArt: "interior-hall"
  },
  {
    id: "gal-2",
    title: "Crisp Mysore Masala Dosa & Chutneys",
    category: "Food Photographs",
    caption: "Freshly prepared golden South Indian dosas served with piping hot sambar and coconut chutney.",
    instagramRef: "@_kuubera_ • Signature South Indian",
    gridSpan: "col-span-12 md:col-span-5 row-span-1",
    aspectClass: "min-h-[220px]",
    imageUrl: "",
    recommendedPath: "assets/images/gallery/food-dosa.webp",
    placeholderArt: "food-dosa"
  },
  {
    id: "gal-3",
    title: "Highway Landmark Exterior & Grand Entrance",
    category: "Exterior & Entrance",
    caption: "Welcoming travellers and families at Gat No. 91, Varve Budruk, near Khed Shivapur Toll Plaza on NH-48.",
    instagramRef: "@_kuubera_ • Exterior & Arrival",
    gridSpan: "col-span-12 md:col-span-5 row-span-1",
    aspectClass: "min-h-[220px]",
    imageUrl: "",
    recommendedPath: "assets/images/gallery/exterior-entrance.webp",
    placeholderArt: "exterior-arch"
  },
  {
    id: "gal-4",
    title: "Family Dining & Together Moments",
    category: "Family Dining",
    caption: "Comfortable seating arrangements designed for families, road-trip groups, and special celebrations.",
    instagramRef: "@_kuubera_ • Family Hospitality",
    gridSpan: "col-span-12 md:col-span-4 row-span-1",
    aspectClass: "min-h-[260px]",
    imageUrl: "",
    recommendedPath: "assets/images/gallery/family-dining.webp",
    placeholderArt: "family-table"
  },
  {
    id: "gal-5",
    title: "Hygienic Open Kitchen & Food Preparation View",
    category: "Food Preparation",
    caption: "Guests frequently praise our bird's-eye view of the spotless food preparation area and high hygiene standards.",
    instagramRef: "@_kuubera_ • Pure Veg Kitchen Hygiene",
    gridSpan: "col-span-12 md:col-span-4 row-span-1",
    aspectClass: "min-h-[260px]",
    imageUrl: "",
    recommendedPath: "assets/images/gallery/kitchen-hygiene.webp",
    placeholderArt: "open-kitchen"
  },
  {
    id: "gal-6",
    title: "Scenic Surroundings & Evening Ambience",
    category: "Ambience & Views",
    caption: "Enjoy scenic views around Varve Budruk and a calm, refreshing dining atmosphere from 7:00 AM to 11:00 PM.",
    instagramRef: "@_kuubera_ • Scenic Ambience",
    gridSpan: "col-span-12 md:col-span-4 row-span-1",
    aspectClass: "min-h-[260px]",
    imageUrl: "",
    recommendedPath: "assets/images/gallery/scenic-ambience.webp",
    placeholderArt: "scenic-view"
  },
  {
    id: "gal-7",
    title: "Punjabi & Jain Feast Spread",
    category: "Food Photographs",
    caption: "Rich Paneer Butter Masala, Dal Makhani, Jain Pav Bhaji, and hot tandoori rotis made fresh to order.",
    instagramRef: "@_kuubera_ • Multi-Cuisine Spread",
    gridSpan: "col-span-12 md:col-span-6 row-span-1",
    aspectClass: "min-h-[250px]",
    imageUrl: "",
    recommendedPath: "assets/images/gallery/north-indian-spread.webp",
    placeholderArt: "royal-thali"
  },
  {
    id: "gal-8",
    title: "Special Occasions & Guest Celebrations",
    category: "Family Dining",
    caption: "From temple visits at Balaji & Trimandir to weekend family drives—celebrating memorable moments at Kuubera.",
    instagramRef: "@_kuubera_ • Guest Experiences",
    gridSpan: "col-span-12 md:col-span-6 row-span-1",
    aspectClass: "min-h-[250px]",
    imageUrl: "",
    recommendedPath: "assets/images/gallery/special-occasions.webp",
    placeholderArt: "celebration"
  }
];
