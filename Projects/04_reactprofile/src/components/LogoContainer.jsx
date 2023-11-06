import logo from    '../img/logo.svg'
import  '../css/ImgContainer.css'

const LogoContainer = () =>{

    return (
        <div className="app-logo img-container">
            <img className='app-logo' src={logo} alt="Logo"/>
        </div>
    );
};

export  default LogoContainer;