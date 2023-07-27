import { useEffect, useState } from "react";
import '../css/App.css'
import MealsByCategory from "./Meals/MealsByCategory";

const ListCategories = () =>{
    const [categories, setCategories] = useState([]);
    const [mealsByCategory, setMealsByCategory] = useState([]);

    const fetchCategories = async () =>{
        const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const categoriesJs = await categoriesResponse.json();

        setCategories(categoriesJs.categories);
    }
    // Load Fetch on starttup page
    // UseEffect permet de charger qu'un nombre de fois limité du composant.
    // Sans valeur inscrite dans un tableau à la fin (donc []), elle ne se lance qu'au premier chargement du composant
    useEffect(()=>{
        fetchCategories();
    }, []);

    // Category Click btn function
    const handleCategoryClick = async (titleCategory) => {
        const responseMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${titleCategory}`);
        const mealsByCategory = await responseMeals.json();
    
        setMealsByCategory(mealsByCategory.meals);
      };
    

    return(
        <div className="App-container App-list categories">
            <h2>Categories</h2>
            <div>
                {categories.map((category) => {
                    return (
                        <nav className="App-container categories" key={category.idCategory}>
                            <div className="App-card">
                                <h3>{category.strCategory}</h3>
                                <img className="App-card-image"src={category.strCategoryThumb} alt={category.strCategory} />
                            </div>
                            <div className="App-card App-card-content">
                                <p className="" >{category.strCategoryDescription}</p>
                            </div>
                            
                            <div className="App-card categories btn">
                                <button onClick={() => handleCategoryClick(category.strCategory)}>
                                    Voir toutes les recettes
                                </button>
                            </div>
                        </nav>
                    );
                })}
            </div>
            <MealsByCategory category={mealsByCategory}/>
        </div>
    );
};

export default ListCategories;