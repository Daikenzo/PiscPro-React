// Import dom
const cards = document.querySelectorAll(".card");

// Create Input Selector for all card
cards.forEach((card)=>{
    card.addEventListener("click", ()=>{
        // Create availability selector for this card
        const availability = card.querySelector(".availability");
        // Change display
        availability.style.display = "block";
        console.log("click", card)
    });
});