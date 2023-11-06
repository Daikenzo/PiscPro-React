const MealsByCategory = ({category}) =>{

    return(
        <div className="App-container App-card App-list categories">
            <p className="App-card-content App-card  App-card-title">
                 Recettes pour la catégorie sélectionnée :
             </p>
             {category.map((meal) => {
             return (
                <div className="App-card-content App-list" key={meal.idMeal}>
                    <h3 className="App-list">{meal.strMeal}</h3>
                </div>
             );
            })}
        </div>
    );
};

export default MealsByCategory