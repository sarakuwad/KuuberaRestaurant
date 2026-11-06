/**
 * ============================================================================
 * KUUBERA PURE VEG — OWNER EDITABLE MENU DATA
 * ============================================================================
 * Instructions for Restaurant Owner:
 * 1. To update a dish price: Change `price: null` to the exact INR amount
 *    (for example: `price: 140`). Do not include the ₹ symbol; the website
 *    automatically formats numbers as ₹140.
 * 2. When `price: null`, the website leaves the price unpublished ("Ask at
 *    Restaurant / Seasonal Tariff") rather than showing a guessed price.
 * 3. To add a dish photograph: Place your image in `assets/images/menu/` and
 *    set `image: "assets/images/menu/your-photo.webp"`.
 * 4. You can also edit prices and add/remove dishes visually using the
 *    "Owner Admin Mode" button in the website footer!
 * ============================================================================
 */

window.KUUBERA_MENU_CATEGORIES = [
  "South Indian",
  "North Indian",
  "Punjabi",
  "Chinese",
  "Starters",
  "Soups",
  "Pav Bhaji & Street Food",
  "Snacks",
  "Breakfast",
  "Rice & Biryani",
  "Thalis",
  "Beverages",
  "Desserts",
  "Jain Specialities"
];

window.KUUBERA_SIGNATURE_DISHES = [
  {
    id: "sig-masala-dosa",
    name: "Masala Dosa",
    category: "South Indian",
    cuisineGroup: "South Indian",
    price: null, // Owner: Enter verified INR price (e.g., 110)
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "Guest Favourite",
    description: "Crisp golden fermented rice-and-lentil crepe filled with classic spiced potato bhaji, served with fresh coconut chutney and piping hot sambar.",
    reviewNote: "Praised in guest reviews for crisp preparation and authentic South Indian flavour.",
    image: "",
    recommendedImagePath: "assets/images/menu/masala-dosa.webp",
    visualTheme: "dosa"
  },
  {
    id: "sig-misal-pav",
    name: "Misal Pav",
    category: "Snacks",
    cuisineGroup: "Snacks",
    price: null, // Owner: Enter verified INR price
    isVeg: true,
    isJain: false,
    isPopular: true,
    badge: "Maharashtrian Classic",
    description: "Traditional spiced sprouted moth bean curry topped with crunchy farsan, finely chopped onions, fresh coriander, lemon, and soft buttered pav.",
    reviewNote: "A staple highway stop favourite near Khed Shivapur.",
    image: "",
    recommendedImagePath: "assets/images/menu/misal-pav.webp",
    visualTheme: "misal"
  },
  {
    id: "sig-paneer-tikka",
    name: "Paneer Tikka",
    category: "Starters",
    cuisineGroup: "North Indian",
    price: null, // Owner: Enter verified INR price
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "Tandoor Speciality",
    description: "Succulent cubes of fresh cottage cheese marinated in spiced hung curd and roasted in the clay tandoor with bell peppers and charred aromatics.",
    reviewNote: "Available in classic tandoori and Jain-friendly preparation on request.",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-tikka.webp",
    visualTheme: "paneer-tikka"
  },
  {
    id: "sig-chole-bhature",
    name: "Chole Bhature",
    category: "North Indian",
    cuisineGroup: "North Indian",
    price: null, // Owner: Enter verified INR price
    isVeg: true,
    isJain: false,
    isPopular: true,
    badge: "North Indian Favourite",
    description: "Fluffy golden fried bhature breads paired with slow-simmered Amritsari-style spiced chickpea masala, tangy pickle, and accompaniments.",
    reviewNote: "Hearty, generous portion size ideal for breakfast or lunch.",
    image: "",
    recommendedImagePath: "assets/images/menu/chole-bhature.webp",
    visualTheme: "chole-bhature"
  },
  {
    id: "sig-paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: null, // Owner: Enter verified INR price
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "Chef's Signature Gravy",
    description: "Soft cottage cheese cubes simmered in a velvety, mildly sweet and tangy tomato-cashew butter gravy finished with aromatic kasuri methi and cream.",
    reviewNote: "Highlighted in Kuubera's North Indian & Punjabi main course listings.",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-butter-masala.webp",
    visualTheme: "paneer-butter"
  },
  {
    id: "sig-dal-makhani",
    name: "Dal Makhani",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: null, // Owner: Enter verified INR price
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "Slow-Simmered Classic",
    description: "Whole black lentils and red kidney beans slow-cooked with tomatoes, ginger, butter, and fresh cream for a rich, comforting North Indian delicacy.",
    reviewNote: "Pairs effortlessly with hot tandoori butter rotis or jeera rice.",
    image: "",
    recommendedImagePath: "assets/images/menu/dal-makhani.webp",
    visualTheme: "dal-makhani"
  }
];

