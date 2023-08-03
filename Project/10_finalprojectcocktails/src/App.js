import './css/App.css';
import './css/EmbedPict.css'

// Route Import
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import RandomCocktailPage from "./pages/Cocktails/RandomCocktailPage";
import CocktailsListPage from './pages/Cocktails/CocktailsListPage';
import SearchResultsPage from "./pages/SearchResultsPage";
import ShowCocktailPage from "./pages/Cocktails/ShowCocktailPage"
import CocktailsListByCategoriesPage from './pages/Cocktails/CocktailsListByCategoriesPage';


import NoPage from './pages/NoPage';
//<CoctailsList />
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailsListPage/>} />
        <Route path="/cocktails/show/:id" element={<ShowCocktailPage/>} />
        <Route path="/cocktails/by-category/:categoryName" 
        element={<CocktailsListByCategoriesPage/>} />
        <Route path="/cocktails/random" element={<RandomCocktailPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        {/*Error 404 */}
        <Route path="/error-403" element={<NoPage errorType='403'/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;