// Import

import './css/App.css';
import './css/Header.css';

const Header = ({siteLogo}) =>{
    const coworkingsFromFakeApi = [
        {
          id: 1,
          name: "Coworking 1",
          address: "Adresse 1",
          city: "Ville 1",
          image: "https://picsum.photos/200/300",
          rating: 4,
        },
        {
          id: 2,
          name: "Coworking 2",
          address: "Adresse 2",
          city: "Ville 2",
          image: "https://picsum.photos/200/300",
          rating: 3,
        },
        {
          id: 3,
          name: "Coworking 3",
          address: "Adresse 3",
          city: "Ville 3",
          image: "https://picsum.photos/200/300",
          rating: 5,
        },
        {
          id: 4,
          name: "Coworking 4",
          address: "Adresse 4",
          city: "Ville 4",
          image: "https://picsum.photos/200/300",
          rating: 2,
        },
      ];

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

    </header>
    );

};

export default Header;