/**
 * ============================================================================
 * KUUBERA PURE VEG — INSTAGRAM GALLERY (WITH LIGHTBOX) & CUSTOMER REVIEWS
 * ============================================================================
 */

(function () {
  const h = React.createElement;
  const { GoldOrnamentDivider, KuuberaPhotoSlot } = window.KuuberaBrand;

  // 7. INSTAGRAM GALLERY SECTION & DEDICATED PAGE ("A GLIMPSE OF KUUBERA")
  function GallerySection({ categories, galleryItems, config, isFullPage = false, onNavigateGallery }) {
    const [activeCategory, setActiveCategory] = React.useState("All");
    const [lightboxIndex, setLightboxIndex] = React.useState(null);

    const visibleItems = React.useMemo(() => {
      if (activeCategory === "All") return galleryItems;
      return galleryItems.filter((item) => item.category === activeCategory);
    }, [galleryItems, activeCategory]);

    // Keyboard navigation for Lightbox
    React.useEffect(() => {
      if (lightboxIndex === null) return;
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) => (prev + 1) % visibleItems.length);
        }
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, visibleItems.length]);

    const currentLightboxItem =
      lightboxIndex !== null && visibleItems[lightboxIndex] ? visibleItems[lightboxIndex] : null;

    return h(
      "section",
      {
        id: "gallery-section",
        className:
          "bg-[#091735] text-[#FFF9EF] py-20 md:py-28 border-t border-[#D4AF37]/30 relative overflow-hidden"
      },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        // Section Header
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-12" },
          h(
            "a",
            {
              href: config.links.instagramUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] bg-[#10265C] text-[#D4AF37] border border-[#D4AF37]/60 rounded-sm hover:bg-[#D4AF37] hover:text-[#091735] transition-all mb-4"
            },
            h(
              "svg",
              { viewBox: "0 0 24 24", className: "w-3.5 h-3.5", fill: "none", stroke: "currentColor", strokeWidth: "2" },
              h("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
              h("circle", { cx: "12", cy: "12", r: "4" }),
              h("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
            ),
            `INSTAGRAM ${config.links.instagramHandle}`
          ),
          h(
            "h2",
            {
              className:
                "font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide gold-metallic-text"
            },
            "A GLIMPSE OF KUUBERA"
          ),
          h(GoldOrnamentDivider, { className: "my-4" }),
          h(
            "p",
            { className: "text-sm sm:text-base text-[#E8D7A5]/85 leading-relaxed" },
            "Explore our restaurant interiors, highway arrival landmark, freshly prepared vegetarian delicacies, and warm family dining moments."
          )
        ),

        // Category Filter Pills
        h(
          "div",
          { className: "flex items-center justify-center gap-2.5 flex-wrap mb-10" },
          categories.map((cat) => {
            const active = activeCategory === cat;
            return h(
              "button",
              {
                key: cat,
                type: "button",
                onClick: () => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                },
                className: `px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all ${
                  active
                    ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37] shadow-md"
                    : "bg-[#10265C]/70 text-[#E8D7A5] border-[#D4AF37]/35 hover:border-[#D4AF37]"
                }`
              },
              cat
            );
          })
        ),

        // Asymmetrical Image Grid with Gold Hover Borders & Click-to-Expand Lightbox
        h(
          "div",
          { className: "grid grid-cols-12 gap-5" },
          visibleItems.map((item, idx) =>
            h(
              "div",
              {
                key: item.id,
                onClick: () => setLightboxIndex(idx),
                role: "button",
                tabIndex: 0,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                },
                "aria-label": `Expand photograph: ${item.title}`,
                className: `${
                  activeCategory === "All" ? item.gridSpan : "col-span-12 sm:col-span-6 lg:col-span-4"
                } group relative rounded-sm overflow-hidden border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer flex flex-col`
              },
              h(KuuberaPhotoSlot, {
                imageUrl: item.imageUrl,
                title: item.title,
                subtitle: item.caption,
                recommendedPath: item.recommendedPath,
                categoryBadge: item.category,
                className: `w-full h-full flex-1 ${item.aspectClass || "min-h-[250px]"}`
              }),

              // Hover Overlay with Expand Lightbox Indicator
              h(
                "div",
                {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-[#091735]/95 via-[#091735]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none"
                },
                h(
                  "div",
                  { className: "flex items-end justify-between gap-3" },
                  h(
                    "div",
                    null,
                    h(
                      "p",
                      { className: "text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]" },
                      item.instagramRef
                    ),
                    h(
                      "h3",
                      { className: "font-serif text-xl font-bold text-[#FFF9EF] mt-0.5" },
                      item.title
                    ),
                    h(
                      "p",
                      { className: "text-xs text-[#E8D7A5]/90 mt-1 line-clamp-2" },
                      item.caption
                    )
                  ),
                  h(
                    "span",
                    {
                      className:
                        "w-9 h-9 rounded-sm bg-[#D4AF37] text-[#091735] flex items-center justify-center shrink-0 font-bold text-sm shadow-md"
                    },
                    "⤢"
                  )
                )
              )
            )
          )
        ),

        // Bottom CTA Row: FOLLOW US ON INSTAGRAM
        h(
          "div",
          { className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" },
          h(
            "a",
            {
              href: config.links.instagramUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm shadow-lg hover:bg-[#a31c2d] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
            },
            h(
              "svg",
              { viewBox: "0 0 24 24", className: "w-4 h-4 text-[#D4AF37]", fill: "none", stroke: "currentColor", strokeWidth: "2" },
              h("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
              h("circle", { cx: "12", cy: "12", r: "4" }),
              h("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
            ),
            "FOLLOW US ON INSTAGRAM"
          ),
          !isFullPage &&
            onNavigateGallery &&
            h(
              "button",
              {
                type: "button",
                onClick: onNavigateGallery,
                className:
                  "px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#091735] transition-all"
              },
              "VIEW FULL GALLERY PAGE"
            )
        )
      ),

      // Click-to-Expand Image Lightbox Modal
      currentLightboxItem &&
        h(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": currentLightboxItem.title,
            onClick: () => setLightboxIndex(null),
            className:
              "fixed inset-0 z-50 bg-[#091735]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          },
          h(
            "div",
            {
              onClick: (e) => e.stopPropagation(),
              className:
                "relative w-full max-w-4xl bg-[#10265C] border-2 border-[#D4AF37] rounded-sm overflow-hidden shadow-2xl"
            },
            // Top Bar
            h(
              "div",
              {
                className:
                  "flex items-center justify-between px-5 py-3.5 bg-[#091735] border-b border-[#D4AF37]/40"
              },
              h(
                "div",
                { className: "flex items-center gap-3" },
                h(
                  "span",
                  {
                    className:
                      "px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#10265C] text-[#D4AF37] border border-[#D4AF37]/50"
                  },
                  currentLightboxItem.category
                ),
                h(
                  "span",
                  { className: "text-xs text-[#E8D7A5]" },
                  `${lightboxIndex + 1} of ${visibleItems.length}`
                )
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: () => setLightboxIndex(null),
                  "aria-label": "Close Lightbox",
                  className:
                    "px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm hover:bg-[#a31c2d]"
                },
                "Close ✕"
              )
            ),

            // Main Image / Slot Viewport
            h(
              "div",
              { className: "relative bg-[#091735]" },
              h(KuuberaPhotoSlot, {
                imageUrl: currentLightboxItem.imageUrl,
                title: currentLightboxItem.title,
                subtitle: currentLightboxItem.caption,
                recommendedPath: currentLightboxItem.recommendedPath,
                categoryBadge: currentLightboxItem.instagramRef,
                className: "w-full h-[360px] sm:h-[460px]"
              }),

              // Prev & Next Lightbox Buttons
              h(
                "button",
                {
                  type: "button",
                  onClick: () =>
                    setLightboxIndex((lightboxIndex - 1 + visibleItems.length) % visibleItems.length),
                  "aria-label": "Previous image",
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#091735]/90 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#091735]"
                },
                "←"
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: () => setLightboxIndex((lightboxIndex + 1) % visibleItems.length),
                  "aria-label": "Next image",
                  className:
                    "absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-sm bg-[#091735]/90 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#091735]"
                },
                "→"
              )
            ),

            // Caption Footer
            h(
              "div",
              {
                className:
                  "p-5 bg-[#10265C] border-t border-[#D4AF37]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              },
              h(
                "div",
                null,
                h("h3", { className: "font-serif text-xl font-bold text-[#FFF9EF]" }, currentLightboxItem.title),
                h("p", { className: "text-sm text-[#E8D7A5]/90 mt-1" }, currentLightboxItem.caption)
              ),
              h(
                "a",
                {
                  href: config.links.instagramUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "shrink-0 px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-[#091735] text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#091735] transition-all"
                },
                "View @_kuubera_"
              )
            )
          )
        )
    );
  }

  // 8. CUSTOMER REVIEWS SECTION & DEDICATED PAGE ("WHAT OUR GUESTS SAY")
  function ReviewsSection({ reviews, config, isFullPage = false }) {
    const carouselRef = React.useRef(null);
    const [selectedTopic, setSelectedTopic] = React.useState("All");

    const REVIEW_TOPICS = [
      "All",
      "Taste",
      "Cleanliness & Hygiene",
      "Ambience",
      "Jain Food",
      "Family Dining"
    ];

    const filteredReviews = React.useMemo(() => {
      if (selectedTopic === "All") return reviews;
      return reviews.filter((r) =>
        (r.highlights || []).some((tag) => tag.toLowerCase().includes(selectedTopic.toLowerCase())) ||
        r.reviewText.toLowerCase().includes(selectedTopic.toLowerCase())
      );
    }, [reviews, selectedTopic]);

    const scrollCarousel = (dir) => {
      if (!carouselRef.current) return;
      carouselRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
    };

    return h(
      "section",
      {
        id: "reviews-section",
        className: "bg-[#FFF9EF] text-[#091735] py-20 md:py-28 relative overflow-hidden"
      },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        // Header + Verified Rating Summary Card
        h(
          "div",
          {
            className:
              "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 pb-10 border-b border-[#D4AF37]/40"
          },
          // Left Heading (7 cols)
          h(
            "div",
            { className: "lg:col-span-7 space-y-3" },
            h(
              "div",
              { className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8B1726]" },
              h("span", { className: "h-[1px] w-8 bg-[#8B1726]" }),
              "VERIFIED GUEST EXPERIENCES"
            ),
            h(
              "h2",
              {
                className:
                  "font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#10265C] uppercase tracking-wide"
              },
              "WHAT OUR GUESTS SAY"
            ),
            h(
              "p",
              { className: "text-sm sm:text-base text-[#091735]/80 max-w-2xl leading-relaxed" },
              "Genuine publicly shared reviews from families and travellers who stopped at Kuubera Pure Veg near Khed Shivapur Toll Naka, Varve Budruk."
            )
          ),

          // Right Verified Rating Summary Box (5 cols)
          h(
            "div",
            {
              className:
                "lg:col-span-5 bg-[#10265C] text-[#FFF9EF] p-6 sm:p-7 rounded-sm border-2 border-[#D4AF37] shadow-xl flex items-center justify-between gap-6"
            },
            h(
              "div",
              { className: "text-center pr-6 border-r border-[#D4AF37]/30 shrink-0" },
              h(
                "p",
                { className: "font-serif text-4xl sm:text-5xl font-bold text-[#D4AF37]" },
                config.ratingsSummary.overallRating
              ),
              h(
                "div",
                { className: "flex items-center justify-center gap-0.5 text-[#D4AF37] my-1 text-base" },
                "★★★★★"
              ),
              h("p", { className: "text-[10px] uppercase tracking-widest text-[#E8D7A5]" }, "Out of 5.0")
            ),
            h(
              "div",
              { className: "space-y-1.5" },
              h(
                "p",
                { className: "font-serif text-lg font-bold text-[#FFF9EF]" },
                config.ratingsSummary.totalReviewsText
              ),
              h(
                "p",
                { className: "text-xs text-[#E8D7A5]/90" },
                "Across Google & Local Dining Directories"
              ),
              h(
                "p",
                { className: "text-xs font-semibold text-[#D4AF37] pt-1" },
                `Avg. Cost: ${config.ratingsSummary.costForTwoText}`
              )
            )
          )
        ),

        // Topic Filter Pills & Carousel Arrow Controls
        h(
          "div",
          { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8" },
          h(
            "div",
            { className: "flex items-center gap-2 flex-wrap" },
            REVIEW_TOPICS.map((topic) => {
              const active = selectedTopic === topic;
              return h(
                "button",
                {
                  key: topic,
                  type: "button",
                  onClick: () => setSelectedTopic(topic),
                  className: `px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all ${
                    active
                      ? "bg-[#10265C] text-[#D4AF37] border-[#10265C]"
                      : "bg-white text-[#10265C] border-[#D4AF37]/50 hover:border-[#10265C]"
                  }`
                },
                topic
              );
            })
          ),

          h(
            "div",
            { className: "flex items-center gap-2 self-end" },
            h(
              "button",
              {
                type: "button",
                onClick: () => scrollCarousel(-1),
                "aria-label": "Previous Review",
                className:
                  "w-10 h-10 rounded-sm bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center hover:bg-[#091735]"
              },
              "←"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: () => scrollCarousel(1),
                "aria-label": "Next Review",
                className:
                  "w-10 h-10 rounded-sm bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center hover:bg-[#091735]"
              },
              "→"
            )
          )
        ),

        // Horizontal Testimonial Cards Carousel
        h(
          "div",
          {
            ref: carouselRef,
            className:
              "flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          },
          filteredReviews.map((rev) =>
            h(
              "blockquote",
              {
                key: rev.id,
                className:
                  "snap-start shrink-0 w-[88vw] sm:w-[420px] md:w-[460px] bg-[#10265C] text-[#FFF9EF] p-7 sm:p-8 rounded-sm border-2 border-[#D4AF37]/60 shadow-xl flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all"
              },
              // Decorative Gold Quote Mark
              h(
                "span",
                {
                  className:
                    "font-serif text-6xl text-[#D4AF37]/20 absolute top-4 right-6 pointer-events-none select-none",
                  "aria-hidden": "true"
                },
                "“"
              ),

              h(
                "div",
                { className: "space-y-4 relative z-10" },
                // Star Rating & Date
                h(
                  "div",
                  { className: "flex items-center justify-between gap-2" },
                  h(
                    "div",
                    {
                      className: "flex items-center gap-1 text-[#D4AF37] text-base tracking-widest",
                      "aria-label": `${rev.rating} out of 5 stars`
                    },
                    "★".repeat(rev.rating || 5)
                  ),
                  h(
                    "span",
                    { className: "text-[11px] text-[#E8D7A5]/75 uppercase tracking-wider" },
                    rev.dateText
                  )
                ),

                // Actual Verbatim Review Text
                h(
                  "p",
                  { className: "text-sm sm:text-base text-[#FFF9EF]/95 leading-relaxed italic font-normal" },
                  `"${rev.reviewText}"`
                ),

                // Highlight Tags
                rev.highlights &&
                  rev.highlights.length > 0 &&
                  h(
                    "div",
                    { className: "flex items-center gap-1.5 flex-wrap pt-2" },
                    rev.highlights.map((tag) =>
                      h(
                        "span",
                        {
                          key: tag,
                          className:
                            "px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#091735] text-[#E8D7A5] border border-[#D4AF37]/35 rounded-sm"
                        },
                        tag
                      )
                    )
                  )
              ),

              // Reviewer Name & Platform Footer
              h(
                "footer",
                {
                  className:
                    "mt-6 pt-4 border-t border-[#D4AF37]/25 flex items-center justify-between gap-3"
                },
                h(
                  "div",
                  { className: "flex items-center gap-3" },
                  h(
                    "div",
                    {
                      className:
                        "w-10 h-10 rounded-full bg-[#091735] border border-[#D4AF37] flex items-center justify-center font-serif font-bold text-[#D4AF37]"
                    },
                    rev.reviewerName.charAt(0).toUpperCase()
                  ),
                  h(
                    "div",
                    null,
                    h(
                      "cite",
                      { className: "not-italic font-serif text-lg font-bold text-[#D4AF37] block" },
                      rev.reviewerName
                    ),
                    h(
                      "span",
                      { className: "text-[11px] text-[#E8D7A5]/75" },
                      rev.platform
                    )
                  )
                ),
                h(
                  "span",
                  {
                    className:
                      "px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 rounded-sm"
                  },
                  "Verified"
                )
              )
            )
          )
        ),

        // Bottom CTA: READ MORE GOOGLE REVIEWS
        h(
          "div",
          { className: "mt-10 text-center" },
          h(
            "a",
            {
              href: config.links.googleReviewsUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm shadow-lg hover:bg-[#a31c2d] transition-all"
            },
            "READ MORE GOOGLE REVIEWS →"
          )
        )
      )
    );
  }

  window.KuuberaGalleryReviews = {
    GallerySection,
    ReviewsSection
  };
})();
