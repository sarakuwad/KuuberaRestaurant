/**
 * ============================================================================
 * KUUBERA PURE VEG — LOCATION & CONTACT, RESERVATION MODAL & PRINTABLE MENU
 * ============================================================================
 */

(function () {
  const h = React.createElement;
  const { GoldOrnamentDivider, KuuberaLogo } = window.KuuberaBrand;
  const { formatDishPrice } = window.KuuberaMenu;

  // Helper to build WhatsApp URL to +91 90281 67333
  function buildWhatsAppUrl(whatsappNumber, messageText) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
  }

  // 9. LOCATION & CONTACT SECTION ("WE LOOK FORWARD TO WELCOMING YOU")
  function ContactLocationSection({ config }) {
    const [activeFormTab, setActiveFormTab] = React.useState("reservation"); // "reservation" | "enquiry"

    // Table Reservation Enquiry State
    const [resForm, setResForm] = React.useState({
      name: "",
      phone: "",
      date: "",
      time: "08:00 PM",
      guests: "4 Guests",
      dietary: "Pure Vegetarian (Standard)",
      notes: ""
    });

    // General Contact Enquiry State
    const [enqForm, setEnqForm] = React.useState({
      name: "",
      phone: "",
      subject: "Family Dining / Group Enquiry",
      message: ""
    });

    const handleReservationSubmit = (e) => {
      e.preventDefault();
      const lines = [
        "*TABLE RESERVATION ENQUIRY — KUUBERA PURE VEG*",
        "----------------------------------------",
        `*Guest Name:* ${resForm.name || "Guest"}`,
        `*Phone Number:* ${resForm.phone || "Not provided"}`,
        `*Preferred Date:* ${resForm.date || "Today"}`,
        `*Preferred Time:* ${resForm.time}`,
        `*Party Size:* ${resForm.guests}`,
        `*Dietary Preference:* ${resForm.dietary}`,
        resForm.notes ? `*Special Notes:* ${resForm.notes}` : "",
        "----------------------------------------",
        "Please let us know table availability at Kuubera Pure Veg, Varve Budruk."
      ]
        .filter(Boolean)
        .join("\n");

      window.open(buildWhatsAppUrl(config.contact.whatsappNumber, lines), "_blank", "noopener,noreferrer");
    };

    const handleEnquirySubmit = (e) => {
      e.preventDefault();
      const lines = [
        "*GENERAL ENQUIRY — KUUBERA PURE VEG*",
        "----------------------------------------",
        `*Name:* ${enqForm.name || "Guest"}`,
        `*Phone:* ${enqForm.phone || "Not provided"}`,
        `*Topic:* ${enqForm.subject}`,
        `*Message:* ${enqForm.message}`,
        "----------------------------------------"
      ].join("\n");

      window.open(buildWhatsAppUrl(config.contact.whatsappNumber, lines), "_blank", "noopener,noreferrer");
    };

    return h(
      "section",
      {
        id: "contact-section",
        className:
          "bg-[#10265C] text-[#FFF9EF] py-20 md:py-28 border-t border-[#D4AF37]/40 relative overflow-hidden"
      },
      h(
        "div",
        { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        // Section Header
        h(
          "div",
          { className: "text-center max-w-3xl mx-auto mb-14" },
          h(
            "span",
            {
              className:
                "inline-block px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] bg-[#091735] text-[#D4AF37] border border-[#D4AF37]/60 rounded-sm mb-3"
            },
            "VISIT KUUBERA PURE VEG"
          ),
          h(
            "h2",
            {
              className:
                "font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide gold-metallic-text"
            },
            "WE LOOK FORWARD TO WELCOMING YOU"
          ),
          h(GoldOrnamentDivider, { className: "my-4" }),
          h(
            "p",
            { className: "text-sm sm:text-base text-[#E8D7A5]/90 leading-relaxed" },
            "Conveniently located along the Pune–Satara Highway at Varve Budruk, near Khed Shivapur. Stop by for a refreshing breakfast, relaxed family lunch, or royal vegetarian dinner."
          )
        ),

        // Main 2-Column Grid: Left (Verified Details + Map) | Right (Enquiry & Table Reservation Forms)
        h(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start" },
          // Left Column: Business Card & Google Maps Embed (6 cols)
          h(
            "div",
            { className: "lg:col-span-6 space-y-6" },
            // Verified Business Details Card
            h(
              "div",
              {
                className:
                  "bg-[#091735] border-2 border-[#D4AF37] rounded-sm p-6 sm:p-8 shadow-2xl space-y-6"
              },
              h(
                "div",
                { className: "border-b border-[#D4AF37]/30 pb-4 flex items-center justify-between gap-4 flex-wrap" },
                h(
                  "div",
                  null,
                  h(
                    "h3",
                    { className: "font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] tracking-wider" },
                    config.fullName
                  ),
                  h(
                    "p",
                    { className: "text-xs uppercase tracking-[0.2em] text-[#E8D7A5] mt-1" },
                    "Pure Vegetarian & Jain Family Restaurant"
                  )
                ),
                h(
                  "span",
                  {
                    className:
                      "px-3 py-1 text-xs font-bold uppercase tracking-widest bg-emerald-950 text-emerald-300 border border-emerald-500/40 rounded-sm"
                  },
                  "Open Daily"
                )
              ),

              // Address, Phone, Hours Grid
              h(
                "div",
                { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm" },
                // Address
                h(
                  "div",
                  { className: "space-y-1.5" },
                  h(
                    "p",
                    { className: "text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]" },
                    "Verified Address"
                  ),
                  h(
                    "address",
                    { className: "not-italic text-[#FFF9EF]/95 leading-relaxed font-normal" },
                    config.contact.addressLines.map((line, i) => h("div", { key: i }, line))
                  ),
                  h(
                    "p",
                    { className: "text-xs text-[#E8D7A5]/75 pt-1" },
                    config.contact.landmarkNote
                  )
                ),

                // Phone & Opening Hours
                h(
                  "div",
                  { className: "space-y-4" },
                  h(
                    "div",
                    { className: "space-y-1" },
                    h(
                      "p",
                      { className: "text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]" },
                      "Phone & WhatsApp"
                    ),
                    h(
                      "a",
                      {
                        href: `tel:${config.contact.phoneClean}`,
                        className:
                          "font-serif text-xl font-bold text-[#FFF9EF] hover:text-[#D4AF37] transition-colors block"
                      },
                      config.contact.phoneDisplay
                    )
                  ),
                  h(
                    "div",
                    { className: "space-y-1" },
                    h(
                      "p",
                      { className: "text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]" },
                      "Opening Hours"
                    ),
                    h(
                      "p",
                      { className: "font-semibold text-[#FFF9EF]" },
                      config.contact.openingHours
                    ),
                    h(
                      "p",
                      { className: "text-xs text-[#E8D7A5]/80" },
                      config.contact.openingHoursStructured.mealsServed
                    )
                  )
                )
              ),

              // 3 Required Action Buttons: GET DIRECTIONS | CALL NOW | WHATSAPP
              h(
                "div",
                { className: "pt-4 border-t border-[#D4AF37]/25 grid grid-cols-1 sm:grid-cols-3 gap-3" },
                h(
                  "a",
                  {
                    href: config.links.googleMapsDirectionsUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-[0.16em] bg-[#D4AF37] text-[#091735] rounded-sm hover:bg-[#E8D7A5] transition-all text-center shadow-md"
                  },
                  "GET DIRECTIONS"
                ),
                h(
                  "a",
                  {
                    href: `tel:${config.contact.phoneClean}`,
                    className:
                      "flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-[0.16em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm hover:bg-[#a31c2d] transition-all text-center shadow-md"
                  },
                  "CALL NOW"
                ),
                h(
                  "a",
                  {
                    href: buildWhatsAppUrl(
                      config.contact.whatsappNumber,
                      "Hello Kuubera Pure Veg, I would like to enquire about dining / directions."
                    ),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-[0.16em] bg-emerald-700 text-[#FFF9EF] border border-emerald-400/50 rounded-sm hover:bg-emerald-600 transition-all text-center shadow-md"
                  },
                  "WHATSAPP"
                )
              )
            ),

            // Google Maps Embed Pointing to Kuubera Pure Veg, Gat No. 91, Varve Budruk
            h(
              "div",
              {
                className:
                  "bg-[#091735] border-2 border-[#D4AF37] rounded-sm overflow-hidden shadow-2xl"
              },
              h(
                "div",
                {
                  className:
                    "px-4 py-2.5 bg-[#091735] border-b border-[#D4AF37]/30 flex items-center justify-between text-xs"
                },
                h(
                  "span",
                  { className: "font-semibold uppercase tracking-widest text-[#D4AF37]" },
                  "Interactive Location Map • Varve Budruk, Pune"
                ),
                h(
                  "a",
                  {
                    href: config.links.googleMapsSearchUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-[#E8D7A5] hover:text-[#FFF9EF] underline"
                  },
                  "Open in Google Maps ↗"
                )
              ),
              h("iframe", {
                title: "Kuubera Pure Veg Location on Google Maps",
                src: config.links.googleMapsEmbedUrl,
                width: "100%",
                height: "300",
                style: { border: 0 },
                allowFullScreen: true,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                className: "w-full h-[300px] bg-[#091735]"
              })
            )
          ),

          // Right Column: Table Reservation Enquiry & General Contact Forms (6 cols)
          h(
            "div",
            {
              className:
                "lg:col-span-6 bg-[#091735] border-2 border-[#D4AF37] rounded-sm p-6 sm:p-8 shadow-2xl"
            },
            // Form Switcher Tabs
            h(
              "div",
              { className: "grid grid-cols-2 gap-2 p-1 bg-[#10265C] rounded-sm border border-[#D4AF37]/40 mb-6" },
              h(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveFormTab("reservation"),
                  className: `py-2.5 px-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                    activeFormTab === "reservation"
                      ? "bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] shadow"
                      : "text-[#E8D7A5] hover:text-[#FFF9EF]"
                  }`
                },
                "Table Reservation Enquiry"
              ),
              h(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveFormTab("enquiry"),
                  className: `py-2.5 px-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                    activeFormTab === "enquiry"
                      ? "bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] shadow"
                      : "text-[#E8D7A5] hover:text-[#FFF9EF]"
                  }`
                },
                "General Contact Enquiry"
              )
            ),

            activeFormTab === "reservation"
              ? // FORM 1: TABLE RESERVATION ENQUIRY FORM (Sends via WhatsApp to +91 90281 67333)
                h(
                  "form",
                  { onSubmit: handleReservationSubmit, className: "space-y-4" },
                  h(
                    "div",
                    { className: "pb-2" },
                    h(
                      "h3",
                      { className: "font-serif text-2xl font-bold text-[#D4AF37]" },
                      "Reserve a Family Table"
                    ),
                    h(
                      "p",
                      { className: "text-xs text-[#E8D7A5]/85 mt-1 leading-relaxed" },
                      "Submit your preferred dining details below to send an instant table enquiry directly to Kuubera Pure Veg on WhatsApp (+91 90281 67333)."
                    )
                  ),

                  h(
                    "div",
                    { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                    h(
                      "div",
                      null,
                      h(
                        "label",
                        { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                        "Your Name *"
                      ),
                      h("input", {
                        type: "text",
                        required: true,
                        value: resForm.name,
                        onChange: (e) => setResForm({ ...resForm, name: e.target.value }),
                        placeholder: "e.g. Rajesh Sharma",
                        className:
                          "w-full px-3.5 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                      })
                    ),
                    h(
                      "div",
                      null,
                      h(
                        "label",
                        { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                        "Phone Number *"
                      ),
                      h("input", {
                        type: "tel",
                        required: true,
                        value: resForm.phone,
                        onChange: (e) => setResForm({ ...resForm, phone: e.target.value }),
                        placeholder: "e.g. +91 98XXX XXXXX",
                        className:
                          "w-full px-3.5 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                      })
                    )
                  ),

                  h(
                    "div",
                    { className: "grid grid-cols-1 sm:grid-cols-3 gap-4" },
                    h(
                      "div",
                      null,
                      h(
                        "label",
                        { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                        "Date of Visit *"
                      ),
                      h("input", {
                        type: "date",
                        required: true,
                        value: resForm.date,
                        onChange: (e) => setResForm({ ...resForm, date: e.target.value }),
                        className:
                          "w-full px-3 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                      })
                    ),
                    h(
                      "div",
                      null,
                      h(
                        "label",
                        { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                        "Preferred Time"
                      ),
                      h(
                        "select",
                        {
                          value: resForm.time,
                          onChange: (e) => setResForm({ ...resForm, time: e.target.value }),
                          className:
                            "w-full px-3 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                        },
                        [
                          "08:00 AM (Breakfast)",
                          "09:30 AM (Breakfast)",
                          "12:30 PM (Lunch)",
                          "01:30 PM (Lunch)",
                          "05:00 PM (Evening Snacks)",
                          "07:30 PM (Dinner)",
                          "08:30 PM (Dinner)",
                          "09:30 PM (Dinner)"
                        ].map((t) => h("option", { key: t, value: t }, t))
                      )
                    ),
                    h(
                      "div",
                      null,
                      h(
                        "label",
                        { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                        "Number of Guests"
                      ),
                      h(
                        "select",
                        {
                          value: resForm.guests,
                          onChange: (e) => setResForm({ ...resForm, guests: e.target.value }),
                          className:
                            "w-full px-3 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                        },
                        [
                          "2 Guests",
                          "3 - 4 Guests",
                          "5 - 6 Guests",
                          "7 - 10 Guests (Family)",
                          "10 - 20 Guests (Group)",
                          "20+ Guests (Special Gathering)"
                        ].map((g) => h("option", { key: g, value: g }, g))
                      )
                    )
                  ),

                  h(
                    "div",
                    null,
                    h(
                      "label",
                      { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                      "Dietary Preference"
                    ),
                    h(
                      "select",
                      {
                        value: resForm.dietary,
                        onChange: (e) => setResForm({ ...resForm, dietary: e.target.value }),
                        className:
                          "w-full px-3.5 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                      },
                      [
                        "Pure Vegetarian (Standard)",
                        "Jain Food Required (No Onion / No Garlic)",
                        "Both Regular Pure Veg & Jain Dishes"
                      ].map((d) => h("option", { key: d, value: d }, d))
                    )
                  ),

                  h(
                    "div",
                    null,
                    h(
                      "label",
                      { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                      "Special Requests (Optional)"
                    ),
                    h("textarea", {
                      rows: 2,
                      value: resForm.notes,
                      onChange: (e) => setResForm({ ...resForm, notes: e.target.value }),
                      placeholder: "e.g. Travelling on Pune-Satara highway, high chair for child, birthday table...",
                      className:
                        "w-full px-3.5 py-2 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                    })
                  ),

                  h(
                    "button",
                    {
                      type: "submit",
                      className:
                        "w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm shadow-lg hover:bg-[#a31c2d] transition-all"
                    },
                    "SEND TABLE ENQUIRY VIA WHATSAPP →"
                  ),
                  h(
                    "p",
                    { className: "text-[11px] text-[#E8D7A5]/70 text-center" },
                    "Opens an instant WhatsApp conversation with Kuubera Pure Veg (+91 90281 67333) to confirm your table directly with our team."
                  )
                )
              : // FORM 2: GENERAL CONTACT ENQUIRY FORM
                h(
                  "form",
                  { onSubmit: handleEnquirySubmit, className: "space-y-4" },
                  h(
                    "div",
                    { className: "pb-2" },
                    h(
                      "h3",
                      { className: "font-serif text-2xl font-bold text-[#D4AF37]" },
                      "Send Us an Enquiry"
                    ),
                    h(
                      "p",
                      { className: "text-xs text-[#E8D7A5]/85 mt-1 leading-relaxed" },
                      "Have a question about our Jain menu, highway bus/group halts, takeaway orders, or family celebrations? Message us directly."
                    )
                  ),

                  h(
                    "div",
                    { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                    h(
                      "div",
                      null,
                      h(
                        "label",
                        { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                        "Your Name *"
                      ),
                      h("input", {
                        type: "text",
                        required: true,
                        value: enqForm.name,
                        onChange: (e) => setEnqForm({ ...enqForm, name: e.target.value }),
                        placeholder: "Your full name",
                        className:
                          "w-full px-3.5 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                      })
                    ),
                    h(
                      "div",
                      null,
                      h(
                        "label",
                        { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                        "Phone Number *"
                      ),
                      h("input", {
                        type: "tel",
                        required: true,
                        value: enqForm.phone,
                        onChange: (e) => setEnqForm({ ...enqForm, phone: e.target.value }),
                        placeholder: "+91 98XXX XXXXX",
                        className:
                          "w-full px-3.5 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                      })
                    )
                  ),

                  h(
                    "div",
                    null,
                    h(
                      "label",
                      { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                      "Enquiry Subject"
                    ),
                    h(
                      "select",
                      {
                        value: enqForm.subject,
                        onChange: (e) => setEnqForm({ ...enqForm, subject: e.target.value }),
                        className:
                          "w-full px-3.5 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                      },
                      [
                        "Family Dining / Group Enquiry",
                        "Jain Food / Custom Dietary Enquiry",
                        "Highway Group / Travel Halt Order",
                        "Feedback & Suggestions",
                        "Other Enquiry"
                      ].map((s) => h("option", { key: s, value: s }, s))
                    )
                  ),

                  h(
                    "div",
                    null,
                    h(
                      "label",
                      { className: "block text-xs font-semibold uppercase tracking-wider text-[#E8D7A5] mb-1.5" },
                      "Your Message *"
                    ),
                    h("textarea", {
                      rows: 4,
                      required: true,
                      value: enqForm.message,
                      onChange: (e) => setEnqForm({ ...enqForm, message: e.target.value }),
                      placeholder: "How can our team at Kuubera Pure Veg assist you?",
                      className:
                        "w-full px-3.5 py-2.5 text-sm bg-[#10265C] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                    })
                  ),

                  h(
                    "div",
                    { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                    h(
                      "button",
                      {
                        type: "submit",
                        className:
                          "w-full py-3.5 px-4 text-xs font-bold uppercase tracking-[0.18em] bg-emerald-700 text-[#FFF9EF] border border-emerald-400/50 rounded-sm hover:bg-emerald-600 transition-all"
                      },
                      "SEND ON WHATSAPP →"
                    ),
                    h(
                      "a",
                      {
                        href: `tel:${config.contact.phoneClean}`,
                        className:
                          "w-full py-3.5 px-4 text-xs font-bold uppercase tracking-[0.18em] bg-[#10265C] text-[#D4AF37] border border-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-[#091735] transition-all text-center block"
                      },
                      `CALL ${config.contact.phoneDisplay}`
                    )
                  )
                )
          )
        )
      )
    );
  }

  // BOOK A TABLE MODAL (Accessible from Sticky Navbar from anywhere on the site)
  function ReservationModal({ isOpen, onClose, config }) {
    const [form, setForm] = React.useState({
      name: "",
      phone: "",
      date: "",
      time: "08:00 PM (Dinner)",
      guests: "4 Guests",
      dietary: "Pure Vegetarian (Standard)",
      notes: ""
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
      e.preventDefault();
      const text = [
        "*TABLE RESERVATION ENQUIRY — KUUBERA PURE VEG*",
        "----------------------------------------",
        `*Name:* ${form.name}`,
        `*Phone:* ${form.phone}`,
        `*Date:* ${form.date || "Today"}`,
        `*Time:* ${form.time}`,
        `*Guests:* ${form.guests}`,
        `*Dietary:* ${form.dietary}`,
        form.notes ? `*Notes:* ${form.notes}` : "",
        "----------------------------------------"
      ]
        .filter(Boolean)
        .join("\n");

      window.open(buildWhatsAppUrl(config.contact.whatsappNumber, text), "_blank", "noopener,noreferrer");
      onClose();
    };

    return h(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Book a Table at Kuubera Pure Veg",
        onClick: onClose,
        className:
          "fixed inset-0 z-50 bg-[#091735]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      },
      h(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          className:
            "w-full max-w-lg bg-[#10265C] text-[#FFF9EF] border-2 border-[#D4AF37] rounded-sm shadow-2xl overflow-hidden"
        },
        // Header
        h(
          "div",
          {
            className:
              "px-6 py-4 bg-[#091735] border-b border-[#D4AF37]/40 flex items-center justify-between"
          },
          h(
            "div",
            null,
            h("h3", { className: "font-serif text-2xl font-bold text-[#D4AF37]" }, "Book a Table"),
            h("p", { className: "text-xs text-[#E8D7A5]" }, "Kuubera Pure Veg • Varve Budruk, Pune")
          ),
          h(
            "button",
            {
              type: "button",
              onClick: onClose,
              className:
                "w-8 h-8 rounded-sm bg-[#10265C] border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#8B1726] hover:text-[#FFF9EF]"
            },
            "✕"
          )
        ),

        // Form Body
        h(
          "form",
          { onSubmit: handleSubmit, className: "p-6 space-y-4" },
          h(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
            h(
              "div",
              null,
              h("label", { className: "block text-xs uppercase tracking-wider text-[#E8D7A5] mb-1" }, "Guest Name *"),
              h("input", {
                type: "text",
                required: true,
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                placeholder: "Your full name",
                className:
                  "w-full px-3 py-2 text-sm bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
              })
            ),
            h(
              "div",
              null,
              h("label", { className: "block text-xs uppercase tracking-wider text-[#E8D7A5] mb-1" }, "Phone Number *"),
              h("input", {
                type: "tel",
                required: true,
                value: form.phone,
                onChange: (e) => setForm({ ...form, phone: e.target.value }),
                placeholder: "+91 98XXX XXXXX",
                className:
                  "w-full px-3 py-2 text-sm bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
              })
            )
          ),

          h(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" },
            h(
              "div",
              null,
              h("label", { className: "block text-xs uppercase tracking-wider text-[#E8D7A5] mb-1" }, "Date *"),
              h("input", {
                type: "date",
                required: true,
                value: form.date,
                onChange: (e) => setForm({ ...form, date: e.target.value }),
                className:
                  "w-full px-2.5 py-2 text-sm bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
              })
            ),
            h(
              "div",
              null,
              h("label", { className: "block text-xs uppercase tracking-wider text-[#E8D7A5] mb-1" }, "Time"),
              h(
                "select",
                {
                  value: form.time,
                  onChange: (e) => setForm({ ...form, time: e.target.value }),
                  className:
                    "w-full px-2.5 py-2 text-sm bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                },
                [
                  "08:30 AM (Breakfast)",
                  "01:00 PM (Lunch)",
                  "05:30 PM (Snacks)",
                  "08:00 PM (Dinner)",
                  "09:15 PM (Dinner)"
                ].map((t) => h("option", { key: t, value: t }, t))
              )
            ),
            h(
              "div",
              null,
              h("label", { className: "block text-xs uppercase tracking-wider text-[#E8D7A5] mb-1" }, "Party Size"),
              h(
                "select",
                {
                  value: form.guests,
                  onChange: (e) => setForm({ ...form, guests: e.target.value }),
                  className:
                    "w-full px-2.5 py-2 text-sm bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
                },
                ["2 Guests", "4 Guests", "6 Guests", "8+ Family Group", "15+ Group"].map((g) =>
                  h("option", { key: g, value: g }, g)
                )
              )
            )
          ),

          h(
            "div",
            null,
            h("label", { className: "block text-xs uppercase tracking-wider text-[#E8D7A5] mb-1" }, "Dietary Preference"),
            h(
              "select",
              {
                value: form.dietary,
                onChange: (e) => setForm({ ...form, dietary: e.target.value }),
                className:
                  "w-full px-3 py-2 text-sm bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
              },
              [
                "Pure Vegetarian (Standard)",
                "Jain Food Preparation (No Onion / Garlic)",
                "Mixed Pure Veg & Jain"
              ].map((d) => h("option", { key: d, value: d }, d))
            )
          ),

          h(
            "div",
            null,
            h("label", { className: "block text-xs uppercase tracking-wider text-[#E8D7A5] mb-1" }, "Special Requests"),
            h("input", {
              type: "text",
              value: form.notes,
              onChange: (e) => setForm({ ...form, notes: e.target.value }),
              placeholder: "Any specific seating or dish request",
              className:
                "w-full px-3 py-2 text-sm bg-[#091735] text-[#FFF9EF] border border-[#D4AF37]/50 rounded-sm"
            })
          ),

          h(
            "div",
            { className: "pt-2 flex flex-col sm:flex-row gap-3" },
            h(
              "button",
              {
                type: "submit",
                className:
                  "flex-1 py-3 px-4 text-xs font-bold uppercase tracking-[0.2em] bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm hover:bg-[#a31c2d]"
              },
              "SEND ENQUIRY ON WHATSAPP"
            ),
            h(
              "a",
              {
                href: `tel:${config.contact.phoneClean}`,
                className:
                  "py-3 px-4 text-xs font-bold uppercase tracking-[0.18em] bg-[#091735] text-[#D4AF37] border border-[#D4AF37] rounded-sm text-center hover:bg-[#D4AF37] hover:text-[#091735]"
              },
              "CALL DIRECTLY"
            )
          )
        )
      )
    );
  }

  // DOWNLOAD FULL MENU / PRINTABLE ROYAL MENU SHEET MODAL
  function PrintableMenuModal({ isOpen, onClose, categories, menuItems, config }) {
    if (!isOpen) return null;

    const handlePrintOrSavePdf = () => {
      window.print();
    };

    return h(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Download or Print Full Kuubera Menu",
        onClick: onClose,
        className:
          "fixed inset-0 z-50 bg-[#091735]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      },
      h(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          className:
            "w-full max-w-4xl bg-[#FFF9EF] text-[#091735] border-4 border-[#D4AF37] rounded-sm shadow-2xl my-auto max-h-[90vh] flex flex-col overflow-hidden"
        },
        // Top Action Bar (Hidden when printing)
        h(
          "div",
          {
            className:
              "px-6 py-4 bg-[#10265C] text-[#FFF9EF] border-b-2 border-[#D4AF37] flex flex-wrap items-center justify-between gap-4 no-print"
          },
          h(
            "div",
            null,
            h("h3", { className: "font-serif text-xl font-bold text-[#D4AF37]" }, "Kuubera Pure Veg — Full Menu Directory"),
            h("p", { className: "text-xs text-[#E8D7A5]" }, "Save as PDF or print directly for offline reference")
          ),
          h(
            "div",
            { className: "flex flex-wrap items-center gap-3" },
            h(
              "a",
              {
                href: "./assets/menu/kuubera-full-menu.pdf",
                download: "Kuubera-Pure-Veg-Menu.pdf",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "px-4 py-2 text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white border border-[#D4AF37] rounded-sm hover:bg-emerald-500"
              },
              "Download Official Menu PDF ⬇"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: handlePrintOrSavePdf,
                className:
                  "px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-[#091735] rounded-sm hover:bg-[#E8D7A5]"
              },
              "Print / Save Sheet"
            ),
            h(
              "button",
              {
                type: "button",
                onClick: onClose,
                className:
                  "px-3 py-2 text-xs font-bold uppercase tracking-wider bg-[#8B1726] text-[#FFF9EF] border border-[#D4AF37] rounded-sm"
              },
              "Close ✕"
            )
          )
        ),

        // Printable Menu Sheet Body
        h(
          "div",
          { className: "p-6 sm:p-10 overflow-y-auto space-y-8" },
          // Royal Menu Header
          h(
            "div",
            { className: "text-center border-b-2 border-[#D4AF37] pb-6" },
            h("img", {
              src: "./assets/images/kuubera-logo-transparent.png",
              alt: "KUUBERA PURE VEG",
              className: "h-16 w-auto mx-auto mb-3 object-contain"
            }),
            h("h2", { className: "font-serif text-3xl font-bold text-[#10265C] tracking-widest uppercase" }, config.fullName),
            h("p", { className: "text-sm text-[#8B1726] font-semibold uppercase tracking-widest mt-1" }, "100% Pure Vegetarian • Jain Options Available"),
            h("p", { className: "text-xs text-[#091735]/80 mt-2" }, `${config.contact.addressLines.join(" ")} | Phone: ${config.contact.phoneDisplay} | ${config.contact.openingHours}`)
          ),

          // Official 12-Page Menu Card Pictures Showcase
          window.KUUBERA_MENU_PAGES &&
            window.KUUBERA_MENU_PAGES.length > 0 &&
            h(
              "div",
              { className: "space-y-4 border-b-2 border-[#D4AF37] pb-8" },
              h(
                "h3",
                { className: "font-serif text-xl font-bold text-[#10265C] uppercase tracking-wider text-center" },
                "Official 12-Page Printed Menu Cards"
              ),
              h(
                "div",
                { className: "grid grid-cols-1 sm:grid-cols-2 gap-6" },
                window.KUUBERA_MENU_PAGES.map((pg) =>
                  h(
                    "div",
                    {
                      key: pg.pageNumber,
                      className: "border-2 border-[#D4AF37] rounded-sm overflow-hidden bg-[#091735] shadow-md"
                    },
                    h("img", {
                      src: pg.image,
                      alt: `Page ${pg.pageNumber} — ${pg.title}`,
                      className: "w-full h-auto object-contain"
                    }),
                    h(
                      "div",
                      { className: "px-3 py-2 bg-[#10265C] text-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center justify-between" },
                      h("span", null, `Page ${pg.pageNumber}`),
                      h("span", { className: "text-[#FFF9EF] text-[11px] truncate ml-2" }, pg.title)
                    )
                  )
                )
              )
            ),

          // Categories Grid
          h(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
            categories.map((cat) => {
              const items = menuItems.filter((i) => i.category === cat);
              if (items.length === 0) return null;
              return h(
                "div",
                { key: cat, className: "space-y-2.5" },
                h(
                  "h4",
                  {
                    className:
                      "font-serif text-lg font-bold text-[#10265C] uppercase tracking-wider border-b border-[#D4AF37] pb-1"
                  },
                  cat
                ),
                h(
                  "ul",
                  { className: "space-y-2" },
                  items.map((dish) => {
                    const priceObj = formatDishPrice(dish.price);
                    return h(
                      "li",
                      { key: dish.id, className: "text-xs flex items-baseline justify-between gap-2" },
                      h(
                        "div",
                        null,
                        h("span", { className: "font-semibold text-[#091735]" }, dish.name),
                        dish.isJain &&
                          h("span", { className: "ml-1.5 text-[10px] text-[#8B1726] font-semibold" }, "(Jain Available)")
                      ),
                      h(
                        "span",
                        { className: "font-semibold text-[#10265C] shrink-0" },
                        priceObj.isVerifiedNumber ? priceObj.text : "At Counter"
                      )
                    );
                  })
                )
              );
            })
          )
        )
      )
    );
  }

  window.KuuberaContactModals = {
    ContactLocationSection,
    ReservationModal,
    PrintableMenuModal
  };
})();
