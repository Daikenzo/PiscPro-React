import  './index.css'
import  './css/Header.css'
import LogoContainer from './components/LogoContainer';

const   Header = ({ userInfosFromFakeApi }) =>{
    const user= {firstName:"", lastName:""}  ;

    return (
        <header className='header-containers' id="top-Page">
            <nav className="app-website-title">
                <div className='header-title'>
                    <LogoContainer className="Logo-img"/>
                    <h1>Dev profiler</h1>
                </div>
                <ul className="navMenu headerNav">
                    <li className="menuItem headerNav">Home</li>
                    <li className="menuItem headerNav">Contact</li>
                    <li className="menuItem headerNav">About</li>

                    <li>
                        Connecté en tant que {userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}
                    </li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;