import Footer from "../../components/Footer"
import Header from "../../components/Header"
//React
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowCocktailPage = () =>{
    // Stock param ID queries 
    const [cocktails, setCocktails] = useState([]);
    const { id } = useParams();
    const cocktailIngredients = []

// Appel de l'api de recherche
    const fetchByIDResults = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const responseJs = await response.json();


        console.log(responseJs.drinks[0])
        setCocktails(responseJs.drinks[0]);
    }

    // Load on Startup
    useEffect(()=>{
  
        fetchByIDResults();
      }, []);
    

    return (
        <>
            <Header/>
            <main className="App-main">
                <div className="App-container">
                <h1>{cocktails.strDrink}</h1>
                <div className="App-card App-list App-card-image">
                        <img className="App-card-image img-container" src={cocktails.strDrinkThumb} alt={cocktails.strDrink} />
                    </div>
                <section className="Cocktails Cocktails-info">
                    <div className="Describe">
                        <p>{cocktails.strInstructions}</p>
                    </div>
                    <div className="Cocktails">
                        <div><strong>Verre utilisé</strong> : 
                            <span> {cocktails.strGlass}</span>
                        </div>
                        <div><strong>Contain Alcoholic </strong>: <span>{
                            cocktails.strAlcoholic = "Alcoholic"? 
                            <>Yes</> : <>False</>}</span>
                        </div>
                    </div>
                    <div className="Cocktails Recipies">
                        <h4>Ingredients:</h4>
                        
                    </div>
                </section>
              </div>
            </main>
            <Footer/>
        </>
    )
}

export default ShowCocktailPage;