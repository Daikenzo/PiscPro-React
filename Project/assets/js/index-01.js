// Project 01 - Index.js
// var & const global
// reference
const button = document.querySelector('button'); // cibler le button 

// Init
// init();
// Flexible function
    // Create Node Element
    //Créer un élément de type tagType (ex:div) de classe(s) classNames.
    // Si une source src de valeur imgsrc et/ou un contenu textuel de valeur contentTxt, définir l'attribu à sa valeur.
const createNodeElement = (tagType, classNames, contentTxt = "", imgsrc = "") =>{
    const nodeElement = document.createElement(tagType);    // type d'élement DOM
    nodeElement.setAttribute("class", classNames);  //Classe de l'éléments
    nodeElement.setAttribute('src', imgsrc);        // source de l'image (optionnel)
    nodeElement.textContent = contentTxt;           // contenu Textuel de l'élement
    // retourner l'objet défini
    return nodeElement;
};
// Run

exo1();




// Exo
function exo1(){
    button.addEventListener('click', () =>{
        // Create Article Element (from Root div)
        const divRoot = document.querySelector('#root')
        // créer article
        const articleEl = createNodeElement("article")
        divRoot.appendChild(articleEl);

        // create title    
        const titleEl = createNodeElement("h2",
        "title-piscine", 
        "Title  Article");
        articleEl.appendChild(titleEl);
    
        //Create Image
        const imgElement = createNodeElement(
            "img",
            "img-piscine", 
            "", 
            "https://developer.mozilla.org/pimg/aHR0cHM6Ly9zLnprY2RuLm5ldC9BZHZlcnRpc2Vycy84NTg0Mzc2NzgxOTM0ZWZjYWYxZTU1MGYyMzQ2OGY3NS5wbmc%3D.M4peha%2FjPCrnRjeB5fGs15ztBrN0zSHetSrRSIuMYnk%3D"
            );
        articleEl.appendChild(imgElement)
    
        // Create text
        const textEl = createNodeElement("p","text-piscine", "Bienvenue ici");
        articleEl.appendChild(textEl)
    });
};



// Init
// function init(){
//     //Reference initilisation
// // exo 1
// };

// demo/Test
function _demoTest(){
    button.addEventListener('click', () => {
        console.log("Click on") // Demo Test
    });
    // cibler text
    //const text = document.querySelector('#p-loremExample');
    //mask text
    //text.style.display = "none";
}