

// ----------------------------------------- NAVBAR ---------------------------------

// import { createCard } from "./functions/createCard";

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
    const searchValue = event.target.value;
    // Vider le container parent a l'aide de .innerHTML = "" || Supprimer les autres card
    if(restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) || restaurant.type.toLowerCase().includes(searchValue.toLowerCase()))) {
    // Creation des card avec le nom du restaurant || du filtre
    } 
})


// ----------------------------------------- SECTION - MAIN ---------------------------------

// Import des différents tableaux & des fonctions
import { createCardBrunch, createCardBurger } from "./functions/createCard.js";
import { restaurants } from "./data/cards.js";
import { arrayBurger } from "./data/arrayBurger.js";
import { arrayBrunch } from "./data/arrayBrunch.js";
createCardBurger(arrayBurger);
createCardBrunch(arrayBrunch);

// Constante pour n'afficher que les burgers dans la console
const onlyBurgers = restaurants.filter((burgers) => burgers.category === 'Burger');
console.log(onlyBurgers);

const onlyBrunch = restaurants.filter((brunch) => brunch.category === 'Brunch');
console.log(onlyBrunch);

const onlyBars = restaurants.filter((bar) => bar.category === 'Bar');
console.log(onlyBars);

// ----------------------------------------- SECTION - FILTER ---------------------------------

// fonction de filtrage générique (la méthode .filter retourne les éléments pour lesquels la callback est vrai)


function filterByType(category) {
    return restaurants.filter(restaurant => restaurant.category === category); // fonction callback anonyme car .filter prend en argument une fonction qui retourne true ou false
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


// filtre quand on clique en se basant sur la couleur du filtre

function clickFilter(idTypeOfRestaurant, filteredType) {
    idTypeOfRestaurant.addEventListener('click', () => {
        if (idTypeOfRestaurant.classList.contains("color-clicked-filter")) {
            console.log(filteredType);
        }
    });
};

clickFilter(idBurger, filteredBurger);
clickFilter(idPizza, filteredPizza);
clickFilter(idBrunch, filteredBrunch);
clickFilter(idBar, filteredBar);
