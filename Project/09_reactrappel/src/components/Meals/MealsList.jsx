import { useEffect, useState } from "react";
import '../../css/App.css'

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [detailMeal, setDetailMeal] = useState([]);

  const fetchMeals = async () => {
    const responseApi = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const responseJson = await responseApi.json();

    setMeals(responseJson.meals);
  }

 const handleDetailsClick = async (idMeal) => {
    const responseApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const responseJson = await responseApi.json();

    setDetailMeal(responseJson.meals[0]);
  };

  // Init Fetchmeals
  /* Use effect permet d'executer du code au chargement de la  page et à chaque fois qu'une variable précisé (si le tableau n'est pas vide)
  permet d'éviter le chargement en boucle d'une fonction, comme le fetch
  */
  // console.log("render");
  useEffect(()=>{

    fetchMeals();
  }, []);

  return (
    <div>
      <h1>Meals List</h1>

      {detailMeal && (
        <div>
          <h2>Détails de la recette</h2>
          <p>{detailMeal.strInstructions}</p>
        </div>
      )}

      <div className="App-content">
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <button onClick={() => handleDetailsClick(meal.idMeal)}>Afficher le détail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsList;