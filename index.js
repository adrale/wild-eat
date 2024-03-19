let container = document.querySelector('.allCards');
let containerBrunch = document.querySelector(".allBrunch")
let containerBar = document.querySelector(".allBars")

function createCard() {
    const card = document.createElement('article');
    card.classList.add('cards');
    container.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "East Street";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 268m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "le vrai burger New - Yorkais, ses frites, ses cookies";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);

    const cardAvis = document.createElement("")
};
createCard();
createCard();

function createCardBrunch() {
    const card = document.createElement('article');
    card.classList.add('cards-brunch');
    containerBrunch.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "East Street";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 268m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "le vrai burger New - Yorkais, ses frites, ses cookies";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);
}

createCardBrunch();
createCardBrunch();
createCardBrunch();

function createCardBar() {
    const card = document.createElement('article');
    card.classList.add('cards-bar');
    containerBar.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "East Street";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 268m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "le vrai burger New - Yorkais, ses frites, ses cookies";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);
}

createCardBar();
createCardBar();
createCardBar();

