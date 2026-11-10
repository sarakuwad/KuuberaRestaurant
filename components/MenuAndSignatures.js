/**
 * ============================================================================
 * KUUBERA PURE VEG — SIGNATURE DISHES CAROUSEL & INTERACTIVE MENU SYSTEM
 * ============================================================================
 */

(function () {
  const h = React.createElement;
  const { GoldOrnamentDivider, VegIndicator, JainIndicator, KuuberaPhotoSlot } = window.KuuberaBrand;

  // Helper to format price honestly without ever inventing unverified rupee numbers
  function formatDishPrice(price) {
    if (price !== null && price !== undefined && price !== "" && !isNaN(Number(price)) && Number(price) > 0) {
      return {
        isVerifiedNumber: true,
        text: `₹${Number(price)}`
      };
    }
    return {
      isVerifiedNumber: false,
      text: "Price at Counter"
    };
  }

  // 6. SIGNATURE DISHES — "FAVOURITES AT KUUBERA" HORIZONTAL CAROUSEL
  function SignatureDishesSection({ signatureDishes, onExploreFullMenu }) {
    const scrollContainerRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const scrollByCard = (direction) => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const cardWidth = container.firstElementChild ? container.firstElementChild.clientWidth + 24 : 360;
      container.scrollBy({
        left: direction * cardWidth,
        behavior: "smooth"
      });
    };

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container || !container.firstElementChild) return;
      const cardWidth = container.firstElementChild.clientWidth + 24;
      const idx = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), signatureDishes.length - 1));
    };

    return h(
      "section",
      {
        className:
          "bg-[#091735] text-[#FFF9EF] py-20 md:py-24 border-y border-[#D4AF37]/35 relative overflow-hidden"
      },
      // Ambient background radial highlight
      h("div", {
        className:
          "absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,38,92,0.85),_rgba(9,23,53,1)_70%)] pointer-events-none"
      }),

      h(
        "div",
        { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        // Header Row with Carousel Controls
        h(
          "div",
          { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" },
          h(
            "div",
            null,
            h(
              "div",
              { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#D4AF37] mb-2" },
              h("span", { className: "h-[1px] w-8 bg-[#D4AF37]" }),
              "CULINARY HIGHLIGHTS"
            ),
            h(
              "h2",
              {
                className:
                  "font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide gold-metallic-text"
              },
              "FAVOURITES AT KUUBERA"
            ),
            h(
              "p",
              { className: "mt-2 text-sm sm:text-base text-[#E8D7A5]/85 max-w-2xl" },
              "Our guests' most-loved vegetarian creations—freshly prepared with authentic spices and served with warm hospitality."
            )
          ),

          // Prev / Next Carousel Buttons
          h(
            "div",
            { className: "flex items-center gap-3 self-start md:self-end" },
            h(
              "button",
              {
                type: "button",
                onClick: () => scrollByCard(-1),
                "aria-label": "Previous Signature Dish",
                className:
                  "w-11 h-11 rounded-sm bg-[#10265C] border border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#091735] transition-all"
              },
              "←"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: () => scrollByCard(1),
                "aria-label": "Next Signature Dish",
                className:
                  "w-11 h-11 rounded-sm bg-[#10265C] border border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#091735] transition-all"
              },
              "→"
            )
          )
        ),

        // Horizontal Smooth Carousel Track
        h(
          "div",
          {
            ref: scrollContainerRef,
            onScroll: handleScroll,
            className:
              "flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          },
          signatureDishes.map((dish) => {
            const priceObj = formatDishPrice(dish.price);
            return h(
              "article",
              {
                key: dish.id,
                className:
                  "snap-start shrink-0 w-[86vw] sm:w-[350px] md:w-[380px] bg-[#10265C] border border-[#D4AF37]/45 rounded-sm overflow-hidden shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              },
              // Dish Photo / Bespoke Culinary Frame
              h(KuuberaPhotoSlot, {
                imageUrl: dish.image,
                title: dish.name,
                subtitle: dish.badge || dish.category,
                recommendedPath: dish.recommendedImagePath,
                categoryBadge: dish.category,
                className: "w-full h-56"
              }),

              // Card Content
              h(
                "div",
                { className: "p-6 flex-1 flex flex-col justify-between space-y-4" },
                h(
                  "div",
                  { className: "space-y-2.5" },
                  // Dietary Badges Row
                  h(
                    "div",
                    { className: "flex items-center justify-between gap-2 flex-wrap" },
                    h(
                      "div",
                      { className: "flex items-center gap-2" },
                      h(VegIndicator, { showLabel: true }),
                      dish.isJain && h(JainIndicator, { lightMode: false })
                    ),
                    dish.badge &&
                      h(
                        "span",
                        {
                          className:
                            "text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]"
                        },
                        dish.badge
                      )
                  ),

                  // Dish Title & Price
                  h(
                    "div",
                    { className: "flex items-baseline justify-between gap-3 pt-1" },
                    h(
                      "h3",
                      {
                        className:
                          "font-serif text-2xl font-bold text-[#FFF9EF] group-hover:text-[#D4AF37] transition-colors"
                      },
                      dish.name
                    ),
                    priceObj.isVerifiedNumber
                      ? h(
                          "span",
                          { className: "font-serif text-xl font-bold text-[#D4AF37] shrink-0" },
                          priceObj.text
                        )
                      : h(
                          "span",
                          {
                            className:
                              "text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#091735] text-[#E8D7A5] border border-[#D4AF37]/30 shrink-0",
                            title: "Owner can set exact INR price in menuData.js or Owner Admin Studio"
                          },
                          "Ask at Counter"
                        )
                  ),

                  // Description
                  h(
                    "p",
                    { className: "text-sm text-[#E8D7A5]/90 leading-relaxed" },
                    dish.description
                  )
                ),

                // Bottom Review Note
                dish.reviewNote &&
                  h(
                    "div",
                    {
                      className:
                        "pt-3 border-t border-[#D4AF37]/20 flex items-center gap-2 text-xs text-[#D4AF37]"
                    },
                    h("span", null, "★"),
                    h("span", { className: "italic text-[#E8D7A5]/85" }, dish.reviewNote)
                  )
              )
            );
          })
        ),

        // Carousel Progress Dots & Full Menu CTA
        h(
          "div",
          { className: "mt-6 flex flex-col sm:flex-row items-center justify-between gap-4" },
          h(
            "div",
            { className: "flex items-center gap-2" },
            signatureDishes.map((d, idx) =>
              h("button", {
                key: d.id,
                type: "button",
                "aria-label": `Go to slide ${idx + 1}`,
                onClick: () => {
                  const container = scrollContainerRef.current;
                  if (!container || !container.firstElementChild) return;
                  const cardWidth = container.firstElementChild.clientWidth + 24;
                  container.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
                },
                className: `h-2 rounded-full transition-all ${
                  activeIndex === idx ? "w-8 bg-[#D4AF37]" : "w-2 bg-[#D4AF37]/35"
                }`
              })
            )
          ),
          h(
            "button",
            {
              type: "button",
              onClick: onExploreFullMenu,
              className:
                "px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm hover:bg-[#a31c2d] transition-all"
            },
            "EXPLORE COMPLETE 14-CATEGORY MENU →"
          )
        )
      )
    );
  }

  // 5A. CREATIVE INTERACTIVE 12-PAGE OFFICIAL MENU BOOK & VISUAL GALLERY SHOWCASE
  function RoyalMenuBookShowcase({ onOpenPrintableMenu }) {
    const menuPages = window.KUUBERA_MENU_PAGES || [];
    const [viewMode, setViewMode] = React.useState("book"); // "book" | "grid"
    const [spreadMode, setSpreadMode] = React.useState(true); // 2-page open book spread on desktop vs single page
    const [currentPageIdx, setCurrentPageIdx] = React.useState(2); // Start open at Page 3 & Page 4 (Idli/Dosa + Snacks/Maharashtrian) so guests immediately see dishes!
    const [lightboxIdx, setLightboxIdx] = React.useState(null);
    const [zoomLevel, setZoomLevel] = React.useState(1);

    if (!menuPages || menuPages.length === 0) return null;

    const total = menuPages.length;
    const step = spreadMode ? 2 : 1;

    const handlePrev = () => {
      setCurrentPageIdx((prev) => (prev - step + total) % total);
    };

    const handleNext = () => {
      setCurrentPageIdx((prev) => (prev + step) % total);
    };

    const leftPage = menuPages[currentPageIdx];
    const rightPage = spreadMode ? menuPages[(currentPageIdx + 1) % total] : null;

    // Keyboard navigation for Lightbox
    React.useEffect(() => {
      if (lightboxIdx === null) return;
      const onKeyDown = (e) => {
        if (e.key === "Escape") {
          setLightboxIdx(null);
          setZoomLevel(1);
        } else if (e.key === "ArrowRight") {
          setLightboxIdx((prev) => (prev + 1) % total);
          setZoomLevel(1);
        } else if (e.key === "ArrowLeft") {
          setLightboxIdx((prev) => (prev - 1 + total) % total);
          setZoomLevel(1);
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [lightboxIdx, total]);

    return h(
      "div",
      {
        className:
          "mb-14 bg-gradient-to-b from-[#091735] via-[#10265C] to-[#091735] text-[#FFF9EF] rounded-sm border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(9,23,53,0.45)] overflow-hidden"
      },
      // Top Royal Book Header Bar
      h(
        "div",
        {
          className:
            "p-5 sm:p-7 bg-[#091735]/90 border-b border-[#D4AF37]/40 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        },
        h(
          "div",
          null,
          h(
            "div",
            {
              className:
                "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-1.5"
            },
            h("span", { className: "w-2 h-2 rounded-full bg-[#D4AF37]" }),
            "OFFICIAL 12-PAGE RESTAURANT MENU CARD"
          ),
          h(
            "h3",
            {
              className:
                "font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-wider gold-metallic-text"
            },
            "INTERACTIVE ROYAL MENU BOOK"
          ),
          h(
            "p",
            { className: "text-xs sm:text-sm text-[#E8D7A5]/90 mt-1" },
            "Flip through all 12 pages of Kuubera's actual table menu card—or switch to the 12-Card Visual Gallery & click any page to zoom in HD."
          )
        ),

        // View Mode Switcher & PDF Download
        h(
          "div",
          { className: "flex flex-wrap items-center gap-2.5" },
          h(
            "button",
            {
              type: "button",
              onClick: () => setViewMode("book"),
              className: `px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm border transition-all ${
                viewMode === "book"
                  ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37] shadow-md"
                  : "bg-[#10265C] text-[#E8D7A5] border-[#D4AF37]/50 hover:border-[#D4AF37]"
              }`
            },
            "📖 Flipbook View"
          ),
          h(
            "button",
            {
              type: "button",
              onClick: () => setViewMode("grid"),
              className: `px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm border transition-all ${
                viewMode === "grid"
                  ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37] shadow-md"
                  : "bg-[#10265C] text-[#E8D7A5] border-[#D4AF37]/50 hover:border-[#D4AF37]"
              }`
            },
            "🖼️ All 12 Pages Grid"
          ),
          viewMode === "book" &&
            h(
              "button",
              {
                type: "button",
                onClick: () => setSpreadMode((s) => !s),
                className:
                  "hidden md:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm bg-[#091735] text-[#E8D7A5] border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all"
              },
              spreadMode ? "1-Page View" : "2-Page Spread"
            ),
          h(
            "a",
            {
              href: "./assets/menu/kuubera-full-menu.pdf",
              download: "Kuubera-Pure-Veg-Menu.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] hover:bg-[#a31c2d] transition-all shadow-md"
            },
            "⬇ PDF Menu"
          )
        )
      ),

      // Quick-Jump Page Selector Ribbon (Pages 1 to 12)
      h(
        "div",
        {
          className:
            "px-4 sm:px-7 py-3 bg-[#091735]/60 border-b border-[#D4AF37]/30 flex items-center gap-2 overflow-x-auto hide-scrollbar"
        },
        menuPages.map((pg, idx) => {
          const isCurrent =
            viewMode === "book"
              ? idx === currentPageIdx || (spreadMode && idx === (currentPageIdx + 1) % total)
              : false;
          return h(
            "button",
            {
              key: pg.pageNumber,
              type: "button",
              onClick: () => {
                if (viewMode === "grid") {
                  setLightboxIdx(idx);
                  setZoomLevel(1);
                } else {
                  setCurrentPageIdx(idx);
                }
              },
              className: `shrink-0 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm border transition-all ${
                isCurrent
                  ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37] shadow"
                  : "bg-[#091735]/80 text-[#E8D7A5] border-[#D4AF37]/35 hover:border-[#D4AF37] hover:text-[#FFF9EF]"
              }`
            },
            pg.shortLabel
          );
        })
      ),

      // MAIN BODY: FLIPBOOK SPREAD VIEW OR 12-PAGE GALLERY GRID
      viewMode === "book"
        ? h(
            "div",
            { className: "p-4 sm:p-8 lg:p-10" },
            // Open Book Frame with Gold Binding Spine
            h(
              "div",
              {
                className:
                  "relative max-w-6xl mx-auto bg-[#061026] p-3 sm:p-6 rounded-sm border-2 border-[#D4AF37]/80 shadow-[0_25px_70px_rgba(0,0,0,0.75)]"
              },
              // Corner Gold Ornaments
              h("div", { className: "absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" }),
              h("div", { className: "absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" }),
              h("div", { className: "absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none" }),
              h("div", { className: "absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" }),

              // Book Pages Container
              h(
                "div",
                {
                  className: `grid grid-cols-1 ${
                    spreadMode ? "md:grid-cols-2" : "max-w-2xl mx-auto"
                  } gap-4 md:gap-0 relative items-stretch`
                },
                // Center Gold Book Spine (Desktop Spread Mode)
                spreadMode &&
                  h("div", {
                    className:
                      "hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-5 z-20 bg-gradient-to-r from-black/60 via-[#D4AF37]/75 to-black/60 pointer-events-none shadow-inner"
                  }),

                // LEFT PAGE (or Single Page)
                h(
                  "div",
                  {
                    onClick: () => {
                      setLightboxIdx(currentPageIdx);
                      setZoomLevel(1);
                    },
                    className:
                      "group relative bg-[#091735] border border-[#D4AF37]/50 md:rounded-l-sm overflow-hidden cursor-zoom-in shadow-xl flex flex-col justify-between"
                  },
                  h(
                    "div",
                    { className: "relative overflow-hidden bg-[#091735]" },
                    h("img", {
                      src: leftPage.image,
                      alt: `Kuubera Menu Page ${leftPage.pageNumber} — ${leftPage.title}`,
                      className:
                        "w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    }),
                    h(
                      "div",
                      {
                        className:
                          "absolute top-3 left-3 px-3 py-1 rounded-sm bg-[#091735]/90 text-[#D4AF37] border border-[#D4AF37]/60 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm"
                      },
                      `Page ${leftPage.pageNumber} of ${total}`
                    ),
                    h(
                      "div",
                      {
                        className:
                          "absolute bottom-3 right-3 px-3 py-1.5 rounded-sm bg-[#091735]/90 text-[#FFF9EF] border border-[#D4AF37] text-[11px] font-bold uppercase tracking-wider opacity-90 group-hover:bg-[#D4AF37] group-hover:text-[#091735] transition-all"
                      },
                      "🔍 Click to Zoom HD"
                    )
                  ),
                  h(
                    "div",
                    {
                      className:
                        "p-3.5 bg-[#091735] border-t border-[#D4AF37]/30 flex items-center justify-between gap-2"
                    },
                    h(
                      "div",
                      null,
                      h("p", { className: "text-xs sm:text-sm font-bold text-[#D4AF37] uppercase tracking-wider" }, leftPage.title),
                      h("p", { className: "text-[11px] text-[#E8D7A5]/80 line-clamp-1" }, leftPage.subtitle)
                    ),
                    h(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          setLightboxIdx(currentPageIdx);
                          setZoomLevel(1);
                        },
                        className:
                          "shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#10265C] text-[#D4AF37] border border-[#D4AF37]/50 rounded-sm hover:bg-[#D4AF37] hover:text-[#091735]"
                      },
                      "Full Screen"
                    )
                  )
                ),

                // RIGHT PAGE (Desktop Spread Mode / Stacked on Mobile)
                spreadMode &&
                  rightPage &&
                  h(
                    "div",
                    {
                      onClick: () => {
                        setLightboxIdx((currentPageIdx + 1) % total);
                        setZoomLevel(1);
                      },
                      className:
                        "group relative bg-[#091735] border border-[#D4AF37]/50 md:rounded-r-sm overflow-hidden cursor-zoom-in shadow-xl flex flex-col justify-between"
                    },
                    h(
                      "div",
                      { className: "relative overflow-hidden bg-[#091735]" },
                      h("img", {
                        src: rightPage.image,
                        alt: `Kuubera Menu Page ${rightPage.pageNumber} — ${rightPage.title}`,
                        className:
                          "w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      }),
                      h(
                        "div",
                        {
                          className:
                            "absolute top-3 right-3 px-3 py-1 rounded-sm bg-[#091735]/90 text-[#D4AF37] border border-[#D4AF37]/60 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm"
                        },
                        `Page ${rightPage.pageNumber} of ${total}`
                      ),
                      h(
                        "div",
                        {
                          className:
                            "absolute bottom-3 right-3 px-3 py-1.5 rounded-sm bg-[#091735]/90 text-[#FFF9EF] border border-[#D4AF37] text-[11px] font-bold uppercase tracking-wider opacity-90 group-hover:bg-[#D4AF37] group-hover:text-[#091735] transition-all"
                        },
                        "🔍 Click to Zoom HD"
                      )
                    ),
                    h(
                      "div",
                      {
                        className:
                          "p-3.5 bg-[#091735] border-t border-[#D4AF37]/30 flex items-center justify-between gap-2"
                      },
                      h(
                        "div",
                        null,
                        h("p", { className: "text-xs sm:text-sm font-bold text-[#D4AF37] uppercase tracking-wider" }, rightPage.title),
                        h("p", { className: "text-[11px] text-[#E8D7A5]/80 line-clamp-1" }, rightPage.subtitle)
                      ),
                      h(
                        "button",
                        {
                          type: "button",
                          onClick: (e) => {
                            e.stopPropagation();
                            setLightboxIdx((currentPageIdx + 1) % total);
                            setZoomLevel(1);
                          },
                          className:
                            "shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#10265C] text-[#D4AF37] border border-[#D4AF37]/50 rounded-sm hover:bg-[#D4AF37] hover:text-[#091735]"
                        },
                        "Full Screen"
                      )
                    )
                  )
              ),

              // Book Page Turn Controls Bar
              h(
                "div",
                {
                  className:
                    "mt-6 pt-4 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-4"
                },
                h(
                  "button",
                  {
                    type: "button",
                    onClick: handlePrev,
                    className:
                      "inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#091735] transition-all shadow-md"
                  },
                  "◀ Previous Page"
                ),
                h(
                  "div",
                  { className: "text-center" },
                  h(
                    "p",
                    { className: "text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]" },
                    spreadMode && rightPage
                      ? `Viewing Pages ${leftPage.pageNumber} & ${rightPage.pageNumber} of ${total}`
                      : `Viewing Page ${leftPage.pageNumber} of ${total}`
                  ),
                  h(
                    "p",
                    { className: "text-[11px] text-[#E8D7A5]/75 mt-0.5" },
                    "Tip: Click any menu page to open in full-screen HD zoom"
                  )
                ),
                h(
                  "button",
                  {
                    type: "button",
                    onClick: handleNext,
                    className:
                      "inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm hover:bg-[#a31c2d] transition-all shadow-md"
                  },
                  "Turn Next Page ▶"
                )
              )
            )
          )
        : // MODE 2: ALL 12 MENU PAGES VISUAL GALLERY GRID
          h(
            "div",
            { className: "p-5 sm:p-8" },
            h(
              "div",
              { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" },
              menuPages.map((pg, idx) =>
                h(
                  "div",
                  {
                    key: pg.pageNumber,
                    onClick: () => {
                      setLightboxIdx(idx);
                      setZoomLevel(1);
                    },
                    className:
                      "group bg-[#091735] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-sm overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-zoom-in flex flex-col justify-between"
                  },
                  h(
                    "div",
                    { className: "relative overflow-hidden bg-[#061026]" },
                    h("img", {
                      src: pg.image,
                      alt: `Kuubera Menu Page ${pg.pageNumber} — ${pg.title}`,
                      loading: "lazy",
                      className:
                        "w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    }),
                    h(
                      "span",
                      {
                        className:
                          "absolute top-2.5 left-2.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#091735]/90 text-[#D4AF37] border border-[#D4AF37]/60 rounded-sm"
                      },
                      `Page ${pg.pageNumber}`
                    ),
                    h(
                      "span",
                      {
                        className:
                          "absolute bottom-2.5 right-2.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#8B1726]/95 text-[#FFF9EF] border border-[#D4AF37] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      },
                      "🔍 View HD"
                    )
                  ),
                  h(
                    "div",
                    { className: "p-3.5 bg-[#091735] border-t border-[#D4AF37]/30 space-y-1.5" },
                    h(
                      "h4",
                      { className: "text-xs font-bold uppercase tracking-wider text-[#D4AF37] line-clamp-1" },
                      pg.title
                    ),
                    h(
                      "div",
                      { className: "flex flex-wrap gap-1" },
                      (pg.sections || []).map((sec) =>
                        h(
                          "span",
                          {
                            key: sec,
                            className:
                              "px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-[#10265C] text-[#E8D7A5] border border-[#D4AF37]/30 rounded-sm"
                          },
                          sec
                        )
                      )
                    )
                  )
                )
              )
            )
          ),

      // FULL-SCREEN HD ZOOMABLE MENU PAGE LIGHTBOX MODAL
      lightboxIdx !== null &&
        menuPages[lightboxIdx] &&
        h(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `Kuubera Menu Page ${menuPages[lightboxIdx].pageNumber}`,
            onClick: () => {
              setLightboxIdx(null);
              setZoomLevel(1);
            },
            className:
              "fixed inset-0 z-50 bg-[#061026]/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fadeIn"
          },
          // Top Lightbox Controls Bar
          h(
            "div",
            {
              onClick: (e) => e.stopPropagation(),
              className:
                "max-w-6xl w-full mx-auto px-4 py-3 bg-[#10265C] border border-[#D4AF37] rounded-sm flex flex-wrap items-center justify-between gap-3 shadow-2xl"
            },
            h(
              "div",
              null,
              h(
                "p",
                { className: "text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37]" },
                `Page ${menuPages[lightboxIdx].pageNumber} of ${total} — ${menuPages[lightboxIdx].title}`
              ),
              h(
                "p",
                { className: "text-[11px] text-[#E8D7A5]" },
                menuPages[lightboxIdx].subtitle
              )
            ),
            h(
              "div",
              { className: "flex flex-wrap items-center gap-2" },
              [1, 1.6, 2.2].map((z) =>
                h(
                  "button",
                  {
                    key: z,
                    type: "button",
                    onClick: () => setZoomLevel(z),
                    className: `px-2.5 py-1 text-xs font-bold uppercase rounded-sm border ${
                      zoomLevel === z
                        ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37]"
                        : "bg-[#091735] text-[#E8D7A5] border-[#D4AF37]/40 hover:border-[#D4AF37]"
                    }`
                  },
                  `${Math.round(z * 100)}%`
                )
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setLightboxIdx((prev) => (prev - 1 + total) % total);
                    setZoomLevel(1);
                  },
                  className:
                    "px-3 py-1 text-xs font-bold uppercase bg-[#091735] text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#091735]"
                },
                "◀ Prev"
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setLightboxIdx((prev) => (prev + 1) % total);
                    setZoomLevel(1);
                  },
                  className:
                    "px-3 py-1 text-xs font-bold uppercase bg-[#091735] text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#091735]"
                },
                "Next ▶"
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setLightboxIdx(null);
                    setZoomLevel(1);
                  },
                  className:
                    "px-3 py-1 text-xs font-bold uppercase bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm"
                },
                "Close ✕"
              )
            )
          ),

          // Center Zoomable Menu Image Canvas
          h(
            "div",
            {
              onClick: (e) => e.stopPropagation(),
              className:
                "flex-1 my-3 overflow-auto flex items-start justify-center p-2 sm:p-4"
            },
            h("img", {
              src: menuPages[lightboxIdx].image,
              alt: menuPages[lightboxIdx].title,
              onClick: () => setZoomLevel((z) => (z === 1 ? 1.6 : z === 1.6 ? 2.2 : 1)),
              style: {
                width: `${Math.round(zoomLevel * 540)}px`,
                maxWidth: zoomLevel === 1 ? "92vw" : "none"
              },
              className:
                "h-auto object-contain rounded-sm border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(0,0,0,0.85)] cursor-zoom-in transition-all duration-200"
            })
          ),

          // Bottom Page Strip inside Lightbox
          h(
            "div",
            {
              onClick: (e) => e.stopPropagation(),
              className:
                "max-w-6xl w-full mx-auto px-3 py-2 bg-[#091735] border border-[#D4AF37]/50 rounded-sm flex items-center gap-1.5 overflow-x-auto hide-scrollbar"
            },
            menuPages.map((pg, idx) =>
              h(
                "button",
                {
                  key: pg.pageNumber,
                  type: "button",
                  onClick: () => {
                    setLightboxIdx(idx);
                    setZoomLevel(1);
                  },
                  className: `shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm border ${
                    idx === lightboxIdx
                      ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37]"
                      : "bg-[#10265C] text-[#E8D7A5] border-[#D4AF37]/30"
                  }`
                },
                pg.shortLabel
              )
            )
          )
        )
    );
  }

  // 5. OUR MENU — INTERACTIVE MENU SECTION & DEDICATED PAGE
  function InteractiveMenuSection({
    categories,
    menuItems,
    config,
    isFullPage = false,
    onNavigateMenuPage,
    onOpenPrintableMenu
  }) {
    const [selectedCategory, setSelectedCategory] = React.useState("All Categories");
    const [activeFilter, setActiveFilter] = React.useState("All");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [showPhotosOnCards, setShowPhotosOnCards] = React.useState(false);

    const QUICK_FILTERS = ["All", "Popular", "Jain", "South Indian", "North Indian"];

    // Filter logic combining Category Tab + Quick Filter Pill + Search Bar
    const filteredItems = React.useMemo(() => {
      return menuItems.filter((item) => {
        // 1. Category tab filter
        if (selectedCategory !== "All Categories" && item.category !== selectedCategory) {
          return false;
        }
        // 2. Quick filter pills
        if (activeFilter === "Popular" && !item.isPopular) return false;
        if (activeFilter === "Jain" && !item.isJain) return false;
        if (
          activeFilter === "South Indian" &&
          item.category !== "South Indian" &&
          item.cuisineGroup !== "South Indian"
        ) {
          return false;
        }
        if (
          activeFilter === "North Indian" &&
          item.category !== "North Indian" &&
          item.category !== "Punjabi" &&
          item.cuisineGroup !== "North Indian"
        ) {
          return false;
        }
        // 3. Search query filter
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase().trim();
          const matchName = item.name.toLowerCase().includes(q);
          const matchCat = item.category.toLowerCase().includes(q);
          const matchDesc = (item.description || "").toLowerCase().includes(q);
          return matchName || matchCat || matchDesc;
        }
        return true;
      });
    }, [menuItems, selectedCategory, activeFilter, searchQuery]);

    // Group filtered items by category for elegant presentation
    const groupedCategories = React.useMemo(() => {
      const groups = {};
      filteredItems.forEach((item) => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
      });
      return groups;
    }, [filteredItems]);

    const orderedVisibleCategories = categories.filter((cat) => groupedCategories[cat] && groupedCategories[cat].length > 0);

    return h(
      "section",
      {
        id: "menu-section",
        className: "bg-[#FFF9EF] text-[#091735] py-20 md:py-28 relative"
      },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        // Section Header
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-12" },
          h(
            "span",
            {
              className:
                "inline-block px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] rounded-sm mb-3"
            },
            "100% PURE VEGETARIAN & JAIN FRIENDLY"
          ),
          h(
            "h2",
            {
              className:
                "font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#10265C] uppercase tracking-wide"
            },
            "OUR ROYAL MULTI-CUISINE MENU"
          ),
          h(GoldOrnamentDivider, { className: "my-4" }),
          h(
            "p",
            { className: "text-sm sm:text-base text-[#091735]/80 leading-relaxed" },
            "Explore Kuubera's complete official 12-page menu book in our interactive flipbook below, or search and filter across all 14 pure vegetarian & Jain categories. South Indian (7:00 AM – 10:30 PM) • Pav Bhaji (10:00 AM – 11:30 PM) • Punjabi, Chinese & Soups (11:00 AM – 11:30 PM)."
          )
        ),

        // Interactive 12-Page Official Menu Book & Visual Card Showcase
        h(RoyalMenuBookShowcase, { onOpenPrintableMenu }),

        // Interactive Controls Bar: Search + Quick Filters + Download Full Menu
        h(
          "div",
          {
            className:
              "bg-[#10265C] text-[#FFF9EF] p-5 sm:p-6 rounded-sm border-2 border-[#D4AF37] shadow-xl mb-8 space-y-5"
          },
          // Top Row: Search Input + Quick Filter Pills + Download Button
          h(
            "div",
            { className: "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4" },
            // Search Box
            h(
              "div",
              { className: "relative flex-1 max-w-md" },
              h(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  className: "w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2"
                },
                h("circle", { cx: "11", cy: "11", r: "8" }),
                h("path", { d: "M21 21l-4.35-4.35", strokeLinecap: "round" })
              ),
              h("input", {
                type: "search",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: "Search dishes (e.g. Masala Dosa, Jain Pav Bhaji, Paneer)...",
                "aria-label": "Search menu dishes",
                className:
                  "w-full pl-10 pr-4 py-2.5 text-sm bg-[#091735] text-[#FFF9EF] placeholder-[#E8D7A5]/55 border border-[#D4AF37]/60 rounded-sm focus:outline-none focus:border-[#D4AF37]"
              })
            ),

            // Quick Filter Pills: All | Popular | Jain | South Indian | North Indian
            h(
              "div",
              { className: "flex items-center gap-2 flex-wrap" },
              h("span", { className: "text-[11px] uppercase tracking-widest text-[#E8D7A5] mr-1 hidden sm:inline" }, "Filter:"),
              QUICK_FILTERS.map((flt) => {
                const active = activeFilter === flt;
                return h(
                  "button",
                  {
                    key: flt,
                    type: "button",
                    onClick: () => {
                      setActiveFilter(flt);
                      if (flt === "South Indian" || flt === "North Indian") {
                        setSelectedCategory("All Categories");
                      }
                    },
                    className: `px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all ${
                      active
                        ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37] shadow-sm"
                        : "bg-[#091735]/80 text-[#E8D7A5] border-[#D4AF37]/40 hover:border-[#D4AF37]"
                    }`
                  },
                  flt === "Jain" ? "Jain Friendly" : flt
                );
              })
            ),

            // Toggle Photo Cards + DOWNLOAD FULL MENU Button
            h(
              "div",
              { className: "flex items-center gap-2.5 shrink-0" },
              h(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPhotosOnCards(!showPhotosOnCards),
                  className:
                    "px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider bg-[#091735] text-[#E8D7A5] border border-[#D4AF37]/45 rounded-sm hover:border-[#D4AF37] transition-all"
                },
                showPhotosOnCards ? "Hide Photo Slots" : "Show Photo Slots"
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: onOpenPrintableMenu,
                  className:
                    "inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm hover:bg-[#a31c2d] transition-all shadow-md"
                },
                h(
                  "svg",
                  { viewBox: "0 0 24 24", className: "w-4 h-4 text-[#D4AF37]", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                  h("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3", strokeLinecap: "round", strokeLinejoin: "round" })
                ),
                "DOWNLOAD FULL MENU"
              )
            )
          ),

          // 14 Category Navigation Tabs
          h(
            "div",
            { className: "pt-3 border-t border-[#D4AF37]/25" },
            h(
              "div",
              { className: "flex items-center gap-2 overflow-x-auto pb-1.5 hide-scrollbar" },
              ["All Categories", ...categories].map((cat) => {
                const isSelected = selectedCategory === cat;
                return h(
                  "button",
                  {
                    key: cat,
                    type: "button",
                    onClick: () => setSelectedCategory(cat),
                    className: `shrink-0 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                      isSelected
                        ? "bg-[#D4AF37] text-[#091735] font-bold shadow-md"
                        : "bg-[#091735]/60 text-[#FFF9EF]/85 hover:bg-[#091735] hover:text-[#D4AF37] border border-[#D4AF37]/25"
                    }`
                  },
                  cat
                );
              })
            )
          )
        ),

        // Menu Results Count & Clear Filter Bar
        h(
          "div",
          { className: "flex items-center justify-between gap-4 mb-8 text-xs text-[#091735]/75" },
          h(
            "p",
            null,
            `Showing ${filteredItems.length} verified pure vegetarian dishes`,
            selectedCategory !== "All Categories" ? ` in "${selectedCategory}"` : "",
            activeFilter !== "All" ? ` • Filter: ${activeFilter}` : "",
            searchQuery ? ` • Search: "${searchQuery}"` : ""
          ),
          (selectedCategory !== "All Categories" || activeFilter !== "All" || searchQuery !== "") &&
            h(
              "button",
              {
                type: "button",
                onClick: () => {
                  setSelectedCategory("All Categories");
                  setActiveFilter("All");
                  setSearchQuery("");
                },
                className: "text-[#8B1726] font-semibold uppercase tracking-wider hover:underline"
              },
              "Reset All Filters ×"
            )
        ),

        // Empty State if search matches nothing
        orderedVisibleCategories.length === 0
          ? h(
              "div",
              {
                className:
                  "text-center py-16 px-4 bg-white border border-[#D4AF37]/40 rounded-sm shadow-sm"
              },
              h(
                "p",
                { className: "font-serif text-2xl text-[#10265C] font-bold mb-2" },
                "No dishes matched your current search or filter."
              ),
              h(
                "p",
                { className: "text-sm text-[#091735]/70 mb-6" },
                "Try clearing your search filter or exploring all 14 menu categories."
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setSelectedCategory("All Categories");
                    setActiveFilter("All");
                    setSearchQuery("");
                  },
                  className:
                    "px-6 py-2.5 text-xs font-semibold uppercase tracking-widest bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] rounded-sm"
                },
                "Show All Menu Categories"
              )
            )
          : // Category Groups & Dish Cards Grid
            h(
              "div",
              { className: "space-y-14" },
              orderedVisibleCategories.map((categoryName) => {
                const items = groupedCategories[categoryName];
                return h(
                  "div",
                  { key: categoryName, className: "space-y-6" },
                  // Category Banner Heading
                  h(
                    "div",
                    {
                      className:
                        "flex items-center justify-between border-b-2 border-[#D4AF37] pb-3"
                    },
                    h(
                      "div",
                      { className: "flex items-center gap-3" },
                      h("span", { className: "w-2.5 h-2.5 rotate-45 bg-[#8B1726] border border-[#D4AF37]" }),
                      h(
                        "h3",
                        {
                          className:
                            "font-serif text-2xl sm:text-3xl font-bold text-[#10265C] uppercase tracking-wide"
                        },
                        categoryName
                      )
                    ),
                    h(
                      "span",
                      {
                        className:
                          "text-xs font-semibold uppercase tracking-widest text-[#10265C]/70"
                      },
                      `${items.length} ${items.length === 1 ? "Dish" : "Dishes"}`
                    )
                  ),

                  // Dish Cards Grid
                  h(
                    "div",
                    { className: "grid grid-cols-1 md:grid-cols-2 gap-5" },
                    items.map((dish) => {
                      const priceObj = formatDishPrice(dish.price);
                      const hasUploadedPhoto = Boolean(dish.image && dish.image.trim() !== "");

                      return h(
                        "div",
                        {
                          key: dish.id,
                          className:
                            "group bg-white border border-[#D4AF37]/40 rounded-sm p-5 shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between gap-4"
                        },
                        // Optional Dish Photo Slot (Always shown if owner uploaded a photo, or when user toggles Show Photo Slots)
                        (hasUploadedPhoto || showPhotosOnCards) &&
                          h(KuuberaPhotoSlot, {
                            imageUrl: dish.image,
                            title: dish.name,
                            recommendedPath: dish.recommendedImagePath,
                            categoryBadge: dish.category,
                            className: "w-full h-44 mb-1 rounded-sm"
                          }),

                        h(
                          "div",
                          { className: "space-y-2" },
                          // Top Badges Row: Pure Veg + Popular + Jain
                          h(
                            "div",
                            { className: "flex items-center justify-between gap-2 flex-wrap" },
                            h(
                              "div",
                              { className: "flex items-center gap-2 flex-wrap" },
                              h(VegIndicator, { showLabel: false }),
                              dish.isPopular &&
                                h(
                                  "span",
                                  {
                                    className:
                                      "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#8B1726]/10 text-[#8B1726] border border-[#8B1726]/30 rounded-sm"
                                  },
                                  "★ Popular"
                                ),
                              dish.isJain && h(JainIndicator, { lightMode: true })
                            ),

                            // Price Display (Verified INR or Unpublished Badge)
                            priceObj.isVerifiedNumber
                              ? h(
                                  "span",
                                  {
                                    className:
                                      "font-serif text-xl font-bold text-[#10265C] bg-[#FFF9EF] px-2.5 py-0.5 border border-[#D4AF37]/50 rounded-sm"
                                  },
                                  priceObj.text
                                )
                              : h(
                                  "span",
                                  {
                                    className:
                                      "text-[11px] font-medium uppercase tracking-wider text-[#10265C]/70 bg-[#FFF9EF] px-2.5 py-1 border border-[#D4AF37]/40 rounded-sm",
                                    title: "Price left unpublished until verified by owner in menuData.js"
                                  },
                                  "Price at Restaurant"
                                )
                          ),

                          // Dish Name with Dotted Leader
                          h(
                            "div",
                            { className: "flex items-baseline justify-between gap-2 pt-1" },
                            h(
                              "h4",
                              {
                                className:
                                  "font-serif text-xl font-bold text-[#091735] group-hover:text-[#8B1726] transition-colors"
                              },
                              dish.name
                            )
                          ),

                          // Description
                          dish.description &&
                            h(
                              "p",
                              { className: "text-xs sm:text-sm text-[#091735]/75 leading-relaxed" },
                              dish.description
                            )
                        )
                      );
                    })
                  )
                );
              })
            ),

        // Bottom Banner Note on Pricing Integrity & Download Menu CTA
        h(
          "div",
          {
            className:
              "mt-14 p-6 bg-[#10265C] text-[#FFF9EF] rounded-sm border border-[#D4AF37] flex flex-col md:flex-row items-center justify-between gap-6"
          },
          h(
            "div",
            { className: "space-y-1 text-center md:text-left" },
            h(
              "p",
              { className: "font-serif text-lg font-bold text-[#D4AF37]" },
              "Planning a Family Meal, Highway Halt, or Group Order?"
            ),
            h(
              "p",
              { className: "text-xs sm:text-sm text-[#E8D7A5]/90" },
              "Average meal cost is ₹350–₹400 for two. Call or WhatsApp us on +91 90281 67333 for live counter tariffs, bulk travel orders, or custom Jain preparations."
            )
          ),
          h(
            "div",
            { className: "flex flex-wrap items-center justify-center gap-3 shrink-0" },
            h(
              "button",
              {
                type: "button",
                onClick: onOpenPrintableMenu,
                className:
                  "px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] bg-[#D4AF37] text-[#091735] rounded-sm hover:bg-[#E8D7A5] transition-all"
              },
              "DOWNLOAD FULL MENU"
            ),
            !isFullPage &&
              onNavigateMenuPage &&
              h(
                "button",
                {
                  type: "button",
                  onClick: onNavigateMenuPage,
                  className:
                    "px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] border border-[#D4AF37] text-[#FFF9EF] rounded-sm hover:bg-[#091735] transition-all"
                },
                "OPEN DEDICATED MENU PAGE"
              )
          )
        )
      )
    );
  }

  window.KuuberaMenu = {
    SignatureDishesSection,
    RoyalMenuBookShowcase,
    InteractiveMenuSection,
    formatDishPrice
  };
})();
