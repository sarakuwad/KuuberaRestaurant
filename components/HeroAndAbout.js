/**
 * ============================================================================
 * KUUBERA PURE VEG — HERO SECTION (WITH VIDEO CAROUSEL), 24-REEL SHOWCASE,
 * ABOUT KUUBERA & SPECIAL EXPERIENCE SECTION
 * ============================================================================
 */

(function () {
  const h = React.createElement;
  const { KuuberaLogo, GoldOrnamentDivider, FeatureGoldIcon, KuuberaPhotoSlot } = window.KuuberaBrand;

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

  // 3. HOMEPAGE — CINEMATIC HERO SECTION WITH LIVE BACKGROUND VIDEO CAROUSEL
  function HeroSection({ config, videos = [], onExploreMenu, onFindUs, onOpenReservation }) {
    const [currentVidIdx, setCurrentVidIdx] = React.useState(0);
    const [isMuted, setIsMuted] = React.useState(true);
    const videoRef = React.useRef(null);

    const hasVideos = Array.isArray(videos) && videos.length > 0;
    const activeVideo = hasVideos ? videos[currentVidIdx % videos.length] : null;

    const handleNextVideo = () => {
      if (!hasVideos) return;
      setCurrentVidIdx((prev) => (prev + 1) % videos.length);
    };

    const handlePrevVideo = () => {
      if (!hasVideos) return;
      setCurrentVidIdx((prev) => (prev - 1 + videos.length) % videos.length);
    };

    React.useEffect(() => {
      if (videoRef.current && activeVideo) {
        videoRef.current.load();
        const playPromise = videoRef.current.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      }
    }, [currentVidIdx, activeVideo]);

    return h(
      "section",
      {
        className:
          "relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#091735] text-[#FFF9EF] py-20 px-4 sm:px-6 lg:px-8"
      },
      // Background Video Carousel Player
      activeVideo
        ? h("video", {
            ref: videoRef,
            key: activeVideo.file,
            src: activeVideo.file,
            autoPlay: true,
            muted: isMuted,
            playsInline: true,
            onEnded: handleNextVideo,
            onError: handleNextVideo,
            className: "absolute inset-0 w-full h-full object-cover opacity-55 transition-opacity duration-700"
          })
        : null,

      // Dark Royal-Blue Overlay for High Contrast Readability
      h("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-[#091735]/85 via-[#10265C]/75 to-[#091735]/95 pointer-events-none"
      }),

      // Subtle Gold Decorative Outer Frame Border
      h(
        "div",
        {
          className:
            "absolute inset-4 sm:inset-7 md:inset-10 border border-[#D4AF37]/45 pointer-events-none z-10",
          "aria-hidden": "true"
        },
        h("div", { className: "absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]" }),
        h("div", { className: "absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]" }),
        h("div", { className: "absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]" }),
        h("div", { className: "absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]" })
      ),

      // Hero Content Container
      h(
        "div",
        { className: "relative z-20 max-w-4xl mx-auto text-center px-4 sm:px-8 py-10 animate-heroEntrance" },
        // Official Kuubera Pure Veg Logo Crest Showcase (Royal Blue & Gold Reference Lockup)
        h(
          "div",
          { className: "mb-6 flex justify-center" },
          h(
            "div",
            {
              className:
                "inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#10265C]/95 border border-[#D4AF37]/80 shadow-[0_10px_35px_rgba(0,0,0,0.65)]"
            },
            h(KuuberaLogo, { size: "lg" })
          )
        ),

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
              "font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.14em] leading-[1.15] gold-metallic-text drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          },
          "AN EXPERIENCE BEYOND ORDINARY"
        ),

        h(GoldOrnamentDivider, { className: "my-6" }),

        // Subheading
        h(
          "p",
          {
            className:
              "font-sans text-lg sm:text-2xl md:text-3xl text-[#E8D7A5] font-semibold uppercase tracking-[0.12em] mb-5"
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

        // Hero Background Video Carousel Controls Bar
        hasVideos &&
          h(
            "div",
            {
              className:
                "mt-10 inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-[#091735]/85 border border-[#D4AF37]/50 backdrop-blur-md text-xs text-[#E8D7A5]"
            },
            h(
              "button",
              {
                type: "button",
                onClick: handlePrevVideo,
                "aria-label": "Previous Hero Video",
                className: "px-2 py-1 text-[#D4AF37] hover:text-[#FFF9EF] font-bold"
              },
              "← Prev"
            ),
            h(
              "span",
              { className: "font-mono text-[11px] text-[#FFF9EF]" },
              `Video ${(currentVidIdx % videos.length) + 1} / ${videos.length}`
            ),
            h(
              "button",
              {
                type: "button",
                onClick: handleNextVideo,
                "aria-label": "Next Hero Video",
                className: "px-2 py-1 text-[#D4AF37] hover:text-[#FFF9EF] font-bold"
              },
              "Next →"
            ),
            h("span", { className: "text-[#D4AF37]/40" }, "|"),
            h(
              "button",
              {
                type: "button",
                onClick: () => setIsMuted(!isMuted),
                className: "px-2 py-1 text-[#D4AF37] hover:text-[#FFF9EF] font-semibold uppercase tracking-wider text-[10px]"
              },
              isMuted ? "Unmute 🔇" : "Sound On 🔊"
            )
          ),

        // Quick Verified Trust Badges Strip
        h(
          "div",
          {
            className:
              "mt-10 pt-8 border-t border-[#D4AF37]/25 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-3xl mx-auto"
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
          href: "#video-carousel-section",
          onClick: (e) => {
            e.preventDefault();
            const el = document.getElementById("video-carousel-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
          "aria-label": "Scroll down to watch Kuubera videos",
          className:
            "absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#E8D7A5]/80 hover:text-[#D4AF37] transition-colors cursor-pointer"
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

  // OPENING PAGE INTERACTIVE 24-VIDEO CAROUSEL ("EXPERIENCE KUUBERA IN MOTION")
  function VideoReelsCarouselSection({ videos = [], config }) {
    const [activeIdx, setActiveIdx] = React.useState(0);
    const [isMuted, setIsMuted] = React.useState(true);
    const trackRef = React.useRef(null);
    const cardRefs = React.useRef([]);

    if (!videos || videos.length === 0) return null;

    const selectVideo = (idx) => {
      const normalized = (idx + videos.length) % videos.length;
      setActiveIdx(normalized);
      const targetEl = cardRefs.current[normalized];
      if (targetEl && trackRef.current) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    const scrollTrack = (dir) => {
      if (!trackRef.current) return;
      trackRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    };

    return h(
      "section",
      {
        id: "video-carousel-section",
        className:
          "bg-[#091735] text-[#FFF9EF] py-16 md:py-24 border-y-2 border-[#D4AF37]/60 relative overflow-hidden"
      },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        // Header + Carousel Controls
        h(
          "div",
          { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" },
          h(
            "div",
            null,
            h(
              "div",
              {
                className:
                  "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#D4AF37] mb-2"
              },
              h("span", { className: "w-2 h-2 rounded-full bg-[#8B1726] border border-[#D4AF37]" }),
              `LIVE FROM ${config.links.instagramHandle} • ${videos.length} OFFICIAL VIDEOS`
            ),
            h(
              "h2",
              {
                className:
                  "font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide gold-metallic-text"
              },
              "EXPERIENCE KUUBERA IN MOTION"
            ),
            h(
              "p",
              { className: "mt-2 text-sm sm:text-base text-[#E8D7A5]/85 max-w-2xl" },
              "Swipe through our restaurant ambience, sizzling delicacies, fresh kitchen preparation, and family dining moments."
            )
          ),

          // Sound Toggle & Prev/Next Carousel Controls
          h(
            "div",
            { className: "flex items-center gap-3 self-start md:self-end flex-wrap" },
            h(
              "button",
              {
                type: "button",
                onClick: () => setIsMuted(!isMuted),
                className:
                  "px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] hover:bg-[#a31c2d] transition-all"
              },
              isMuted ? "Unmute Audio 🔇" : "Audio On 🔊"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: () => {
                  selectVideo(activeIdx - 1);
                  scrollTrack(-1);
                },
                "aria-label": "Previous Video",
                className:
                  "w-11 h-11 rounded-sm bg-[#10265C] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#091735] transition-all font-bold"
              },
              "←"
            ),
            h(
              "span",
              { className: "text-xs font-mono text-[#E8D7A5] px-1" },
              `${activeIdx + 1} / ${videos.length}`
            ),
            h(
              "button",
              {
                type: "button",
                onClick: () => {
                  selectVideo(activeIdx + 1);
                  scrollTrack(1);
                },
                "aria-label": "Next Video",
                className:
                  "w-11 h-11 rounded-sm bg-[#10265C] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#091735] transition-all font-bold"
              },
              "→"
            )
          )
        ),

        // Horizontal 24-Video Reel Carousel Track
        h(
          "div",
          {
            ref: trackRef,
            className:
              "flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          },
          videos.map((vid, idx) => {
            const isActive = idx === activeIdx;
            return h(
              "div",
              {
                key: vid.id,
                ref: (el) => {
                  cardRefs.current[idx] = el;
                },
                onClick: () => setActiveIdx(idx),
                className: `snap-center shrink-0 w-[260px] sm:w-[290px] md:w-[310px] rounded-sm overflow-hidden bg-[#10265C] transition-all duration-300 cursor-pointer flex flex-col ${
                  isActive
                    ? "border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] scale-[1.01]"
                    : "border border-[#D4AF37]/35 opacity-85 hover:opacity-100 hover:border-[#D4AF37]/80"
                }`
              },
              // Video Viewport (9:16 Vertical Reel Aspect Ratio)
              h(
                "div",
                { className: "relative w-full h-[420px] sm:h-[460px] bg-[#060f24] overflow-hidden" },
                isActive
                  ? h("video", {
                      key: vid.file + "-active",
                      src: vid.file,
                      autoPlay: true,
                      muted: isMuted,
                      controls: true,
                      playsInline: true,
                      onEnded: () => selectVideo(idx + 1),
                      className: "w-full h-full object-cover"
                    })
                  : h("video", {
                      key: vid.file + "-preview",
                      src: `${vid.file}#t=0.5`,
                      preload: "metadata",
                      muted: true,
                      playsInline: true,
                      className: "w-full h-full object-cover pointer-events-none"
                    }),

                // Top Tag Badge
                h(
                  "div",
                  {
                    className:
                      "absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none"
                  },
                  h(
                    "span",
                    {
                      className:
                        "px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#091735]/90 text-[#D4AF37] border border-[#D4AF37]/50 rounded-sm"
                    },
                    vid.tag || `Reel #${idx + 1}`
                  ),
                  h(
                    "span",
                    {
                      className:
                        "px-2 py-0.5 text-[10px] font-mono bg-[#091735]/85 text-[#E8D7A5] rounded-sm"
                    },
                    `#${String(idx + 1).padStart(2, "0")}`
                  )
                ),

                // Center Play Button Overlay on Inactive Cards
                !isActive &&
                  h(
                    "div",
                    {
                      className:
                        "absolute inset-0 bg-[#091735]/35 hover:bg-[#091735]/15 transition-colors flex items-center justify-center"
                    },
                    h(
                      "div",
                      {
                        className:
                          "w-14 h-14 rounded-full bg-[#8B1726]/95 border-2 border-[#D4AF37] text-[#FFF9EF] flex items-center justify-center shadow-xl text-lg pl-1"
                      },
                      "▶"
                    )
                  )
              ),

              // Card Footer Caption
              h(
                "div",
                {
                  className:
                    "p-3.5 bg-[#10265C] border-t border-[#D4AF37]/30 flex items-center justify-between gap-2"
                },
                h(
                  "p",
                  { className: "font-serif text-sm font-bold text-[#FFF9EF] truncate" },
                  vid.title
                ),
                h(
                  "span",
                  {
                    className: `text-[10px] font-bold uppercase tracking-wider shrink-0 px-2 py-0.5 rounded-sm ${
                      isActive
                        ? "bg-[#D4AF37] text-[#091735]"
                        : "bg-[#091735] text-[#D4AF37] border border-[#D4AF37]/40"
                    }`
                  },
                  isActive ? "Playing" : "Watch"
                )
              )
            );
          })
        ),

        // Quick Reel Selector Pills (1 to 24)
        h(
          "div",
          { className: "mt-4 flex items-center justify-center gap-1.5 flex-wrap" },
          videos.map((v, idx) =>
            h(
              "button",
              {
                key: v.id,
                type: "button",
                onClick: () => selectVideo(idx),
                className: `w-7 h-7 text-[10px] font-bold rounded-sm border transition-all ${
                  idx === activeIdx
                    ? "bg-[#D4AF37] text-[#091735] border-[#D4AF37] scale-110"
                    : "bg-[#10265C] text-[#E8D7A5] border-[#D4AF37]/30 hover:border-[#D4AF37]"
                }`
              },
              idx + 1
            )
          )
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
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" },
          // Left Column: Live Video or Framed Photograph Showcase (5 cols)
          h(
            "div",
            { className: "lg:col-span-5 relative group" },
            h("div", {
              className:
                "absolute -inset-3 border-2 border-[#D4AF37]/50 translate-x-3 translate-y-3 pointer-events-none hidden sm:block"
            }),
            h(
              "div",
              { className: "relative shadow-2xl border border-[#D4AF37] bg-[#091735]" },
              aboutImg && aboutImg.imageUrl
                ? h(KuuberaPhotoSlot, {
                    imageUrl: aboutImg.imageUrl,
                    title: aboutImg.title,
                    recommendedPath: aboutImg.recommendedPath,
                    categoryBadge: "ABOUT KUUBERA",
                    className: "w-full h-[380px] sm:h-[440px]"
                  })
                : h("video", {
                    src: "./assets/videos/21f800b8002646eabbe9aac305221ce7.mp4",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    className: "w-full h-[380px] sm:h-[440px] object-cover"
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

          // Right Column: Live Kuubera Video / Photo Showcase (5 cols)
          h(
            "div",
            { className: "lg:col-span-5" },
            h(
              "div",
              {
                className:
                  "p-2.5 bg-[#091735]/80 border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(0,0,0,0.45)] rounded-sm group"
              },
              specialImg && specialImg.imageUrl
                ? h(KuuberaPhotoSlot, {
                    imageUrl: specialImg.imageUrl,
                    title: specialImg.title,
                    recommendedPath: specialImg.recommendedPath,
                    categoryBadge: "TOGETHERNESS",
                    className: "w-full h-72 sm:h-80"
                  })
                : h("video", {
                    src: "./assets/videos/ebdd278b8b6b49c9a250033707052f1d.mp4",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    className: "w-full h-72 sm:h-80 object-cover rounded-sm"
                  })
            )
          )
        )
      )
    );
  }

  window.KuuberaHeroAbout = {
    HeroSection,
    VideoReelsCarouselSection,
    AboutSection,
    SpecialExperienceSection
  };
})();
