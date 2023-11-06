import '../css/Header.css';
import LogoContains from './LogoContains';

const   Header =    ({UserCurrent}) =>  {
    const   userDefault = {
        firstName:"invité"
    }   
    let isLoggedIn = false

    if (!UserCurrent.firstName || UserCurrent.firstName === "invité"){
        UserCurrent.firstName = userDefault.firstName
        isLoggedIn = false;
    }else{
        isLoggedIn = true;
    }

    
    

    console.log(isLoggedIn);

    return (
        <header className="header-container">
            <div className="App-header header-container">
                <LogoContains class="header-logo"/>
                <div className="site-Title">
                    <h1>Bar check</h1>
                </div>
                <nav className='nav-menu'>
                    <li className='nav-item header-van-item'>Menu</li>
                    <li className='nav-item header-van-item'>Coktails</li>
                    <li className='nav-item header-van-item'>Contact</li>
                    <li className='nav-item header-van-item'></li>
                </nav>
            </div>
            
            <div className="connect connect-status">Vous êtes connecté en tant que <span> {UserCurrent.firstName} {UserCurrent.lastName}</span>. 
                <div className='connect'>
                {isLoggedIn ? <a href="#login-Disconect" alt="deconnection">Déconnexion</a> : <a href="#login-Connect" alt="Connection">Connexion</a>}
                </div>
            </div>
        </header>
    );
};

export  default Header;