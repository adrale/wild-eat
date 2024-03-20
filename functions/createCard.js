
export let container = document.querySelector('.allCards');

function createAnElement(tag, classname = null, parent) {
    const element = document.createElement(tag);
    element.classList.add(classname);
    parent.appendChild(element);
    return element;
}

export function createCard(restaurant){
    for (let i = 0; i < restaurant.length; i++) {
        const resto = restaurant[i];

        const card = createAnElement('article', 'cards', container);

        const cardTitle = createAnElement('p', 'nameFirm', card);
        cardTitle.innerText = resto.name;
        
        const cardArticle = createAnElement('article', 'avis-note-prix', card);

        const cardReview = createAnElement('p', 'avis', cardArticle);
        cardReview.innerText = resto.avis;

        const cardNote = createAnElement('p', 'note', cardArticle);
        cardNote.innerText = resto.note;

        const cardPrice = createAnElement('p', 'prix', cardArticle);
        cardPrice.innerText = resto.prix;
    }
}