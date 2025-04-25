//selet all filter buttons and filterable cards

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filter_cards card");

//define the filtercards function
const filtercards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e,target);

    //interate over each filterable card
    filterableCards.forEach(card => {
    //add "hide" calss to hide the card initially
    card.classList.add("hide");
    //check if the card matches the selected filter or "all" is selected
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card,classList.remove("hide")
    }
    })
};

//console.log(filterButtons, filterableCards);
//add click event listener to each filter button

filterButtons.forEach(button => button.addEventListener("click", filterableCards))