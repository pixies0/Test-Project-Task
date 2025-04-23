import '@fortawesome/fontawesome-free/css/all.min.css';

import { renderStars } from "./utils/renderStar.js";

// Seleciona os elementos do DOM
const scrapeBtn = document.getElementById("scrapeBtn");
const keywordInput = document.getElementById("keyword");
const resultsDiv = document.getElementById("results");

// Adiciona evento ao botão de busca
scrapeBtn.addEventListener("click", async () => {
  const keyword = keywordInput.value.trim();
  if (!keyword) {
    alert("Por favor, digite uma palavra-chave.");
    return;
  }

  resultsDiv.innerHTML = "Buscando...";

  try {
    const res = await fetch(
      `http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`
    );
    if (!res.ok) throw new Error("Erro ao buscar dados.");
    const data = await res.json();

    if (data.length === 0) {
      resultsDiv.innerHTML = "<p>Nenhum produto encontrado.</p>";
      return;
    }

    resultsDiv.innerHTML = data
      .map(
        (product) => `
        <div class="product">
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${renderStars(product.rating)}</p>
          <p>
            <i class="fa-solid fa-comment"></i>
            ${product.reviews || "Sem avaliações"}
          </p>
        </div>
      `
      )
      .join("");
  } catch (err) {
    console.error(err);
    resultsDiv.innerHTML =
      "<p>Erro ao buscar produtos. Tente novamente mais tarde.</p>";
  }
});

// Permite que a busca seja acionada ao pressionar Enter no input
keywordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    scrapeBtn.click();
  }
});
