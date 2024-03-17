let container = document.getElementById("cards");

export function createCard() {
    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    container.appendChild(cardTitle);


}
console.log(container);
