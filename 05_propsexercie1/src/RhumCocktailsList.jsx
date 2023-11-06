import CocktailSingle from "./CocktailSingle";

// je récupère la valeur de la props cocktailsPublished
const RhumCocktailsList = ({ cocktailsPublished }) => {
  // je filtre les cocktails qui contiennent du Rhum
  const rhumCocktails = cocktailsPublished.filter((cocktail) => {
    return cocktail.ingredients.includes("Rhum");
  });

  return (
    <section>
      <h2>Cocktails au Rhum</h2>
      <ul>
        {/* je boucle sur rhumCocktails et j'utilise le composant CocktailSingle
		pour afficher le détail de chaque cocktail
		*/}
        {rhumCocktails.map((cocktail) => {
          return <CocktailSingle cocktail={cocktail} />;
        })}
      </ul>
    </section>
  );
};

export default RhumCocktailsList;