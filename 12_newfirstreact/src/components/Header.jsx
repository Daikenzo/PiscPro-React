import '../css/App.css';

const Header = ({logo}) =>{

    return (
        <header className="App-header">
            <nav className="header-nav">
              <ul className="App-nav">
                <li className="nav-item"><a id="titlesite" className="App-link App-title" href="#"><h1>TitleSite</h1></a></li>
                <li className="nav-item"><a className="App-link" href="#articles">articles</a></li>
                <li className="nav-item"><a className="App-link" href="#articles">articles</a></li>
              </ul>
            </nav>
        </header>
    );
};

export default Header;