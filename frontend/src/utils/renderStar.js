export function renderStars(ratingText) {
    if (!ratingText) return "N/A";
    const match = ratingText.match(/([\d.]+)\s+out of 5/);
    if (!match) return "N/A";

    const rating = parseFloat(match[1]);
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    let starsHTML = "⭐".repeat(fullStars);
    if (halfStar) starsHTML += "✩";
    starsHTML = starsHTML.padEnd(5, "☆");

    return starsHTML;
  }
