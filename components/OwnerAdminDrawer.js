/**
 * ============================================================================
 * KUUBERA PURE VEG — OWNER ADMIN STUDIO (VISUAL CONTENT MANAGEMENT SYSTEM)
 * ============================================================================
 * Allows the restaurant owner to visually:
 * 1. Change menu prices, add new dishes, remove dishes, or update dish photos
 * 2. Update Signature Dish prices & photos
 * 3. Add or replace Instagram gallery photographs
 * 4. Update opening hours, phone numbers, and top announcement banner
 * 5. Export updated `data/*.js` files for permanent deployment or reset to default
 * ============================================================================
 */

(function () {
  const h = React.createElement;

  function OwnerAdminDrawer({
    isOpen,
    onClose,
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
    onResetToDefaults
  }) {
    const [activeTab, setActiveTab] = React.useState("menu"); // "menu" | "gallery" | "settings" | "guide"
    const [newDish, setNewDish] = React.useState({
      name: "",
      category: categories[0] || "South Indian",
      price: "",
      description: "",
      isJain: false,
      isPopular: false,
      image: ""
    });
    const [newGallery, setNewGallery] = React.useState({
      title: "",
      category: "Restaurant Interiors",
      caption: "",
      imageUrl: ""
    });

    if (!isOpen) return null;

    // Export current state as a downloadable JS file for `/data/`
    const downloadDataFile = (filename, contentString) => {
      const blob = new Blob([contentString], { type: "application/javascript;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    const handleExportMenuJs = () => {
      const jsContent =
        `// Exported from Kuubera Owner Admin Studio\n` +
        `window.KUUBERA_MENU_CATEGORIES = ${JSON.stringify(categories, null, 2)};\n\n` +
        `window.KUUBERA_SIGNATURE_DISHES = ${JSON.stringify(signatureDishes, null, 2)};\n\n` +
        `window.KUUBERA_MENU_ITEMS = ${JSON.stringify(menuItems, null, 2)};\n`;
      downloadDataFile("menuData.js", jsContent);
    };

    const handleExportConfigJs = () => {
      const jsContent =
        `// Exported from Kuubera Owner Admin Studio\n` +
        `window.KUUBERA_CONFIG = ${JSON.stringify(config, null, 2)};\n`;
      downloadDataFile("restaurantConfig.js", jsContent);
    };

    const handleExportGalleryJs = () => {
      const jsContent =
        `// Exported from Kuubera Owner Admin Studio\n` +
        `window.KUUBERA_GALLERY_CATEGORIES = ${JSON.stringify(galleryCategories, null, 2)};\n\n` +
        `window.KUUBERA_GALLERY_ITEMS = ${JSON.stringify(galleryItems, null, 2)};\n`;
      downloadDataFile("galleryData.js", jsContent);
    };

    const handleAddDish = (e) => {
      e.preventDefault();
      if (!newDish.name.trim()) return;
      const item = {
        id: "custom-" + Date.now(),
        name: newDish.name.trim(),
        category: newDish.category,
        cuisineGroup: newDish.category,
        price: newDish.price !== "" ? Number(newDish.price) : null,
        isVeg: true,
        isJain: Boolean(newDish.isJain),
        isPopular: Boolean(newDish.isPopular),
        description: newDish.description.trim(),
        image: newDish.image.trim(),
        recommendedImagePath: "assets/images/menu/custom-dish.webp"
      };
      setMenuItems([item, ...menuItems]);
      setNewDish({
        name: "",
        category: categories[0] || "South Indian",
        price: "",
        description: "",
        isJain: false,
        isPopular: false,
        image: ""
      });
    };

    const handleUpdateDishPrice = (id, newPriceStr) => {
      const parsed = newPriceStr === "" ? null : Number(newPriceStr);
      setMenuItems(
        menuItems.map((item) => (item.id === id ? { ...item, price: parsed } : item))
      );
    };

    const handleUpdateDishPhoto = (id, newUrl) => {
      setMenuItems(
        menuItems.map((item) => (item.id === id ? { ...item, image: newUrl } : item))
      );
    };

    const handleDeleteDish = (id) => {
      setMenuItems(menuItems.filter((item) => item.id !== id));
    };

    const handleAddGalleryPhoto = (e) => {
      e.preventDefault();
      if (!newGallery.title.trim()) return;
      const item = {
        id: "gal-" + Date.now(),
        title: newGallery.title.trim(),
        category: newGallery.category,
        caption: newGallery.caption.trim() || "Kuubera Pure Veg, Varve Budruk, Pune",
        instagramRef: "@_kuubera_",
        gridSpan: "col-span-12 md:col-span-4 row-span-1",
        aspectClass: "min-h-[250px]",
        imageUrl: newGallery.imageUrl.trim(),
        recommendedPath: "assets/images/gallery/custom-photo.webp"
      };
      setGalleryItems([item, ...galleryItems]);
      setNewGallery({
        title: "",
        category: "Restaurant Interiors",
        caption: "",
        imageUrl: ""
      });
    };

    return h(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Kuubera Owner Admin Studio",
        onClick: onClose,
        className:
          "fixed inset-0 z-50 bg-[#091735]/90 backdrop-blur-md flex justify-end animate-fadeIn"
      },
      h(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          className:
            "w-full max-w-3xl bg-[#091735] text-[#FFF9EF] border-l-2 border-[#D4AF37] h-full flex flex-col shadow-2xl overflow-hidden"
        },
        // Top Header
        h(
          "div",
          {
            className:
              "px-6 py-4 bg-[#10265C] border-b border-[#D4AF37]/50 flex items-center justify-between gap-4"
          },
          h(
            "div",
            null,
            h(
              "span",
              { className: "text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]" },
              "ADMINISTRATIVE CONTENT MANAGER"
            ),
            h(
              "h2",
              { className: "font-serif text-2xl font-bold text-[#FFF9EF]" },
              "Kuubera Owner Admin Studio"
            )
          ),
          h(
            "div",
            { className: "flex items-center gap-2" },
            h(
              "button",
              {
                type: "button",
                onClick: onResetToDefaults,
                className:
                  "px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider bg-[#091735] text-[#E8D7A5] border border-[#D4AF37]/40 rounded-sm hover:border-[#D4AF37]"
              },
              "Reset Defaults"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: onClose,
                className:
                  "px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm"
              },
              "Close ✕"
            )
          )
        ),

        // Navigation Tabs
        h(
          "div",
          {
            className:
              "px-6 py-3 bg-[#091735] border-b border-[#D4AF37]/30 flex items-center gap-2 overflow-x-auto"
          },
          [
            { id: "menu", label: "1. Menu & Prices" },
            { id: "gallery", label: "2. Gallery & Brand Photos" },
            { id: "settings", label: "3. Hours & Announcements" },
            { id: "guide", label: "4. Owner Replacement Checklist" }
          ].map((t) =>
            h(
              "button",
              {
                key: t.id,
                type: "button",
                onClick: () => setActiveTab(t.id),
                className: `px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shrink-0 ${
                  activeTab === t.id
                    ? "bg-[#D4AF37] text-[#091735]"
                    : "bg-[#10265C] text-[#E8D7A5] border border-[#D4AF37]/30 hover:border-[#D4AF37]"
                }`
              },
              t.label
            )
          )
        ),

        // Scrollable Content Area
        h(
          "div",
          { className: "p-6 overflow-y-auto flex-1 space-y-8" },

          // TAB 1: MENU & PRICES EDITOR
          activeTab === "menu" &&
            h(
              "div",
              { className: "space-y-8" },
              // Add New Dish Box
              h(
                "form",
                {
                  onSubmit: handleAddDish,
                  className: "p-5 bg-[#10265C] border border-[#D4AF37]/50 rounded-sm space-y-4"
                },
                h(
                  "div",
                  { className: "flex items-center justify-between" },
                  h("h3", { className: "font-serif text-lg font-bold text-[#D4AF37]" }, "Add a New Dish to Menu"),
                  h(
                    "button",
                    {
                      type: "button",
                      onClick: handleExportMenuJs,
                      className:
                        "px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#091735] rounded-sm hover:bg-[#E8D7A5]"
                    },
                    "Download Updated menuData.js"
                  )
                ),
                h(
                  "div",
                  { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" },
                  h("input", {
                    type: "text",
                    required: true,
                    placeholder: "Dish Name (e.g. Cheese Masala Dosa)",
                    value: newDish.name,
                    onChange: (e) => setNewDish({ ...newDish, name: e.target.value }),
                    className:
                      "px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                  }),
                  h(
                    "select",
                    {
                      value: newDish.category,
                      onChange: (e) => setNewDish({ ...newDish, category: e.target.value }),
                      className:
                        "px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                    },
                    categories.map((c) => h("option", { key: c, value: c }, c))
                  ),
                  h("input", {
                    type: "number",
                    placeholder: "Price in INR (leave blank if unpublished)",
                    value: newDish.price,
                    onChange: (e) => setNewDish({ ...newDish, price: e.target.value }),
                    className:
                      "px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                  })
                ),
                h(
                  "div",
                  { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                  h("input", {
                    type: "text",
                    placeholder: "Short Description",
                    value: newDish.description,
                    onChange: (e) => setNewDish({ ...newDish, description: e.target.value }),
                    className:
                      "px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                  }),
                  h("input", {
                    type: "text",
                    placeholder: "Photo Path / URL (e.g. assets/images/menu/dosa.webp)",
                    value: newDish.image,
                    onChange: (e) => setNewDish({ ...newDish, image: e.target.value }),
                    className:
                      "px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                  })
                ),
                h(
                  "div",
                  { className: "flex items-center justify-between gap-4 flex-wrap" },
                  h(
                    "div",
                    { className: "flex items-center gap-4 text-xs text-[#E8D7A5]" },
                    h(
                      "label",
                      { className: "inline-flex items-center gap-1.5 cursor-pointer" },
                      h("input", {
                        type: "checkbox",
                        checked: newDish.isJain,
                        onChange: (e) => setNewDish({ ...newDish, isJain: e.target.checked })
                      }),
                      "Jain Available"
                    ),
                    h(
                      "label",
                      { className: "inline-flex items-center gap-1.5 cursor-pointer" },
                      h("input", {
                        type: "checkbox",
                        checked: newDish.isPopular,
                        onChange: (e) => setNewDish({ ...newDish, isPopular: e.target.checked })
                      }),
                      "Mark as Popular"
                    )
                  ),
                  h(
                    "button",
                    {
                      type: "submit",
                      className:
                        "px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm"
                    },
                    "+ Add Dish to Menu"
                  )
                )
              ),

              // Signature Dishes Price & Photo Editor
              h(
                "div",
                { className: "space-y-3" },
                h("h3", { className: "font-serif text-lg font-bold text-[#D4AF37]" }, "Signature Dishes (Favourites Carousel)"),
                h(
                  "div",
                  { className: "space-y-2.5" },
                  signatureDishes.map((sig) =>
                    h(
                      "div",
                      {
                        key: sig.id,
                        className:
                          "p-3 bg-[#10265C]/70 border border-[#D4AF37]/30 rounded-sm grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center text-xs"
                      },
                      h("div", { className: "sm:col-span-4 font-bold text-[#FFF9EF]" }, sig.name),
                      h(
                        "div",
                        { className: "sm:col-span-3" },
                        h("input", {
                          type: "number",
                          placeholder: "INR Price (e.g. 140)",
                          value: sig.price === null ? "" : sig.price,
                          onChange: (e) => {
                            const val = e.target.value === "" ? null : Number(e.target.value);
                            setSignatureDishes(
                              signatureDishes.map((s) => (s.id === sig.id ? { ...s, price: val } : s))
                            );
                          },
                          className:
                            "w-full px-2.5 py-1.5 bg-[#091735] text-[#D4AF37] border border-[#D4AF37]/40 rounded-sm"
                        })
                      ),
                      h(
                        "div",
                        { className: "sm:col-span-5" },
                        h("input", {
                          type: "text",
                          placeholder: "Photo URL / Path (assets/images/menu/...)",
                          value: sig.image || "",
                          onChange: (e) => {
                            setSignatureDishes(
                              signatureDishes.map((s) =>
                                s.id === sig.id ? { ...s, image: e.target.value } : s
                              )
                            );
                          },
                          className:
                            "w-full px-2.5 py-1.5 bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/40 rounded-sm"
                        })
                      )
                    )
                  )
                )
              ),

              // All Menu Items List
              h(
                "div",
                { className: "space-y-3" },
                h(
                  "h3",
                  { className: "font-serif text-lg font-bold text-[#D4AF37]" },
                  `Edit Existing Menu Items (${menuItems.length} Dishes)`
                ),
                h(
                  "div",
                  { className: "space-y-2" },
                  menuItems.map((item) =>
                    h(
                      "div",
                      {
                        key: item.id,
                        className:
                          "p-3 bg-[#10265C]/60 border border-[#D4AF37]/25 rounded-sm grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center text-xs"
                      },
                      h(
                        "div",
                        { className: "sm:col-span-4" },
                        h("p", { className: "font-bold text-[#FFF9EF]" }, item.name),
                        h("p", { className: "text-[10px] text-[#E8D7A5]/70" }, item.category)
                      ),
                      h(
                        "div",
                        { className: "sm:col-span-3" },
                        h("input", {
                          type: "number",
                          placeholder: "Price INR (blank = counter)",
                          value: item.price === null ? "" : item.price,
                          onChange: (e) => handleUpdateDishPrice(item.id, e.target.value),
                          className:
                            "w-full px-2.5 py-1.5 bg-[#091735] text-[#D4AF37] border border-[#D4AF37]/40 rounded-sm"
                        })
                      ),
                      h(
                        "div",
                        { className: "sm:col-span-4" },
                        h("input", {
                          type: "text",
                          placeholder: "Photo Path / URL",
                          value: item.image || "",
                          onChange: (e) => handleUpdateDishPhoto(item.id, e.target.value),
                          className:
                            "w-full px-2.5 py-1.5 bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/40 rounded-sm"
                        })
                      ),
                      h(
                        "div",
                        { className: "sm:col-span-1 text-right" },
                        h(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleDeleteDish(item.id),
                            title: "Remove Dish",
                            className:
                              "px-2 py-1 text-xs bg-[#8B1726] text-[#FFF9EF] rounded-sm hover:bg-red-700"
                          },
                          "✕"
                        )
                      )
                    )
                  )
                )
              )
            ),

          // TAB 2: GALLERY & BRAND PHOTOGRAPHS
          activeTab === "gallery" &&
            h(
              "div",
              { className: "space-y-8" },
              // Primary Brand Photos (Hero, About, Special Experience)
              h(
                "div",
                { className: "p-5 bg-[#10265C] border border-[#D4AF37]/50 rounded-sm space-y-4" },
                h(
                  "div",
                  { className: "flex items-center justify-between" },
                  h("h3", { className: "font-serif text-lg font-bold text-[#D4AF37]" }, "Primary Website Section Photos"),
                  h(
                    "button",
                    {
                      type: "button",
                      onClick: handleExportConfigJs,
                      className:
                        "px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#091735] rounded-sm"
                    },
                    "Download restaurantConfig.js"
                  )
                ),
                ["heroBackground", "aboutSectionPhoto", "specialExperiencePhoto"].map((key) => {
                  const slot = config.brandImages[key] || {};
                  return h(
                    "div",
                    { key: key, className: "space-y-1" },
                    h(
                      "label",
                      { className: "block text-xs font-semibold text-[#E8D7A5]" },
                      `${slot.title || key} (Recommended: ${slot.recommendedPath})`
                    ),
                    h("input", {
                      type: "text",
                      placeholder: "Enter photo path or URL (e.g. assets/images/kuubera-hero-interior.webp)",
                      value: slot.imageUrl || "",
                      onChange: (e) =>
                        setConfig({
                          ...config,
                          brandImages: {
                            ...config.brandImages,
                            [key]: { ...slot, imageUrl: e.target.value, isOwnerPhotoUploaded: Boolean(e.target.value) }
                          }
                        }),
                      className:
                        "w-full px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                    })
                  );
                })
              ),

              // Add New Instagram Gallery Photo
              h(
                "form",
                {
                  onSubmit: handleAddGalleryPhoto,
                  className: "p-5 bg-[#10265C] border border-[#D4AF37]/50 rounded-sm space-y-4"
                },
                h(
                  "div",
                  { className: "flex items-center justify-between" },
                  h("h3", { className: "font-serif text-lg font-bold text-[#D4AF37]" }, "Add New Photograph to @_kuubera_ Gallery"),
                  h(
                    "button",
                    {
                      type: "button",
                      onClick: handleExportGalleryJs,
                      className:
                        "px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#091735] rounded-sm"
                    },
                    "Download galleryData.js"
                  )
                ),
                h(
                  "div",
                  { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                  h("input", {
                    type: "text",
                    required: true,
                    placeholder: "Photo Title (e.g. Evening Family Dining)",
                    value: newGallery.title,
                    onChange: (e) => setNewGallery({ ...newGallery, title: e.target.value }),
                    className:
                      "px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                  }),
                  h(
                    "select",
                    {
                      value: newGallery.category,
                      onChange: (e) => setNewGallery({ ...newGallery, category: e.target.value }),
                      className:
                        "px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                    },
                    galleryCategories
                      .filter((c) => c !== "All")
                      .map((c) => h("option", { key: c, value: c }, c))
                  )
                ),
                h("input", {
                  type: "text",
                  placeholder: "Image Path or URL (e.g. assets/images/gallery/my-photo.webp)",
                  value: newGallery.imageUrl,
                  onChange: (e) => setNewGallery({ ...newGallery, imageUrl: e.target.value }),
                  className:
                    "w-full px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                }),
                h("input", {
                  type: "text",
                  placeholder: "Short Caption",
                  value: newGallery.caption,
                  onChange: (e) => setNewGallery({ ...newGallery, caption: e.target.value }),
                  className:
                    "w-full px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                }),
                h(
                  "button",
                  {
                    type: "submit",
                    className:
                      "px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm"
                  },
                  "+ Add Gallery Photograph"
                )
              ),

              // Existing Gallery Slots
              h(
                "div",
                { className: "space-y-2.5" },
                h("h3", { className: "font-serif text-lg font-bold text-[#D4AF37]" }, "Replace Existing Gallery Photo Slots"),
                galleryItems.map((g) =>
                  h(
                    "div",
                    {
                      key: g.id,
                      className:
                        "p-3 bg-[#10265C]/60 border border-[#D4AF37]/30 rounded-sm grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center text-xs"
                    },
                    h(
                      "div",
                      { className: "sm:col-span-5" },
                      h("p", { className: "font-bold text-[#FFF9EF]" }, g.title),
                      h("p", { className: "text-[10px] text-[#E8D7A5]/70" }, g.recommendedPath)
                    ),
                    h(
                      "div",
                      { className: "sm:col-span-6" },
                      h("input", {
                        type: "text",
                        placeholder: "Paste photo path/URL here...",
                        value: g.imageUrl || "",
                        onChange: (e) =>
                          setGalleryItems(
                            galleryItems.map((item) =>
                              item.id === g.id ? { ...item, imageUrl: e.target.value } : item
                            )
                          ),
                        className:
                          "w-full px-2.5 py-1.5 bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/40 rounded-sm"
                      })
                    ),
                    h(
                      "div",
                      { className: "sm:col-span-1 text-right" },
                      h(
                        "button",
                        {
                          type: "button",
                          onClick: () =>
                            setGalleryItems(galleryItems.filter((item) => item.id !== g.id)),
                          className: "px-2 py-1 bg-[#8B1726] text-[#FFF9EF] rounded-sm"
                        },
                        "✕"
                      )
                    )
                  )
                )
              )
            ),

          // TAB 3: OPENING HOURS & ANNOUNCEMENTS
          activeTab === "settings" &&
            h(
              "div",
              { className: "p-5 bg-[#10265C] border border-[#D4AF37]/50 rounded-sm space-y-5" },
              h(
                "div",
                { className: "flex items-center justify-between" },
                h("h3", { className: "font-serif text-lg font-bold text-[#D4AF37]" }, "Opening Hours & Restaurant Announcements"),
                h(
                  "button",
                  {
                    type: "button",
                    onClick: handleExportConfigJs,
                    className:
                      "px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#091735] rounded-sm"
                  },
                  "Download restaurantConfig.js"
                )
              ),
              h(
                "div",
                { className: "space-y-1.5" },
                h("label", { className: "block text-xs font-semibold text-[#E8D7A5]" }, "Opening Hours Text"),
                h("input", {
                  type: "text",
                  value: config.contact.openingHours,
                  onChange: (e) =>
                    setConfig({
                      ...config,
                      contact: { ...config.contact, openingHours: e.target.value }
                    }),
                  className:
                    "w-full px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                })
              ),
              h(
                "div",
                { className: "space-y-1.5" },
                h("label", { className: "block text-xs font-semibold text-[#E8D7A5]" }, "Phone Number (Display)"),
                h("input", {
                  type: "text",
                  value: config.contact.phoneDisplay,
                  onChange: (e) =>
                    setConfig({
                      ...config,
                      contact: { ...config.contact, phoneDisplay: e.target.value }
                    }),
                  className:
                    "w-full px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                })
              ),
              h(
                "div",
                { className: "space-y-2 pt-2 border-t border-[#D4AF37]/30" },
                h(
                  "label",
                  { className: "inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] cursor-pointer" },
                  h("input", {
                    type: "checkbox",
                    checked: config.announcement.enabled,
                    onChange: (e) =>
                      setConfig({
                        ...config,
                        announcement: { ...config.announcement, enabled: e.target.checked }
                      })
                  }),
                  "Show Top Announcement Banner"
                ),
                h("input", {
                  type: "text",
                  value: config.announcement.text,
                  onChange: (e) =>
                    setConfig({
                      ...config,
                      announcement: { ...config.announcement, text: e.target.value }
                    }),
                  className:
                    "w-full px-3 py-2 text-xs bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                })
              )
            ),

          // TAB 4: OWNER CONTENT REPLACEMENT CHECKLIST
          activeTab === "guide" &&
            h(
              "div",
              { className: "p-6 bg-[#10265C] border border-[#D4AF37]/50 rounded-sm space-y-4 text-xs leading-relaxed" },
              h(
                "h3",
                { className: "font-serif text-xl font-bold text-[#D4AF37]" },
                "Verified Information vs. Owner-Provided Content Guide"
              ),
              h(
                "p",
                { className: "text-[#E8D7A5]" },
                "In strict adherence to hospitality branding integrity, no fake photographs, invented menu prices, or fabricated reviews have been used. Below is the summary of verified data populated vs. slots ready for your original files:"
              ),
              h(
                "div",
                { className: "space-y-3 pt-2" },
                h(
                  "div",
                  { className: "p-3 bg-[#091735] border-l-2 border-emerald-400" },
                  h("p", { className: "font-bold text-emerald-300" }, "✓ Verified & Populated Automatically:"),
                  h(
                    "ul",
                    { className: "list-disc list-inside text-[#FFF9EF]/90 mt-1 space-y-1" },
                    h("li", null, "Address: Gat No. 91, Tal. Bhor, Varve Budruk, Maharashtra – 412205"),
                    h("li", null, "Phone & WhatsApp: +91 90281 67333 | Hours: Daily 7:00 AM – 11:00 PM"),
                    h("li", null, "Instagram Link: @_kuubera_ (https://www.instagram.com/_kuubera_/)"),
                    h("li", null, "Public Rating Summary: 4.6 ★ (1,300+ ratings across directories) & ₹350–₹400 avg cost for two"),
                    h("li", null, "Verbatim Guest Reviews: Ashwin Vadodaria, Prashant Dhone, Dipesh Gala, and Bhautik"),
                    h("li", null, "Verified Dish Offerings across all 14 categories (Masala Dosa, Mysore Masala Dosa, Misal Pav, Jain Pav Bhaji, Paneer Tikka, Chole Bhature, Paneer Butter Masala, Dal Makhani, Watermelon Blossom, etc.)")
                  )
                ),
                h(
                  "div",
                  { className: "p-3 bg-[#091735] border-l-2 border-[#D4AF37]" },
                  h("p", { className: "font-bold text-[#D4AF37]" }, "★ Ready for Owner Upload (Clearly Marked Placeholders):"),
                  h(
                    "ul",
                    { className: "list-disc list-inside text-[#FFF9EF]/90 mt-1 space-y-1" },
                    h("li", null, "Individual Item Prices: Currently set to `null` ('Price at Restaurant / Ask at Counter') in `data/menuData.js` so no prices are guessed. Enter exact INR numbers in Tab 1 or `data/menuData.js`."),
                    h("li", null, "Original Restaurant & Food Photographs: Drop your original `@_kuubera_` WebP/JPG photos into `assets/images/` and link them in Tab 2 or `data/galleryData.js`."),
                    h("li", null, "Official Print Menu PDF: Place your PDF at `assets/menu/kuubera-full-menu.pdf` and update `menuPdfUrl` in `data/restaurantConfig.js`.")
                  )
                )
              )
            )
        )
      )
    );
  }

  window.KuuberaAdmin = {
    OwnerAdminDrawer
  };
})();
