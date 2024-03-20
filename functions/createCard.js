
export let containerBurger = document.querySelector('.allCards');

function createAnElement(tag, classname = null, parent) {
    const element = document.createElement(tag);
    element.classList.add(classname);
    parent.appendChild(element);
    return element;
};

export function createCardBurger(arrayBurger){
    for (let i = 0; i < arrayBurger.length; i++) {
        const myBurger = arrayBurger[i];

        const card = createAnElement('article', 'cards', containerBurger);
        card.style.backgroundImage = `url(${myBurger.img})`;

        const cardTitle = createAnElement('p', 'nameFirm', card);
        cardTitle.innerText = myBurger.name;
        
        const cardArticle = createAnElement('article', 'avis-note-prix', card);

        const cardReview = createAnElement('p', 'avis', cardArticle);
        cardReview.innerText = myBurger.avis;

        const cardNote = createAnElement('p', 'note', cardArticle);
        cardNote.innerText = myBurger.note;

        const cardPrice = createAnElement('p', 'prix', cardArticle);
        cardPrice.innerText = myBurger.prix;
    };
};

export let containerBrunch = document.querySelector('.allBrunch');

export function createCardBrunch(arrayBrunch) {
    for (let i = 0; i < arrayBrunch.length; i++) {
        const myBrunch = arrayBrunch[i];

        const card = createAnElement('article', 'cards', containerBrunch);
        card.style.backgroundImage = `url('${myBrunch.img}')`;

        const cardTitle = createAnElement('p', 'nameFirm', card);
        cardTitle.innerText = myBrunch.name;

        const cardArticle = createAnElement('article', 'avis-note-prix', card);

        const cardReview = createAnElement('p', 'avis', cardArticle);
        cardReview.innerText = myBrunch.avis;

        const cardNote = createAnElement('p', 'note', cardArticle);
        cardNote.innerText = myBrunch.note;

        const cardPrice = createAnElement('p', 'prix', cardArticle);
        cardPrice.innerText = myBrunch.prix;
    };
};

export let containerBars = document.querySelector('.allBars');

export function createCardBars(arrayBars) {
    for (let i = 0; i < arrayBars.length; i++) {
        const myBars = arrayBars[i];

        const card = createAnElement('article', 'cards', containerBars);
        card.style.backgroundImage = `url('${myBars.img}')`;

        const cardTitle = createAnElement('p', 'nameFirm', card);
        cardTitle.innerText = myBars.name;

        const cardArticle = createAnElement('article', 'avis-note-prix', card);

        const cardReview = createAnElement('p', 'avis', cardArticle);
        cardReview.innerText = myBars.avis;

        const cardNote = createAnElement('p', 'note', cardArticle);
        cardNote.innerText = myBars.note;

        const cardPrice = createAnElement('p', 'prix', cardArticle);
        cardPrice.innerText = myBars.prix;
    }
}