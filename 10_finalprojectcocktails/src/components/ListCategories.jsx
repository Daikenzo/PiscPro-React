import { useEffect, useState } from "react";
import '../css/App.css'
import CoctailsList from "./Cocktails/ListCoktails";

const ListCategories = () =>{
    const [categories, setCategories] = useState([]);
    

    // const fetchCategories = async () =>{
    //     const categoriesResponse = await fetch("");
    //     const categoriesJs = await categoriesResponse.json();

    //     setCategories(categoriesJs.categories);
    // }
    // Load Fetch on starttup page
    // UseEffect permet de charger qu'un nombre de fois limité du composant.
    // Sans valeur inscrite dans un tableau à la fin (donc []), elle ne se lance qu'au premier chargement du composant
    // useEffect(()=>{
    //     fetchCategories();
    // }, []);

    // Category Click btn function
    
    

    return(
        <div className="App-container App-list categories">
            <h2>Categories</h2>
            <div>
                CocktailsCategories
            </div>
        </div>
    );
};

export default ListCategories;