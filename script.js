// Import des tableaux
import { arrayRestaurants } from "./data/arrayRestaurant";

// ----------------------------------------- NAVBAR ---------------------------------

const qualityCard = document.querySelector (".aboutUs-quality");
const qualityHidden = document.querySelector (".qualityHidden");

qualityCard.addEventListener ("click", function () {
    qualityCard.classList.toggle ("unhideArticle");
    qualityHidden.classList.toggle ("unhide");   
})

const availabilityCard = document.querySelector(".aboutUs-availability");
const availabilityHidden = document.querySelector(".availabilityHidden");

availabilityCard.addEventListener("click", function () {
    availabilityCard.classList.toggle ("unhideArticle");
    availabilityHidden.classList.toggle ("unhide");  
})

const teamCard = document.querySelector(".aboutUs-team");
const teamHidden = document.querySelectorAll(".teamHidden");

teamCard.addEventListener("click", function () {
    teamCard.classList.toggle ("unhideArticle");
    for(let i=0; i<teamHidden.length; i++) {
        teamHidden[i].classList.toggle ("unhidePicture");
    }  
})

// ----------------------------------------- HERO - MAIN ---------------------------------

const searchInput = document.querySelector('input')
searchInput.addEventListener('change', (event) => {

    // Boucle pour parcourir le tableau restaurant || autre
    // Surement la boucle est mal placé, mais en dehors d'ici elle bloque le "viewChange"

    for (i = 0; i > restaurants.length; i++) {
        const establishment = restaurants[i]
        // createCard(establishment)
    }
    const searchValue = event.target.value.toLowerCase();
    // Vider le container parent || Supprimer les autres card
    //  <elementparent>.innerHTML = ""
    let filteredRestaurants = restaurants.filter((restaurant) => 
    // Peut-être pas le bon paramètre
        restaurant.name.toLowerCase().includes(searchValue) || 
        restaurant.category.toLowerCase().includes(searchValue))
    if(filteredRestaurants) {
        // Creation des card avec le nom du restaurant || du filtre
        // createCard(restaurant)
    }
})

const selectButton = document.getElementById('campus');
selectButton.addEventListener("change", () => {
    const buttonValue = selectButton.value;
    let filtered = restaurants.filter((restaurant) => 
    restaurant.value === buttonValue
    // Décommanter code en dessous

    // if(filtered.length) {
    //     // Creation des card avec le nom du restaurant || du filtre
    //     // createCard(restaurant)
    // } else {
    //     // Creation des card avec le nom du restaurant || du filtre
    //     // createCard(filtered)
    // }
    )
});

const media992 = window.matchMedia("(max-width: 992px)") 

function viewChange (event){
    const imgChange = document.getElementById('img-hero-main')
    if(event.matches) {
        imgChange.src = './Img/hero-pizza.svg'
    } else {
        imgChange.src = './Img/desktop-hero.jpg'
    }
}
media992.addEventListener('change', viewChange)
viewChange(media992)

// ----------------------------------------- SECTION - MAIN ---------------------------------

let container = document.querySelector('.allCards');
let containerBrunch = document.querySelector(".allBrunch")
let containerBar = document.querySelector(".allBars")
let containerPop = document.querySelector(".all-cards-pop")

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
    cardDesc.innerText = "Le vrai burger New - Yorkais, ses frites, ses cookies";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 293";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,8/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 15,70€";
    articleAvis.appendChild(prix);

};
createCard();
createCard();
createCard();

function createCardBrunch() {
    const card = document.createElement('article');
    card.classList.add('cards-brunch');
    containerBrunch.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "Au Brunch";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 423m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "Un moment de partage autour d'un bon brunch";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 898";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,4/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 12,80€";
    articleAvis.appendChild(prix);
}

createCardBrunch();
createCardBrunch();
createCardBrunch();
createCardBrunch();

function createCardBar() {
    const card = document.createElement('article');
    card.classList.add('cards-bar');
    containerBar.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "My Beers";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 308m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "Boire un verre seul ou avec des amis";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 487";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,9/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 8,70€";
    articleAvis.appendChild(prix);
}

createCardBar();
createCardBar();
createCardBar();
createCardBar();

function createCardPop() {
    const card = document.createElement('article');
    card.classList.add('cards-populaires');
    containerPop.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "BIBIBAP";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 1007";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,8/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 13,70€";
    articleAvis.appendChild(prix);
};

createCardPop();
createCardPop();
createCardPop();


// ----------------------------------------- SECTION - FILTER ---------------------------------

// fonction de filtrage générique (la méthode .filter retourne les éléments pour lesquels la callback est vrai)

function filterByType(type) {
    return arrayRestaurants.filter(restaurant => restaurant.type === type); // fonction callback anonyme car .filter prend en argument une fonction qui retourne true ou false
}

const filteredBurger = filterByType("Burger"); // je viens stocker ces éléments dans de nouveaux tableaux
const filteredPizza = filterByType("Pizza");
const filteredBrunch = filterByType("Brunch");
const filteredBar = filterByType("Bar");


// ajoute une couleur au clique

const classRestaurant = document.getElementsByClassName("filter-restaurant");

function toggleColor(restaurant) {
    if (restaurant.classList.contains("color-clicked-filter")) {
        // si le bouton est déjà coloré supprime la couleur
        restaurant.classList.remove("color-clicked-filter");
    } else {
        // sinon ajoute la couleur et désactive la couleur pour les autres boutons
        Array.from(classRestaurant).forEach(restaurant => restaurant.classList.remove("color-clicked-filter"));
        restaurant.classList.add("color-clicked-filter");
    };
};

Array.from(classRestaurant).forEach(restaurant => restaurant.addEventListener('click', () => { toggleColor(restaurant) }));


// récupération des id pour écouter les cliques dans le filtre

const idBurger = document.getElementById("Burger");
const idPizza = document.getElementById("Pizza");
const idBrunch = document.getElementById("Brunch");
const idBar = document.getElementById("Bar");

idBurger.addEventListener('click', () => {
    console.log('aozdijazoij');
})


// filtre quand on clique en se basant sur la couleur du filtre

function clickFilter(idTypeOfRestaurant, filteredType) {
    idTypeOfRestaurant.addEventListener('click', () => {
        if (idTypeOfRestaurant.classList.contains("color-clicked-filter")) {
            console.log(filteredType);
            console.log("filtered");
            // return filteredType;
        } else {
            console.log("notFiltered");
            // return arrayRestaurants;
        };
    });
};

clickFilter(idBurger, filteredBurger);
clickFilter(idPizza, filteredPizza);
clickFilter(idBrunch, filteredBrunch);
clickFilter(idBar, filteredBar);

idBurger.addEventListener('click', () => {
    console.log('aozijdoaij');
})