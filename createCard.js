let container = document.getElementById("cards")

export function createCard() {
    const card = document.createElement("section");
    card.classList.add("cards");
    container.appendChild(card);

    const favButton = document.createElement("button");
    favButton.classList.add("favButton");
    card.appendChild(favButton);

    const img = document.createElement("img");
    img.classList.add("iconFav");
    img.src = "iconFavRose.svg";
    favButton.appendChild(img);

    const cardTitle = document.createElement("h4")
    cardTitle.classList.add("cardTitle");
    cardTitle.innerText = "McDonald's";
    container.appendChild(cardTitle);

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("cardDesc");
    cardDesc.innerText = "Hamburger, wrap, salade, desserts... Sur place ou à emporter.";
    container.appendChild(cardDesc);
}


