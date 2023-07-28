import { useEffect, useState } from "react";

const RandomCocktail = ({HomePage}) =>{
    const FetchApi = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    const [randomCocktail, setRandomCocktail] = useState(null);

    // randomizer cocktail
    const fetchRandomCocktail = async () => {
        const responseApi = await fetch(FetchApi);
        const responseJson = await responseApi.json();
        console.log(responseJson.drinks[0]) // id:13198 heuuuu
        setRandomCocktail(responseJson.drinks[0]);
      }

      useEffect(()=>{
  
        fetchRandomCocktail();
      }, []);
    return (
        <div>
            <h1>{!HomePage? (<>randomCocktail
            </>) : (<>Cocktail du jour</>)}</h1>
            {// Home page -> article du jour / sinon -> random
            randomCocktail ? (
              <div>
                <h2>{randomCocktail.strDrink}</h2>
                  <div className="App-card-image">
                    <img className="img-container" src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
                  </div>
                  { !HomePage && (
                      <div><button onClick={fetchRandomCocktail}>Changer le cocktail</button></div>
                    ) }
              </div>
  ) : (
  <div>Loading...</div>
  )}
        </div>
    )
}

export default RandomCocktail;