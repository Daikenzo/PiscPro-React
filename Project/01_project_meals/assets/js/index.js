// Project 01 - Index.js
// Import

// global Var & Function
    // Library
// alt : "../../../assets/src/json/themeallib.json";
const fetchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s" 
    //DOM Listener
const divRoot = document.querySelector("#root"); // Js Main Container (id:Root)

    //Creation de composant HTML
// (Type , {attributes}, TextContent)
const createNodeElement = (tagType, attributes, text = "") => {
  const nodeElement = document.createElement(tagType);

  for (const property in attributes) {
    nodeElement.setAttribute(property, attributes[property]);
  }

  nodeElement.textContent = text;

  return nodeElement;
};

//-----------------------
//--- Site Components ---
//-----------------------
// Form Contact
// fonction qui permet de créer le formulaire de contact
// et de gérer sa logique (envoie des données au submit si besoin etc)
const contactFormComponent = () => {
    const formElement = createNodeElement("form");
  
    const inputTextElement = createNodeElement("input", {
      type: "text",
      class: "contact-text",
    });
    formElement.appendChild(inputTextElement);
  
    const submitBtnElement = createNodeElement(
      "button",
      {
        type: "submit",
        class: "contact-submit",
      },
      "Valider"
    );
    formElement.appendChild(submitBtnElement);
  
    divRoot.appendChild(formElement);
  };
// Call Form
contactFormComponent();

// Display Meal List
// création de la fonction pour afficher la liste de recettes
// fait un appel vers l'api pour récupérer les données
// créer le HTML pour afficher les données (recettes de cuisines)
const mealsListComponent = async () => {
    // Set fetch Data
    const responseJson = await fetch(fetchUrl);
    const responseJavascript = await responseJson.json();
  
    // Create meals List Objects
    responseJavascript.meals.forEach((meal) => {
        // Meal List container
        const mealtArticle = createNodeElement(
            "article",
            {
                class:  "container meal-list"
            }
        );
        divRoot.appendChild(mealtArticle)
        // Title
        const mealTitleElement = createNodeElement(
            "h2",
            {
            class: "meal-title",
            },
            meal.strMeal
        );
    mealtArticle.appendChild(mealTitleElement);
    const mealImgElement = createNodeElement(
        //article picture
        "img", {
            src: meal.strMealThumb,
            class: "img-container"
        });
        mealtArticle.appendChild(mealImgElement);
    });
};

// appel de la fonction qui permet de créer la liste des recettes de cuisine
mealsListComponent();