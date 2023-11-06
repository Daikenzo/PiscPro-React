import React from "react";

const CocktailSingle = ({ cocktail }) => {
  return (
    <article>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.price}€</p>
      <ul>
        {cocktail.ingredients.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </article>
  );
};

export default CocktailSingle;