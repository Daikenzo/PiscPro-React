// import
import LogoDisplay from './LogoDisplay';
import '../css/App.css';


const Header = () => {
    return (
      <header className='App-header'>
        <LogoDisplay />
        <nav className='App-navbar App-container'>
          <ul className='App-navbar'>
            <li className='nav-item'>
              <a className="App-link" href="#AboutUs">About us</a>
            </li>
            <li className='nav-item'>
              <a className="App-link" href="#Career">Career</a>
            </li>
            <li className='nav-item'>
              <a className="App-link" href="#Departments">Departments</a>
            </li>
          </ul>
        </nav>
        
      </header>
    );
  };
  
  export default Header;