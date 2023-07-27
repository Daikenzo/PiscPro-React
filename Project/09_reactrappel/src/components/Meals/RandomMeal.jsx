import { useEffect, useState } from "react";
import "../../css/App.css"
import "../../css/EmbedPict.css"

const RandomMeal = () =>{
    const [randomMeal, setRandomMeal] = useState(null);

    const fetchRandomMeal = async () => {
        const responseApi = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const responseJson = await responseApi.json();

        setRandomMeal(responseJson.meals[0]);
        
    };

    useEffect(()=>{
        fetchRandomMeal("https://www.themealdb.com/api/json/v1/1/search.php?s=big");
    }, []);

    return(
        <div>
            <h1>Random Meal</h1>
  
            {randomMeal ? (
            <div>
                <h2>{randomMeal.strMeal}</h2>
                <div className="App-card-image">
                    <img className="img-container" src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                </div>
                
            </div>
            ) : (
            <div>Loading...</div>
            )}
      </div>
    );
};

export default RandomMeal;