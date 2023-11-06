//Import
import LogoDisplay from "./LogoDisplay";
import  '../css/EmbedPict.css'
import  '../css/Header.css'

//Header Components
const   Header  =   ()  =>{

    return(
        <header className="header-container">
            <h1>E-comerce</h1>
                            
            <LogoDisplay/>  
            <nav className="nav-menu">
                <ul>
                    <li>Menu</li>
                    <li>home</li>
                    <li>toto</li>
                    <li>lol</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    );
};

export  default Header;

