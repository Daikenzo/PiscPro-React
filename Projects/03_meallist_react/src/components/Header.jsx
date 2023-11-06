//Header
import  logo from "../img/logo.svg";
import  '../css/App.css';
import  '../css/Header.css';

const   Header = () =>{

    /*const menuItems = [
        {
        title: "Jean-claude",
        link: "https://fr.wikipedia.org/wiki/Jean-Claude_Van_Damme",
        id: 1
        },
        {
        title: "Chuck",
        link: "https://fr.wikipedia.org/wiki/Chuck_Norris",
        id: 2
        },
        {
        title: "Stallone",
        link: "https://fr.wikipedia.org/wiki/Chuck_Norris",
        id: 3
        },
        ];*/
    
    return(
        <header className="header-Container" id="top-Page">
            <div className='Logo-contents'>
                <img src={logo} alt="Logo"/>
            </div>
            <h1 className='webdsite-title'>React Project</h1>
            <nav className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>List Meal</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;