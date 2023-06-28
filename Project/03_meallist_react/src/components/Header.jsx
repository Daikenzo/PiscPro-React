//Header
import  logo from "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/RPC-JP_Logo.png/1200px-RPC-JP_Logo.png"; //'../img/logo.svg';
import  '../css/App.css';
import  '../css/Header.css';

const   Header = () =>{
    
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