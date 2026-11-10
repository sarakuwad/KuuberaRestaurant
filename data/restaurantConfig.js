/**
 * ============================================================================
 * KUUBERA PURE VEG — OWNER EDITABLE RESTAURANT CONFIGURATION
 * ============================================================================
 * Instructions for Restaurant Owner:
 * You can edit any text, phone number, opening hours, announcements, or links
 * below using Notepad or any text editor. Save the file and refresh the website.
 * ============================================================================
 */

window.KUUBERA_CONFIG = {
  brandName: "KUUBERA",
  fullName: "KUUBERA PURE VEG",
  tagline: "Where Every Meal Becomes a Royal Experience.",
  footerTagline: "KUUBERA – A TASTE OF SOMETHING SPECIAL.",
  category: "Premium Pure Vegetarian Restaurant",

  // Optional top announcement bar (set enabled: false to hide)
  announcement: {
    enabled: true,
    text: "Welcoming Families Daily at Gat No. 91, Varve Budruk (Near Khed Shivapur) • South Indian: 7 AM–10:30 PM | Pav Bhaji: 10 AM–11:30 PM | Main Course: 11 AM–11:30 PM • We Accept Party Orders",
    badge: "PURE VEG & JAIN"
  },

  // Verified Contact & Location Information
  contact: {
    phoneDisplay: "+91 90281 67333",
    phoneClean: "+919028167333",
    whatsappNumber: "919028167333",
    addressLines: [
      "Gat No. 91, Tal. Bhor,",
      "Varve Budruk,",
      "Maharashtra – 412205, India."
    ],
    landmarkNote: "Located along the Pune–Satara / Bangalore Highway (NH-48) near Khed Shivapur Toll Plaza",
    openingHours: "Daily: 7:00 AM – 11:00 PM",
    openingHoursStructured: {
      days: "Monday – Sunday (All Days)",
      timings: "7:00 AM – 11:00 PM",
      mealsServed: "Breakfast • Lunch • Evening Snacks • Dinner"
    }
  },

  // Official External Links
  links: {
    instagramHandle: "@_kuubera_",
    instagramUrl: "https://www.instagram.com/_kuubera_/",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kuubera+Pure+Veg+Gat+No+91+Varve+Budruk+Khed+Shivapur+Pune+Maharashtra+412205",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Kuubera+Pure+Veg+Gat+No+91+Varve+Budruk+Khed+Shivapur+Pune+Maharashtra+412205",
    googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Kuubera+Pure+Veg+Varve+Budruk+Khed+Shivapur+Reviews",
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Kuubera+Pure+Veg,Gat+No+91,Varve+Budruk,Khed+Shivapur,Maharashtra+412205&output=embed",
    menuPdfUrl: "#download-menu" // Replace with path to PDF e.g. "assets/menu/kuubera-full-menu.pdf" when uploaded
  },

  // Verified Public Rating Summary (Across Google / Local Directories)
  ratingsSummary: {
    overallRating: "4.6",
    maxRating: "5.0",
    totalReviewsText: "1,300+ Verified Guest Ratings",
    costForTwoText: "₹350 – ₹400 for two (approx.)",
    highlights: [
      "Spacious & Hygienic Dining Hall",
      "Visible Open Food Preparation View",
      "Dedicated Jain Food Preparation",
      "Prompt & Courteous Family Service",
      "Scenic Highway & Hill Backdrop"
    ]
  },

  // Owner-Replaceable Primary Brand Photographs
  // Replace the `imageUrl` string with your own photo path (e.g., "assets/images/hero-interior.webp")
  // Set `isOwnerPhotoUploaded: true` once you replace a placeholder with an actual Kuubera photo.
  brandImages: {
    heroBackground: {
      imageUrl: "", // e.g., "assets/images/kuubera-hero-interior.webp"
      isOwnerPhotoUploaded: false,
      recommendedPath: "assets/images/kuubera-hero-interior.webp",
      title: "Kuubera Grand Dining Interior / Signature Feast",
      note: "OWNER ACTION REQUIRED: Place high-resolution Kuubera interior or signature food photo at assets/images/kuubera-hero-interior.webp"
    },
    aboutSectionPhoto: {
      imageUrl: "", // e.g., "assets/images/kuubera-about-dining.webp"
      isOwnerPhotoUploaded: false,
      recommendedPath: "assets/images/kuubera-about-dining.webp",
      title: "Kuubera Pure Veg Ambience & Family Dining Area",
      note: "OWNER ACTION REQUIRED: Place actual Kuubera interior/entrance photograph at assets/images/kuubera-about-dining.webp"
    },
    specialExperiencePhoto: {
      imageUrl: "", // e.g., "assets/images/kuubera-special-experience.webp"
      isOwnerPhotoUploaded: false,
      recommendedPath: "assets/images/kuubera-special-experience.webp",
      title: "Family Gatherings & Evening Ambience at Kuubera",
      note: "OWNER ACTION REQUIRED: Place actual Kuubera restaurant photograph at assets/images/kuubera-special-experience.webp"
    }
  }
};
