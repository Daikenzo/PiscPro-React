import  './css/App.css';
// components
  //Page
import  Header  from  './components/Header.jsx'
import  Footer from './components/Footer';
  //Contents
import MealList from './components/MealList';
import MenuHero from './components/MenuHero';

function App() {
  return (
    <> 
      <Header />
      <main>
        <MealList />
        <MenuHero />
      </main>
      <Footer />
    </>
  );
}

export default App;
