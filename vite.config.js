// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/MistevaECom/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        shop: resolve(__dirname, "shop.html"), // Additional HTML pages
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "add-to-cart.html"),
        personCategoriesKids: resolve(__dirname, "person-categories-kids.html"),
        personCategoriesMen: resolve(__dirname, "person-categories-men.html"),
        personCategoriesWomen: resolve(__dirname, "person-categories-women.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});