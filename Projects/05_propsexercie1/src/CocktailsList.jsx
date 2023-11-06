import CocktailSingle from "./CocktailSingle";

// je récupère la valeur de la props cocktailsPublished
const CocktailsList = ({ cocktailsPublished }) => {
  return (
    <section>
      <h1>La liste des cocktails :</h1>
      {cocktailsPublished.map((cocktail) => {
        return <CocktailSingle cocktail={cocktail} />;
      })}
    </section>
  );
};

export default CocktailsList;