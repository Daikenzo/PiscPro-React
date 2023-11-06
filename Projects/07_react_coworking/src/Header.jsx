// Import

import './css/App.css';
import './css/Header.css';
import Welcome from './components/Welcome';

const Header = ({siteLogo}) =>{
    

    return(
    // Display
    <header className="App-header">
        <div className="Header-container App-container" id="logo-content">
            <img src={siteLogo} className="App-logo" alt="logo" />
        </div>
        
        <nav className="Header-nav App-navMenu">
            <ul className="Header-nav nav-contents">
                <li className="nav-item"><a target="_blank" href="#Home" alt="item1" className="App-link">MenuItem1</a></li>
                <li className="nav-item"><a target="_blank" href="#Contact" alt="" className="App-link">MenuItem2</a></li>
                <li className="nav-item"><a target="_blank" href="#List" alt="" className="App-link">MenuItem3</a></li>
                <li className="nav-item"><a target="_blank" href="#blabla" alt="" className="App-link">MenuItem4</a></li>
            </ul>
        </nav>
        <div>
          <Welcome />
        </div>

    </header>
    );

};

export default Header;