import './css/App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import MealsList from "./components/Meals/MealsList";
import RandomMeal from './components/Meals/RandomMeal';
import SearchMeals from './components/Meals/SearchMeals';
import ListCategories from './components/ListCategories';

function App() {
  return (
    <>
      <Header />
      <main className='App-main'>
        <section className="App-container">
          <ListCategories/>
        </section>
        <section className="App-container App-search">
          <RandomMeal />
          <SearchMeals />
        </section>
        <section className="App-container">
          
        </section>
        

      </main>
      <Footer />
    </>
  );
}

export default App;