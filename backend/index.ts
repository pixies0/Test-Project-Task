import express from "express";
import scrapeRoute from "./routes/scrape";
import cors from "cors";

// Inicialização da aplicação Express junto com a definição da porta
const app = express();
const PORT = 3000;

app.use(cors());
app.use("/api/scrape", scrapeRoute);

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
