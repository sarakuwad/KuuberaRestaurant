# KUUBERA PURE VEG — Premium Restaurant Website & Owner Maintenance Guide

Welcome to the official website repository for **KUUBERA PURE VEG** (`Gat No. 91, Tal. Bhor, Varve Budruk, Near Khed Shivapur, Pune, Maharashtra – 412205`).

---

## 1. How to Open & Preview the Website

- **Instant Local Preview (No Installation Needed):** Simply double-click [`index.html`](./index.html) in Windows Explorer to open the complete interactive website in Chrome, Edge, or any modern browser.
- **Web Hosting Deployment:** Upload the entire folder to Netlify, Vercel, GitHub Pages, or any standard cPanel web host.

---

## 2. How the Owner Can Update Menu Prices, Dishes, Photos & Hours

You have **two easy ways** to maintain the website without touching any complex code:

### Option A: Visual "Owner Admin Studio" (Built into the Website)
1. Scroll to the bottom footer of the website and click **"Owner Admin Studio"** (or visit `index.html#admin`).
2. **Tab 1 (Menu & Prices):** Enter verified INR prices for any dish, add new dishes, remove dishes, or link food photographs.
3. **Tab 2 (Gallery & Brand Photos):** Add new photographs from `@_kuubera_` or update the Hero, About, and Special Experience section photos.
4. **Tab 3 (Hours & Announcements):** Update daily opening hours, phone numbers, or the top announcement bar.
5. Click **"Download Updated `menuData.js` / `restaurantConfig.js` / `galleryData.js`"** and replace the file in the `data/` folder to publish your changes permanently.

### Option B: Direct Text File Editing (`/data/` Folder)
All restaurant content is separated into clean, well-commented files inside the [`data/`](./data/) directory:
- [`data/restaurantConfig.js`](./data/restaurantConfig.js) — Address, phone (`+91 90281 67333`), opening hours (`Daily: 7:00 AM – 11:00 PM`), top announcement banner, Instagram & Google Maps links, and primary section photo paths.
- [`data/menuData.js`](./data/menuData.js) — All 14 menu categories, 6 Signature Dishes (*Favourites at Kuubera*), and individual menu items. Change `price: null` to a number (e.g. `price: 140`) to publish verified INR prices.
- [`data/galleryData.js`](./data/galleryData.js) — Instagram gallery items (`@_kuubera_`) and category filters.
- [`data/reviewsData.js`](./data/reviewsData.js) — Verified public guest reviews and ratings.

---

## 3. Summary of Verified Data vs. Owner-Provided Content Slots

### Verified Public Data Populated:
- **Restaurant Name:** KUUBERA PURE VEG
- **Address:** Gat No. 91, Tal. Bhor, Varve Budruk, Maharashtra – 412205, India (Near Khed Shivapur Toll Plaza, Pune–Satara Highway)
- **Phone & WhatsApp:** `+91 90281 67333`
- **Opening Hours:** `Daily: 7:00 AM – 11:00 PM`
- **Official Instagram:** [`@_kuubera_`](https://www.instagram.com/_kuubera_/)
- **Public Rating Summary:** `4.6 ★` across `1,300+` verified guest ratings; average cost `₹350 – ₹400 for two`.
- **Genuine Public Reviews:** Verbatim reviews by **Ashwin Vadodaria**, **Prashant Dhone**, **Dipesh Gala**, and **Bhautik**.
- **Verified Menu Dishes Across 14 Categories:** Including *Masala Dosa*, *Mysore Masala Dosa*, *Misal Pav*, *Paneer Tikka*, *Chole Bhature*, *Paneer Butter Masala*, *Dal Makhani*, *Jain Pav Bhaji*, *Jain Sabji Roti Meal*, *Veg Dum Biryani*, *Watermelon Blossom*, and more.

### Clearly Identified Slots Ready for Owner Content:
1. **Individual Dish Prices (`data/menuData.js`):** Left as `price: null` (*"Price at Restaurant / Ask at Counter"*) where exact current print-menu rupee figures could not be verified online, ensuring zero guessed prices.
2. **Original Restaurant & Food Photographs (`assets/images/`):** No random stock photos are passed off as Kuubera's interior. Each photo frame displays a bespoke Royal Architectural & Culinary placeholder with the exact recommended file path (e.g., `assets/images/kuubera-hero-interior.webp`, `assets/images/gallery/interior-main.webp`, `assets/images/menu/masala-dosa.webp`) for the owner to drop in original `@_kuubera_` photographs.
