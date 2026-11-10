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
            "Explore Kuubera's complete official menu across 14 categories with verified INR prices. South Indian (7:00 AM – 10:30 PM) • Pav Bhaji (10:00 AM – 11:30 PM) • Punjabi, Chinese & Soups (11:00 AM – 11:30 PM). We Accept Party Orders."
          )
        ),

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
    InteractiveMenuSection,
    formatDishPrice
  };
})();
