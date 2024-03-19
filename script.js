// ----------------------------------------- NAVBAR ---------------------------------

const qualityCard = document.querySelector(".aboutUs-quality");
const qualityHidden = document.querySelector(".qualityHidden");
const iconSearch = document.querySelector(".navMobil-search");

    qualityCard.addEventListener ("click", function () {
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

iconSearch.addEventListener ("click", function () {

})

