import '../css/App.css';

const Header = ({logo}) =>{

    return (
        <header className="App-header">
            <nav className="header-nav">
              <ul className="App-nav">
                <li className="nav-item"><a className="App-link" href="#"></a>TitleSite</li>
                <li className="nav-item"><a className="App-link" href="#articles"></a>articles</li>
              </ul>
            </nav>
        </header>
    );
};

export default Header;