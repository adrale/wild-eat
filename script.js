

// ----------------------------------------- NAVBAR ---------------------------------


const qualityCard = document.querySelector(".aboutUs-quality");
const qualityHidden = document.querySelector(".qualityHidden");

qualityCard.addEventListener("click", function () {
    qualityCard.classList.toggle("unhideArticle");
    qualityHidden.classList.toggle("unhide");
})

const availabilityCard = document.querySelector(".aboutUs-availability");
const availabilityHidden = document.querySelector(".availabilityHidden");

availabilityCard.addEventListener("click", function () {
    availabilityCard.classList.toggle("unhideArticle");
    availabilityHidden.classList.toggle("unhide");
})

const teamCard = document.querySelector(".aboutUs-team");
const teamHidden = document.querySelectorAll(".teamHidden");

teamCard.addEventListener("click", function () {
    teamCard.classList.toggle("unhideArticle");
    for (let i = 0; i < teamHidden.length; i++) {
        teamHidden[i].classList.toggle("unhidePicture");
    }
})

// ----------------------------------------- HERO - MAIN ---------------------------------

const searchInput = document.querySelector('input')
searchInput.addEventListener('change', (event) => {
    const searchValue = event.target.value;
    // Vider le container parent a l'aide de .innerHTML = "" || Supprimer les autres card
    if (restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) || restaurant.type.toLowerCase().includes(searchValue.toLowerCase()))) {
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
            if (place.category === category) {
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



// ----------------------------------------- Barre de recherche ---------------------------------


// fonction pour associer un nom de restaurant au type de restaurant pour ensuite appeler createCards(type, container)
// car createCards prend en 1er paramètre le type du restaurant et non le nom du restaurant
// mais du coup ça va recréer toutes les cartes pour un type de restaurant
// donc c'est mort à moins de trouver un expert en JS

function findRestaurantType(restaurantName) {
    for (const category of allArray) {
        for (const place of category.places) {
            if (place.name === restaurantName) {
                return category.type;
            }
        }
    }
    return null; // retourne null si aucun restaurant avec le nom donné n'est trouvé
}

console.log(findRestaurantType("My Beers")); // RENVOIE BIEN LE TYPE DU RESTO MY BEERS !


// tableau vide pour stocker les noms des restaurants
const restaurantNames = [];

// push les noms de resto dans le tableau vide
allArray.forEach(category => {
    category.places.forEach(place => {
        restaurantNames.push(place.name);
    });
});

console.log(restaurantNames); // on obtient bien un tableau avec les noms des restos

const inputName = document.getElementById('search'); // DOM input barre de recherche
const container = document.getElementById("allTheCards"); // DOM container cards

inputName.addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase();
    console.log(searchValue);

    container.innerHTML = ""; // efface le contenu du conteneur avant d'afficher les résultats filtrés

    // filtre les noms de restaurants en fonction de l'input
    // const filteredRestaurantsNames = restaurantNames.filter((restaurantName) => {
    //     return restaurantName.toLowerCase().includes(searchValue);
    // });

    // console.log(filteredRestaurantsNames);

    restaurantNames.filter((restaurantName) => {
        if (restaurantName.toLowerCase().includes(searchValue)) {
            createCards(findRestaurantType(restaurantName), container);
        } else {
        };
    });
});

// idée : ajout méthode .trim()




// tentative n°1 dans createCards pour passer du nom du resto au type de resto (méthode restaurantNames) ?

// allArray.forEach(category => {
//     category.places.forEach(place => {(place.name);
//     });
// })



// tentative n°2 dans createCards pour passer du nom du resto au type de resto (méthode Adrien filtre bouton) ?

// function displayCardByRestaurantName (filteredRestaurantsNames) {
//     for (let i = 0; i < filteredRestaurantsNames; i++) {
//         if (filteredRestaurantsNames === searchValue) {
//             sectionArray.forEach(section => {
//                 section.style.display = ............;
//             })} else {.........
//     }};
// };