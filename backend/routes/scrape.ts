import { Router } from "express";
import axios from "axios";
import { JSDOM } from "jsdom";

const router = Router();

// Rota GET em /api/scrape?keyword=algumaCoisa
router.get("/", async (req, res) => {
  const keyword = req.query.keyword as string;

  if (!keyword) {
    return res.status(400).json({ error: "Missing keyword query parameter" });
  }

  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0", // ajuda a não ser bloqueado
      },
    });

    // Cria uma instância do DOM com o HTML retornado
    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    const products: any[] = [];

    const items = document.querySelectorAll("div.s-result-item");

    items.forEach((item) => {
      const title = item.querySelector("h2 a span")?.textContent?.trim();
      const rating = item.querySelector("i span")?.textContent?.trim();
      const reviews = item.querySelector(".s-link-style .s-underline-text")?.textContent?.trim();
      const image = item.querySelector("img")?.getAttribute("src");

      // Só adiciona ao array se tiver título e imagem (para evitar lixo)
      if (title && image) {
        products.push({ title, rating, reviews, image });
      }
    });

    res.json(products);
  } catch (error) {
    console.error("Scrape error:", error);
    res.status(500).json({ error: "Failed to fetch and parse data" });
  }
});

export default router;
