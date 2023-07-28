import { useEffect, useState } from "react";

const CoctailsList = () =>{
    const [cocktails, setCocktails] = useState([]);
    const [detailCocktail, setDetailCocktail] = useState([]);
      
    const fetchCocktails = async () => {
      const responseApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
      const responseJson = await responseApi.json();
      console.log(responseJson.drinks)
      setCocktails(responseJson.drinks);
    }
  
   const handleDetailsClick = async (idCocktail) => {
      const responseApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idCocktail}`);
      const responseJson = await responseApi.json();
  
      setDetailCocktail(responseJson.Cocktails[0]);
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
      
      {detailCocktail && (
        <div>
          <h2>Détails de la recette</h2>
          <p>Cocktails.strInstructions</p>
        </div>
      )}

        <div className="App-content">
          {cocktails.length === 0 && <p>Loading...</p>}
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
                <h2>{cocktail.strDrink}</h2>
                <img className="App-card-image"src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </div>
                ))}
            </div>
        </div>
    );
};

export default CoctailsList;