import "../../css/App.css"
import "../../css/EmbedPict.css"
import { useEffect, useState } from "react";

const SearchMeals = () =>{
    const [meals, setMeals] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const searchValue = event.target.search.value;

    const responseSearchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
    const responseJsSearchApi = await responseSearchApi.json();

    setMeals(responseJsSearchApi.meals);
  };

  const fetchMeals = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const responseJson = await response.json();

    setMeals(responseJson.meals);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <>
      <div className="App-search search form" id="search-form-contents">
        <form onSubmit={handleSearch}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
    <div className="App-card">

    </div>
      {!meals ? (
        <p>No meals found</p>
      ) : (
        <div className="App-container  App-card">
          {meals.map((meal) => (
            <div className="App-card-content"key={meal.idMeal}>
              <h2>{meal.strMeal}</h2>
              <img className="App-card-image"src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchMeals;