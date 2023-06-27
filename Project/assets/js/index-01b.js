// Project 01 - Index.js (Alt) - Version Avec Fletch
// var & const global
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
const fetchUrl = "../src/json/themeallib.json";
let data, selectVal;

// reference & Listener;
const button = document.querySelector('button'); // cibler le button 

// Flexible function
    // Create Node Element
    //Créer un élément de type tagType (ex:div) de classe(s) classNames.
    // Si une source src de valeur imgsrc et/ou un contenu textuel de valeur _text, définir l'attribu à sa valeur.
    // on ajoute un attribut avec en type le nom de la propriété et en valeur sa valeur
    const createNodeElement_Data = (tagType,  _text = "", attributes) =>{
        // DOM Elements Type
        const nodeElement = document.createElement(tagType);
        // attributes List Parameters
        for (const property in attributes) {
            nodeElement.setAttribute(property, attributes[property]);
        }; // Text Contents from Element
        nodeElement.textContent = _text;

        // retourner l'objet défini
        return nodeElement;
    };
// data.meals.forEach((element) => {
//   const mealTitle = element.strMeal;
//   const mealTitleElement = createNodeElement_Data("h2", { class: "meal-title" }, mealTitle);
//   console.log(mealTitleElement);
//   divRoot.appendChild(mealTitleElement);
// });

// Data
button.addEventListener("click", async () =>{
    // Create Article Element (from Root div) for display
    const divRoot = document.querySelector('#root');

    // Data Init & Recup
    const responseJson  = await fetch(fetchUrl);
    const dataDecoded = await responseJson.json(); // décode le json en js

    // traitement donnée (Data)
    responseJson.meals.forEach(meal => {
        // Title set & display
        const mealTitleElement = createNodeElement_Data(
            "h2",
            {
                class:"article-title"
            },
            meal.strMeal
        );
        divRoot.appendChild(mealTitleElement);
        // Article img set & Display
        const mealImgElement = createNodeElement_Data(
            "img",
            {
                class:"article-image",
                src:meal.strMealThumb,  /*Image dans la BDD*/
            }
        );
        divRoot.appendChild(mealImgElement);
    });
});

// function

