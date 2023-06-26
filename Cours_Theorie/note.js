// Const & Var /Function Global Init
const button = document.querySelector('button');
button.addEventListener('click', ()=>{ 
    // Function : Create Element 
	const createNodeElement  = (tagType, className, text ="", imgSrc) =>{
	const nodeElement = document.createElement(tagType);
	nodeElement.setAttribute("class", className);
	nodeElement.setAttribute('src', imgSrc);
	nodeElement.textContent = text;
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