window.KUUBERA_MENU_ITEMS = [
  // ======================== 1. SOUTH INDIAN ========================
  {
    id: "si-masala-dosa",
    name: "Masala Dosa",
    category: "South Indian",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Golden crispy rice crepe with traditional tempered potato masala, served with sambar and fresh coconut chutney.",
    image: "",
    recommendedImagePath: "assets/images/menu/masala-dosa.webp"
  },
  {
    id: "si-mysore-masala-dosa",
    name: "Mysore Masala Dosa",
    category: "South Indian",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Crisp dosa layered with signature spicy Mysore red chutney and savoury potato masala filling. Frequently praised by Kuubera guests.",
    image: "",
    recommendedImagePath: "assets/images/menu/mysore-masala-dosa.webp"
  },
  {
    id: "si-plain-dosa",
    name: "Plain Sada Dosa",
    category: "South Indian",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Light, thin, and crisp South Indian fermented rice-lentil crepe served with sambar and duo of chutneys.",
    image: "",
    recommendedImagePath: "assets/images/menu/plain-dosa.webp"
  },
  {
    id: "si-idli-sambar",
    name: "Steamed Idli Sambar",
    category: "South Indian",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Soft, pillowy steamed rice cakes served with aromatic South Indian lentil sambar and fresh coconut chutney.",
    image: "",
    recommendedImagePath: "assets/images/menu/idli-sambar.webp"
  },
  {
    id: "si-medu-vada",
    name: "Crispy Medu Vada",
    category: "South Indian",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Golden-fried spiced urad dal lentil doughnuts, crisp on the outside and fluffy inside, served with sambar and chutney.",
    image: "",
    recommendedImagePath: "assets/images/menu/medu-vada.webp"
  },

  // ======================== 2. NORTH INDIAN ========================
  {
    id: "ni-chole-bhature",
    name: "Chole Bhature",
    category: "North Indian",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: false,
    isPopular: true,
    description: "Classic North Indian spiced chickpea curry served with puffed golden bhature, pickle, and salad.",
    image: "",
    recommendedImagePath: "assets/images/menu/chole-bhature.webp"
  },
  {
    id: "ni-veg-handi",
    name: "Veg Handi",
    category: "North Indian",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Seasonal garden vegetables slow-cooked in a traditional rich handi gravy with aromatic Indian spices.",
    image: "",
    recommendedImagePath: "assets/images/menu/veg-handi.webp"
  },
  {
    id: "ni-dal-fry",
    name: "Dal Fry / Dal Tadka",
    category: "North Indian",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Yellow lentils tempered with cumin, mustard seeds, ghee, and aromatic herbs. Available in Jain preparation.",
    image: "",
    recommendedImagePath: "assets/images/menu/dal-fry.webp"
  },
  {
    id: "ni-tandoori-roti",
    name: "Tandoori Roti / Butter Roti",
    category: "North Indian",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Whole wheat flatbread baked fresh in the clay tandoor, served plain or brushed with pure butter.",
    image: "",
    recommendedImagePath: "assets/images/menu/tandoori-roti.webp"
  },
  {
    id: "ni-butter-naan",
    name: "Butter Naan",
    category: "North Indian",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Soft, leavened tandoor-baked flatbread glazed with melted butter—ideal with Punjabi & Jain gravies.",
    image: "",
    recommendedImagePath: "assets/images/menu/butter-naan.webp"
  },

  // ======================== 3. PUNJABI ========================
  {
    id: "pj-paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Fresh cottage cheese cubes in a rich, creamy tomato-butter gravy with subtle fenugreek notes.",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-butter-masala.webp"
  },
  {
    id: "pj-paneer-mutter",
    name: "Paneer Mutter",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Homestyle Punjabi preparation of tender green peas and cottage cheese simmered in a spiced tomato gravy.",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-mutter.webp"
  },
  {
    id: "pj-dal-makhani",
    name: "Dal Makhani",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Rich and creamy slow-cooked black lentils finished with butter and cream.",
    image: "",
    recommendedImagePath: "assets/images/menu/dal-makhani.webp"
  },
  {
    id: "pj-veg-kolhapuri",
    name: "Veg Kolhapuri",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: false,
    isPopular: false,
    description: "Assorted vegetables cooked in a bold, spicy roasted coconut and red chilli masala.",
    image: "",
    recommendedImagePath: "assets/images/menu/veg-kolhapuri.webp"
  },

  // ======================== 4. CHINESE ========================
  {
    id: "ch-veg-manchurian",
    name: "Veg Manchurian (Dry / Gravy)",
    category: "Chinese",
    cuisineGroup: "Chinese",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Crisp vegetable dumplings tossed in a savoury soy, ginger, and bell pepper Indo-Chinese sauce.",
    image: "",
    recommendedImagePath: "assets/images/menu/veg-manchurian.webp"
  },
  {
    id: "ch-veg-hakka-noodles",
    name: "Veg Hakka Noodles",
    category: "Chinese",
    cuisineGroup: "Chinese",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Wok-tossed noodles with julienned cabbage, carrots, capsicum, and Indo-Chinese seasonings.",
    image: "",
    recommendedImagePath: "assets/images/menu/hakka-noodles.webp"
  },
  {
    id: "ch-veg-fried-rice",
    name: "Veg Fried Rice / Schezwan Fried Rice",
    category: "Chinese",
    cuisineGroup: "Chinese",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Fragrant basmati rice stir-fried on high flame with crunchy garden vegetables and oriental sauces.",
    image: "",
    recommendedImagePath: "assets/images/menu/fried-rice.webp"
  },

  // ======================== 5. STARTERS ========================
  {
    id: "st-paneer-tikka",
    name: "Paneer Tikka",
    category: "Starters",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Char-grilled cottage cheese cubes marinated in spiced yogurt and tandoori masalas.",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-tikka.webp"
  },
  {
    id: "st-paneer-chilli",
    name: "Paneer Chilli Dry",
    category: "Starters",
    cuisineGroup: "Chinese",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Batter-fried cottage cheese cubes wok-tossed with green chillies, capsicum, and tangy soy glaze.",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-chilli.webp"
  },
  {
    id: "st-veg-crispy",
    name: "Veg Crispy",
    category: "Starters",
    cuisineGroup: "Chinese",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Crunchy battered seasonal vegetables tossed in a tangy, mildly spiced Schezwan dressing.",
    image: "",
    recommendedImagePath: "assets/images/menu/veg-crispy.webp"
  },

  // ======================== 6. SOUPS ========================
  {
    id: "sp-veg-manchow-soup",
    name: "Veg Manchow Soup",
    category: "Soups",
    cuisineGroup: "Chinese",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Warm, comforting dark soy-vegetable broth topped with crunchy fried noodles.",
    image: "",
    recommendedImagePath: "assets/images/menu/manchow-soup.webp"
  },
  {
    id: "sp-cream-of-tomato",
    name: "Cream of Tomato Soup",
    category: "Soups",
    cuisineGroup: "Starters",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Velvety ripe tomato soup garnished with fresh cream and crisp golden bread croutons.",
    image: "",
    recommendedImagePath: "assets/images/menu/tomato-soup.webp"
  },

  // ======================== 7. PAV BHAJI & STREET FOOD ========================
  {
    id: "pb-amul-pav-bhaji",
    name: "Special Pav Bhaji",
    category: "Pav Bhaji & Street Food",
    cuisineGroup: "Street Food",
    price: null,
    isVeg: true,
    isJain: false,
    isPopular: true,
    description: "Rich, buttery mashed vegetable bhaji slow-cooked on the tawa, served with toasted buttered pav, lemon, and onions.",
    image: "",
    recommendedImagePath: "assets/images/menu/pav-bhaji.webp"
  },
  {
    id: "pb-jain-pav-bhaji",
    name: "Jain Pav Bhaji",
    category: "Pav Bhaji & Street Food",
    cuisineGroup: "Jain",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Prepared strictly without onion, garlic, or potato using raw banana and fresh garden vegetables. A verified guest favourite at Kuubera.",
    image: "",
    recommendedImagePath: "assets/images/menu/jain-pav-bhaji.webp"
  },
  {
    id: "pb-masala-pav",
    name: "Masala Pav",
    category: "Pav Bhaji & Street Food",
    cuisineGroup: "Street Food",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Soft pav bread pan-toasted on the tawa with spiced butter bhaji masala and fresh coriander.",
    image: "",
    recommendedImagePath: "assets/images/menu/masala-pav.webp"
  },

  // ======================== 8. SNACKS ========================
  {
    id: "sn-misal-pav",
    name: "Misal Pav",
    category: "Snacks",
    cuisineGroup: "Snacks",
    price: null,
    isVeg: true,
    isJain: false,
    isPopular: true,
    description: "Zesty Puneri/Kolhapuri-style sprouted usal curry topped with crunchy farsan and served with soft pav.",
    image: "",
    recommendedImagePath: "assets/images/menu/misal-pav.webp"
  },
  {
    id: "sn-batata-vada",
    name: "Batata Vada / Vada Pav",
    category: "Snacks",
    cuisineGroup: "Snacks",
    price: null,
    isVeg: true,
    isJain: false,
    isPopular: false,
    description: "Hot golden gram-flour coated spiced potato fritters served with chutneys.",
    image: "",
    recommendedImagePath: "assets/images/menu/batata-vada.webp"
  },

  // ======================== 9. BREAKFAST ========================
  {
    id: "bf-kanda-poha",
    name: "Garam Kanda Poha / Upma",
    category: "Breakfast",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: false,
    isPopular: true,
    description: "Light and wholesome morning breakfast prepared fresh daily from 7:00 AM for highway travellers and families.",
    image: "",
    recommendedImagePath: "assets/images/menu/poha-upma.webp"
  },
  {
    id: "bf-south-indian-combo",
    name: "Idli Vada Mix Plate",
    category: "Breakfast",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "One steamed idli and one crispy medu vada served with hot sambar and fresh coconut chutney.",
    image: "",
    recommendedImagePath: "assets/images/menu/idli-vada.webp"
  },

  // ======================== 10. RICE & BIRYANI ========================
  {
    id: "rb-veg-dum-biryani",
    name: "Veg Dum Biryani",
    category: "Rice & Biryani",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Aromatic long-grain basmati rice layered with spiced seasonal vegetables, saffron, and whole spices, served with raita.",
    image: "",
    recommendedImagePath: "assets/images/menu/veg-dum-biryani.webp"
  },
  {
    id: "rb-dal-khichdi",
    name: "Dal Khichdi (With Pure Ghee)",
    category: "Rice & Biryani",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Comforting, wholesome blend of rice and yellow lentils tempered with cumin and pure ghee.",
    image: "",
    recommendedImagePath: "assets/images/menu/dal-khichdi.webp"
  },
  {
    id: "rb-jeera-rice",
    name: "Steamed Rice / Jeera Rice",
    category: "Rice & Biryani",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Fluffy basmati rice tempered with roasted cumin seeds and fresh coriander.",
    image: "",
    recommendedImagePath: "assets/images/menu/jeera-rice.webp"
  },

  // ======================== 11. THALIS ========================
  {
    id: "th-special-veg-thali",
    name: "Kuubera Special Pure Veg Thali",
    category: "Thalis",
    cuisineGroup: "North Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Complete wholesome meal featuring seasonal veg sabjis, dal, rotis, rice, papad, pickle, buttermilk, and sweet.",
    image: "",
    recommendedImagePath: "assets/images/menu/veg-thali.webp"
  },

  // ======================== 12. BEVERAGES ========================
  {
    id: "bv-watermelon-blossom",
    name: "Watermelon Blossom",
    category: "Beverages",
    cuisineGroup: "Beverages",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Kuubera's signature refreshing chilled watermelon cooler—frequently highlighted by guests as a must-try accompaniment.",
    image: "",
    recommendedImagePath: "assets/images/menu/watermelon-blossom.webp"
  },
  {
    id: "bv-filter-coffee",
    name: "South Indian Filter Coffee / Masala Chai",
    category: "Beverages",
    cuisineGroup: "South Indian",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Freshly brewed aromatic filter coffee or cardamom-ginger masala tea—essential for every highway stop.",
    image: "",
    recommendedImagePath: "assets/images/menu/filter-coffee.webp"
  },
  {
    id: "bv-masala-chaas",
    name: "Spiced Masala Buttermilk (Chaas)",
    category: "Beverages",
    cuisineGroup: "Beverages",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Cooling churned yogurt drink seasoned with roasted cumin, black salt, and fresh coriander.",
    image: "",
    recommendedImagePath: "assets/images/menu/masala-chaas.webp"
  },

  // ======================== 13. DESSERTS ========================
  {
    id: "ds-gulab-jamun",
    name: "Hot Gulab Jamun",
    category: "Desserts",
    cuisineGroup: "Desserts",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Soft, melt-in-the-mouth khoya dumplings soaked in warm cardamom and rose-infused sugar syrup.",
    image: "",
    recommendedImagePath: "assets/images/menu/gulab-jamun.webp"
  },
  {
    id: "ds-ice-cream",
    name: "Choice of Classic Ice Creams",
    category: "Desserts",
    cuisineGroup: "Desserts",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Refreshing creamy scoops in classic Indian and international flavours.",
    image: "",
    recommendedImagePath: "assets/images/menu/ice-cream.webp"
  },

  // ======================== 14. JAIN SPECIALITIES ========================
  {
    id: "jn-jain-pav-bhaji",
    name: "Jain Special Pav Bhaji",
    category: "Jain Specialities",
    cuisineGroup: "Jain",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Prepared strictly without onion, garlic, or root vegetables. Specifically praised by reviewers for authentic taste.",
    image: "",
    recommendedImagePath: "assets/images/menu/jain-pav-bhaji.webp"
  },
  {
    id: "jn-jain-sabji-roti",
    name: "Jain Sabji & Tandoori Roti Family Meal",
    category: "Jain Specialities",
    cuisineGroup: "Jain",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "Freshly prepared Jain paneer/vegetable gravies and hot rotis with generous portion sizes ideal for family sharing.",
    image: "",
    recommendedImagePath: "assets/images/menu/jain-sabji-roti.webp"
  },
  {
    id: "jn-jain-paneer-butter-masala",
    name: "Jain Paneer Butter Masala",
    category: "Jain Specialities",
    cuisineGroup: "Jain",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: true,
    description: "No-onion, no-garlic rich tomato-cashew butter gravy with soft cubes of fresh paneer.",
    image: "",
    recommendedImagePath: "assets/images/menu/jain-paneer.webp"
  },
  {
    id: "jn-jain-dal-fry",
    name: "Jain Dal Fry & Jeera Rice",
    category: "Jain Specialities",
    cuisineGroup: "Jain",
    price: null,
    isVeg: true,
    isJain: true,
    isPopular: false,
    description: "Wholesome yellow lentils tempered with cumin, ghee, and tomatoes (without onion or garlic).",
    image: "",
    recommendedImagePath: "assets/images/menu/jain-dal-fry.webp"
  }
];
