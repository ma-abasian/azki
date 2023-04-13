let sliderCards = document.querySelector(".slider__cards");
let sliderCard = document.querySelector(".slider__card-container");
let sliderCardWidth = sliderCard.clientWidth;
let counter = 0;
let sliderLength = sliderCards.children.length;
let max = sliderCardWidth * (sliderLength - 1);

document.querySelector(".--right").addEventListener("click", () => {
    counter++;
    let transWidth = counter * sliderCardWidth;
    if (counter === sliderLength) {
        transWidth = 0;
        counter = 0;
        sliderCards.style.transform = `translateX(${transWidth})`;
    } else {
        sliderCards.style.transform = `translateX(${transWidth}px)`;
    }

});

document.querySelector(".--left").addEventListener("click", () => {
    counter--;
    let transWidth = counter * sliderCardWidth;
    if (counter === -1) {
        transWidth = max;
        console.log(transWidth)
        counter = sliderLength -1;
        sliderCards.style.transform = `translateX(${transWidth}px)`;
    } else {
        console.log(transWidth)
        sliderCards.style.transform = `translateX(${transWidth}px)`;
    }
});