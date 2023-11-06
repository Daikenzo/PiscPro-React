import React, { useEffect, useState } from "react";
import { useSearchParams, Link} from "react-router-dom";
// Import File (other React)
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../css/App.css'
import '../css/EmbedPict.css'

const SearchResultsPage = () => {
  const [cocktails, setCocktails] = useState([]);

  // Récupération des parametres de recherche
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  // Appel de l'api de recherche
  const fetchSearchResults = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    const responseJs = await response.json();

    setCocktails(responseJs.drinks);
  };

  // chargement du composant fetch au chargement de la page et/ou la modification de la valeur searchParams
  useEffect(() => {
    fetchSearchResults();
  }, [search]);

  return (
    <>
      <Header />
      <main className="App-main App-search">
        <div className="App-container">
          <h1>Résultats de la recherche : </h1>

        <div>
          {cocktails && (
            <>
              {(cocktails.map((cocktail) => (
              <div className="App-container App-card" key={cocktail.idDrink}>
                <h2 className="App-list-item">{cocktail.strDrink}</h2>
                <div className="App-list-item App-card-image">
                  <img className="App-card-image img-container" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </div>
                <Link to={"/cocktails/show/" + cocktail.idDrink}>Voir le cocktail</Link>
              </div>
              )))}
            </>
          )}
        </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default SearchResultsPage;