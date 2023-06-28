import  './index.css'
import  './css/Header.css'
import logo from './logo.svg';

const   Header = () =>{

    return (
        <header>
            <nav className="app-website-title">
                <div className="app-logo img-container">
                    <img className='app-logo' src={logo}/>
                    <h1>Dev profiler</h1>
                </div>
            </nav>
            
        </header>
    );
};

export default Header;