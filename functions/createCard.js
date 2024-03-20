
import { allArray } from "../data/testArray.js";
export let containerBurger = document.querySelector('.allCards');

function createAnElement(tag, classname = null, parent) {
    const element = document.createElement(tag);
    element.classList.add(classname);
    parent.appendChild(element);
    return element;
};


export function createCards(type, container) {
    const places = allArray.find(place => place.type === type)?.places || [];

    for (const place of places) {
        const card = createAnElement('article', 'cards', container);
        card.style.backgroundImage = `url('${place.img}')`;

        const cardTitle = createAnElement('p', 'nameFirm', card);
        cardTitle.innerText = place.name;

        const cardArticle = createAnElement('article', 'avis-note-prix', card);

        const cardReview = createAnElement('p', 'avis', cardArticle);
        cardReview.innerText = place.avis;

        const cardNote = createAnElement('p', 'note', cardArticle);
        cardNote.innerText = place.note;

        const cardPrice = createAnElement('p', 'prix', cardArticle);
        cardPrice.innerText = place.prix;
    };
};