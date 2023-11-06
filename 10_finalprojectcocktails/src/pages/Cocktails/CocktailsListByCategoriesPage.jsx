import { Link, useParams, redirect, Navigate } from "react-router-dom"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import NoPage from "../NoPage";

const CocktailsListByCategoriesPage = () =>{
    // Stock param Categorie queries 
    const { categoryName } = useParams();

    const [cocktails, setCocktails] = useState([]);
  
    const fetchCocktailsByCategory = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      const data = await response.json();

        if(typeof data.drinks.length === typeof){
          setCocktails(data.drinks);
        }
        
      
      
      
  
      
    };
  
    useEffect(() => {
      fetchCocktailsByCategory();
    }, [categoryName]);
  
    return (
      <>
        <Header />
        <main className="App-main">
            <h1>Cocktails pour la categorie : {categoryName}</h1>
            <div className="App-content App-container">
            {cocktails.length === 0 ? (
                <p>Loading...</p>
            ) : (
            <div>
              {cocktails.map((cocktail) => (
                <div className="App-container App-card" key={cocktail.idDrink}>
                  <h2>{cocktail.strDrink}</h2>
                  <div className="App-card-info">
                    <div className="App-card-link App-link">
                        <Link to={"/cocktails/show/" + cocktail.idDrink}>
                            Voir le cocktail
                        </Link>
                    </div>
                    <div className="App-card-image">
                        <img className="img-container" 
                        src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    </div>
                  </div>
                  
                </div>
              )
                )
              }
            </div>
          )}
        </div>
        </main>
      </>
    );
  };
export default CocktailsListByCategoriesPage