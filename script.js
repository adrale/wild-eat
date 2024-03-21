

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
    const searchValue = event.target.value;
    // Vider le container parent a l'aide de .innerHTML = "" || Supprimer les autres card
    if(restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) || restaurant.type.toLowerCase().includes(searchValue.toLowerCase()))) {
    // Creation des card avec le nom du restaurant || du filtre
    } 
})


// ----------------------------------------- SECTION - MAIN ---------------------------------

import { allArray } from "./data/myArray.js";

import { createCards } from "./functions/createCard.js";
createCards('Burger', document.querySelector('.allCards')); 
createCards('Brunch', document.querySelector('.allBrunch'));
createCards('Bars', document.querySelector('.allBars'));
createCards('Popular', document.querySelector('.all-cards-pop'));

function filterByType(category) {
    let filteredPlaces = [];

    allArray.forEach(item => {
        item.places.forEach(place => {
            if(place.category === category) {
                filteredPlaces.push(place);
            }
        })
    })
    return filteredPlaces;
}

const filteredBurger = filterByType("Burger"); // je viens stocker ces éléments dans de nouveaux tableaux
const filteredPizza = filterByType("Pizza");
const filteredBrunch = filterByType("Brunch");
const filteredBar = filterByType("Bars");


// ajoute une couleur au clique

const classRestaurant = document.getElementsByClassName("filter-restaurant");

function toggleColor(place) {
    if (place.classList.contains("color-clicked-filter")) {
        // si le bouton est déjà coloré supprime la couleur
        place.classList.remove("color-clicked-filter");
    } else {
        // sinon ajoute la couleur et désactive la couleur pour les autres boutons
        Array.from(classRestaurant).forEach(place => place.classList.remove("color-clicked-filter"));
        place.classList.add("color-clicked-filter");
    };
};

Array.from(classRestaurant).forEach(place => place.addEventListener('click', () => { toggleColor(place) }));


// récupération des id pour écouter les cliques dans le filtre

const idBurger = document.getElementById("Burger");
const idPizza = document.getElementById("Pizza");
const idBrunch = document.getElementById("Brunch");
const idBar = document.getElementById("Bar");

// Récupération des id/classes pour les différentes sections en vue de les afficher par la suite 
// Définir les sélections dans un tableau
const sections = [
    document.querySelectorAll('.commandes-populaires, .all-cards-pop'),
    document.querySelectorAll('#typeFastFood, .allCards'),
    document.querySelectorAll('#typeBrunch, .allBrunch'),
    document.querySelectorAll('#typeBar, .allBars')
];

// Fonction pour restaurer les sélections par défaut
function restoreDefaultSelections() {
    sections.forEach(sectionArray => {
        sectionArray.forEach(section => {
            section.style.display = "grid";
        });
    });
}

// Fonction de filtrage lors du clic
function clickFilter(idTypeOfRestaurant, filteredType) {
    idTypeOfRestaurant.addEventListener('click', () => {
        if (idTypeOfRestaurant.classList.contains("color-clicked-filter")) {
            console.log(filteredType);
            // Appliquer les filtres
            sections.forEach((sectionArray, index) => {
                if (filteredType === filteredBurger && index !== 1) {
                    sectionArray.forEach(section => {
                        section.style.display = "none";
                    });
                } else if (filteredType === filteredPizza && index !== 0) {
                    sectionArray.forEach(section => {
                        section.style.display = "none";
                    });
                } else if (filteredType === filteredBrunch && index !== 2) {
                    sectionArray.forEach(section => {
                        section.style.display = "none";
                    });
                } else if (filteredType === filteredBar && index !== 3) {
                    sectionArray.forEach(section => {
                        section.style.display = "none";
                    });
                }
            });
        } else {
            // Réinitialiser les sélections par défaut
            restoreDefaultSelections();
        }
    });
}




clickFilter(idBurger, filteredBurger);
clickFilter(idPizza, filteredPizza);
clickFilter(idBrunch, filteredBrunch);
clickFilter(idBar, filteredBar);


// ---- Mise en place du filtre via les boutons -----



