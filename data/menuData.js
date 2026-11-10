/**
 * ============================================================================
 * KUUBERA PURE VEG — COMPLETE OFFICIAL MENU DATA (ALL 9 MENU PAGES)
 * ============================================================================
 * Populated with 100% of the items and current revised INR prices from the
 * official Kuubera Pure Veg printed menu card.
 * - We Accept Party Orders -
 * ============================================================================
 */

window.KUUBERA_MENU_CATEGORIES = [
  "South Indian",
  "Breakfast",
  "Maharashtrian",
  "Snacks",
  "Pav Bhaji & Street Food",
  "Soups",
  "Starters",
  "Punjabi",
  "North Indian",
  "Rice & Biryani",
  "Chinese",
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
    price: 165,
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "South Indian Classic • 7AM–10:30PM",
    description: "Crisp golden fermented rice-and-lentil crepe filled with spiced potato masala, served with fresh coconut chutney and piping hot sambar. (Butter Masala Dosa Kuubera Special: ₹190)",
    reviewNote: "Praised in guest reviews for crisp preparation and authentic South Indian flavour.",
    image: "",
    recommendedImagePath: "assets/images/menu/masala-dosa.webp"
  },
  {
    id: "sig-misal-pav",
    name: "Misal Pav",
    category: "Maharashtrian",
    cuisineGroup: "Snacks",
    price: 150,
    isVeg: true,
    isJain: false,
    isPopular: true,
    badge: "Maharashtrian Favourite",
    description: "Traditional spiced sprouted usal curry topped with crunchy farsan, onions, fresh coriander, and lemon, served with soft pav.",
    reviewNote: "A signature highway stop favourite near Khed Shivapur.",
    image: "",
    recommendedImagePath: "assets/images/menu/misal-pav.webp"
  },
  {
    id: "sig-paneer-tikka",
    name: "Paneer Tikka",
    category: "Starters",
    cuisineGroup: "North Indian",
    price: 390,
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "Tandoori Starter Speciality",
    description: "Succulent cubes of fresh cottage cheese marinated in spiced hung curd and roasted in the clay tandoor with bell peppers and aromatics.",
    reviewNote: "Also available in Lasuni, Pudina, Malai, Achari & Jungli Tikka (₹390).",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-tikka.webp"
  },
  {
    id: "sig-chole-bhature",
    name: "Chole Bhature",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: 330,
    isVeg: true,
    isJain: false,
    isPopular: true,
    badge: "Punjabi Favourite • 11AM–11:30PM",
    description: "Fluffy golden fried bhature breads paired with slow-simmered Amritsari-style spiced chickpea masala, tangy pickle, and accompaniments.",
    reviewNote: "Hearty, generous portion size ideal for family sharing.",
    image: "",
    recommendedImagePath: "assets/images/menu/chole-bhature.webp"
  },
  {
    id: "sig-paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "Punjabi",
    cuisineGroup: "North Indian",
    price: 390,
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "Chef's Signature Gravy",
    description: "Soft cottage cheese cubes simmered in a rich, velvety tomato-cashew butter gravy finished with aromatic kasuri methi and fresh cream.",
    reviewNote: "Pairs effortlessly with Butter Naan (₹105) or Butter Roti (₹60).",
    image: "",
    recommendedImagePath: "assets/images/menu/paneer-butter-masala.webp"
  },
  {
    id: "sig-dal-makhani",
    name: "Dal Makhani",
    category: "North Indian",
    cuisineGroup: "North Indian",
    price: 330,
    isVeg: true,
    isJain: true,
    isPopular: true,
    badge: "Slow-Simmered Classic",
    description: "Whole black lentils and red kidney beans slow-cooked with tomatoes, ginger, butter, and fresh cream for a rich, comforting delicacy.",
    reviewNote: "A staple North Indian accompaniment for Jeera Rice (₹240) and Tandoori Rotis.",
    image: "",
    recommendedImagePath: "assets/images/menu/dal-makhani.webp"
  }
];

// Helper to create menu items concisely
function m(id, name, category, cuisineGroup, price, description, opts = {}) {
  return {
    id,
    name,
    category,
    cuisineGroup,
    price,
    isVeg: true,
    isJain: Boolean(opts.isJain),
    isPopular: Boolean(opts.isPopular),
    description: description || "",
    image: opts.image || "",
    recommendedImagePath: `assets/images/menu/${id}.webp`
  };
}

