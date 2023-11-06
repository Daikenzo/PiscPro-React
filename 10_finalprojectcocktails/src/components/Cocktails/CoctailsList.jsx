import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CoctailsList = () =>{
    const [cocktails, setCocktails] = useState([]);
    const [detailCocktail, setDetailCocktail] = useState([]);
      
    const fetchCocktails = async () => {
      const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
      const cocktailsJs = await cocktailsResponse.json();
      console.log(cocktailsJs.drinks)
      setCocktails(cocktailsJs.drinks);
    }
  
   const handleDetailsClick = async (idCocktail) => {
      const cocktailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idCocktail}`);
      const cocktailsJs = await cocktailsResponse.json();
  
      setDetailCocktail(cocktailsJs.drinks[0]);
    };
  
    // Init FetchCocktails
    /* Use effect permet d'executer du code au chargement de la  page et à chaque fois qu'une variable précisé (si le tableau n'est pas vide)
    permet d'éviter le chargement en boucle d'une fonction, comme le fetch
    <button onClick={() => handleDetailsClick(cocktail.idcocktail)}>Afficher le détail</button>
    */
   
    // console.log("render");
    useEffect(()=>{
  
      fetchCocktails();
    }, []);

return (
    <div App-container cocktail App-list>
        <h2>Liste des Cocktails</h2>
      
      {/*detailCocktail  && (
        <div>
          <h2>Détails de la recette</h2>
          <p>{cocktails.strInstructions}</p>
        </div>
      )*/}

        <div className="App-content">
          {cocktails.length === 0 && <p>Loading...</p>}
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
                <h2>{cocktail.strDrink}</h2>
                <img className="App-card-image"src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <div className="App-card-content">
                  <Link to={"/cocktails/by-category/" + cocktail.strCategory}>
                    <p>Categorie : {cocktail.strCategory}</p>
                  </Link>

                  <Link to={"/cocktails/show/" + cocktail.idDrink}>
                    Voir le cocktail
                  </Link>
                </div>
          </div>
                ))}
            </div>
        </div>
    );
};

export default CoctailsList;