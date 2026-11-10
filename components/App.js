/**
 * ============================================================================
 * KUUBERA PURE VEG — MAIN APPLICATION ROUTER & PAGE VIEWS
 * ============================================================================
 * Pages:
 * 1. Home (`home`)
 * 2. About Kuubera (`about`)
 * 3. Our Menu (`menu`)
 * 4. Gallery (`gallery`)
 * 5. Reviews (`reviews`)
 * 6. Contact & Location (`contact`)
 * ============================================================================
 */

(function () {
  const h = React.createElement;
  const { Navbar, Footer } = window.KuuberaLayout;
  const { HeroSection, AboutSection, SpecialExperienceSection } = window.KuuberaHeroAbout;
  const { SignatureDishesSection, InteractiveMenuSection } = window.KuuberaMenu;
  const { GallerySection, ReviewsSection } = window.KuuberaGalleryReviews;
  const { ContactLocationSection, ReservationModal, PrintableMenuModal } = window.KuuberaContactModals;
  const { OwnerAdminDrawer } = window.KuuberaAdmin;
  const { GoldOrnamentDivider } = window.KuuberaBrand;

  const PAGE_META = {
    home: {
      title: "KUUBERA PURE VEG | Premium Vegetarian Restaurant at Varve Budruk, Khed Shivapur, Pune",
      subtitle: "Where Every Meal Becomes a Royal Experience."
    },
    about: {
      title: "About Kuubera | The Art of Pure Vegetarian Dining — Kuubera Pure Veg, Pune",
      heading: "ABOUT KUUBERA",
      subtitle: "Warm Hospitality, Hygienic Preparation & Memorable Family Dining Near Khed Shivapur"
    },
    menu: {
      title: "Our Menu | 14-Category Pure Veg & Jain Multi-Cuisine Menu — Kuubera Pure Veg",
      heading: "OUR MENU",
      subtitle: "South Indian, North Indian, Punjabi, Chinese, Pav Bhaji & Special Jain Delicacies"
    },
    gallery: {
      title: "Gallery | A Glimpse of Kuubera (@_kuubera_) — Interiors, Ambience & Food",
      heading: "GALLERY",
      subtitle: "A Visual Journey Through Kuubera Pure Veg (@_kuubera_)"
    },
    reviews: {
      title: "Guest Reviews | What Our Guests Say — Kuubera Pure Veg (4.6 ★ Rated)",
      heading: "GUEST REVIEWS",
      subtitle: "Verified Experiences from Families & Highway Travellers at Varve Budruk, Pune"
    },
    contact: {
      title: "Contact & Location | Visit Kuubera Pure Veg, Gat No. 91, Varve Budruk, Pune",
      heading: "CONTACT & LOCATION",
      subtitle: "Gat No. 91, Tal. Bhor, Varve Budruk, Maharashtra – 412205 • +91 90281 67333"
    }
  };

  // Royal Inner Page Hero Banner
  function InnerPageBanner({ heading, subtitle, onBackHome }) {
    return h(
      "div",
      {
        className:
          "relative bg-[#091735] text-[#FFF9EF] py-14 sm:py-20 px-4 border-b-2 border-[#D4AF37] overflow-hidden"
      },
      h("div", {
        className:
          "absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,38,92,0.9)_0%,_rgba(9,23,53,1)_80%)] pointer-events-none"
      }),
      h(
        "div",
        { className: "relative z-10 max-w-4xl mx-auto text-center" },
        h(
          "div",
          {
            className:
              "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E8D7A5] mb-3"
          },
          h(
            "button",
            {
              type: "button",
              onClick: onBackHome,
              className: "hover:text-[#D4AF37] transition-colors"
            },
            "HOME"
          ),
          h("span", { className: "text-[#D4AF37]" }, "◆"),
          h("span", { className: "text-[#D4AF37] font-semibold" }, heading)
        ),
        h(
          "h1",
          {
            className:
              "font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider gold-metallic-text"
          },
          heading
        ),
        h(GoldOrnamentDivider, { className: "my-3" }),
        h(
          "p",
          { className: "text-sm sm:text-base text-[#E8D7A5]/90 max-w-2xl mx-auto" },
          subtitle
        )
      )
    );
  }

  function App() {
    // Load initial data from editable `/data/*.js` files (with optional localStorage overrides from Admin Studio)
    const [config, setConfig] = React.useState(() => {
      try {
        const saved = localStorage.getItem("kuubera_config_v2");
        return saved ? JSON.parse(saved) : window.KUUBERA_CONFIG;
      } catch (e) {
        return window.KUUBERA_CONFIG;
      }
    });

    const [menuItems, setMenuItems] = React.useState(() => {
      try {
        const saved = localStorage.getItem("kuubera_menu_v2");
        return saved ? JSON.parse(saved) : window.KUUBERA_MENU_ITEMS;
      } catch (e) {
        return window.KUUBERA_MENU_ITEMS;
      }
    });

    const [signatureDishes, setSignatureDishes] = React.useState(() => {
      try {
        const saved = localStorage.getItem("kuubera_signatures_v2");
        return saved ? JSON.parse(saved) : window.KUUBERA_SIGNATURE_DISHES;
      } catch (e) {
        return window.KUUBERA_SIGNATURE_DISHES;
      }
    });

    const [galleryItems, setGalleryItems] = React.useState(() => {
      try {
        const saved = localStorage.getItem("kuubera_gallery_v2");
        return saved ? JSON.parse(saved) : window.KUUBERA_GALLERY_ITEMS;
      } catch (e) {
        return window.KUUBERA_GALLERY_ITEMS;
      }
    });

    const categories = window.KUUBERA_MENU_CATEGORIES;
    const galleryCategories = window.KUUBERA_GALLERY_CATEGORIES;
    const reviews = window.KUUBERA_REVIEWS;

    // Persist owner edits automatically
    React.useEffect(() => {
      try {
        localStorage.setItem("kuubera_config_v2", JSON.stringify(config));
      } catch (e) {}
    }, [config]);

    React.useEffect(() => {
      try {
        localStorage.setItem("kuubera_menu_v2", JSON.stringify(menuItems));
      } catch (e) {}
    }, [menuItems]);

    React.useEffect(() => {
      try {
        localStorage.setItem("kuubera_signatures_v2", JSON.stringify(signatureDishes));
      } catch (e) {}
    }, [signatureDishes]);

    React.useEffect(() => {
      try {
        localStorage.setItem("kuubera_gallery_v2", JSON.stringify(galleryItems));
      } catch (e) {}
    }, [galleryItems]);

    const handleResetToDefaults = () => {
      try {
        localStorage.removeItem("kuubera_config_v2");
        localStorage.removeItem("kuubera_menu_v2");
        localStorage.removeItem("kuubera_signatures_v2");
        localStorage.removeItem("kuubera_gallery_v2");
      } catch (e) {}
      setConfig(window.KUUBERA_CONFIG);
      setMenuItems(window.KUUBERA_MENU_ITEMS);
      setSignatureDishes(window.KUUBERA_SIGNATURE_DISHES);
      setGalleryItems(window.KUUBERA_GALLERY_ITEMS);
    };

    // Page Navigation & Hash Routing
    const getPageFromHash = () => {
      const hash = (window.location.hash || "").replace("#", "").toLowerCase();
      if (["home", "about", "menu", "gallery", "reviews", "contact"].includes(hash)) {
        return hash;
      }
      return "home";
    };

    const [currentPage, setCurrentPage] = React.useState(getPageFromHash);
    const [reservationModalOpen, setReservationModalOpen] = React.useState(false);
    const [printableMenuOpen, setPrintableMenuOpen] = React.useState(false);
    const [adminDrawerOpen, setAdminDrawerOpen] = React.useState(false);

    React.useEffect(() => {
      const onHashChange = () => {
        const hash = (window.location.hash || "").replace("#", "").toLowerCase();
        if (hash === "admin") {
          setAdminDrawerOpen(true);
          return;
        }
        if (["home", "about", "menu", "gallery", "reviews", "contact"].includes(hash)) {
          setCurrentPage(hash);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    // Update document title dynamically for SEO
    React.useEffect(() => {
      const meta = PAGE_META[currentPage] || PAGE_META.home;
      document.title = meta.title;
    }, [currentPage]);

    const navigateTo = (pageId) => {
      setCurrentPage(pageId);
      window.location.hash = pageId;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return h(
      "div",
      { className: "min-h-screen flex flex-col bg-[#091735] text-[#FFF9EF] selection:bg-[#D4AF37] selection:text-[#091735]" },
      // Sticky Royal Navigation Bar
      h(Navbar, {
        currentPage,
        onNavigate: navigateTo,
        onOpenReservation: () => setReservationModalOpen(true),
        config
      }),

      // Main Page Content View
      h(
        "main",
        { className: "flex-1" },

        // ==================== PAGE 1: HOME (Complete Flagship Experience) ====================
        currentPage === "home" &&
          h(
            React.Fragment,
            null,
            h(HeroSection, {
              config,
              onExploreMenu: () => navigateTo("menu"),
              onFindUs: () => navigateTo("contact"),
              onOpenReservation: () => setReservationModalOpen(true)
            }),
            h(AboutSection, {
              config,
              isFullPage: false,
              onNavigate: navigateTo
            }),
            h(SignatureDishesSection, {
              signatureDishes,
              onExploreFullMenu: () => navigateTo("menu")
            }),
            h(InteractiveMenuSection, {
              categories,
              menuItems,
              config,
              isFullPage: false,
              onNavigateMenuPage: () => navigateTo("menu"),
              onOpenPrintableMenu: () => setPrintableMenuOpen(true)
            }),
            h(SpecialExperienceSection, {
              config,
              onOpenReservation: () => setReservationModalOpen(true),
              onExploreMenu: () => navigateTo("menu")
            }),
            h(GallerySection, {
              categories: galleryCategories,
              galleryItems,
              config,
              isFullPage: false,
              onNavigateGallery: () => navigateTo("gallery")
            }),
            h(ReviewsSection, {
              reviews,
              config,
              isFullPage: false
            }),
            h(ContactLocationSection, { config })
          ),

        // ==================== PAGE 2: ABOUT KUUBERA ====================
        currentPage === "about" &&
          h(
            React.Fragment,
            null,
            h(InnerPageBanner, {
              heading: PAGE_META.about.heading,
              subtitle: PAGE_META.about.subtitle,
              onBackHome: () => navigateTo("home")
            }),
            h(AboutSection, {
              config,
              isFullPage: true,
              onNavigate: navigateTo
            }),
            h(SpecialExperienceSection, {
              config,
              onOpenReservation: () => setReservationModalOpen(true),
              onExploreMenu: () => navigateTo("menu")
            }),
            h(ReviewsSection, {
              reviews,
              config,
              isFullPage: false
            })
          ),

        // ==================== PAGE 3: OUR MENU ====================
        currentPage === "menu" &&
          h(
            React.Fragment,
            null,
            h(InnerPageBanner, {
              heading: PAGE_META.menu.heading,
              subtitle: PAGE_META.menu.subtitle,
              onBackHome: () => navigateTo("home")
            }),
            h(SignatureDishesSection, {
              signatureDishes,
              onExploreFullMenu: () => {
                const el = document.getElementById("menu-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }),
            h(InteractiveMenuSection, {
              categories,
              menuItems,
              config,
              isFullPage: true,
              onOpenPrintableMenu: () => setPrintableMenuOpen(true)
            })
          ),

        // ==================== PAGE 4: GALLERY ====================
        currentPage === "gallery" &&
          h(
            React.Fragment,
            null,
            h(InnerPageBanner, {
              heading: PAGE_META.gallery.heading,
              subtitle: PAGE_META.gallery.subtitle,
              onBackHome: () => navigateTo("home")
            }),
            h(GallerySection, {
              categories: galleryCategories,
              galleryItems,
              config,
              isFullPage: true
            }),
            h(SpecialExperienceSection, {
              config,
              onOpenReservation: () => setReservationModalOpen(true),
              onExploreMenu: () => navigateTo("menu")
            })
          ),

        // ==================== PAGE 5: REVIEWS ====================
        currentPage === "reviews" &&
          h(
            React.Fragment,
            null,
            h(InnerPageBanner, {
              heading: PAGE_META.reviews.heading,
              subtitle: PAGE_META.reviews.subtitle,
              onBackHome: () => navigateTo("home")
            }),
            h(ReviewsSection, {
              reviews,
              config,
              isFullPage: true
            }),
            h(ContactLocationSection, { config })
          ),

        // ==================== PAGE 6: CONTACT & LOCATION ====================
        currentPage === "contact" &&
          h(
            React.Fragment,
            null,
            h(InnerPageBanner, {
              heading: PAGE_META.contact.heading,
              subtitle: PAGE_META.contact.subtitle,
              onBackHome: () => navigateTo("home")
            }),
            h(ContactLocationSection, { config })
          )
      ),

      // Royal Footer
      h(Footer, {
        onNavigate: navigateTo,
        onOpenReservation: () => setReservationModalOpen(true),
        onOpenAdmin: () => setAdminDrawerOpen(true),
        config
      }),

      // Floating Quick Action Pill (WhatsApp & Call)
      h(
        "div",
        {
          className:
            "fixed bottom-5 right-5 z-40 flex items-center gap-2 no-print"
        },
        h(
          "a",
          {
            href: `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
              "Hello Kuubera Pure Veg, I would like to enquire about dining / table reservation."
            )}`,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Chat with Kuubera Pure Veg on WhatsApp",
            className:
              "inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider shadow-[0_6px_20px_rgba(5,150,105,0.5)] border border-[#D4AF37] hover:bg-emerald-500 hover:scale-105 transition-all"
          },
          h("span", { className: "w-2 h-2 rounded-full bg-white animate-ping" }),
          "WhatsApp"
        )
      ),

      // Modals & Admin Studio Drawer
      h(ReservationModal, {
        isOpen: reservationModalOpen,
        onClose: () => setReservationModalOpen(false),
        config
      }),
      h(PrintableMenuModal, {
        isOpen: printableMenuOpen,
        onClose: () => setPrintableMenuOpen(false),
        categories,
        menuItems,
        config
      }),
      h(OwnerAdminDrawer, {
        isOpen: adminDrawerOpen,
        onClose: () => setAdminDrawerOpen(false),
        config,
        setConfig,
        menuItems,
        setMenuItems,
        signatureDishes,
        setSignatureDishes,
        galleryItems,
        setGalleryItems,
        categories,
        galleryCategories,
        onResetToDefaults: handleResetToDefaults
      })
    );
  }

  // Mount React 18 Root
  const rootEl = document.getElementById("root");
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(h(App));
  }
})();