window.KUUBERA_MENU_ITEMS = [
  // ==========================================================================
  // PAGE 1: SOUTH INDIAN — IDLI, DOSA & UTTAPAM (7:00 AM to 10:30 PM)
  // ==========================================================================
  m("idli-1", "Idli", "South Indian", "South Indian", 120, "Steamed pillowy rice-lentil cakes served with hot sambar and fresh coconut chutney (7 AM – 10:30 PM).", { isJain: true, isPopular: true }),
  m("idli-2", "Idli Wada", "South Indian", "South Indian", 140, "Combo of soft steamed idli and crispy medu wada served with sambar and chutney.", { isJain: true, isPopular: true }),
  m("idli-3", "Medu Wada", "South Indian", "South Indian", 140, "Golden-fried crispy urad dal lentil doughnuts served with piping hot sambar and chutney.", { isJain: true, isPopular: true }),
  m("idli-4", "Batata Wada Sambar", "South Indian", "South Indian", 140, "Spiced potato fritters served with South Indian lentil sambar and chutney."),
  m("idli-5", "Butter Idli", "South Indian", "South Indian", 150, "Soft steamed idlis tossed with pure butter, served with chutney and sambar.", { isJain: true }),
  m("idli-6", "Extra Chatni", "South Indian", "South Indian", 40, "Extra portion of fresh coconut chutney.", { isJain: true }),
  m("idli-7", "Extra Sambhar", "South Indian", "South Indian", 40, "Extra bowl of piping hot South Indian sambar.", { isJain: true }),

  // DOSA
  m("dosa-1", "Sada Dosa", "South Indian", "South Indian", 140, "Classic thin and crispy fermented rice-lentil crepe served with sambar and chutney.", { isJain: true }),
  m("dosa-2", "Butter Sada Dosa", "South Indian", "South Indian", 165, "Crisp sada dosa roasted in rich butter, served with sambar and chutney.", { isJain: true }),
  m("dosa-3", "Ghee Sada Dosa", "South Indian", "South Indian", 165, "Aromatic crisp sada dosa roasted in pure ghee.", { isJain: true }),
  m("dosa-4", "Masala Dosa", "South Indian", "South Indian", 165, "Crisp golden dosa filled with traditional spiced potato bhaji, served with sambar and coconut chutney.", { isPopular: true }),
  m("dosa-5", "Butter Masala Dosa (Kuubera Special)", "South Indian", "South Indian", 190, "Kuubera Special crisp masala dosa generously roasted in pure butter.", { isPopular: true }),
  m("dosa-6", "Cheese Sada Dosa", "South Indian", "South Indian", 190, "Crisp plain dosa topped with grated melted cheese.", { isJain: true }),
  m("dosa-7", "Cheese Masala Dosa", "South Indian", "South Indian", 230, "Classic masala dosa loaded with grated cheese, served with sambar and chutney.", { isPopular: true }),
  m("dosa-8", "Mysore Dosa", "South Indian", "South Indian", 210, "Crisp dosa layered with spicy Mysore chutney.", { isJain: true }),
  m("dosa-9", "Mysore Masala Dosa", "South Indian", "South Indian", 230, "Crisp dosa spread with signature spicy Mysore chutney and spiced potato masala. A verified guest favourite.", { isPopular: true }),
  m("dosa-10", "Butter Mysore Dosa", "South Indian", "South Indian", 210, "Mysore dosa roasted with rich butter.", { isJain: true }),
  m("dosa-11", "Ghee Mysore Masala Dosa (Special)", "South Indian", "South Indian", 240, "Special Mysore masala dosa roasted in pure aromatic ghee.", { isPopular: true }),
  m("dosa-12", "Cheese Mysore Dosa", "South Indian", "South Indian", 240, "Mysore dosa topped with melted cheese.", { isJain: true }),
  m("dosa-13", "Cheese Mysore Masala Dosa", "South Indian", "South Indian", 270, "Spicy Mysore masala dosa generously topped with grated cheese.", { isPopular: true }),
  m("dosa-14", "Rava Dosa", "South Indian", "South Indian", 190, "Crisp netted semolina crepe seasoned with cumin, black pepper, and herbs.", { isJain: true }),
  m("dosa-15", "Rava Masala Dosa", "South Indian", "South Indian", 210, "Crispy semolina rava dosa filled with spiced potato masala."),
  m("dosa-16", "Onion Rava Sada", "South Indian", "South Indian", 190, "Crisp semolina dosa studded with finely chopped onions and green chillies."),
  m("dosa-17", "Onion Rava Masala", "South Indian", "South Indian", 210, "Onion semolina rava dosa with spiced potato filling."),
  m("dosa-18", "Paper Sada Dosa", "South Indian", "South Indian", 280, "Extra-long, wafer-thin crispy paper dosa served with sambar and chutneys.", { isJain: true }),
  m("dosa-19", "Paper Masala Dosa", "South Indian", "South Indian", 330, "Giant wafer-thin crispy paper dosa served with spiced potato masala."),
  m("dosa-20", "Butter Paper Masala Dosa", "South Indian", "South Indian", 370, "Extra-long crispy paper masala dosa roasted in rich butter."),
  m("dosa-21", "Set Dosa", "South Indian", "South Indian", 190, "Soft, spongy set of South Indian dosas served with sambar and coconut chutney.", { isJain: true }),
  m("dosa-22", "Spring Dosa", "South Indian", "South Indian", 240, "Crisp dosa rolled with crunchy julienned vegetables and tangy sauces.", { isJain: true }),
  m("dosa-23", "Pav Bhaji Dosa", "South Indian", "South Indian", 240, "Fusion dosa filled with buttery tawa-spiced pav bhaji masala.", { isJain: true }),
  m("dosa-24", "Gini Dosa (Kuubera Special)", "South Indian", "South Indian", 280, "Kuubera Specialbite-sized rolled dosa stuffed with spiced veggies, butter, and melted cheese.", { isJain: true, isPopular: true }),
  m("dosa-25", "Pizza Dosa", "South Indian", "South Indian", 230, "Crisp dosa topped with pizza sauce, bell peppers, sweet corn, and melted cheese.", { isJain: true }),
  m("dosa-26", "Chocolate Dosa", "South Indian", "South Indian", 230, "Sweet crispy dosa layered with rich melted chocolate—loved by kids and families.", { isJain: true }),
  m("dosa-27", "Schezwan Dosa", "South Indian", "South Indian", 230, "Crisp dosa brushed with fiery Indo-Chinese Schezwan sauce.", { isJain: true }),
  m("dosa-28", "Neer Dosa", "South Indian", "South Indian", 160, "Delicate, soft Mangalorean-style thin rice crepes served with coconut chutney.", { isJain: true }),
  m("dosa-29", "Extra Cheese / Extra Butter", "South Indian", "South Indian", 50, "Add-on Extra Cheese (₹50) or Extra Butter (₹35).", { isJain: true }),

  // UTTAPAM
  m("utt-1", "Plain Uttapam", "South Indian", "South Indian", 160, "Thick, savoury South Indian rice-lentil pancake served with sambar and chutney.", { isJain: true }),
  m("utt-2", "Masala Uttapam", "South Indian", "South Indian", 180, "Thick uttapam topped with spiced masala and herbs."),
  m("utt-3", "Onion Uttapam", "South Indian", "South Indian", 190, "Fluffy uttapam topped with caramelized chopped onions and coriander."),
  m("utt-4", "Tomato Uttapam", "South Indian", "South Indian", 190, "Savoury uttapam topped with fresh ripe tomatoes and herbs.", { isJain: true }),
  m("utt-5", "Onion Tomato Uttapam", "South Indian", "South Indian", 190, "Classic uttapam topped with juicy tomatoes, onions, and green chillies.", { isPopular: true }),
  m("utt-6", "Cheese Uttapam", "South Indian", "South Indian", 190, "Plain uttapam generously topped with grated cheese.", { isJain: true }),
  m("utt-7", "Cheese Onion Uttapam", "South Indian", "South Indian", 230, "Onion uttapam loaded with melted cheese."),
  m("utt-8", "Cheese Tomato Uttapam", "South Indian", "South Indian", 230, "Tomato uttapam topped with melted cheese.", { isJain: true }),
  m("utt-9", "Cheese Onion Tomato Uttapam", "South Indian", "South Indian", 230, "Onion and tomato uttapam finished with grated cheese."),
  m("utt-10", "Cheese Masala Uttapam", "South Indian", "South Indian", 230, "Spiced masala uttapam topped with grated cheese."),
  m("utt-11", "David Uttapam (Kuubera Special)", "South Indian", "South Indian", 210, "Kuubera Special signature uttapam prepared with chef's special toppings.", { isPopular: true }),
  m("utt-12", "Cheese David Uttapam", "South Indian", "South Indian", 270, "Kuubera Special David Uttapam loaded with grated cheese."),
  m("utt-13", "Butter David Uttapam", "South Indian", "South Indian", 270, "Kuubera Special David Uttapam roasted in rich butter."),

  // ==========================================================================
  // BREAKFAST & ADD-ONS (Morning Favourites)
  // ==========================================================================
  m("bf-idli", "Morning Steamed Idli", "Breakfast", "South Indian", 120, "Served fresh from 7:00 AM with hot sambar and coconut chutney.", { isJain: true, isPopular: true }),
  m("bf-idli-wada", "Idli Wada Combo", "Breakfast", "South Indian", 140, "1 Idli + 1 Medu Wada with sambar and coconut chutney.", { isJain: true, isPopular: true }),
  m("bf-upma", "Garam Upma", "Breakfast", "South Indian", 90, "Warm tempered semolina upma garnished with fresh coriander and sev.", { isJain: true }),
  m("bf-poha", "Kanda Poha", "Breakfast", "South Indian", 90, "Traditional Maharashtrian flattened rice tempered with mustard seeds, curry leaves, onions, and peanuts.", { isPopular: true }),
  m("bf-puri-bhaji", "Puri Bhaji", "Breakfast", "North Indian", 210, "Fluffy golden fried wheat puris served with classic spiced potato bhaji.", { isPopular: true }),
  m("bf-sheera", "Pineapple Sheera", "Breakfast", "South Indian", 90, "Sweet golden semolina halwa infused with pineapple, ghee, and dry fruits.", { isJain: true }),
  m("bf-bread-butter", "Bread Butter", "Breakfast", "Snacks", 90, "Fresh bread slices generously spread with creamy butter.", { isJain: true }),
  m("bf-toast-butter", "Toast Butter", "Breakfast", "Snacks", 110, "Crisp golden toasted bread with butter.", { isJain: true }),
  m("bf-jam-toast", "Jam Toast", "Breakfast", "Snacks", 110, "Crisp toasted bread served with sweet fruit jam and butter.", { isJain: true }),

  // ==========================================================================
  // PAGE 2: MAHARASHTRIAN SPECIALITIES
  // ==========================================================================
  m("mh-1", "Upma", "Maharashtrian", "South Indian", 90, "Savoury roasted semolina tempered with mustard seeds, curry leaves, and mild spices.", { isJain: true }),
  m("mh-2", "Poha", "Maharashtrian", "Snacks", 90, "Classic light and fluffy Maharashtrian Kanda Poha topped with farsan and fresh coriander.", { isPopular: true }),
  m("mh-3", "Vada Pav", "Maharashtrian", "Snacks", 40, "Mumbai & Pune's iconic spiced potato fritter tucked inside soft pav with spicy dry garlic chutney.", { isPopular: true }),
  m("mh-4", "Misal Pav", "Maharashtrian", "Snacks", 150, "Zesty sprouted moth bean usal topped with farsan, onions, and coriander, served with pav.", { isPopular: true }),
  m("mh-5", "Kanda Bhaji", "Maharashtrian", "Snacks", 120, "Crispy golden-fried onion and gram flour fritters—perfect with hot masala tea.", { isPopular: true }),
  m("mh-6", "Puri Bhaji", "Maharashtrian", "North Indian", 210, "Puffed golden puris served with homestyle spiced potato bhaji."),
  m("mh-7", "Pitthala Bhakri (Kuubera Special)", "Maharashtrian", "North Indian", 280, "Authentic rural Maharashtrian tempered gram-flour pitthala served with hot freshly patted bhakri and thecha.", { isJain: true, isPopular: true }),
  m("mh-8", "Matki Bhakri", "Maharashtrian", "North Indian", 290, "Spiced sprouted moth bean matki usal served with traditional jowar/bajra bhakri."),
  m("mh-9", "Pineapple Sheera", "Maharashtrian", "Desserts", 90, "Warm ghee-roasted semolina dessert infused with sweet pineapple.", { isJain: true }),
  m("mh-10", "Kuubera Special Wada (8 Pic)", "Maharashtrian", "Snacks", 240, "Platter of 8 crispy Kuubera Special wadas served with chutneys.", { isPopular: true }),

  // ==========================================================================
  // PAGE 2: SNACKS, SANDWICHES & BURGERS
  // ==========================================================================
  m("snk-1", "Sabudana Wada", "Snacks", "Snacks", 120, "Crispy deep-fried sago and crushed peanut patties served with sweetened curd/chutney (Fasting friendly).", { isJain: false, isPopular: true }),
  m("snk-2", "Sabudana Khichadi", "Snacks", "Snacks", 120, "soaked tapioca pearls tossed with roasted peanuts, cumin, and mild green chillies.", { isPopular: true }),
  m("snk-3", "Batata Wada (With Chatani & Sambar)", "Snacks", "Snacks", 120, "Hot golden gram-flour coated spiced potato balls served with chutney and sambar."),
  m("snk-4", "Dahi Wada", "Snacks", "Snacks", 160, "Soft lentil dumplings soaked in chilled seasoned yogurt, topped with sweet tamarind and mint chutneys.", { isJain: true, isPopular: true }),
  m("snk-5", "French Fries", "Snacks", "Snacks", 150, "Crisp golden salted potato fries."),
  m("snk-6", "Cheese Chilly Toast", "Snacks", "Snacks", 330, "Crisp open toast topped with melted cheese, bell peppers, and green chillies.", { isJain: true }),
  m("snk-7", "Cheese Garlic Bread", "Snacks", "Snacks", 330, "Oven-toasted baguette slices topped with herb butter and melted mozzarella cheese."),
  m("snk-8", "Garlic Bread", "Snacks", "Snacks", 240, "Crisp toasted garlic butter bread."),
  m("snk-9", "Bruschetta", "Snacks", "Snacks", 420, "Toasted artisan bread topped with diced tomatoes, basil, olive oil, and cheese.", { isJain: true }),
  m("snk-10", "Nachos with Salsa", "Snacks", "Snacks", 420, "Crispy corn tortilla chips served with tangy house tomato salsa.", { isJain: true }),
  m("snk-11", "Nachos with Beans", "Snacks", "Snacks", 480, "Loaded corn nachos topped with savoury beans, salsa, and cheese sauce.", { isJain: true }),

  // SANDWICHES
  m("snd-1", "Vegetable Sandwich", "Snacks", "Snacks", 120, "Fresh garden slices of cucumber, tomato, potato, and mint chutney in soft bread.", { isJain: true }),
  m("snd-2", "Cheese Sandwich", "Snacks", "Snacks", 160, "Classic buttered sandwich layered with grated cheese and mild seasoning.", { isJain: true }),
  m("snd-3", "Cheese Veg Sandwich", "Snacks", "Snacks", 150, "Fresh vegetable sandwich topped with a generous layer of grated cheese.", { isJain: true }),
  m("snd-4", "Toast Veg Sandwich", "Snacks", "Snacks", 170, "Golden toasted sandwich stuffed with spiced vegetables and green chutney.", { isJain: true }),
  m("snd-5", "Veg Cheese Toast Sandwich", "Snacks", "Snacks", 210, "Crisp toasted vegetable sandwich loaded with melted cheese.", { isJain: true, isPopular: true }),
  m("snd-6", "Club Sandwich", "Snacks", "Snacks", 240, "Triple-decker toasted sandwich layered with fresh veggies, coleslaw, and cheese.", { isJain: true }),
  m("snd-7", "Chocolate Sandwich", "Snacks", "Snacks", 180, "Sweet sandwich filled with rich chocolate spread.", { isJain: true }),
  m("snd-8", "Cheese Chocolate Sandwich", "Snacks", "Snacks", 230, "Indulgent combination of melted chocolate and grated cheese in toasted bread.", { isJain: true }),
  m("snd-9", "Chocolate Toast Sandwich", "Snacks", "Snacks", 230, "Crisp butter-toasted chocolate sandwich.", { isJain: true }),
  m("snd-10", "Vegetable Grill Sandwich", "Snacks", "Snacks", 210, "Jumbo grilled sandwich stuffed with spiced vegetables and chutneys.", { isJain: true }),
  m("snd-11", "Vegetable Cheese Grill Sandwich (Kuubera Special)", "Snacks", "Snacks", 280, "Kuubera Special multi-layered jumbo grilled vegetable sandwich overflowing with melted cheese.", { isJain: true, isPopular: true }),

  // BURGERS & FRANKIES
  m("brg-1", "Veg Burger", "Snacks", "Snacks", 150, "Crispy vegetable patty, fresh lettuce, tomatoes, and creamy dressing in a toasted sesame bun."),
  m("brg-2", "Cheese Burger", "Snacks", "Snacks", 180, "Classic veg burger topped with a slice of melted cheese.", { isPopular: true }),
  m("brg-3", "Frankie", "Snacks", "Snacks", 180, "Soft tawa-roasted roti roll wrapped around spiced mashed veggies and tangy frankie masala."),
  m("brg-4", "Paneer Frankie", "Snacks", "Snacks", 210, "Warm wrap stuffed with spiced paneer cubes, peppers, and tangy dressing.", { isJain: true, isPopular: true }),
  m("brg-5", "Cheese Frankie", "Snacks", "Snacks", 210, "Spiced vegetable frankie roll loaded with grated cheese."),

  // ==========================================================================
  // PAGE 3: PAV BHAJI (10:00 AM to 11:30 PM), PIZZA & CHAAT
  // ==========================================================================
  m("pb-1", "Butter Pav Bhaji", "Pav Bhaji & Street Food", "Street Food", 240, "Rich, buttery mashed vegetable bhaji slow-cooked on the tawa, served with soft butter-toasted pav (10 AM – 11:30 PM).", { isPopular: true }),
  m("pb-2", "Jain Pav Bhaji", "Pav Bhaji & Street Food", "Jain", 240, "Prepared strictly without onion, garlic, or potato using raw banana and fresh vegetables. A verified guest favourite.", { isJain: true, isPopular: true }),
  m("pb-3", "Bhakri Bhaji", "Pav Bhaji & Street Food", "Street Food", 240, "Signature tawa pav bhaji served with hot crispy traditional bhakri instead of pav.", { isJain: true }),
  m("pb-4", "Khada Pav Bhaji", "Pav Bhaji & Street Food", "Street Food", 260, "Chunky-style spiced vegetable bhaji cooked in butter, served with toasted pav.", { isJain: true }),
  m("pb-5", "Cheese Pav Bhaji", "Pav Bhaji & Street Food", "Street Food", 280, "Classic butter pav bhaji crowned with a generous mound of grated cheese.", { isJain: true, isPopular: true }),
  m("pb-6", "Cheese Khada Pav Bhaji", "Pav Bhaji & Street Food", "Street Food", 280, "Chunky khada pav bhaji topped with melted cheese.", { isJain: true }),
  m("pb-7", "Only Bhaji", "Pav Bhaji & Street Food", "Street Food", 190, "Portion of hot buttery tawa bhaji (without pav).", { isJain: true }),
  m("pb-8", "Only Cheese Bhaji", "Pav Bhaji & Street Food", "Street Food", 210, "Portion of hot cheese-topped tawa bhaji.", { isJain: true }),
  m("pb-9", "Only Khada Bhaji", "Pav Bhaji & Street Food", "Street Food", 210, "Portion of chunky khada bhaji."),
  m("pb-10", "Only Cheese Khada Bhaji", "Pav Bhaji & Street Food", "Street Food", 260, "Portion of chunky khada bhaji topped with cheese."),
  m("pb-11", "Kuubera Special Pav Bhaji", "Pav Bhaji & Street Food", "Street Food", 280, "Chef's special rich pav bhaji garnished with dry fruits, paneer, and extra butter.", { isJain: true, isPopular: true }),
  m("pb-12", "Masala Pav", "Pav Bhaji & Street Food", "Street Food", 150, "Soft pav pan-toasted on the tawa with spiced butter bhaji masala.", { isJain: true }),
  m("pb-13", "Cheese Masala Pav", "Pav Bhaji & Street Food", "Street Food", 180, "Tawa-spiced masala pav loaded with grated cheese.", { isJain: true }),
  m("pb-14", "Chatni Masala Pav", "Pav Bhaji & Street Food", "Street Food", 120, "Buttered pav tossed on the tawa with fiery garlic/mint chutney."),
  m("pb-15", "Cheese Chatni Masala Pav", "Pav Bhaji & Street Food", "Street Food", 190, "Zesty chutney masala pav topped with melted cheese."),
  m("pb-16", "Single Pav", "Pav Bhaji & Street Food", "Street Food", 40, "Single butter-toasted pav.", { isJain: true }),
  m("pb-17", "Extra Pav Jodi", "Pav Bhaji & Street Food", "Street Food", 80, "Pair of 2 hot butter-toasted pavs.", { isJain: true }),
  m("pb-18", "Kadak Pav", "Pav Bhaji & Street Food", "Street Food", 40, "Extra-crisp butter-toasted kadak pav.", { isJain: true }),
  m("pb-19", "Onion Fry", "Pav Bhaji & Street Food", "Street Food", 50, "Tawa-sautéed spiced masala onions."),
  m("pb-20", "Kuubera Special Pav Sandwich", "Pav Bhaji & Street Food", "Street Food", 210, "Unique tawa-grilled pav stuffed with special spiced filling and cheese.", { isJain: true }),

  // PIZZA
  m("piz-1", "Special Pizza", "Pav Bhaji & Street Food", "Street Food", 330, "Freshly baked vegetarian pizza topped with house tomato sauce, veggies, and mozzarella.", { isJain: true }),
  m("piz-2", "Jain Pizza", "Pav Bhaji & Street Food", "Jain", 320, "Prepared with no-onion, no-garlic pizza sauce, bell peppers, sweet corn, and cheese.", { isJain: true, isPopular: true }),
  m("piz-3", "Cheese Pizza", "Pav Bhaji & Street Food", "Street Food", 330, "Classic Margherita-style double cheese pizza.", { isJain: true }),
  m("piz-4", "All Toping Pizza", "Pav Bhaji & Street Food", "Street Food", 360, "Loaded with Mushroom, Onion, Capsicum, Olives, and melted Cheese.", { isPopular: true }),
  m("piz-5", "Mushroom Pizza", "Pav Bhaji & Street Food", "Street Food", 330, "Topped with fresh sliced mushrooms, herbs, and mozzarella cheese."),
  m("piz-6", "Paneer Tikka Pizza", "Pav Bhaji & Street Food", "Street Food", 330, "Fusion pizza topped with spiced tandoori paneer tikka cubes, capsicum, and cheese.", { isJain: true, isPopular: true }),

  // CHAAT
  m("cht-1", "Pani Puri (10 Puri)", "Pav Bhaji & Street Food", "Street Food", 90, "Plate of 10 crispy puris served with tangy mint-coriander pani, sweet tamarind chutney, and filling.", { isJain: true, isPopular: true }),
  m("cht-2", "Sukhi Bhel", "Pav Bhaji & Street Food", "Street Food", 110, "Dry crunchy puffed rice tossed with sev, farsan, dry chutney, and fresh coriander.", { isJain: true }),
  m("cht-3", "Chowpati Bhel (Oli Bhel)", "Pav Bhaji & Street Food", "Street Food", 140, "Mumbai Chowpatty-style wet bhel tossed with sweet-and-sour tamarind and mint chutneys.", { isJain: true, isPopular: true }),
  m("cht-4", "Shev Batata Puri", "Pav Bhaji & Street Food", "Street Food", 150, "Crisp flat puris topped with diced potatoes, three chutneys, and fine nylon sev."),
  m("cht-5", "Shev Dahi Batata Puri", "Pav Bhaji & Street Food", "Street Food", 180, "Crisp puris topped with potatoes, chilled sweetened curd, chutneys, and nylon sev."),
  m("cht-6", "Shev Puri Dahi Puri (SPDP)", "Pav Bhaji & Street Food", "Street Food", 180, "Pune's beloved SPDP—crisp puris filled with potato/sprouts, tangy chutneys, sweet curd, and sev.", { isJain: true, isPopular: true }),
  m("cht-7", "Golden Bhel", "Pav Bhaji & Street Food", "Street Food", 140, "Special crunchy golden bhel mix.", { isJain: true }),
  m("cht-8", "Ragada Puri", "Pav Bhaji & Street Food", "Street Food", 120, "Crisp puris topped with warm spiced white pea ragada, chutneys, and sev.", { isJain: true }),
  m("cht-9", "Matki Bhel", "Pav Bhaji & Street Food", "Street Food", 120, "Wholesome bhel tossed with sprouted moth beans (matki), chutneys, onions, and sev."),

  // ==========================================================================
  // PAGE 3: SOUP (11:00 AM to 11:30 PM) & PAPAD
  // ==========================================================================
  m("soup-1", "Veg Clear Soup", "Soups", "Chinese", 240, "Light, steaming vegetable broth simmered with diced garden veggies (11 AM – 11:30 PM).", { isJain: true }),
  m("soup-2", "Tomato Soup", "Soups", "Starters", 240, "Rich, velvety cream of ripe tomato soup served with crispy bread croutons.", { isJain: true, isPopular: true }),
  m("soup-3", "Lemon Coriander Soup", "Soups", "Chinese", 240, "Refreshing vitamin-rich broth infused with fresh lemon juice and fragrant coriander leaves.", { isJain: true }),
  m("soup-4", "Veg Manchow Soup", "Soups", "Chinese", 240, "Spicy dark soy-vegetable broth served with crispy fried noodles.", { isJain: true, isPopular: true }),
  m("soup-5", "Veg Sweet Corn Soup", "Soups", "Chinese", 240, "Comforting creamy soup with tender sweet corn kernels and diced vegetables.", { isJain: true, isPopular: true }),
  m("soup-6", "Veg Hot & Sour Soup", "Soups", "Chinese", 240, "Tangy and peppery Indo-Chinese vegetable soup.", { isJain: true }),
  m("soup-7", "Spinach Soup", "Soups", "Starters", 240, "Creamy, iron-rich fresh palak soup seasoned with herbs and cream.", { isJain: true }),
  m("soup-8", "Cream of Broccoli Soup", "Soups", "Starters", 280, "Smooth and wholesome broccoli florets simmered in fresh cream.", { isJain: true }),
  m("soup-9", "Cream of Mushroom Soup", "Soups", "Starters", 280, "Rich, earthy button mushroom soup finished with fresh cream."),
  m("soup-10", "Spl Noodles Soup", "Soups", "Chinese", 210, "Warm savoury broth with soft noodles and garden vegetables.", { isJain: true }),
  m("soup-11", "Ministons Soup", "Soups", "Starters", 240, "Classic Italian-style minestrone tomato-herb soup with vegetables and pasta.", { isJain: true }),
  m("soup-12", "Royal Soup", "Soups", "Starters", 240, "Kuubera's signature rich and creamy royal vegetarian soup.", { isJain: true }),

  // PAPAD (Under Soups & Accompaniments)
  m("ppd-1", "Papad Churi", "Soups", "North Indian", 180, "Crushed roasted/fried papad tossed with melted butter, coriander, and tangential spices.", { isJain: true, isPopular: true }),
  m("ppd-2", "Roasted Papad", "Soups", "North Indian", 50, "Crisp flame-roasted urad dal papad.", { isJain: true }),
  m("ppd-3", "Fried Papad", "Soups", "North Indian", 60, "Golden deep-fried crispy papad.", { isJain: true }),
  m("ppd-4", "Masala Papad", "Soups", "North Indian", 70, "Crisp papad topped with spiced finely chopped tomatoes, onions, coriander, and chaat masala.", { isJain: true, isPopular: true }),
  m("ppd-5", "Masala Khichiya", "Soups", "North Indian", 150, "Traditional Rajasthani/Gujarati rice khichiya papad topped with butter, sev, and masala.", { isJain: true, isPopular: true }),
  m("ppd-6", "Cheese Masala Khichiya", "Soups", "North Indian", 180, "Crisp masala khichiya papad generously loaded with grated cheese.", { isJain: true }),
  m("ppd-7", "Fried Khichiya", "Soups", "North Indian", 80, "Crisp fried plain khichiya papad.", { isJain: true }),

  // ==========================================================================
  // PAGE 4: PUNJABI & TANDOORI STARTERS
  // ==========================================================================
  m("pst-1", "Hara Bhara Kabab", "Starters", "North Indian", 360, "Pan-seared spinach, green pea, and cottage cheese patties spiced with royal herbs.", { isJain: true, isPopular: true }),
  m("pst-2", "Cheese Corn Balls", "Starters", "Starters", 360, "Golden-fried crunchy spheres filled with molten cheese, sweet corn, and herbs.", { isJain: true, isPopular: true }),
  m("pst-3", "Amritsari Tikki", "Starters", "North Indian", 360, "Crisp Punjabi spiced potato and lentil tikkis served with mint chutney."),
  m("pst-4", "Veg Eclair", "Starters", "Starters", 360, "Chef's special savoury stuffed vegetable and cheese starter.", { isJain: true }),
  m("pst-5", "Paneer Chatpata", "Starters", "North Indian", 370, "Soft paneer cubes tossed in a tangy, zesty chatpata masala.", { isJain: true }),
  m("pst-6", "Methi Corn Tikki", "Starters", "North Indian", 330, "Aromatic fresh fenugreek leaves and sweet corn patties grilled until crisp.", { isJain: true }),
  m("pst-7", "Tandoori Aloo", "Starters", "North Indian", 320, "Scooped potatoes marinated in spiced yogurt and roasted in the clay tandoor."),
  m("pst-8", "Tandoori Gobi", "Starters", "North Indian", 300, "Cauliflower florets marinated in tandoori spices and char-grilled.", { isJain: true }),
  m("pst-9", "Tandoori Mushroom", "Starters", "North Indian", 320, "Fresh button mushrooms marinated in spiced hung curd and roasted in the tandoor."),
  m("pst-10", "Cheese Stuffed Mushroom", "Starters", "North Indian", 370, "Button mushrooms stuffed with seasoned cheese and herbs, char-grilled to perfection."),
  m("pst-11", "Paneer Sholay (Kuubera Special)", "Starters", "North Indian", 420, "Kuubera Special fiery and smoky tandoori paneer preparation.", { isJain: true, isPopular: true }),
  m("pst-12", "Veg Sheek Kabab (Kuubera Special)", "Starters", "North Indian", 330, "Minced garden vegetables and spices skewered and roasted in the clay tandoor.", { isJain: true, isPopular: true }),
  m("pst-13", "Palak Sheek Kabab (Kuubera Special)", "Starters", "North Indian", 330, "Iron-rich spinach and cottage cheese seekh kababs roasted on skewers.", { isJain: true }),
  m("pst-14", "Cheese Chilly Kabab", "Starters", "North Indian", 360, "Creamy cheese and green chilli kababs with a melt-in-the-mouth texture.", { isJain: true }),
  m("pst-15", "Paneer Lasuni Tikka", "Starters", "North Indian", 390, "Cottage cheese cubes marinated in a bold roasted garlic and yogurt marinade."),
  m("pst-16", "Paneer Tikka", "Starters", "North Indian", 390, "Classic clay-oven roasted paneer cubes with capsicum, tomatoes, and tandoori spices.", { isJain: true, isPopular: true }),
  m("pst-17", "Paneer Pudina Tikka", "Starters", "North Indian", 390, "Refreshing mint and coriander marinated cottage cheese tikka.", { isJain: true }),
  m("pst-18", "Paneer Malai Tikka", "Starters", "North Indian", 390, "Mild, creamy cashew-and-cheese marinated paneer tikka roasted gently in the tandoor.", { isJain: true, isPopular: true }),
  m("pst-19", "Paneer Achari Tikka", "Starters", "North Indian", 390, "Tangy North Indian pickle-spiced tandoori paneer tikka.", { isJain: true }),
  m("pst-20", "Paneer Jungli Tikka (Kuubera Special)", "Starters", "North Indian", 390, "Kuubera Special rustic herb-and-spice marinated paneer tikka.", { isJain: true, isPopular: true }),
  m("pst-21", "Paneer Multani Tikka", "Starters", "North Indian", 390, "Stuffed royal Multani-style cottage cheese tikka roasted in the tandoor.", { isJain: true }),
  m("pst-22", "Paneer Sopaiya", "Starters", "North Indian", 390, "Delicate fennel-and-cream scented tandoori paneer starter.", { isJain: true }),

  // ==========================================================================
  // PAGE 5: PUNJABI MAIN COURSE (11:00 AM to 11:30 PM)
  // ==========================================================================
  m("pmc-1", "Chole Bhature", "Punjabi", "North Indian", 330, "Punjabi spiced chickpea curry served with 2 fluffy golden bhature (11 AM – 11:30 PM).", { isPopular: true }),
  m("pmc-2", "Chana Masala", "Punjabi", "North Indian", 320, "White chickpeas simmered in a tangy tomato-onion gravy with roasted spices.", { isJain: true }),
  m("pmc-3", "Aloo Palak", "Punjabi", "North Indian", 290, "Golden potato cubes simmered in a smooth, seasoned spinach puree."),
  m("pmc-4", "Bhendi Fry", "Punjabi", "North Indian", 320, "Crisp okra tossed with cumin, coriander, and dry North Indian spices.", { isJain: true }),
  m("pmc-5", "Aloo Jeera", "Punjabi", "North Indian", 290, "Diced potatoes tempered with aromatic roasted cumin seeds and fresh coriander."),
  m("pmc-6", "Akkha Masoor", "Punjabi", "North Indian", 330, "Whole brown lentils slow-cooked in a rustic Kolhapuri/Maharashtrian spiced gravy.", { isJain: true }),
  m("pmc-7", "Bengan Bharta", "Punjabi", "North Indian", 290, "Smoky fire-roasted mashed brinjal cooked with tomatoes, green chillies, and herbs."),
  m("pmc-8", "Bengan Masala", "Punjabi", "North Indian", 290, "Tender baby brinjals simmered in a rich peanut-sesame-onion masala."),
  m("pmc-9", "Veg Maratha", "Punjabi", "North Indian", 370, "Crispy spiced vegetable cutlets simmered in a bold, fiery Maratha red gravy.", { isPopular: true }),
  m("pmc-10", "Veg Maharaja", "Punjabi", "North Indian", 360, "Royal preparation of mixed garden vegetables and cottage cheese in a rich creamy gravy.", { isJain: true }),
  m("pmc-11", "Green Peas Masala", "Punjabi", "North Indian", 360, "Sweet tender green peas cooked in a spiced homestyle gravy.", { isJain: true }),
  m("pmc-12", "Veg Kolhapuri", "Punjabi", "North Indian", 370, "Assorted vegetables cooked in a bold, spicy roasted coconut and red chilli Kolhapuri masala.", { isPopular: true }),
  m("pmc-13", "Navratan Kurma", "Punjabi", "North Indian", 390, "Mild, royal Mughlai curry of nine vegetables, fruits, and nuts in a creamy cashew gravy.", { isJain: true }),
  m("pmc-14", "Malai Kofta", "Punjabi", "North Indian", 420, "Melt-in-the-mouth paneer and nut dumplings served in a velvety sweet-and-savory cream gravy.", { isJain: true, isPopular: true }),
  m("pmc-15", "Methi Matar Malai", "Punjabi", "North Indian", 390, "Fresh fenugreek leaves and green peas simmered in a rich, mildly spiced white cream gravy.", { isJain: true, isPopular: true }),
  m("pmc-16", "Methi Masala", "Punjabi", "North Indian", 330, "Fresh fenugreek leaves tempered with garlic, tomatoes, and traditional masalas."),
  m("pmc-17", "Aloo Mutter", "Punjabi", "North Indian", 330, "Homestyle Punjabi curry of potatoes and green peas."),
  m("pmc-18", "Aloo Malvani", "Punjabi", "North Indian", 330, "Potatoes cooked in a fragrant coastal Malvani coconut-spice gravy."),
  m("pmc-19", "Veg Malvani", "Punjabi", "North Indian", 340, "Assorted garden vegetables simmered in traditional Malvani coconut masala."),
  m("pmc-20", "Veg Makhanwala", "Punjabi", "North Indian", 360, "Garden vegetables and paneer simmered in a rich tomato-butter makhani gravy.", { isJain: true }),
  m("pmc-21", "Veg Diwani Handi", "Punjabi", "North Indian", 360, "Royal slow-cooked mixed vegetables in a rich spinach-and-cashew handi gravy.", { isJain: true }),
  m("pmc-22", "Veg Bullet", "Punjabi", "North Indian", 360, "Spicy vegetable rolls served in a zesty chef's special gravy."),
  m("pmc-23", "Veg Tufani", "Punjabi", "North Indian", 370, "Bold and spicy mixed vegetable preparation for spice lovers."),
  m("pmc-24", "Veg Handi", "Punjabi", "North Indian", 370, "Seasonal vegetables slow-cooked in a traditional clay-pot style spiced gravy.", { isJain: true, isPopular: true }),
  m("pmc-25", "Veg Tiranga", "Punjabi", "North Indian", 420, "Grand three-layered trio of distinct gravies (palak, makhani, and white cashew) served together.", { isJain: true, isPopular: true }),
  m("pmc-26", "Paneer Mutter Masala", "Punjabi", "North Indian", 390, "Tender green peas and fresh cottage cheese cubes in a spiced tomato-onion gravy.", { isJain: true, isPopular: true }),
  m("pmc-27", "Paneer Butter Masala", "Punjabi", "North Indian", 390, "Kuubera's bestseller—soft paneer cubes in a velvety tomato-cashew-butter gravy.", { isJain: true, isPopular: true }),
  m("pmc-28", "Paneer Bhurji", "Punjabi", "North Indian", 420, "Scrambled fresh cottage cheese sautéed with tomatoes, onions, green chillies, and spices.", { isJain: true }),
  m("pmc-29", "Paneer Kolhapuri", "Punjabi", "North Indian", 390, "Cottage cheese cubes in a fiery Kolhapuri mix veg red gravy."),
  m("pmc-30", "Subji Panchmela (Green Gravy)", "Punjabi", "North Indian", 370, "Five seasonal vegetables simmered in an aromatic spinach-coriander green gravy.", { isJain: true }),
  m("pmc-31", "Chop Tomato Shimla", "Punjabi", "North Indian", 340, "Diced tomatoes and crunchy bell peppers cooked in a tangy masala.", { isJain: true }),
  m("pmc-32", "Subji Bikaneri (Papad, Dry Veg)", "Punjabi", "North Indian", 370, "Rajasthani-style dry vegetable preparation tossed with crisp Bikaneri papad.", { isJain: true }),
  m("pmc-33", "Boil Veg (Yellow Gravy)", "Punjabi", "North Indian", 320, "Wholesome steamed vegetables simmered in a mild yellow gravy.", { isJain: true }),
  m("pmc-34", "Chop Veg (Yellow Gravy Eng Veg)", "Punjabi", "North Indian", 330, "Finely chopped exotic English vegetables in a rich yellow gravy.", { isJain: true }),
  m("pmc-35", "Velaty Subji", "Punjabi", "North Indian", 370, "Exotic English vegetables cooked in a chef's special rich gravy.", { isJain: true }),
  m("pmc-36", "Stuff Tomato", "Punjabi", "North Indian", 320, "Whole ripe tomato stuffed with spiced paneer-veg filling and simmered in rich gravy.", { isJain: true }),
  m("pmc-37", "Stuff Capsicum", "Punjabi", "North Indian", 320, "Whole bell pepper stuffed with seasoned cottage cheese filling and served in gravy.", { isJain: true }),
  m("pmc-38", "Paneer Lajawab", "Punjabi", "North Indian", 390, "Soft paneer fingers simmered in a luscious spiced tomato-cashew gravy.", { isJain: true }),
  m("pmc-39", "Paneer Mushroom", "Punjabi", "North Indian", 390, "Fresh cottage cheese and button mushrooms cooked in a rich North Indian masala."),
  m("pmc-40", "Paneer Lababdar (KUUBERA Special)", "Punjabi", "North Indian", 390, "Kuubera Special cottage cheese cubes in a rich tomato-onion-cashew gravy topped with grated paneer.", { isJain: true, isPopular: true }),
  m("pmc-41", "Paneer Tikka Masala", "Punjabi", "North Indian", 390, "Char-grilled tandoori paneer tikka simmered in a smoky, spicy makhani masala.", { isJain: true, isPopular: true }),
  m("pmc-42", "Shev Bhaji", "Punjabi", "North Indian", 320, "Khandeshi/Maharashtrian style spicy curry topped with thick gram-flour gathiya sev.", { isJain: true, isPopular: true }),
  m("pmc-43", "Paneer Pasanda", "Punjabi", "North Indian", 390, "Stuffed paneer triangles simmered in a royal, creamy almond-and-cashew gravy.", { isJain: true }),
  m("pmc-44", "Paneer Malwani", "Punjabi", "North Indian", 390, "Cottage cheese cubes cooked in aromatic coastal Malvani roasted coconut spices."),
  m("pmc-45", "Paneer Reshami", "Punjabi", "North Indian", 390, "Silky-smooth tomato and cream gravy with tender paneer strips.", { isJain: true }),
  m("pmc-46", "Paneer Lahori (Red Gravy)", "Punjabi", "North Indian", 420, "Rich Lahori-style spiced red gravy with cottage cheese cubes.", { isJain: true }),
  m("pmc-47", "Paneer Chaarminar (KUUBERA Special)", "Punjabi", "North Indian", 420, "Kuubera Special royal Hyderabadi-inspired paneer main course.", { isJain: true, isPopular: true }),
  m("pmc-48", "Paneer Koliwada Masala", "Punjabi", "North Indian", 390, "Crisp batter-fried Koliwada-spiced paneer tossed in a tangy masala gravy."),
  m("pmc-49", "Paneer Multani Tikka Masala", "Punjabi", "North Indian", 420, "Tandoori Multani paneer tikka served in a rich,royal gravy.", { isJain: true }),
  m("pmc-50", "Kaju Masala", "Punjabi", "North Indian", 460, "Whole golden-roasted cashews simmered in a rich, spiced onion-tomato-cashew gravy.", { isJain: true, isPopular: true }),
  m("pmc-51", "Kaju Paneer Masala", "Punjabi", "North Indian", 420, "Roasted cashews and soft cottage cheese cubes in a royal rich gravy.", { isJain: true, isPopular: true }),
  m("pmc-52", "Veg Chilli Mili", "Punjabi", "North Indian", 360, "Finely julienned vegetables and paneer cooked in a tangy, mildly spiced gravy.", { isJain: true }),
  m("pmc-53", "Sabji Panchwati", "Punjabi", "North Indian", 370, "Traditional five-vegetable medley cooked with aromatic Indian herbs.", { isJain: true }),
  m("pmc-54", "Veg Buna", "Punjabi", "North Indian", 390, "Slow-roasted bhuna-style mixed vegetables in a thick, deeply flavourful masala."),
  m("pmc-55", "Veg Kofta Masala", "Punjabi", "North Indian", 390, "Golden vegetable dumplings simmered in a spiced Punjabi gravy.", { isJain: true }),
  m("pmc-56", "Veg Sham Savera", "Punjabi", "North Indian", 390, "Spinach koftas stuffed with cottage cheese served over a velvety tomato-butter gravy.", { isJain: true }),
  m("pmc-57", "Tava Subji", "Punjabi", "North Indian", 330, "Assorted garden vegetables pan-roasted on the iron tawa with chatpata spices.", { isJain: true }),
  m("pmc-58", "Babycorn / Mushroom Masala", "Punjabi", "North Indian", 360, "Crunchy babycorn and fresh mushrooms simmered in a rich spiced gravy."),
  m("pmc-59", "Nargis Kofta", "Punjabi", "North Indian", 370, "Stuffed royal kofta dumplings served in a rich saffron-tinted gravy.", { isJain: true }),
  m("pmc-60", "Brocolli Kofta", "Punjabi", "North Indian", 390, "Special broccoli and cheese dumplings simmered in a creamy gravy.", { isJain: true }),
  m("pmc-61", "Veg Chingari (KUUBERA Special)", "Punjabi", "North Indian", 370, "Kuubera Special fiery red gravy with mixed vegetables and cottage cheese.", { isPopular: true }),
  m("pmc-62", "Mix Veg (KUUBERA Special)", "Punjabi", "North Indian", 360, "Kuubera Special garden vegetables and paneer in a rich yellow gravy.", { isJain: true, isPopular: true }),
  m("pmc-63", "VEG Makhmali", "Punjabi", "North Indian", 330, "Velvety smooth butter-and-cream vegetable curry.", { isJain: true }),

  // ==========================================================================
  // PAGE 4, 5 & 6: NORTH INDIAN — DAL, RAITA & TANDOORI ROTI / NAAN / PARATHA
  // ==========================================================================
  // DAL
  m("dal-1", "Dal Fry", "North Indian", "North Indian", 240, "Yellow lentils tempered with cumin, mustard seeds, tomatoes, and pure ghee.", { isJain: true, isPopular: true }),
  m("dal-2", "Dal Tadka", "North Indian", "North Indian", 280, "Homestyle yellow dal finished with a sizzling double tempering of ghee, cumin, and red chillies.", { isJain: true, isPopular: true }),
  m("dal-3", "Dal Palak", "North Indian", "North Indian", 270, "Wholesome yellow lentils simmered with fresh chopped spinach and mild spices.", { isJain: true }),
  m("dal-4", "Dal Makhani", "North Indian", "North Indian", 330, "Slow-simmered black lentils and red kidney beans finished with butter and fresh cream.", { isJain: true, isPopular: true }),
  m("dal-5", "Dahi Kadhi Pakoda", "North Indian", "North Indian", 270, "Tangy spiced yogurt-gram flour kadhi with soft gram-flour pakodas.", { isJain: true }),
  m("dal-6", "Dal Kolhapuri", "North Indian", "North Indian", 260, "Spicy Kolhapuri-style tempered lentils."),
  m("dal-7", "Dal Panchratna", "North Indian", "North Indian", 290, "Rich Rajasthani-style blend of five nutritious lentils tempered with ghee and spices.", { isJain: true }),

  // RAITA & SALAD
  m("rta-1", "Boondi Raita", "North Indian", "North Indian", 120, "Chilled whisked yogurt with crisp gram-flour boondi and roasted cumin.", { isJain: true }),
  m("rta-2", "Veg Raita", "North Indian", "North Indian", 120, "Chilled seasoned yogurt with finely diced cucumber, tomato, and coriander.", { isJain: true }),
  m("rta-3", "Pineapple Raita", "North Indian", "North Indian", 130, "Sweet and tangy chilled yogurt studded with juicy pineapple chunks.", { isJain: true }),
  m("rta-4", "Green Salad", "North Indian", "North Indian", 130, "Freshly sliced garden cucumbers, tomatoes, carrots, onions, and lemon.", { isJain: true }),
  m("rta-5", "Curd", "North Indian", "North Indian", 90, "Bowl of fresh, thick homestyle curd.", { isJain: true }),

  // ROTI / NAAN / PARATHA (11:00 AM to 11:30 PM)
  m("rot-1", "Roti", "North Indian", "North Indian", 50, "Whole wheat flatbread baked fresh in the clay tandoor (11 AM – 11:30 PM).", { isJain: true }),
  m("rot-2", "Butter Roti", "North Indian", "North Indian", 60, "Crisp whole wheat tandoori roti brushed with pure butter.", { isJain: true, isPopular: true }),
  m("rot-3", "Naan / Kulcha", "North Indian", "North Indian", 85, "Soft leavened flatbread baked in the clay tandoor.", { isJain: true }),
  m("rot-4", "Butter Naan / Kulcha", "North Indian", "North Indian", 105, "Fluffy tandoor-baked naan or kulcha glazed with melted butter.", { isJain: true, isPopular: true }),
  m("rot-5", "Onion Kulcha", "North Indian", "North Indian", 105, "Soft tandoori kulcha stuffed with seasoned chopped onions."),
  m("rot-6", "Butter Onion Kulcha", "North Indian", "North Indian", 125, "Onion-stuffed kulcha brushed generously with butter."),
  m("rot-7", "Makai Roti / Missi Roti", "North Indian", "North Indian", 75, "Traditional cornmeal Makai Roti or spiced gram-flour Missi Roti.", { isJain: true }),
  m("rot-8", "Butter Makai Roti / Missi Roti", "North Indian", "North Indian", 90, "Makai Roti or Missi Roti topped with pure butter.", { isJain: true }),
  m("rot-9", "Garlic Naan", "North Indian", "North Indian", 135, "Tandoori naan topped with minced garlic and fresh coriander.", { isPopular: true }),
  m("rot-10", "Cheese Naan", "North Indian", "North Indian", 195, "Soft tandoori naan stuffed with melted cheese.", { isJain: true }),
  m("rot-11", "Butter Cheese Naan", "North Indian", "North Indian", 230, "Cheese-stuffed naan glazed with rich butter.", { isJain: true }),
  m("rot-12", "Butter Garlic Naan", "North Indian", "North Indian", 170, "Aromatic garlic naan brushed with melted butter.", { isPopular: true }),
  m("rot-13", "Cheese Garlic Naan", "North Indian", "North Indian", 240, "Indulgent garlic naan stuffed with molten cheese.", { isPopular: true }),
  m("rot-14", "Kashmiri Naan", "North Indian", "North Indian", 190, "Sweet royal naan studded with dry fruits, nuts, and tutti-frutti.", { isJain: true }),
  m("rot-15", "Paratha", "North Indian", "North Indian", 110, "Layered flaky whole wheat tandoori lachha paratha.", { isJain: true }),
  m("rot-16", "Butter Paratha", "North Indian", "North Indian", 120, "Flaky layered wheat paratha brushed with butter.", { isJain: true }),
  m("rot-17", "Special Paratha", "North Indian", "North Indian", 170, "Chef's special spiced stuffed paratha.", { isJain: true }),
  m("rot-18", "Gobi Paratha", "North Indian", "North Indian", 180, "Whole wheat paratha stuffed with spiced grated cauliflower.", { isJain: true }),
  m("rot-19", "Butter Gobi Paratha", "North Indian", "North Indian", 190, "Cauliflower stuffed paratha served with a dollop of butter.", { isJain: true }),
  m("rot-20", "Paneer Paratha", "North Indian", "North Indian", 230, "Hearty paratha stuffed with seasoned grated cottage cheese.", { isJain: true, isPopular: true }),
  m("rot-21", "Butter Paneer Paratha", "North Indian", "North Indian", 280, "Spiced paneer paratha generously topped with butter.", { isJain: true }),
  m("rot-22", "Aloo Paratha", "North Indian", "North Indian", 190, "Classic Punjabi paratha stuffed with spiced mashed potatoes.", { isPopular: true }),
  m("rot-23", "Butter Aloo Paratha", "North Indian", "North Indian", 270, "Hot aloo paratha served with rich butter.", { isPopular: true }),
  m("rot-24", "Stuffed Paratha", "North Indian", "North Indian", 240, "Whole wheat paratha stuffed with mixed spiced vegetables and paneer.", { isJain: true }),
  m("rot-25", "Butter Stuffed Paratha", "North Indian", "North Indian", 240, "Mixed veg stuffed paratha glazed with butter.", { isJain: true }),
  m("rot-26", "Chapati", "North Indian", "North Indian", 40, "Soft homestyle whole wheat tawa chapati.", { isJain: true }),
  m("rot-27", "Butter Chapati", "North Indian", "North Indian", 50, "Soft whole wheat chapati brushed with butter.", { isJain: true }),
  m("rot-28", "Bhakri", "North Indian", "North Indian", 50, "Traditional hand-patted Maharashtrian bhakri.", { isJain: true }),
  m("rot-29", "Butter Bhakri", "North Indian", "North Indian", 60, "Crisp traditional bhakri topped with butter.", { isJain: true }),
  m("rot-30", "Garlic Roti", "North Indian", "North Indian", 80, "Whole wheat tandoori roti seasoned with roasted garlic."),
  m("rot-31", "Butter Garlic Roti", "North Indian", "North Indian", 95, "Garlic-infused tandoori roti brushed with butter."),

  // ==========================================================================
  // PAGE 2 & PAGE 4: RICE, PULAV & BIRYANI
  // ==========================================================================
  // TAWA PULAV (Page 2)
  m("plv-1", "Tawa Pulav", "Rice & Biryani", "Street Food", 280, "Basmati rice tossed on the tawa with butter, pav bhaji masala, and fresh garden veggies.", { isJain: true, isPopular: true }),
  m("plv-2", "Cheese Tawa Pulav", "Rice & Biryani", "Street Food", 330, "Buttery spiced tawa pulav topped with a generous layer of grated cheese.", { isJain: true }),
  m("plv-3", "Paneer Tawa Pulav", "Rice & Biryani", "Street Food", 370, "Tawa pulav tossed with soft cubes of fresh cottage cheese.", { isJain: true }),
  m("plv-4", "Cheese Paneer Tawa Pulav", "Rice & Biryani", "Street Food", 370, "Loaded tawa pulav with both fresh paneer cubes and melted cheese.", { isJain: true }),
  m("plv-5", "Kuubera Special Tawa Pulav", "Rice & Biryani", "Street Food", 370, "Chef's special tawa pulav enriched with paneer, cheese, and dry fruits.", { isJain: true, isPopular: true }),

  // RICE & BIRYANI (Page 4)
  m("ric-1", "Steam Rice", "Rice & Biryani", "North Indian", 230, "Fluffy long-grain steamed basmati rice.", { isJain: true }),
  m("ric-2", "Half Steam Rice", "Rice & Biryani", "North Indian", 140, "Half portion of steamed basmati rice.", { isJain: true }),
  m("ric-3", "Jeera Rice", "Rice & Biryani", "North Indian", 240, "Fragrant basmati rice tempered with pure ghee, cumin seeds, and coriander.", { isJain: true, isPopular: true }),
  m("ric-4", "Half Jeera Rice", "Rice & Biryani", "North Indian", 150, "Half portion of aromatic jeera rice.", { isJain: true }),
  m("ric-5", "Veg Biryani", "Rice & Biryani", "North Indian", 370, "Spiced garden vegetables and long-grain basmati rice cooked with royal biryani masalas, served with raita.", { isJain: true }),
  m("ric-6", "Veg Hydrabadi Biryani", "Rice & Biryani", "North Indian", 370, "Aromatic mint-and-coriander infused green Hyderabadi style vegetable biryani.", { isJain: true, isPopular: true }),
  m("ric-7", "Veg Dum Biryani", "Rice & Biryani", "North Indian", 420, "Slow-cooked dum basmati rice layered with saffron, caramelized aromatics, and spiced vegetables.", { isJain: true, isPopular: true }),
  m("ric-8", "Veg Handi Biryani", "Rice & Biryani", "North Indian", 390, "Traditional handi-cooked spiced vegetable biryani.", { isJain: true }),
  m("ric-9", "Paneer Tikka Biryani", "Rice & Biryani", "North Indian", 420, "Fragrant basmati biryani layered with smoky char-grilled tandoori paneer tikka.", { isJain: true, isPopular: true }),
  m("ric-10", "Veg Pulav", "Rice & Biryani", "North Indian", 330, "Mildly spiced fragrant basmati rice cooked with garden vegetables and green peas.", { isJain: true }),
  m("ric-11", "Cheese Pulav", "Rice & Biryani", "North Indian", 330, "Aromatic vegetable pulav finished with melted cheese.", { isJain: true }),
  m("ric-12", "Paneer Pulav", "Rice & Biryani", "North Indian", 370, "Fragrant basmati pulav studded with golden paneer cubes.", { isJain: true }),
  m("ric-13", "Kashmiri Pulav", "Rice & Biryani", "North Indian", 340, "Royal mildly sweet saffron pulav garnished with cashews, raisins, and fruits.", { isJain: true }),
  m("ric-14", "KUUBERA Special Pulav", "Rice & Biryani", "North Indian", 420, "Kuubera's signature royal pulav loaded with paneer, cashews, and exotic vegetables.", { isJain: true, isPopular: true }),
  m("ric-15", "Dal Khichdi", "Rice & Biryani", "North Indian", 280, "Comforting, wholesome blend of rice and yellow lentils tempered with pure ghee and cumin.", { isJain: true, isPopular: true }),
  m("ric-16", "Dal Khichdi with Tadaka", "Rice & Biryani", "North Indian", 320, "Classic dal khichdi topped with a sizzling ghee, garlic/cumin, and red chilli tadka.", { isJain: true, isPopular: true }),
  m("ric-17", "Palak Khichdi", "Rice & Biryani", "North Indian", 260, "Nutritious spinach, lentil, and rice khichdi tempered with pure ghee.", { isJain: true }),
  m("ric-18", "Masala Khichdi", "Rice & Biryani", "North Indian", 280, "Spiced vegetable and lentil khichdi.", { isJain: true }),
  m("ric-19", "Curd Rice", "Rice & Biryani", "South Indian", 240, "Soothing South Indian style soft rice mixed with fresh curd and tempered with mustard seeds and curry leaves.", { isJain: true }),
  m("ric-20", "Ghee Rice", "Rice & Biryani", "North Indian", 240, "Fragrant basmati rice sautéed in pure cow ghee with whole spices and cashews.", { isJain: true }),

  // ==========================================================================
  // PAGE 6 & PAGE 7: CHINESE — APPETIZERS, GRAVY, RICE & NOODLES
  // ==========================================================================
  // CHINESE APPETIZERS (Page 7)
  m("cha-1", "Veg Manchurian Dry", "Chinese", "Chinese", 360, "Crisp vegetable dumplings wok-tossed in a savoury soy, ginger, and bell pepper glaze.", { isJain: true, isPopular: true }),
  m("cha-2", "Veg Chilly Dry", "Chinese", "Chinese", 360, "Crispy vegetable bites tossed with green chillies, capsicum, and tangy soy sauce.", { isJain: true }),
  m("cha-3", "Gobi Manchurian Dry", "Chinese", "Chinese", 340, "Crunchy batter-fried cauliflower florets tossed in classic Manchurian sauce.", { isJain: true }),
  m("cha-4", "Veg Crispy", "Chinese", "Chinese", 370, "Crunchy batter-fried seasonal vegetables tossed in a tangy, mildly spiced Schezwan glaze.", { isJain: true, isPopular: true }),
  m("cha-5", "Veg Garlic", "Chinese", "Chinese", 360, "Crisp vegetables wok-tossed in a bold burnt-garlic sauce."),
  m("cha-6", "Veg 65", "Chinese", "Chinese", 340, "South-meets-Chinese spiced crispy vegetable nuggets tempered with curry leaves and chillies.", { isJain: true }),
  m("cha-7", "Spicy Roasted Chilli Potato", "Chinese", "Chinese", 360, "Crispy potato wedges wok-tossed with fiery red chillies, sesame, and spring onions."),
  m("cha-8", "Veg Finger", "Chinese", "Chinese", 340, "Crunchy golden-fried spiced vegetable fingers.", { isJain: true }),
  m("cha-9", "Chinese Bhel", "Chinese", "Chinese", 290, "Crispy fried noodles tossed with julienned cabbage, carrots, capsicum, and tangy Schezwan sauce.", { isJain: true, isPopular: true }),
  m("cha-10", "Veg Lolly Pop", "Chinese", "Chinese", 320, "Spiced minced vegetable lollipops fried crisp and served with Schezwan dip.", { isJain: true }),
  m("cha-11", "Paneer Chilly Dry (Kuubera Special)", "Chinese", "Chinese", 390, "Kuubera Special batter-fried cottage cheese cubes wok-tossed with bell peppers and chillies.", { isJain: true, isPopular: true }),
  m("cha-12", "Paneer 65 (Kuubera Special)", "Chinese", "Chinese", 420, "Kuubera Special crisp paneer cubes tossed in a fiery yogurt, curry leaf, and chilli tempering.", { isJain: true, isPopular: true }),
  m("cha-13", "Paneer Satay", "Chinese", "Chinese", 420, "Skewered cottage cheese strips glazed in a rich oriental peanut-chilli sauce.", { isJain: true }),
  m("cha-14", "Paneer Hot Pan", "Chinese", "Chinese", 420, "Sizzling hot-pan cottage cheese tossed with exotic vegetables and oriental spices.", { isJain: true }),
  m("cha-15", "Paneer Paper Coriander", "Chinese", "Chinese", 420, "Crisp paneer tossed with fragrant fresh coriander and crushed black pepper.", { isJain: true }),
  m("cha-16", "Paneer Schezwan Dry", "Chinese", "Chinese", 420, "Golden paneer cubes wok-tossed in fiery house Schezwan sauce.", { isJain: true }),
  m("cha-17", "Paneer Manchurian Dry", "Chinese", "Chinese", 420, "Soft paneer cubes tossed in classic savoury soy-coriander Manchurian sauce.", { isJain: true }),
  m("cha-18", "Paneer Paper Chilly Dry", "Chinese", "Chinese", 420, "Crisp paneer tossed with freshly cracked pepper and green chillies.", { isJain: true }),
  m("cha-19", "Paneer Cranchi Dry (Kuubera Special)", "Chinese", "Chinese", 420, "Kuubera Special extra-crunchy coated paneer fingers with dipping sauce.", { isJain: true, isPopular: true }),
  m("cha-20", "Veg Hongkong Paneer", "Chinese", "Chinese", 430, "Cottage cheese and exotic veggies tossed in a sweet-and-spicy Hong Kong style glaze.", { isJain: true }),
  m("cha-21", "Paneer Splendar (Red, Kaju, Paneer)", "Chinese", "Chinese", 420, "Rich oriental fusion starter featuring soft paneer and roasted cashews in red glaze.", { isJain: true }),
  m("cha-22", "Veg Spring Roll (Red, Yellow, Dry)", "Chinese", "Chinese", 370, "Crispy golden pastry rolls stuffed with seasoned julienned vegetables.", { isJain: true, isPopular: true }),
  m("cha-23", "Paneer Spring Roll", "Chinese", "Chinese", 390, "Crisp golden rolls stuffed with spiced cottage cheese and vegetables.", { isJain: true }),
  m("cha-24", "Paneer Crispy", "Chinese", "Chinese", 420, "Crunchy batter-fried paneer strips tossed in tangy Schezwan dressing.", { isJain: true }),

  // CHINESE GRAVY (Page 7)
  m("chg-1", "Veg Manchurian Gravy", "Chinese", "Chinese", 330, "Vegetable dumplings simmered in a savoury soy-garlic-coriander gravy.", { isJain: true }),
  m("chg-2", "Veg Chilly Gravy", "Chinese", "Chinese", 330, "Crisp vegetable dumplings and bell peppers in a spicy chilli-soy gravy.", { isJain: true }),
  m("chg-3", "Mix Veg Schezwan Style", "Chinese", "Chinese", 330, "Assorted garden vegetables in a fiery Schezwan gravy.", { isJain: true }),
  m("chg-4", "Paneer Manchurian Gravy", "Chinese", "Chinese", 390, "Cottage cheese cubes simmered in classic Indo-Chinese Manchurian gravy.", { isJain: true }),
  m("chg-5", "Paneer Chilly Gravy", "Chinese", "Chinese", 390, "Batter-fried paneer and capsicum in a spicy soy-chilli gravy.", { isJain: true }),

  // CHINESE RICE (Page 6)
  m("chr-1", "Veg Fried Rice", "Chinese", "Chinese", 320, "Wok-tossed fragrant rice with finely diced carrots, French beans, cabbage, and capsicum.", { isJain: true, isPopular: true }),
  m("chr-2", "Veg Schezwan Fried Rice", "Chinese", "Chinese", 330, "Spicy wok-tossed fried rice infused with house Schezwan pepper sauce.", { isJain: true, isPopular: true }),
  m("chr-3", "Manchurian Rice (With Gravy)", "Chinese", "Chinese", 360, "Wok-tossed fried rice served with savoury Veg Manchurian gravy.", { isJain: true }),
  m("chr-4", "Spl Hot Pot Rice (English Veg Brown)", "Chinese", "Chinese", 360, "Special oriental brown-gravy hot pot rice with exotic English vegetables.", { isJain: true }),
  m("chr-5", "Veg Triple Schezwan", "Chinese", "Chinese", 370, "Complete Indo-Chinese meal of fried rice and noodles served with spicy Schezwan Manchurian gravy and crispy noodles.", { isJain: true, isPopular: true }),
  m("chr-6", "Choper Rice (Rice & Noodles Mix, English Veg)", "Chinese", "Chinese", 370, "Rice and noodles mix topped with exotic English vegetables in chef's special sauce.", { isJain: true }),
  m("chr-7", "Packing Rice (Rice & Noodles Mix, Palak Rice Gravy)", "Chinese", "Chinese", 370, "Signature combination of rice & noodles mix with spinach rice and savoury gravy.", { isJain: true }),
  m("chr-8", "Veg Garlic Fried Rice", "Chinese", "Chinese", 360, "Fragrant wok-fried rice tossed with golden burnt garlic and spring onions."),

  // CHINESE NOODLES (Page 6)
  m("chn-1", "Veg Hakka Noodles", "Chinese", "Chinese", 300, "Classic wok-tossed noodles with julienned cabbage, carrots, capsicum, and soy seasoning.", { isJain: true, isPopular: true }),
  m("chn-2", "Veg Schezwan Noodles", "Chinese", "Chinese", 330, "Wok-tossed hakka noodles in a fiery Schezwan chilli sauce.", { isJain: true, isPopular: true }),
  m("chn-3", "Veg Garlic Noodles", "Chinese", "Chinese", 330, "Noodles wok-tossed with aromatic roasted garlic and crunchy veggies."),
  m("chn-4", "Veg Ginger Noodles", "Chinese", "Chinese", 360, "Fragrant noodles tossed with julienned fresh ginger and vegetables.", { isJain: true }),
  m("chn-5", "Veg Singapore Noodles", "Chinese", "Chinese", 370, "Curry-scented spicy Singapore-style thin noodles with colourful peppers.", { isJain: true }),
  m("chn-6", "Veg Hongkong Noodles", "Chinese", "Chinese", 370, "Savoury Hong Kong style wok-tossed noodles with vegetables and cashews.", { isJain: true }),
  m("chn-7", "American Chopsey", "Chinese", "Chinese", 330, "Crispy golden fried noodles topped with sweet-and-tangy vegetable sauce.", { isJain: true }),
  m("chn-8", "Manchow Noodles", "Chinese", "Chinese", 330, "Spicy soy-garlic flavoured Manchow style noodles.", { isJain: true }),
  m("chn-9", "Manchurian Noodles (with Gravy)", "Chinese", "Chinese", 370, "Wok-tossed noodles served with hot Veg Manchurian gravy.", { isJain: true }),
  m("chn-10", "Triple Schezwan Noodles (with Gravy)", "Chinese", "Chinese", 390, "Schezwan noodles and rice combo served with spicy Manchurian gravy.", { isJain: true }),
  m("chn-11", "Dragon Noodles (Chef Special)", "Chinese", "Chinese", 390, "Chef's Special fiery dragon-sauce wok-tossed noodles.", { isJain: true, isPopular: true }),

  // ==========================================================================
  // PAGE 7, 8 & 9: BEVERAGES — HOT BEVERAGES, FRESH JUICES, COOLERS, MOCKTAILS & BLOSSOM DELIGHT
  // ==========================================================================
  // HOT BEVERAGES (Page 7)
  m("hbv-1", "Tea", "Beverages", "Beverages", 50, "Freshly brewed hot Indian chai.", { isJain: true }),
  m("hbv-2", "Special Tea", "Beverages", "Beverages", 60, "Rich, aromatic cardamom-and-ginger special masala tea.", { isJain: true, isPopular: true }),
  m("hbv-3", "Filter Coffee", "Beverages", "South Indian", 90, "Authentic frothy South Indian decoction filter coffee.", { isJain: true, isPopular: true }),
  m("hbv-4", "Black Coffee", "Beverages", "Beverages", 60, "Freshly brewed hot black coffee.", { isJain: true }),
  m("hbv-5", "Bournvita", "Beverages", "Beverages", 80, "Warm malted chocolate milk drink.", { isJain: true }),
  m("hbv-6", "Hot Milk", "Beverages", "Beverages", 60, "Glass of pure steaming hot milk.", { isJain: true }),
  m("hbv-7", "Green Tea", "Beverages", "Beverages", 60, "Soothing antioxidant-rich hot green tea.", { isJain: true }),
  m("hbv-8", "Lemon Tea", "Beverages", "Beverages", 60, "Refreshing hot black tea infused with fresh lemon.", { isJain: true }),
  m("hbv-9", "Hot Chocolate", "Beverages", "Beverages", 90, "Rich, velvety steaming hot cocoa.", { isJain: true }),

  // FRESH JUICES (Page 8)
  m("fjc-1", "Mosambi Fresh Juice", "Beverages", "Beverages", 190, "100% freshly pressed sweet lime (mosambi) juice.", { isJain: true }),
  m("fjc-2", "Orange Fresh Juice", "Beverages", "Beverages", 190, "Freshly squeezed tangy orange juice.", { isJain: true }),
  m("fjc-3", "Ganga Jamuna Juice", "Beverages", "Beverages", 190, "Classic blend of fresh orange and sweet lime (mosambi) juice.", { isJain: true, isPopular: true }),
  m("fjc-4", "Watermelon Fresh Juice", "Beverages", "Beverages", 190, "Chilled freshly blended sweet watermelon juice.", { isJain: true, isPopular: true }),
  m("fjc-5", "Maramari Juice", "Beverages", "Beverages", 190, "Refreshing combination of fresh pineapple and mosambi juice.", { isJain: true }),
  m("fjc-6", "Pineapple Fresh Juice", "Beverages", "Beverages", 190, "Tropical freshly extracted pineapple juice.", { isJain: true }),
  m("fjc-7", "Grapes Fresh Juice", "Beverages", "Beverages", 190, "Sweet and tangy fresh black/green grape juice.", { isJain: true }),
  m("fjc-8", "Apple Fresh Juice", "Beverages", "Beverages", 230, "Freshly pressed crisp apple juice.", { isJain: true }),
  m("fjc-9", "Anar (Pomegranate) Juice", "Beverages", "Beverages", 280, "Antioxidant-rich freshly pressed ruby pomegranate juice.", { isJain: true }),
  m("fjc-10", "Cocktail Fresh Juice", "Beverages", "Beverages", 230, "Medley of seasonal fresh mixed fruits.", { isJain: true }),

  // MOCKTAILS (Page 8)
  m("mck-1", "Blueheaven Mocktail", "Beverages", "Beverages", 240, "Sparkling blue curacao citrus refresher.", { isJain: true }),
  m("mck-2", "Green Apple Mocktail", "Beverages", "Beverages", 240, "Crisp green apple cooler with mint and lime.", { isJain: true }),
  m("mck-3", "Lychee Grasshopper", "Beverages", "Beverages", 240, "Sweet lychee and mint layered mocktail.", { isJain: true }),
  m("mck-4", "Watermelon Mojito", "Beverages", "Beverages", 240, "Muddled fresh watermelon, mint leaves, lime, and fizz.", { isJain: true, isPopular: true }),
  m("mck-5", "Kalakhatta Mojito", "Beverages", "Beverages", 240, "Tangy Indian jamun kalakhatta muddled with mint, black salt, and lime.", { isJain: true }),
  m("mck-6", "Mojito Mint (KUUBERA Special)", "Beverages", "Beverages", 240, "Kuubera Special classic virgin mint and lime mojito.", { isJain: true, isPopular: true }),
  m("mck-7", "Kiwi Eye Mocktail", "Beverages", "Beverages", 240, "Zesty kiwi fruit cooler with crushed ice.", { isJain: true }),
  m("mck-8", "Blue Berry (KUUBERA Special)", "Beverages", "Beverages", 240, "Kuubera Special berry-infused sparkling mocktail.", { isJain: true }),
  m("mck-9", "Kiwi Grasshopper", "Beverages", "Beverages", 240, "Refreshing kiwi and mint cooler.", { isJain: true }),
  m("mck-10", "Lime Zip", "Beverages", "Beverages", 210, "Zesty spiced lime and mint refresher.", { isJain: true }),
  m("mck-11", "Golden Blow", "Beverages", "Beverages", 230, "Tropical golden fruit mocktail.", { isJain: true }),
  m("mck-12", "Blue Ice Berg", "Beverages", "Beverages", 230, "Chilled blue lagoon slush mocktail.", { isJain: true }),
  m("mck-13", "Rainbow Mocktail (KUUBERA Special)", "Beverages", "Beverages", 240, "Kuubera Special multi-layered colourful fruit mocktail.", { isJain: true, isPopular: true }),

  // COOLERS (Page 9)
  m("clr-1", "Sweet / Khara Lassi", "Beverages", "Beverages", 135, "Thick, creamy Punjabi churned yogurt lassi—available sweet or salted.", { isJain: true, isPopular: true }),
  m("clr-2", "Butter Milk (Chaas)", "Beverages", "Beverages", 90, "Cooling spiced buttermilk seasoned with roasted cumin and coriander.", { isJain: true, isPopular: true }),
  m("clr-3", "Fresh Lemon Juice", "Beverages", "Beverages", 90, "Chilled fresh nimbu pani (sweet, salted, or mixed).", { isJain: true }),
  m("clr-4", "Fresh Lemon Soda", "Beverages", "Beverages", 120, "Sparkling fresh lime soda (sweet, salted, or masala).", { isJain: true, isPopular: true }),
  m("clr-5", "Ginger Lemon", "Beverages", "Beverages", 110, "Refreshing lemon cooler with a zesty hint of fresh ginger.", { isJain: true }),
  m("clr-6", "Jal Jeera", "Beverages", "Beverages", 120, "Traditional tangy cumin, mint, and black salt digestive cooler.", { isJain: true }),
  m("clr-7", "Mineral Water", "Beverages", "Beverages", 30, "Packaged drinking water bottle.", { isJain: true }),
  m("clr-8", "Cold Drinks (Pepsi, Sprite)", "Beverages", "Beverages", 70, "Chilled aerated soft drinks.", { isJain: true }),
  m("clr-9", "Mango Lassi", "Beverages", "Beverages", 150, "Thick churned yogurt lassi blended with sweet Alphonso mango pulp.", { isJain: true, isPopular: true }),
  m("clr-10", "Rose Lassi", "Beverages", "Beverages", 150, "Fragrant rose-syrup infused sweet Punjabi lassi.", { isJain: true }),

  // BLOSSOM DELIGHT — KUUBERA SPECIAL BLOSSOM (Page 9)
  m("bls-1", "Bunty Bubli (Kuubera Special Blossom)", "Beverages", "Beverages", 280, "Signature creamy fruit blossom cooler from Kuubera's Blossom Delight range.", { isJain: true }),
  m("bls-2", "Special Cocktail Blossom", "Beverages", "Beverages", 280, "Rich mixed-fruit blossom delight.", { isJain: true }),
  m("bls-3", "Fruit Punch Blossom", "Beverages", "Beverages", 280, "Tropical fruit punch blended with ice cream/cream.", { isJain: true }),
  m("bls-4", "Water Melon Blossom (KUUBERA Special)", "Beverages", "Beverages", 280, "Kuubera's famous signature Watermelon Blossom delight—frequently praised in guest reviews as a must-try!", { isJain: true, isPopular: true }),
  m("bls-5", "Black Currant Blossom", "Beverages", "Beverages", 280, "Tangy and creamy black currant blossom delight.", { isJain: true }),
  m("bls-6", "Orange Blossom", "Beverages", "Beverages", 280, "Citrusy creamy orange blossom cooler.", { isJain: true }),
  m("bls-7", "Shagun Blossom", "Beverages", "Beverages", 280, "Festive dry-fruit and rose scented Shagun Blossom.", { isJain: true }),

  // ==========================================================================
  // PAGE 8 & PAGE 9: DESSERTS — SHAKES, ICE CREAM, FALOODA & SWEETS
  // ==========================================================================
  // DRY FRUIT SHAKES (Page 8)
  m("dfs-1", "Anjeer Shake", "Desserts", "Desserts", 360, "Rich, thick milkshake blended with sweet figs (anjeer).", { isJain: true }),
  m("dfs-2", "Kaju Anjeer Shake", "Desserts", "Desserts", 370, "Creamy blend of cashews and figs in chilled milk.", { isJain: true, isPopular: true }),
  m("dfs-3", "Kaju Mango Shake", "Desserts", "Desserts", 370, "Alphonso mango milkshake enriched with cashews.", { isJain: true }),
  m("dfs-4", "Chikoo Chocolate & Nuts", "Desserts", "Desserts", 390, "Sweet chikoo shake blended with rich chocolate and roasted nuts.", { isJain: true }),
  m("dfs-5", "Chocolate & Nuts Shake", "Desserts", "Desserts", 370, "Thick chocolate milkshake loaded with crunchy dry fruits.", { isJain: true }),
  m("dfs-6", "Badam Pista Shake", "Desserts", "Desserts", 390, "Royal almond and pistachio thick milkshake.", { isJain: true }),
  m("dfs-7", "Shahi Kesar Pista Shake", "Desserts", "Desserts", 390, "Saffron and pistachio infused royal dry-fruit shake.", { isJain: true, isPopular: true }),
  m("dfs-8", "Dryfruit Milk Shake", "Desserts", "Desserts", 420, "Loaded blend of almonds, cashews, pistachios, figs, and saffron.", { isJain: true, isPopular: true }),

  // SEASONAL SHAKES & MILKSHAKES (Page 9)
  m("mlk-1", "Sitaphal Shake (Seasonal)", "Desserts", "Desserts", 280, "Creamy fresh custard apple (sitaphal) milkshake.", { isJain: true, isPopular: true }),
  m("mlk-2", "Strawberry Shake (Seasonal)", "Desserts", "Desserts", 280, "Fresh strawberry milkshake.", { isJain: true }),
  m("mlk-3", "Mango Shake (Seasonal)", "Desserts", "Desserts", 320, "Thick seasonal mango milkshake.", { isJain: true }),
  m("mlk-4", "Mango Milkshake Pulp", "Desserts", "Desserts", 280, "Rich Alphonso mango pulp milkshake.", { isJain: true }),
  m("mlk-5", "Rose Milkshake", "Desserts", "Desserts", 210, "Chilled rose milkshake.", { isJain: true }),
  m("mlk-6", "Vanilla Milkshake", "Desserts", "Desserts", 210, "Classic creamy vanilla milkshake.", { isJain: true }),
  m("mlk-7", "Butterscotch Milkshake", "Desserts", "Desserts", 210, "Crunchy caramel butterscotch milkshake.", { isJain: true }),
  m("mlk-8", "Cold Coffee", "Desserts", "Beverages", 180, "Frothy chilled café-style cold coffee.", { isJain: true, isPopular: true }),
  m("mlk-9", "Cold Coffee with Ice Cream", "Desserts", "Beverages", 240, "Thick cold coffee topped with a scoop of vanilla ice cream.", { isJain: true, isPopular: true }),
  m("mlk-10", "Chikoo Milkshake", "Desserts", "Desserts", 230, "Fresh sapota (chikoo) milkshake.", { isJain: true }),
  m("mlk-11", "Pineapple Milkshake", "Desserts", "Desserts", 240, "Sweet pineapple milkshake.", { isJain: true }),
  m("mlk-12", "Chocolate Milkshake", "Desserts", "Desserts", 250, "Indulgent rich chocolate milkshake.", { isJain: true }),
  m("mlk-13", "Chocolate with Badam", "Desserts", "Desserts", 280, "Chocolate milkshake blended with roasted almonds.", { isJain: true }),
  m("mlk-14", "Chocolate with Nuts", "Desserts", "Desserts", 280, "Chocolate milkshake topped with assorted nuts.", { isJain: true }),
  m("mlk-15", "Kesar Shake", "Desserts", "Desserts", 240, "Aromatic saffron-flavoured milkshake.", { isJain: true }),
  m("mlk-16", "Pista Shake", "Desserts", "Desserts", 240, "Creamy pistachio milkshake.", { isJain: true }),
  m("mlk-17", "KUUBERA Special Thandai", "Desserts", "Beverages", 240, "Traditional chilled milk drink infused with almonds, fennel, cardamom, rose petals, and saffron.", { isJain: true, isPopular: true }),

  // ICE CREAM (Page 8)
  m("ice-1", "Vanilla Ice Cream", "Desserts", "Desserts", 135, "Classic creamy vanilla scoop.", { isJain: true }),
  m("ice-2", "Mango Ice Cream", "Desserts", "Desserts", 140, "Rich Alphonso mango ice cream.", { isJain: true }),
  m("ice-3", "Strawberry Ice Cream", "Desserts", "Desserts", 140, "Sweet strawberry ice cream scoop.", { isJain: true }),
  m("ice-4", "Chocolate Ice Cream", "Desserts", "Desserts", 140, "Rich Belgian-style chocolate ice cream.", { isJain: true }),
  m("ice-5", "Kesar Pista Ice Cream", "Desserts", "Desserts", 140, "Saffron and pistachio studded royal ice cream.", { isJain: true, isPopular: true }),
  m("ice-6", "Butterscotch Ice Cream", "Desserts", "Desserts", 140, "Creamy butterscotch with crunchy praline.", { isJain: true }),
  m("ice-7", "Traditional Malai Kulfi", "Desserts", "Desserts", 150, "Dense, slow-reduced traditional Indian malai kulfi.", { isJain: true, isPopular: true }),

  // FALOODA (Page 8)
  m("fal-1", "Royal Falooda", "Desserts", "Desserts", 280, "Layered dessert drink with rose milk, falooda sev, basil seeds (sabja), jelly, and ice cream.", { isJain: true, isPopular: true }),
  m("fal-2", "Kesar Falooda", "Desserts", "Desserts", 240, "Saffron-infused milk falooda topped with ice cream and nuts.", { isJain: true }),
  m("fal-3", "Kulfi Falooda (Kuubera Special)", "Desserts", "Desserts", 330, "Kuubera Special falooda crowned with rich traditional kulfi and dry fruits.", { isJain: true, isPopular: true }),
  m("fal-4", "KUUBERA Special Falooda", "Desserts", "Desserts", 320, "Signature multi-layered Kuubera Special falooda loaded with ice cream, jelly, and nuts.", { isJain: true, isPopular: true }),

  // DESSERT (Page 9)
  m("dst-1", "Gulab Jamun", "Desserts", "Desserts", 90, "Warm, melt-in-the-mouth khoya dumplings soaked in cardamom-rose sugar syrup.", { isJain: true, isPopular: true }),
  m("dst-2", "Gulab Jam with Icecream", "Desserts", "Desserts", 190, "Hot gulab jamuns served with a chilled scoop of vanilla ice cream.", { isJain: true, isPopular: true }),
  m("dst-3", "Fruit Salad", "Desserts", "Desserts", 240, "Chilled medley of fresh seasonal diced fruits in sweet custard/cream.", { isJain: true }),
  m("dst-4", "Fruit Salad with Icecream", "Desserts", "Desserts", 330, "Fresh fruit salad topped with creamy vanilla ice cream.", { isJain: true, isPopular: true }),
  m("dst-5", "Fruit Salad with Jelly", "Desserts", "Desserts", 240, "Fresh fruit salad served with sweet fruit jelly cubes.", { isJain: true }),
  m("dst-6", "Fruit Salad with Icecream-Jelly", "Desserts", "Desserts", 330, "Indulgent sundae of fresh fruits, sweet jelly, and ice cream.", { isJain: true }),
  m("dst-7", "Fruit Salad with Dry Fruits", "Desserts", "Desserts", 330, "Fresh fruit salad generously topped with roasted almonds, cashews, and raisins.", { isJain: true }),
  m("dst-8", "Plan Jelly", "Desserts", "Desserts", 150, "Chilled sweet fruit jelly.", { isJain: true }),
  m("dst-9", "Plan Jelly with Icecream", "Desserts", "Desserts", 230, "Sweet fruit jelly topped with vanilla ice cream.", { isJain: true }),

  // ==========================================================================
  // DEDICATED JAIN SPECIALITIES SECTION
  // ==========================================================================
  m("jn-1", "Jain Pav Bhaji", "Jain Specialities", "Jain", 240, "Prepared strictly without onion, garlic, or potato—served with soft buttered pav (10 AM – 11:30 PM).", { isJain: true, isPopular: true }),
  m("jn-2", "Jain Pizza", "Jain Specialities", "Jain", 320, "Freshly baked pizza with no-onion, no-garlic house sauce, capsicum, corn, olives, and cheese.", { isJain: true, isPopular: true }),
  m("jn-3", "Jain Paneer Butter Masala", "Jain Specialities", "Jain", 390, "Rich no-onion, no-garlic tomato-cashew butter gravy with fresh cottage cheese cubes.", { isJain: true, isPopular: true }),
  m("jn-4", "Jain Dal Fry / Dal Tadka", "Jain Specialities", "Jain", 240, "Yellow lentils tempered with cumin, mustard seeds, tomatoes, and pure ghee (Dal Tadka: ₹280).", { isJain: true, isPopular: true }),
  m("jn-5", "Jain Veg Handi / Mix Veg", "Jain Specialities", "Jain", 360, "Seasonal above-ground garden vegetables and paneer cooked in a rich Jain gravy.", { isJain: true }),
  m("jn-6", "Jain Tawa Pulav / Jeera Rice", "Jain Specialities", "Jain", 280, "Fragrant basmati rice prepared without root vegetables, onion, or garlic (Jeera Rice: ₹240).", { isJain: true })
];

