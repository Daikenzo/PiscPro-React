import  './css/App.css';
// components
  //Page
import  Header  from  './components/Header.jsx'
import  Footer from './components/Footer';
  //Contents
import MealList from './components/MealList';

function App() {
  return (
    <> 
      <Header />
      <main>
        <MealList />
      </main>
      <Footer />
    </>
  );
}

export default App;
