// Project 01 - Index.js
// Import

// global Var & Function
    // Library
    //DOM Listener
const divRoot = document.querySelector("#root"); // Js Main Container (id:Root)

    //Creation de composant HTML
// (Type , attributes{}, TextContent)
const createNodeElement = (tagType, attributes, text = "") => {
    const nodeElement = document.createElement(tagType);
    // set attributes values Input from object (atribut name, property)
    // If attribute Property Value != "null" => add property to object with value
    for (const property in attributes) {
        // ex: element.setAttribute(AtributePropertyName, attribute[value])
        nodeElement.setAttribute(property, attributes[property]);
    }
    // set TextContent Value (default: "")
    nodeElement.textContent = text;
    // Return Generated element
    return nodeElement;
};

//-----------------------
//----- Components ------
//-----------------------
// Form Contact
// Générère un composant de formulaire avec envoie des données
// et de gérer sa logique (envoie des données au submit si besoin etc)
const contactFormComponent = () => {
    // Create Form container
    const formElement = createNodeElement("form");
    // add Form Element
        // Contact text Input Zone
    const inputTextElement = createNodeElement("input", {
      type: "text",
      class: "contact-text",
      id:   "form-Input"
    });
    formElement.appendChild(inputTextElement);
    // Submit Element
    const submitBtnElement = createNodeElement(
      "button",
      {
        type: "submit",
        class: "contact-submit",
        id: "form-Btn"
      },
      "Valider"
    );
    formElement.appendChild(submitBtnElement);
  
    divRoot.appendChild(formElement);
  };
// Call Form
contactFormComponent();

// Set, Update & Display Meal List
const mealsListComponent = async () => { // Async Update Function
    // Library Var
    // meal json library offline alt : "../../../assets/src/json/themeallib.json";
    const fetchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s" 
    // Set fetch & receive Data (from fetchUrl)
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
        // recipies article Title
        const mealTitleElement = createNodeElement(
            "h2",
            {
            class: "meal-title",
            },
            meal.strMeal
        );
    mealtArticle.appendChild(mealTitleElement);
    const mealImgElement = createNodeElement(
        //recipies article picture
        "img", {
            src: meal.strMealThumb,
            class: "img-container"
        });
        mealtArticle.appendChild(mealImgElement);
    });
};

// call generated mails list
mealsListComponent();

// meals Categories
const   mealsCategoriesListComponent = async () => {
    // Library Var
    const fetchUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
    // Call API to set Categories
    const   categoriesListResponsesJson = await fetch(fetchUrl);
    // convert php to json
    const   categoriesList = await categoriesListResponsesJson.json(); // await converted final object

    // set & create Category Objects
    categoriesList.categories.forEach((category) => {
        // Category Title
        const categoryTitleNode = createNodeElement(
            "h3",
            {
                class: "category-title",

            },
            category.strCategory
        );
        divRoot.appendChild(categoryTitleNode);
    });

};

mealsCategoriesListComponent();