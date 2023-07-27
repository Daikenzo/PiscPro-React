import  logoDefault from   '../img/logo.svg';
import  '../css/EmbedPict.css';
import '../css/App.css'

const   LogoDisplay = () =>{
    let logo = {
        src: `https://www.docplanner.com/img/logo-default-group-en.svg?v=1`,
        alt: "Docplanner Group"
    }
    if(!logo.src || logo.src === ""){
        logo = {
            src: logoDefault,
            alt: "Logo-Title"
        }
    }

    return (
        <div className="img-container App-img logo App-logo">
            <img src={logo.src} alt={logo.alt} className="logo logo-img App-logo" />
        </div>
    );
};

export default LogoDisplay;