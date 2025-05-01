import { Router } from "express";
import axios from "axios";
import { JSDOM } from "jsdom";

const router = Router();

// Rota GET em /api/scrape?keyword=algumaCoisa
router.get("/", async (req, res) => {

  const keyword = req.query.keyword as string;
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
  const apiKey = '4208dbcf77f131520e0278d93a179bbb';

  if (!keyword) {
    return res.status(400).json({ error: "Missing keyword query parameter" });
  }

  try {

    const response = await axios.get(`http://api.scraperapi.com`, {
      params: {
        api_key: apiKey,
        url: url
      },
      headers: {
        'User-Agent': 'Mozilla/5.0' // ajuda a evitar bloqueio adicional
      }
    });

    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    const products: any[] = [];

    const items = document.querySelectorAll("div.s-main-slot div[data-component-type='s-search-result']");

    items.forEach((item) => {
      const rawTitle = item.querySelector("span")?.textContent?.trim();
      const title = rawTitle?.split(" ").slice(0, 5).join(" ");

      const image = item.querySelector("img.s-image")?.getAttribute("src");
      const rating = item.querySelector("span.a-icon-alt")?.textContent?.trim() || null;
      const reviews = item.querySelector("span.a-size-base.s-underline-text")?.textContent?.trim() || null;

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
