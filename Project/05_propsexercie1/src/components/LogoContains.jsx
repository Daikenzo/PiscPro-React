import  logo from   '../img/logo.svg';
import  '../css/img-contains.css';

const   LogoContains = () =>{

    return (
        <div className="img-container logo App-logo">
            <img src={logo} alt="Logo" className="logo logo-img App-logo" />
        </div>
    );
};

export  default LogoContains;