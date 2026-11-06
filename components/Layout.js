/**
 * ============================================================================
 * KUUBERA PURE VEG — STICKY ROYAL NAVBAR, FOOTER & FLOATING QUICK ACTIONS
 * ============================================================================
 */

(function () {
  const h = React.createElement;
  const { KuuberaLogo, GoldOrnamentDivider } = window.KuuberaBrand;

  const NAV_ITEMS = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "menu", label: "MENU" },
    { id: "gallery", label: "GALLERY" },
    { id: "reviews", label: "REVIEWS" },
    { id: "contact", label: "CONTACT" }
  ];

  function Navbar({ currentPage, onNavigate, onOpenReservation, config }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 24);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (pageId) => {
      setMobileMenuOpen(false);
      onNavigate(pageId);
    };

    return h(
      "header",
      { className: "sticky top-0 z-50 w-full transition-all duration-300" },
      // Optional Top Royal Announcement Bar
      config.announcement &&
        config.announcement.enabled &&
        h(
          "div",
          {
            className:
              "bg-[#091735] border-b border-[#D4AF37]/30 text-[#E8D7A5] text-[11px] md:text-xs py-2 px-4"
          },
          h(
            "div",
            { className: "max-w-7xl mx-auto flex items-center justify-between gap-4" },
            h(
              "div",
              { className: "flex items-center gap-2.5 mx-auto md:mx-0 text-center md:text-left" },
              config.announcement.badge &&
                h(
                  "span",
                  {
                    className:
                      "hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                  },
                  config.announcement.badge
                ),
              h("span", { className: "tracking-wide text-[#FFF9EF]/90" }, config.announcement.text)
            ),
            h(
              "div",
              { className: "hidden lg:flex items-center gap-5 shrink-0 text-[#D4AF37]" },
              h(
                "a",
                {
                  href: `tel:${config.contact.phoneClean}`,
                  className: "hover:text-[#FFF9EF] transition-colors flex items-center gap-1.5 font-medium"
                },
                h("span", null, "Call:"),
                h("span", { className: "text-[#FFF9EF]" }, config.contact.phoneDisplay)
              ),
              h("span", { className: "text-[#D4AF37]/40" }, "|"),
              h(
                "a",
                {
                  href: config.links.instagramUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-[#FFF9EF] transition-colors"
                },
                config.links.instagramHandle
              )
            )
          )
        ),

      // Main Sticky Royal Blue Navigation Bar
      h(
        "nav",
        {
          "aria-label": "Primary Navigation",
          className: `w-full transition-all duration-300 border-b ${
            scrolled
              ? "bg-[#10265C]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(9,23,53,0.75)] border-[#D4AF37]/45 py-3"
              : "bg-[#10265C] border-[#D4AF37]/30 py-4"
          }`
        },
        h(
          "div",
          { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4" },
          // Brand Logo
          h(KuuberaLogo, {
            size: scrolled ? "sm" : "md",
            onClick: () => handleNavClick("home")
          }),

          // Desktop Links
          h(
            "div",
            { className: "hidden lg:flex items-center gap-7 xl:gap-9" },
            NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return h(
                "button",
                {
                  key: item.id,
                  type: "button",
                  onClick: () => handleNavClick(item.id),
                  className: `nav-gold-underline relative py-2 text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
                    isActive ? "text-[#D4AF37] active-nav" : "text-[#FFF9EF] hover:text-[#E8D7A5]"
                  }`
                },
                item.label
              );
            })
          ),

          // Desktop CTA Button: BOOK A TABLE
          h(
            "div",
            { className: "hidden lg:flex items-center gap-3" },
            h(
              "button",
              {
                type: "button",
                onClick: onOpenReservation,
                className:
                  "relative overflow-hidden px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm shadow-[0_4px_15px_rgba(139,23,38,0.45)] hover:bg-[#a31c2d] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 active:scale-[0.99]"
              },
              "BOOK A TABLE"
            )
          ),

          // Mobile Hamburger & Quick Book Button
          h(
            "div",
            { className: "flex lg:hidden items-center gap-2.5" },
            h(
              "button",
              {
                type: "button",
                onClick: onOpenReservation,
                className:
                  "px-3.5 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm"
              },
              "BOOK A TABLE"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                "aria-label": mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu",
                "aria-expanded": mobileMenuOpen,
                className:
                  "p-2 rounded-sm border border-[#D4AF37]/60 text-[#D4AF37] bg-[#091735] hover:bg-[#10265C] focus:outline-none"
              },
              mobileMenuOpen
                ? h(
                    "svg",
                    { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                    h("path", { d: "M6 18L18 6M6 6l12 12", strokeLinecap: "round" })
                  )
                : h(
                    "svg",
                    { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                    h("path", { d: "M4 7h16M4 12h16M4 17h16", strokeLinecap: "round" })
                  )
            )
          )
        ),

        // Mobile Dropdown Drawer
        mobileMenuOpen &&
          h(
            "div",
            {
              className:
                "lg:hidden bg-[#091735] border-t border-[#D4AF37]/30 px-6 py-6 shadow-2xl animate-fadeIn"
            },
            h(
              "div",
              { className: "flex flex-col space-y-3" },
              NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return h(
                  "button",
                  {
                    key: item.id,
                    type: "button",
                    onClick: () => handleNavClick(item.id),
                    className: `w-full text-left py-2.5 px-3 rounded-sm text-sm font-semibold tracking-[0.2em] uppercase border-l-2 transition-all ${
                      isActive
                        ? "border-[#D4AF37] bg-[#10265C] text-[#D4AF37]"
                        : "border-transparent text-[#FFF9EF] hover:bg-[#10265C]/50 hover:text-[#E8D7A5]"
                    }`
                  },
                  item.label
                );
              })
            ),
            h(
              "div",
              { className: "mt-6 pt-5 border-t border-[#D4AF37]/25 grid grid-cols-2 gap-3" },
              h(
                "a",
                {
                  href: `tel:${config.contact.phoneClean}`,
                  className:
                    "flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider border border-[#D4AF37]/60 text-[#E8D7A5] rounded-sm hover:bg-[#10265C]"
                },
                "Call Now"
              ),
              h(
                "a",
                {
                  href: config.links.googleMapsDirectionsUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider border border-[#D4AF37]/60 text-[#E8D7A5] rounded-sm hover:bg-[#10265C]"
                },
                "Directions"
              )
            )
          )
      )
    );
  }

  // Rich Royal-Blue Footer with Gold Detailing (#12)
  function Footer({ onNavigate, onOpenReservation, onOpenAdmin, config }) {
    return h(
      "footer",
      {
        className:
          "bg-[#091735] text-[#FFF9EF] border-t-2 border-[#D4AF37] relative overflow-hidden"
      },
      // Subtle top gold ornamental trim
      h("div", {
        className:
          "h-1.5 w-full bg-gradient-to-r from-[#091735] via-[#D4AF37] to-[#091735] opacity-75"
      }),

      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12" },
        // Top Tagline Banner
        h(
          "div",
          { className: "text-center mb-14" },
          h(
            "p",
            {
              className:
                "font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.22em] uppercase gold-metallic-text font-semibold"
            },
            config.footerTagline || "KUUBERA – A TASTE OF SOMETHING SPECIAL."
          ),
          h(GoldOrnamentDivider, { className: "mt-4" })
        ),

        // 4-Column Footer Grid
        h(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/25" },
          // Col 1: Brand Identity (4 cols)
          h(
            "div",
            { className: "lg:col-span-4 space-y-4" },
            h(KuuberaLogo, { size: "md", onClick: () => onNavigate("home") }),
            h(
              "p",
              { className: "text-sm text-[#E8D7A5]/90 leading-relaxed pt-2 max-w-sm" },
              "A premier pure vegetarian family restaurant at Varve Budruk, near Khed Shivapur, Pune. Celebrating authentic Indian flavours, hygienic preparation, and warm royal hospitality."
            ),
            h(
              "div",
              { className: "pt-2 flex items-center gap-3 flex-wrap" },
              h(
                "a",
                {
                  href: config.links.instagramUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-[#10265C] text-[#D4AF37] border border-[#D4AF37]/60 rounded-sm hover:bg-[#D4AF37] hover:text-[#091735] transition-all"
                },
                h(
                  "svg",
                  { viewBox: "0 0 24 24", className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "1.8" },
                  h("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
                  h("circle", { cx: "12", cy: "12", r: "4" }),
                  h("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
                ),
                config.links.instagramHandle
              ),
              h(
                "a",
                {
                  href: config.links.googleMapsDirectionsUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-[#10265C] text-[#E8D7A5] border border-[#D4AF37]/40 rounded-sm hover:border-[#D4AF37] transition-all"
                },
                "Google Maps"
              )
            )
          ),

          // Col 2: Quick Navigation Links (2 cols)
          h(
            "div",
            { className: "lg:col-span-2 space-y-3" },
            h(
              "h3",
              { className: "font-serif text-sm font-bold tracking-[0.2em] uppercase text-[#D4AF37]" },
              "Explore"
            ),
            h(
              "ul",
              { className: "space-y-2.5 text-sm" },
              NAV_ITEMS.map((item) =>
                h(
                  "li",
                  { key: item.id },
                  h(
                    "button",
                    {
                      type: "button",
                      onClick: () => onNavigate(item.id),
                      className:
                        "text-[#E8D7A5]/85 hover:text-[#D4AF37] transition-colors tracking-wider text-xs uppercase font-medium"
                    },
                    item.label
                  )
                )
              ),
              h(
                "li",
                null,
                h(
                  "button",
                  {
                    type: "button",
                    onClick: onOpenReservation,
                    className:
                      "text-[#D4AF37] hover:text-[#FFF9EF] transition-colors tracking-wider text-xs uppercase font-semibold"
                  },
                  "Book a Table"
                )
              )
            )
          ),

          // Col 3: Opening Hours & Cuisines (3 cols)
          h(
            "div",
            { className: "lg:col-span-3 space-y-3" },
            h(
              "h3",
              { className: "font-serif text-sm font-bold tracking-[0.2em] uppercase text-[#D4AF37]" },
              "Opening Hours"
            ),
            h(
              "div",
              { className: "bg-[#10265C]/70 border border-[#D4AF37]/30 p-4 rounded-sm space-y-2" },
              h(
                "p",
                { className: "text-xs uppercase tracking-widest text-[#E8D7A5]" },
                config.contact.openingHoursStructured.days
              ),
              h(
                "p",
                { className: "font-serif text-lg font-bold text-[#FFF9EF]" },
                config.contact.openingHours
              ),
              h(
                "p",
                { className: "text-xs text-[#D4AF37] pt-1 border-t border-[#D4AF37]/20" },
                config.contact.openingHoursStructured.mealsServed
              )
            ),
            h(
              "p",
              { className: "text-xs text-[#E8D7A5]/80 leading-relaxed" },
              "100% Pure Vegetarian • Dedicated Jain Options Available Upon Request"
            )
          ),

          // Col 4: Verified Address & Direct Contact (3 cols)
          h(
            "div",
            { className: "lg:col-span-3 space-y-3" },
            h(
              "h3",
              { className: "font-serif text-sm font-bold tracking-[0.2em] uppercase text-[#D4AF37]" },
              "Location & Contact"
            ),
            h(
              "address",
              { className: "not-italic text-sm text-[#FFF9EF]/90 space-y-1 leading-relaxed" },
              h("p", { className: "font-semibold text-[#D4AF37]" }, config.fullName),
              config.contact.addressLines.map((line, idx) => h("p", { key: idx }, line))
            ),
            h(
              "div",
              { className: "pt-2 space-y-1.5 text-sm" },
              h(
                "a",
                {
                  href: `tel:${config.contact.phoneClean}`,
                  className: "block text-[#E8D7A5] hover:text-[#D4AF37] font-semibold transition-colors"
                },
                `Phone: ${config.contact.phoneDisplay}`
              ),
              h(
                "a",
                {
                  href: `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Kuubera Pure Veg, I would like to enquire about dining / table reservation."
                  )}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-block text-xs uppercase tracking-widest text-emerald-400 hover:text-emerald-300 font-semibold"
                },
                "Chat on WhatsApp →"
              )
            )
          )
        ),

        // Bottom Copyright & Owner Content Manager Trigger
        h(
          "div",
          {
            className:
              "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D7A5]/70"
          },
          h(
            "p",
            null,
            `© ${new Date().getFullYear()} ${config.fullName}, Varve Budruk, Pune. All Rights Reserved.`
          ),
          h(
            "div",
            { className: "flex items-center gap-4" },
            h(
              "button",
              {
                type: "button",
                onClick: onOpenAdmin,
                className:
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#10265C] border border-[#D4AF37]/40 text-[#E8D7A5] hover:border-[#D4AF37] hover:text-[#FFF9EF] transition-colors text-[11px] uppercase tracking-wider"
              },
              h(
                "svg",
                { viewBox: "0 0 24 24", className: "w-3.5 h-3.5 text-[#D4AF37]", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                h("path", { d: "M12 15a3 3 0 100-6 3 3 0 000 6z" }),
                h("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
              ),
              "Owner Admin Studio"
            )
          )
        )
      )
    );
  }

  window.KuuberaLayout = {
    Navbar,
    Footer
  };
})();
