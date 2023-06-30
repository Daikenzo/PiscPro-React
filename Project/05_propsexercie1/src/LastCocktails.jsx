import CocktailSingle from "./CocktailSingle";

// je récupère la valeur de la props cocktailsPublished
const LastCocktails = ({ cocktailsPublished }) => {
  const lastCocktails = cocktailsPublished.slice(-2);

  return (
    <section>
      <h1>Les deux derniers cocktails publiés :</h1>
      {lastCocktails.map((cocktail) => {
        return <CocktailSingle cocktail={cocktail} />;
      })}
    </section>
  );
};

export default LastCocktails;