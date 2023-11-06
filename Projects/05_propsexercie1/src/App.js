
import './css/App.css';
import  './css/Header.css'
import  './css/Footer.css'

import  Header from './components/Header';
import  Footer from './components/Footer'
import  Profiles from './components/Profiles';

import LastCocktails from "./LastCocktails";
import RandomCocktail from "./RandomCocktail";
import RhumCocktailsList from "./RhumCocktailsList";
import CocktailsList from "./CocktailsList";

function App() {
  const userFromApi= {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };

  const cocktailsFromApi = [
    {
      id: 1,
      name: "Mojito",
      price: 8,
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
      isPublished: true,
    },
    {
      id: 2,
      name: "Margarita",
      price: 10,
      ingredients: ["Tequila", "Triple sec", "Citron vert"],
      isPublished: true,
    },
    {
      id: 3,
      name: "Sangria",
      price: 6,
      ingredients: ["Vin rouge", "Fruits", "Sucre"],
      isPublished: false,
    },
    {
      id: 4,
      name: "Pina colada",
      price: 12,
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      isPublished: true,
    }, {
      id: 5,
      name: "Bloody Mary",
      price: 8,
      ingredients: ["Vodka", "Jus de tomate", "Sauce Worcestershire"],
      isPublished: true,
    }, {
      id: 6,
      name: "Ti punch",
      price: 8,
      ingredients: ["Rhum", "Citron vert", "Sirop de canne"],
      isPublished: true,
    }
  ];

  console.log(cocktailsFromApi);
   // je filtre les cocktails pour ne garder que ceux qui sont publiés
  // je passe cette variable à tous les composants qui en ont besoin
  const cocktailsPublished = cocktailsFromApi.filter((cocktail) => {
    return cocktail.isPublished;
  });

  return (
    <div className="App App-background">
      <Header UserCurrent={userFromApi}/>
      <main className="main-containers App-Main " id="main-contents">
      <RandomCocktail cocktailsPublished={cocktailsPublished} />
      <LastCocktails cocktailsPublished={cocktailsPublished} />
      <CocktailsList cocktailsPublished={cocktailsPublished} />
      <RhumCocktailsList cocktailsPublished={cocktailsPublished} />
        <Profiles UserCurrent={userFromApi} />
        </main>
      <Footer />
    </div>
  );
}

export default App;
