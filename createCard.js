let container = document.getElementById("cards");

export function createCard() {

    const img = document.createElement("section");
    img.classList.add("img");
    container.appendChild(img);

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.src = "Group 15.png";
    img.appendChild(cardImg);

    const cardContent = document.createElement("section");
    cardContent.classList.add("card-content");
    container.appendChild(cardContent);

    const cardTitle = document.createElement("h4");
    cardTitle.innerText = "McDonald's";
    cardTitle.classList.add("card-title")
    cardContent.appendChild(cardTitle);

    const range = document.createElement("p");
    range.classList.add("range");
    range.innerText = "(190m)";
    cardContent.appendChild(range);

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("card-desc");
    cardDesc.innerText = "Hamburger, wrap, salade, desserts... Sur place ou à emporter.";
    cardContent.appendChild(cardDesc);    
    
    const learnMore = document.createElement("a");
    learnMore.classList.add("learn-more");
    learnMore.innerText = "En savoir plus";
    cardContent.appendChild(learnMore);

    const cardArticleSect = document.createElement("section");
    cardArticleSect.classList.add("card-article-sect");
    cardContent.appendChild(cardArticleSect);

    const cardArticle = document.createElement("article");
    cardArticle.classList.add("card-article");
    cardContent.appendChild(cardArticle);

    const cardAvis = document.createElement("p");
    cardAvis.innerText = "Avis : 283";
    cardAvis.classList.add("card-avis");
    cardArticle.appendChild(cardAvis);

    const cardNote = document.createElement("p");
    cardNote.innerText = "Note : 4,8/5";
    cardNote.classList.add("card-note");
    cardArticle.appendChild(cardNote);

    const cardPrix = document.createElement("p");
    cardPrix.innerText = "Prix : 15,80€";
    cardPrix.classList.add("card-prix");
    cardArticle.appendChild(cardPrix);
}
