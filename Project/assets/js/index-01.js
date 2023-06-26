// Project 01 - Index.js
// var & const global
let result, consigneMess; 

// refference
const button = document.querySelector('button'); // cibler le button 
// // au click button
// button.addEventListener('click', () => {
//     console.log("Click on")

// // cibler text
// const text = document.querySelector('#p-loremExample');


// //mask text
// text.style.display = "none";

// // function

// });
//init


button.addEventListener('click', () =>{
    // créer article
    const articleEl = document.createElement('article');

    const divRoot = document.querySelector("#root");

    divRoot.appendChild(articleEl);

    // create title
    const titleEl = document.createElement("h2");

    titleEl.textContent = "Hello here";
    articleEl.appendChild(titleEl);

    //Create Image
    const imgElement = document.createElement("img");
    imgElement.setAttribute('src', "https://developer.mozilla.org/pimg/aHR0cHM6Ly9zLnprY2RuLm5ldC9BZHZlcnRpc2Vycy84NTg0Mzc2NzgxOTM0ZWZjYWYxZTU1MGYyMzQ2OGY3NS5wbmc%3D.M4peha%2FjPCrnRjeB5fGs15ztBrN0zSHetSrRSIuMYnk%3D");

    articleEl.appendChild(imgElement)

    // Create text
    const textEl = document.createElement("p");
    textEl.textContent ="bienvenue à la piscine !";
    articleEl.appendChild(textEl)
})

function init(){


};

