// Const & Var /Function Global Init
const button = document.querySelector('button');
button.addEventListener('click', ()=>{ 
    // Function : Create Element : Créer un élément pour le DOM
	const createNodeElement  = (tagType, className, text ="", imgSrc="") =>{
		// type d'élements créé
		const nodeElement = document.createElement(tagType);
		// Classe(s) de l'éléments
		nodeElement.setAttribute("class", className);
		// url (source image) de l'élements
		nodeElement.setAttribute('src', imgSrc);
		// contenu textuel de l'éléments
		nodeElement.textContent = text;
		// retourner l'objet généré
		return nodeElement;
    }
    
	// create Article
	const divRoot = document.querySelector('#root');
	const articleElement = createNodeElement("article");
    divRoot.appendChild(articleElement);
	// Title Name
	const articleName = createNodeElement("h2", "article-Name", "Title");
	articleElement.appendChild(articleName);
	// Article Img
	const articleImage = createNodeElement("img", "article-Name", "", "/img/picture.jpg");
	articleElement.appendChild(articleImage);
	// Article Content
	const articleText = createNodeElement("p", "article-content", "I'm one text content of Article");
	articleElement.AppendChild(articleText);

});