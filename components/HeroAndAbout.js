/**
 * ============================================================================
 * KUUBERA PURE VEG — HERO SECTION, ABOUT KUUBERA & SPECIAL EXPERIENCE SECTION
 * ============================================================================
 */

(function () {
  const h = React.createElement;
  const { GoldOrnamentDivider, FeatureGoldIcon, KuuberaPhotoSlot } = window.KuuberaBrand;

  const ABOUT_FEATURES = [
    {
      title: "Pure Vegetarian Dining",
      desc: "100% pure vegetarian kitchen with dedicated Jain food preparation available on request.",
      icon: "leaf"
    },
    {
      title: "Diverse Multi-Cuisine Menu",
      desc: "From crisp South Indian dosas to rich Punjabi curries, Indo-Chinese starters, and Mumbai street eats.",
      icon: "cloche"
    },
    {
      title: "Family-Friendly Atmosphere",
      desc: "Spacious, neat, and welcoming seating designed for families, children, elders, and group travellers.",
      icon: "family"
    },
    {
      title: "Freshly Prepared Food",
      desc: "Cooked fresh to order in a clean kitchen with a visible food preparation area praised by guests.",
      icon: "flame"
    },
    {
      title: "Comfortable Dining",
      desc: "Thoughtfully designed interiors with scenic surroundings near Khed Shivapur on the Pune–Satara highway.",
      icon: "palace"
    },
    {
      title: "Warm Hospitality",
      desc: "Courteous, well-mannered, and attentive staff committed to making every meal memorable.",
      icon: "heartHands"
    }
  ];

  // 3. HOMEPAGE — CINEMATIC HERO SECTION
  function HeroSection({ config, onExploreMenu, onFindUs, onOpenReservation }) {
    const heroImg = config.brandImages && config.brandImages.heroBackground;
    const hasHeroPhoto = Boolean(heroImg && heroImg.imageUrl && heroImg.imageUrl.trim() !== "");

    return h(
      "section",
      {
        className:
          "relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#091735] text-[#FFF9EF] py-20 px-4 sm:px-6 lg:px-8"
      },
      // Background Image or Royal Architectural Canvas
      hasHeroPhoto
        ? h("img", {
            src: heroImg.imageUrl,
            alt: "Kuubera Pure Veg Interior & Dining",
            className: "absolute inset-0 w-full h-full object-cover scale-105 animate-subtleZoom"
          })
        : h(
            "div",
            {
              className: "absolute inset-0 w-full h-full pointer-events-none",
              "aria-hidden": "true"
            },
            // Deep royal ambient radial lighting & Indian Palace Archway SVG pattern
            h("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.16)_0%,_rgba(16,38,92,0.92)_52%,_rgba(9,23,53,1)_100%)]"
            }),
            h(
              "svg",
              {
                viewBox: "0 0 1440 900",
                fill: "none",
                className: "w-full h-full object-cover opacity-25",
                preserveAspectRatio: "xMidYMid slice"
              },
              // Grand Jharokha Palace Arch Outline
              h("path", {
                d: "M180 900 V320 C180 180 450 110 720 40 C990 110 1260 180 1260 320 V900",
                stroke: "#D4AF37",
                strokeWidth: "1.5"
              }),
              h("path", {
                d: "M220 900 V340 C220 210 470 145 720 75 C970 145 1220 210 1220 340 V900",
                stroke: "#E8D7A5",
                strokeWidth: "0.8",
                strokeDasharray: "6 6"
              }),
              // Subtle Mandala Rings
              h("circle", { cx: "720", cy: "430", r: "280", stroke: "#D4AF37", strokeWidth: "0.8", strokeDasharray: "4 6" }),
              h("circle", { cx: "720", cy: "430", r: "360", stroke: "#D4AF37", strokeWidth: "0.5" })
            )
          ),

      // Dark Royal-Blue Overlay for High Contrast Readability
      h("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-[#091735]/85 via-[#10265C]/80 to-[#091735]/95 pointer-events-none"
      }),

      // Subtle Gold Decorative Outer Frame Border
      h(
        "div",
        {
          className:
            "absolute inset-4 sm:inset-7 md:inset-10 border border-[#D4AF37]/40 pointer-events-none z-10",
          "aria-hidden": "true"
        },
        // 4 Ornamental Gold Corner Accents
        h("div", { className: "absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]" }),
        h("div", { className: "absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]" }),
        h("div", { className: "absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]" }),
        h("div", { className: "absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]" })
      ),

      // Hero Content Container
      h(
        "div",
        { className: "relative z-20 max-w-4xl mx-auto text-center px-4 sm:px-8 py-12 animate-heroEntrance" },
        // Top Royal Badge
        h(
          "div",
          {
            className:
              "inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-sm bg-[#091735]/85 border border-[#D4AF37]/60 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
          },
          h("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
          h(
            "span",
            { className: "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#E8D7A5]" },
            "KUUBERA PURE VEG • VARVE BUDRUK, PUNE"
          )
        ),

        // Main Heading
        h(
          "h1",
          {
            className:
              "font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.08em] leading-[1.12] gold-metallic-text drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          },
          "AN EXPERIENCE BEYOND ORDINARY"
        ),

        h(GoldOrnamentDivider, { className: "my-6" }),

        // Subheading
        h(
          "p",
          {
            className:
              "font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E8D7A5] font-medium tracking-wide mb-5"
          },
          "Where Every Meal Becomes a Royal Experience."
        ),

        // Supporting Text
        h(
          "p",
          {
            className:
              "font-sans text-sm sm:text-base md:text-lg text-[#FFF9EF]/90 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
          },
          "Discover the joy of pure vegetarian dining at Kuubera. From authentic Indian favourites to delicious multi-cuisine creations, experience food, hospitality and togetherness."
        ),

        // Action Buttons: EXPLORE OUR MENU & FIND US
        h(
          "div",
          { className: "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6" },
          h(
            "button",
            {
              type: "button",
              onClick: onExploreMenu,
              className:
                "w-full sm:w-auto min-w-[220px] px-8 py-4 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm shadow-[0_8px_25px_rgba(139,23,38,0.5)] hover:bg-[#a41d2e] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            },
            "EXPLORE OUR MENU"
          ),
          h(
            "button",
            {
              type: "button",
              onClick: onFindUs,
              className:
                "w-full sm:w-auto min-w-[220px] px-8 py-4 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase bg-[#10265C]/80 text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#091735] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            },
            "FIND US"
          )
        ),

        // Quick Verified Trust Badges Strip
        h(
          "div",
          {
            className:
              "mt-12 pt-8 border-t border-[#D4AF37]/25 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-3xl mx-auto"
          },
          h(
            "div",
            null,
            h("p", { className: "font-serif text-lg sm:text-xl font-bold text-[#D4AF37]" }, "100% Pure Veg"),
            h("p", { className: "text-[11px] uppercase tracking-widest text-[#E8D7A5]/80" }, "& Jain Friendly")
          ),
          h(
            "div",
            null,
            h("p", { className: "font-serif text-lg sm:text-xl font-bold text-[#D4AF37]" }, "4.6 ★ Rated"),
            h("p", { className: "text-[11px] uppercase tracking-widest text-[#E8D7A5]/80" }, "1,300+ Guest Ratings")
          ),
          h(
            "div",
            null,
            h("p", { className: "font-serif text-lg sm:text-xl font-bold text-[#D4AF37]" }, "7 AM – 11 PM"),
            h("p", { className: "text-[11px] uppercase tracking-widest text-[#E8D7A5]/80" }, "Open All Days")
          ),
          h(
            "div",
            null,
            h("p", { className: "font-serif text-lg sm:text-xl font-bold text-[#D4AF37]" }, "NH-48 Highway"),
            h("p", { className: "text-[11px] uppercase tracking-widest text-[#E8D7A5]/80" }, "Varve Budruk, Pune")
          )
        )
      ),

      // Subtle Animated Scroll Indicator
      h(
        "a",
        {
          href: "#about-section",
          onClick: (e) => {
            e.preventDefault();
            const el = document.getElementById("about-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
          "aria-label": "Scroll down to discover Kuubera",
          className:
            "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#E8D7A5]/80 hover:text-[#D4AF37] transition-colors cursor-pointer"
        },
        h("span", { className: "text-[10px] uppercase tracking-[0.3em]" }, "Scroll"),
        h(
          "div",
          {
            className:
              "w-5 h-8 rounded-full border border-[#D4AF37]/60 flex items-start justify-center p-1"
          },
          h("span", { className: "w-1 h-2 rounded-full bg-[#D4AF37] animate-scrollDot" })
        )
      )
    );
  }

  // 4. ABOUT KUUBERA SECTION (Editorial Layout + 6 Gold Pillars)
  function AboutSection({ config, isFullPage = false, onNavigate }) {
    const aboutImg = config.brandImages && config.brandImages.aboutSectionPhoto;

    return h(
      "section",
      {
        id: "about-section",
        className: "bg-[#FFF9EF] text-[#091735] py-20 md:py-28 relative overflow-hidden"
      },
      // Subtle top & bottom gold hairline borders
      h("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        // Editorial 2-Column Layout: Photo on Left, Text on Right
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" },
          // Left Column: Framed Photograph Slot (5 cols)
          h(
            "div",
            { className: "lg:col-span-5 relative group" },
            // Decorative Offset Gold Frame
            h("div", {
              className:
                "absolute -inset-3 border-2 border-[#D4AF37]/50 translate-x-3 translate-y-3 pointer-events-none hidden sm:block"
            }),
            h(
              "div",
              { className: "relative shadow-2xl border border-[#D4AF37]" },
              h(KuuberaPhotoSlot, {
                imageUrl: aboutImg ? aboutImg.imageUrl : "",
                title: aboutImg ? aboutImg.title : "Kuubera Pure Veg Dining Hall & Ambience",
                subtitle:
                  "Spacious, neat, and thoughtfully designed family dining room with scenic highway views at Varve Budruk, Pune.",
                recommendedPath: aboutImg ? aboutImg.recommendedPath : "assets/images/kuubera-about-dining.webp",
                categoryBadge: "ABOUT KUUBERA",
                className: "w-full h-[380px] sm:h-[440px]"
              }),
              // Royal Corner Caption Plaque
              h(
                "div",
                {
                  className:
                    "bg-[#10265C] text-[#FFF9EF] px-5 py-4 border-t border-[#D4AF37] flex items-center justify-between"
                },
                h(
                  "div",
                  null,
                  h(
                    "p",
                    { className: "font-serif text-sm font-bold text-[#D4AF37] tracking-wider uppercase" },
                    "Gat No. 91, Varve Budruk"
                  ),
                  h(
                    "p",
                    { className: "text-xs text-[#E8D7A5]" },
                    "Near Khed Shivapur Toll Plaza, Pune"
                  )
                ),
                h(
                  "span",
                  {
                    className:
                      "px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#091735] text-[#D4AF37] border border-[#D4AF37]/50"
                  },
                  "Pure Veg"
                )
              )
            )
          ),

          // Right Column: Editorial Story & 6 Gold Feature Cards (7 cols)
          h(
            "div",
            { className: "lg:col-span-7 space-y-6" },
            h(
              "div",
              { className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8B1726]" },
              h("span", { className: "h-[1px] w-8 bg-[#8B1726]" }),
              "OUR HOSPITALITY PHILOSOPHY"
            ),

            h(
              "h2",
              {
                className:
                  "font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#10265C] tracking-wide leading-tight"
              },
              "THE ART OF PURE VEGETARIAN DINING"
            ),

            h(
              "div",
              { className: "space-y-4 text-[#091735]/85 text-base sm:text-lg leading-relaxed font-normal" },
              h(
                "p",
                null,
                "At Kuubera, we believe that great food brings people together. Every visit is an opportunity to enjoy delicious vegetarian cuisine, warm hospitality and memorable moments with family and friends."
              ),
              h(
                "p",
                null,
                "Whether you're stopping by for breakfast, enjoying a relaxed lunch or sharing dinner with your loved ones, Kuubera welcomes you with an experience worth remembering."
              )
            ),

            // 6 Highlighted Features with Elegant Gold Icons
            h(
              "div",
              { className: "pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4" },
              ABOUT_FEATURES.map((feat) =>
                h(
                  "div",
                  {
                    key: feat.title,
                    className:
                      "flex items-start gap-3.5 p-4 rounded-sm bg-white border border-[#D4AF37]/35 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all duration-300"
                  },
                  h(FeatureGoldIcon, { type: feat.icon }),
                  h(
                    "div",
                    null,
                    h(
                      "h3",
                      { className: "font-serif text-base font-bold text-[#10265C]" },
                      feat.title
                    ),
                    h(
                      "p",
                      { className: "text-xs text-[#091735]/75 mt-1 leading-relaxed" },
                      feat.desc
                    )
                  )
                )
              )
            ),

            !isFullPage &&
              h(
                "div",
                { className: "pt-4 flex flex-wrap items-center gap-4" },
                h(
                  "button",
                  {
                    type: "button",
                    onClick: () => onNavigate("about"),
                    className:
                      "px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#091735] transition-all"
                  },
                  "Discover More About Kuubera →"
                ),
                h(
                  "button",
                  {
                    type: "button",
                    onClick: () => onNavigate("menu"),
                    className:
                      "px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B1726] border border-[#8B1726]/40 rounded-sm hover:bg-[#8B1726] hover:text-[#FFF9EF] transition-all"
                  },
                  "View Our Menu"
                )
              )
          )
        ),

        // Additional Editorial Highlights when viewing the Dedicated About Page
        isFullPage &&
          h(
            "div",
            {
              className:
                "mt-20 pt-16 border-t border-[#D4AF37]/30 grid grid-cols-1 md:grid-cols-3 gap-8"
            },
            h(
              "div",
              { className: "bg-[#10265C] text-[#FFF9EF] p-8 rounded-sm border border-[#D4AF37]/60 shadow-xl" },
              h("p", { className: "text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-2" }, "01 • Hygiene & Transparency"),
              h("h3", { className: "font-serif text-2xl font-bold text-[#FFF9EF] mb-3" }, "Spotless Kitchen & Dining"),
              h(
                "p",
                { className: "text-sm text-[#E8D7A5]/90 leading-relaxed" },
                "Guests consistently highlight our neat, spacious dining hall, clean washrooms, and visible food preparation area that inspires complete confidence in our hygiene standards."
              )
            ),
            h(
              "div",
              { className: "bg-[#10265C] text-[#FFF9EF] p-8 rounded-sm border border-[#D4AF37]/60 shadow-xl" },
              h("p", { className: "text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-2" }, "02 • Custom Dietary Care"),
              h("h3", { className: "font-serif text-2xl font-bold text-[#FFF9EF] mb-3" }, "Authentic Jain Options"),
              h(
                "p",
                { className: "text-sm text-[#E8D7A5]/90 leading-relaxed" },
                "Whether you crave Jain Pav Bhaji, Jain Sabji-Roti meals, or South Indian delicacies, our kitchen thoughtfully prepares no-onion, no-garlic dishes with generous portions for families."
              )
            ),
            h(
              "div",
              { className: "bg-[#10265C] text-[#FFF9EF] p-8 rounded-sm border border-[#D4AF37]/60 shadow-xl" },
              h("p", { className: "text-xs uppercase tracking-[0.22em] text-[#D4AF37] mb-2" }, "03 • Ideal Highway Landmark"),
              h("h3", { className: "font-serif text-2xl font-bold text-[#FFF9EF] mb-3" }, "Near Khed Shivapur"),
              h(
                "p",
                { className: "text-sm text-[#E8D7A5]/90 leading-relaxed" },
                "Conveniently situated at Gat No. 91, Varve Budruk, Kuubera is a cherished stop for families travelling along the Pune–Satara highway or visiting Ketkawale Balaji Temple and Trimandir."
              )
            )
          )
      )
    );
  }

  // 10. SPECIAL EXPERIENCE SECTION (Deep Crimson-Red Background & Gold Typography)
  function SpecialExperienceSection({ config, onOpenReservation, onExploreMenu }) {
    const specialImg = config.brandImages && config.brandImages.specialExperiencePhoto;

    return h(
      "section",
      {
        className:
          "relative bg-[#8B1726] text-[#FFF9EF] py-20 md:py-24 overflow-hidden border-y-2 border-[#D4AF37]"
      },
      // Subtle Royal Pattern Overlay
      h(
        "div",
        {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.14)_0%,_rgba(139,23,38,0.96)_70%,_rgba(88,11,20,1)_100%)] pointer-events-none"
        }
      ),

      h(
        "div",
        { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center" },
          // Left Column: Crimson & Gold Royal Typography (7 cols)
          h(
            "div",
            { className: "lg:col-span-7 space-y-6 text-center lg:text-left" },
            h(
              "span",
              {
                className:
                  "inline-block px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] bg-[#091735]/40 text-[#E8D7A5] border border-[#D4AF37]/60 rounded-sm"
              },
              "THE KUUBERA DINING EXPERIENCE"
            ),
            h(
              "h2",
              {
                className:
                  "font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide leading-tight gold-metallic-text"
              },
              "GOOD FOOD. GREAT COMPANY. UNFORGETTABLE MOMENTS."
            ),
            h(
              "p",
              {
                className:
                  "text-base sm:text-lg md:text-xl text-[#FFF9EF]/95 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
              },
              "From everyday cravings to memorable family gatherings, Kuubera is where good food and togetherness come naturally."
            ),
            h(
              "div",
              {
                className:
                  "pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              },
              h(
                "button",
                {
                  type: "button",
                  onClick: onOpenReservation,
                  className:
                    "w-full sm:w-auto px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] bg-[#D4AF37] text-[#091735] rounded-sm shadow-lg hover:bg-[#E8D7A5] transition-all"
                },
                "PLAN A FAMILY VISIT"
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: onExploreMenu,
                  className:
                    "w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] bg-transparent text-[#FFF9EF] border border-[#D4AF37] rounded-sm hover:bg-[#091735]/50 transition-all"
                },
                "BROWSE MENU"
              )
            )
          ),

          // Right Column: Framed Restaurant Photograph Slot (5 cols)
          h(
            "div",
            { className: "lg:col-span-5" },
            h(
              "div",
              {
                className:
                  "p-2.5 bg-[#091735]/80 border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(0,0,0,0.45)] rounded-sm group"
              },
              h(KuuberaPhotoSlot, {
                imageUrl: specialImg ? specialImg.imageUrl : "",
                title: specialImg ? specialImg.title : "Memorable Family Gatherings at Kuubera",
                subtitle: "Warm lighting, spacious family tables, and freshly prepared pure vegetarian delicacies.",
                recommendedPath: specialImg
                  ? specialImg.recommendedPath
                  : "assets/images/kuubera-special-experience.webp",
                categoryBadge: "TOGETHERNESS",
                className: "w-full h-72 sm:h-80"
              })
            )
          )
        )
      )
    );
  }

  window.KuuberaHeroAbout = {
    HeroSection,
    AboutSection,
    SpecialExperienceSection
  };
})();