// ==========================================================================
// OFFICIAL 12-PAGE PRINTED MENU BOOK SHOWCASE (HIGH-RESOLUTION MENU CARDS)
// ==========================================================================
window.KUUBERA_MENU_PAGES = [
  {
    pageNumber: 1,
    title: "Front Cover — Kuubera Pure Veg",
    shortLabel: "01 • Cover",
    subtitle: "कुबेरा - स्वाद का खजाना • Opening Time: 7:00 AM – 11:30 PM",
    sections: ["Multicuisine Pure Veg", "7:00 AM – 11:30 PM"],
    image: "./assets/menu/pages/menu-page-01.webp"
  },
  {
    pageNumber: 2,
    title: "Fresh Preparation Promise & Guest Notice",
    shortLabel: "02 • Fresh Promise",
    subtitle: "Each dish is crafted fresh • Kindly allow 15 minutes for preparation",
    sections: ["Freshly Crafted", "Guest Information"],
    image: "./assets/menu/pages/menu-page-02.webp"
  },
  {
    pageNumber: 3,
    title: "Idli, Dosa & Uttapam",
    shortLabel: "03 • South Indian",
    subtitle: "Served 7:00 AM to 10:30 PM • Gini Dosa, Butter Masala Dosa, David Uttapam & More",
    sections: ["Idli", "Dosa", "Uttapam"],
    image: "./assets/menu/pages/menu-page-03.webp"
  },
  {
    pageNumber: 4,
    title: "Snacks, Sandwiches, Burgers, Maharashtrian & Pulav",
    shortLabel: "04 • Snacks & Maharashtrian",
    subtitle: "Misal Pav, Pitthala Bhakri, Grill Sandwiches, Burgers, Sabudana Wada & Tawa Pulav",
    sections: ["Snacks", "Sandwich", "Burger", "Maharashtrian", "Pulav"],
    image: "./assets/menu/pages/menu-page-04.webp"
  },
  {
    pageNumber: 5,
    title: "Pav Bhaji, Chaat, Soups, Pizza & Papad",
    shortLabel: "05 • Pav Bhaji, Chaat & Pizza",
    subtitle: "Kuubera Special Pav Bhaji, Jain Pav Bhaji, SPDP, Hot Soups, Stone-Baked Pizzas & Khichiya",
    sections: ["Pav Bhaji", "Chaat", "Soup", "Pizza", "Papad"],
    image: "./assets/menu/pages/menu-page-05.webp"
  },
  {
    pageNumber: 6,
    title: "Punjabi Starters, Tandoori Kababs, Rice & Dal",
    shortLabel: "06 • Starters, Rice & Dal",
    subtitle: "Paneer Sholay, Veg Sheek Kabab, Paneer Tikka, Veg Dum Biryani, Dal Khichdi & Dal Makhani",
    sections: ["Punjabi Starters", "Tandoori Starters", "Rice & Biryani", "Dal"],
    image: "./assets/menu/pages/menu-page-06.webp"
  },
  {
    pageNumber: 7,
    title: "Punjabi Main Course & Raita",
    shortLabel: "07 • Punjabi Main Course",
    subtitle: "Served 11:00 AM to 11:30 PM • Chole Bhature, Paneer Butter Masala, Veg Tiranga, Kaju Masala & Koftas",
    sections: ["Punjabi Main Course", "Paneer Specialities", "Raita & Salad"],
    image: "./assets/menu/pages/menu-page-07.webp"
  },
  {
    pageNumber: 8,
    title: "Tandoori Roti, Naan, Paratha, Chinese Rice & Noodles",
    shortLabel: "08 • Roti & Chinese Main",
    subtitle: "Butter Garlic Naan, Stuffed Parathas, Veg Triple Schezwan, Hakka Noodles & Dragon Noodles",
    sections: ["Roti & Naan", "Paratha & Bhakri", "Chinese Rice", "Chinese Noodles"],
    image: "./assets/menu/pages/menu-page-08.webp"
  },
  {
    pageNumber: 9,
    title: "Dry Fruit Shakes, Ice Cream, Falooda, Fresh Juices & Mocktails",
    shortLabel: "09 • Shakes, Falooda & Mocktails",
    subtitle: "Kulfi Falooda, Kuubera Special Falooda, Dryfruit Shakes, Fresh Fruit Juices & Virgin Mojitos",
    sections: ["Dry Fruit Shakes", "Ice Cream", "Falooda", "Fresh Juices", "Mocktails"],
    image: "./assets/menu/pages/menu-page-09.webp"
  },
  {
    pageNumber: 10,
    title: "Chinese Appetizers, Chinese Gravy, Hot Beverages & Add Ons",
    shortLabel: "10 • Chinese Starters & Tea/Coffee",
    subtitle: "Paneer 65, Veg Crispy, Paneer Chilly, Filter Coffee, Special Masala Tea & Hot Chocolate",
    sections: ["Chinese Gravy", "Chinese Appetizers", "Hot Beverages", "Add Ons"],
    image: "./assets/menu/pages/menu-page-10.webp"
  },
  {
    pageNumber: 11,
    title: "Coolers, Milkshakes, Seasonal Shakes, Blossom Delight & Desserts",
    shortLabel: "11 • Coolers, Blossom & Desserts",
    subtitle: "Watermelon Blossom, Mango Lassi, Kuubera Special Thandai, Sitaphal Shake & Gulab Jamun",
    sections: ["Coolers", "Milkshakes", "Seasonal Shakes", "Blossom Delight", "Dessert"],
    image: "./assets/menu/pages/menu-page-11.webp"
  },
  {
    pageNumber: 12,
    title: "Back Cover — Kuubera Lawns & Party Orders",
    shortLabel: "12 • Kuubera Lawns",
    subtitle: "We Accept Party Orders • Open 7:00 AM to 11:30 PM • Gat No. 91, Varve Budruk, Pune",
    sections: ["Kuubera Lawns", "Party Orders", "Visit Again"],
    image: "./assets/menu/pages/menu-page-12.webp"
  }
];
