import { reviews } from "../data/reviews";

export let containerReview = document.querySelector('.reviews');

function createAReview(tag, classname = null, parent) {
    const element = document.createElement(tag);
    element.classList.add(classname);
    parent.appendChild(element);
    return element;
}

export function createMyReviews(type, container) {
    const myReview = reviews.find(desc => desc.description === type)

    for (const desc of myReview) {
        const reviewCard = createAReview('article', 'articleReview', container);

        const reviewDesc = createAReview('p', 'reviewDesc', reviewCard);
        reviewDesc.innerText = desc.description

        const reviewImg = createAReview('img', 'reviewImg', reviewCard)
        reviewImg.style.backgroundImage = `url('${place.img}')`;
    };
};