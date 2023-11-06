// import
import LogoDisplay from './LogoDisplay';
import '../css/App.css';
import '../css/EmbedPict.css'

// react Rooter function
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  // Call React Rooter Function
  const navigate = useNavigate();

  //Event Listener for search
  const handleSubmit = (event) => {
    event.preventDefault();

    const search = event.target.search.value;
    // set Search
    navigate(`/search-results?search=${search}`)
  };

    return (
      <header className='App-header'>
        <LogoDisplay />
        <nav className='App-navbar'>
          <ul className='App-navbar App-menu'>
          <li className='nav-item'>
              <Link to="/" className="App-link">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/cocktails" className="App-link">Liste des Cocktails</Link>
            </li>
            <li className='nav-item'>
              <Link to="/cocktails/random" className="App-link">Cocktail Roulette</Link>
            </li>
          </ul>
        </nav>
        <div className="App-navbar App-search">
          <form onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Rechercher un cocktail" />
            <button type="submit">Rechercher</button>
          </form>
        </div>
      </header>
    );
  };
  
  export default Header;