//Header
import  logo from '../img/logo.svg';
import  '../css/App.css';
import  '../css/Header.css';

const   Header = () =>{
    
    return(
        <header className="header-Container" id="top-Page">
            <div className='Logo-contents'>
                <img src={logo} alt="Logo"/>
            </div>
            <h1 className='webdsite-title'>React Project</h1>
        </header>
    );
};

export default Header;