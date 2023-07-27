import { useEffect, useState } from "react";

const ListCategories = () =>{
    const [categories, setCategories] = useState([]);

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

    return(
        <div className="App-list categories">
            <h2>Categories</h2>
            <nav>
                {categories.map((category) => {
                    return (
                        <div className="App-card" key={category.idCategory}>
                            <h3>{category.strCategory}</h3>
                            <img src={category.strCategoryThumb} alt={category.strCategory} />
                            <p>{category.strCategoryDescription}</p>
                        </div>
                    );
                })}
            </nav>
        </div>
    );
};

export default ListCategories;