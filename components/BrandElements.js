/**
 * ============================================================================
 * KUUBERA PURE VEG — ROYAL BRAND ELEMENTS, WORDMARK & BESPOKE VISUALS
 * ============================================================================
 */

(function () {
  const h = React.createElement;

  // Official KUUBERA Logo Component (Uses the actual uploaded Kuubera Pure Veg logo & K-leaf emblem)
  function KuuberaLogo({ size = "md", variant = "horizontal", onClick, showSubtitle = true }) {
    const sizeClasses = {
      sm: {
        title: "text-xl md:text-2xl tracking-[0.22em]",
        sub: "text-[9px] tracking-[0.32em]",
        emblem: "w-9 h-9",
        stackedImg: "h-14"
      },
      md: {
        title: "text-2xl md:text-3xl tracking-[0.24em]",
        sub: "text-[10px] tracking-[0.34em]",
        emblem: "w-11 h-11",
        stackedImg: "h-20"
      },
      lg: {
        title: "text-3xl md:text-5xl tracking-[0.26em]",
        sub: "text-xs tracking-[0.38em]",
        emblem: "w-14 h-14",
        stackedImg: "h-28"
      }
    }[size] || {
      title: "text-2xl tracking-[0.24em]",
      sub: "text-[10px] tracking-[0.34em]",
      emblem: "w-11 h-11",
      stackedImg: "h-20"
    };

    if (variant === "stacked") {
      return h(
        "button",
        {
          type: "button",
          onClick: onClick,
          className: "group inline-flex flex-col items-center focus:outline-none",
          "aria-label": "KUUBERA PURE VEG — Return to Home"
        },
        h("img", {
          src: "./assets/images/kuubera-logo-cropped.png",
          alt: "KUUBERA PURE VEG Official Logo",
          className: `${sizeClasses.stackedImg} w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-105`
        })
      );
    }

    return h(
      "button",
      {
        type: "button",
        onClick: onClick,
        className: "group inline-flex items-center gap-3 text-left focus:outline-none",
        "aria-label": "KUUBERA PURE VEG — Return to Home"
      },
      // Official K-Leaf Emblem
      h(
        "div",
        {
          className: `${sizeClasses.emblem} relative flex items-center justify-center rounded-sm bg-white/95 border border-[#D4AF37] p-1 shadow-[0_0_18px_rgba(212,175,55,0.28)] transition-transform duration-500 group-hover:scale-105`
        },
        h("img", {
          src: "./assets/images/kuubera-icon-transparent.png",
          alt: "Kuubera Emblem",
          className: "w-full h-full object-contain"
        })
      ),
      // Wordmark Typography matching Official Logo
      h(
        "div",
        { className: "flex flex-col" },
        h(
          "span",
          {
            className: `font-sans font-extrabold uppercase leading-none gold-metallic-text ${sizeClasses.title}`
          },
          "KUUBERA"
        ),
        showSubtitle &&
          h(
            "div",
            { className: "flex items-center gap-1.5 mt-1" },
            h("span", { className: "h-[1px] w-3 bg-[#D4AF37]/70" }),
            h(
              "span",
              {
                className: `font-sans font-bold uppercase text-[#32B44A] ${sizeClasses.sub}`
              },
              "PURE VEG"
            ),
            h("span", { className: "h-[1px] w-3 bg-[#D4AF37]/70" })
          )
      )
    );
  }

  // Ornamental Royal Section Divider
  function GoldOrnamentDivider({ light = false, className = "my-4" }) {
    const lineColor = light ? "from-transparent via-[#D4AF37] to-transparent" : "from-transparent via-[#D4AF37]/80 to-transparent";
    return h(
      "div",
      { className: `flex items-center justify-center gap-3 ${className}`, "aria-hidden": "true" },
      h("div", { className: `h-[1px] w-16 md:w-28 bg-gradient-to-r ${lineColor}` }),
      h(
        "svg",
        { viewBox: "0 0 36 18", className: "w-9 h-4 text-[#D4AF37] shrink-0", fill: "none" },
        h("path", { d: "M18 1L23 9L18 17L13 9L18 1Z", stroke: "currentColor", strokeWidth: "1.5", fill: "rgba(212,175,55,0.25)" }),
        h("circle", { cx: "6", cy: "9", r: "2", fill: "currentColor" }),
        h("circle", { cx: "30", cy: "9", r: "2", fill: "currentColor" })
      ),
      h("div", { className: `h-[1px] w-16 md:w-28 bg-gradient-to-r ${lineColor}` })
    );
  }

  // Indian Standard Pure Vegetarian Symbol (Green Circle in Green Square)
  function VegIndicator({ size = "sm", showLabel = false }) {
    const dim = size === "lg" ? "w-5 h-5" : "w-4 h-4";
    const dot = size === "lg" ? "w-2.5 h-2.5" : "w-2 h-2";
    return h(
      "span",
      {
        className: "inline-flex items-center gap-1.5",
        title: "100% Pure Vegetarian"
      },
      h(
        "span",
        {
          className: `${dim} inline-flex items-center justify-center border border-emerald-600 bg-white/95 rounded-[2px] p-[2px] shrink-0`
        },
        h("span", { className: `${dot} rounded-full bg-emerald-600` })
      ),
      showLabel &&
        h("span", { className: "text-[11px] font-semibold tracking-wider uppercase text-emerald-700" }, "Pure Veg")
    );
  }

  // Verified Jain Friendly Badge
  function JainIndicator({ lightMode = true }) {
    return h(
      "span",
      {
        className: lightMode
          ? "inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider bg-[#10265C]/10 text-[#10265C] border border-[#D4AF37]/60"
          : "inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider bg-[#D4AF37]/15 text-[#E8D7A5] border border-[#D4AF37]/50",
        title: "Jain Preparation Available (No Onion / No Garlic)"
      },
      h(
        "svg",
        { viewBox: "0 0 16 16", className: "w-3 h-3 text-[#D4AF37]", fill: "currentColor" },
        h("path", { d: "M8 1.5C6.5 4.5 4 6.5 4 9.5C4 11.7 5.8 13.5 8 13.5C10.2 13.5 12 11.7 12 9.5C12 6.5 9.5 4.5 8 1.5Z" })
      ),
      "Jain Available"
    );
  }

  // Bespoke Feature Icon Renderer for About Kuubera (6 Royal Pillars)
  function FeatureGoldIcon({ type }) {
    const iconPaths = {
      leaf: [
        h("path", { key: 1, d: "M12 3C7 3 4 7.5 4 12.5C4 16.5 7 19.5 12 21C17 19.5 20 16.5 20 12.5C20 7.5 17 3 12 3Z", stroke: "#D4AF37", strokeWidth: "1.6" }),
        h("path", { key: 2, d: "M12 7V18M12 12L15.5 9.5M12 14.5L8.5 12", stroke: "#D4AF37", strokeWidth: "1.5", strokeLinecap: "round" })
      ],
      cloche: [
        h("path", { key: 1, d: "M4 17H20M6 17C6 12.5 8.7 9 12 9C15.3 9 18 12.5 18 17", stroke: "#D4AF37", strokeWidth: "1.6", strokeLinecap: "round" }),
        h("circle", { key: 2, cx: "12", cy: "7", r: "1.5", stroke: "#D4AF37", strokeWidth: "1.5" }),
        h("path", { key: 3, d: "M3 20H21", stroke: "#D4AF37", strokeWidth: "1.6", strokeLinecap: "round" })
      ],
      family: [
        h("circle", { key: 1, cx: "8", cy: "8", r: "2.5", stroke: "#D4AF37", strokeWidth: "1.6" }),
        h("circle", { key: 2, cx: "16", cy: "8", r: "2.5", stroke: "#D4AF37", strokeWidth: "1.6" }),
        h("circle", { key: 3, cx: "12", cy: "11", r: "2", stroke: "#D4AF37", strokeWidth: "1.5" }),
        h("path", { key: 4, d: "M4 19C4 16.5 5.8 15 8 15M20 19C20 16.5 18.2 15 16 15M8.5 19C8.5 17 10 15.5 12 15.5C14 15.5 15.5 17 15.5 19", stroke: "#D4AF37", strokeWidth: "1.6", strokeLinecap: "round" })
      ],
      flame: [
        h("path", { key: 1, d: "M12 3C10 6.5 7 9 7 13.5C7 16.8 9.2 19.5 12 19.5C14.8 19.5 17 16.8 17 13.5C17 10.5 15 8 13.5 6C13.5 8.5 12 9.5 11 11", stroke: "#D4AF37", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
        h("path", { key: 2, d: "M6 21H18", stroke: "#D4AF37", strokeWidth: "1.5", strokeLinecap: "round" })
      ],
      palace: [
        h("path", { key: 1, d: "M4 20H20M6 20V11L12 5L18 11V20", stroke: "#D4AF37", strokeWidth: "1.6", strokeLinejoin: "round" }),
        h("path", { key: 2, d: "M10 20V14C10 12.9 10.9 12 12 12C13.1 12 14 12.9 14 14V20", stroke: "#D4AF37", strokeWidth: "1.5" })
      ],
      heartHands: [
        h("path", { key: 1, d: "M12 6.5C10.8 5 8.5 4.8 7.2 6.2C5.9 7.6 6.1 9.8 7.5 11.2L12 15.5L16.5 11.2C17.9 9.8 18.1 7.6 16.8 6.2C15.5 4.8 13.2 5 12 6.5Z", stroke: "#D4AF37", strokeWidth: "1.6", strokeLinejoin: "round" }),
        h("path", { key: 2, d: "M4 18.5C6.5 20 9.2 20.5 12 20.5C14.8 20.5 17.5 20 20 18.5", stroke: "#D4AF37", strokeWidth: "1.5", strokeLinecap: "round" })
      ]
    };

    return h(
      "div",
      {
        className: "w-12 h-12 rounded-sm bg-[#10265C] border border-[#D4AF37]/60 flex items-center justify-center shrink-0 shadow-md"
      },
      h(
        "svg",
        { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6" },
        iconPaths[type] || iconPaths.leaf
      )
    );
  }

  // Bespoke Culinary & Architectural Visual Frame (Honest Owner-Replaceable Image Slot)
  // Renders the owner's actual photograph when `imageUrl` is populated, OR renders an
  // ultra-luxury royal Indian hospitality visual frame with clear owner replacement instructions.
  function KuuberaPhotoSlot({
    imageUrl,
    title,
    subtitle,
    recommendedPath,
    categoryBadge,
    theme = "royal-dining",
    className = "w-full h-64",
    imgClassName = "w-full h-full object-cover",
    showOwnerBadge = true
  }) {
    const [imgError, setImgError] = React.useState(false);
    const hasValidImage = Boolean(imageUrl && imageUrl.trim() !== "" && !imgError);

    if (hasValidImage) {
      return h(
        "div",
        { className: `relative overflow-hidden bg-[#091735] ${className}` },
        h("img", {
          src: imageUrl,
          alt: title || "Kuubera Pure Veg",
          loading: "lazy",
          onError: () => setImgError(true),
          className: `transition-transform duration-700 group-hover:scale-105 ${imgClassName}`
        }),
        categoryBadge &&
          h(
            "span",
            {
              className:
                "absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest bg-[#091735]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-sm"
            },
            categoryBadge
          )
      );
    }

    // Royal Architectural / Culinary Placeholder Canvas (Never uses fake stock restaurant photos)
    return h(
      "div",
      {
        className: `relative overflow-hidden bg-gradient-to-br from-[#10265C] via-[#091735] to-[#061026] flex flex-col justify-between p-5 border border-[#D4AF37]/30 ${className}`
      },
      // Subtle ornamental background mandala/arch SVG
      h(
        "svg",
        {
          viewBox: "0 0 400 300",
          fill: "none",
          className: "absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-105",
          preserveAspectRatio: "xMidYMid slice"
        },
        // Royal Palace Archway Motif
        h("path", {
          d: "M60 290 V130 C60 80 130 55 200 25 C270 55 340 80 340 130 V290",
          stroke: "#D4AF37",
          strokeWidth: "1.5"
        }),
        h("path", {
          d: "M80 290 V140 C80 95 140 72 200 45 C260 72 320 95 320 140 V290",
          stroke: "#E8D7A5",
          strokeWidth: "0.8",
          strokeDasharray: "4 4"
        }),
        h("circle", { cx: "200", cy: "155", r: "58", stroke: "#D4AF37", strokeWidth: "1.2" }),
        h("circle", { cx: "200", cy: "155", r: "42", stroke: "#D4AF37", strokeWidth: "0.8", strokeDasharray: "3 3" }),
        // Culinary Cloche / Thali / Lotus centerpiece
        h("path", {
          d: "M160 175 H240 M170 175 C170 152 183 138 200 138 C217 138 230 152 230 175",
          stroke: "#D4AF37",
          strokeWidth: "1.8"
        }),
        h("circle", { cx: "200", cy: "133", r: "4", fill: "#D4AF37" })
      ),

      // Top row: Category & Authentic Photo Slot Badge
      h(
        "div",
        { className: "relative z-10 flex items-center justify-between gap-2 flex-wrap" },
        categoryBadge
          ? h(
              "span",
              {
                className:
                  "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest bg-[#091735]/90 text-[#D4AF37] border border-[#D4AF37]/40"
              },
              categoryBadge
            )
          : h("span"),
        showOwnerBadge &&
          h(
            "span",
            {
              className:
                "px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-[#8B1726]/90 text-[#FFF9EF] border border-[#D4AF37]/40 rounded-sm"
            },
            "Original @_kuubera_ Photo Slot"
          )
      ),

      // Center Emblem & Title
      h(
        "div",
        { className: "relative z-10 my-auto text-center px-2 py-3" },
        h(
          "div",
          {
            className:
              "w-10 h-10 mx-auto mb-2.5 rounded-full border border-[#D4AF37]/60 bg-[#091735]/80 flex items-center justify-center text-[#D4AF37]"
          },
          h(
            "svg",
            { viewBox: "0 0 24 24", fill: "none", className: "w-5 h-5", stroke: "currentColor", strokeWidth: "1.6" },
            h("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
            h("circle", { cx: "8.5", cy: "10.5", r: "1.5" }),
            h("path", { d: "M21 15L16 10L5 19" })
          )
        ),
        h(
          "h4",
          { className: "font-serif text-base md:text-lg font-semibold text-[#FFF9EF] tracking-wide leading-snug" },
          title
        ),
        subtitle &&
          h(
            "p",
            { className: "mt-1 text-xs text-[#E8D7A5]/85 line-clamp-2 max-w-md mx-auto" },
            subtitle
          )
      ),

      // Bottom row: Owner replacement file path guide
      showOwnerBadge
        ? h(
            "div",
            {
              className:
                "relative z-10 pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] text-[#E8D7A5]/75 font-mono"
            },
            h("span", { className: "truncate" }, recommendedPath || "Replace in Admin / data file"),
            h("span", { className: "text-[#D4AF37] shrink-0 ml-2" }, "WebP / JPG")
          )
        : h("div")
    );
  }

  window.KuuberaBrand = {
    KuuberaLogo,
    GoldOrnamentDivider,
    VegIndicator,
    JainIndicator,
    FeatureGoldIcon,
    KuuberaPhotoSlot
  };
})();
