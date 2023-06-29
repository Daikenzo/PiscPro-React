import LogoContainer from './components/LogoContainer';
import './css/Footer.css'

const   Footer = () =>{

    return  (
        <footer className='footer-container' id="bottom-Page">
            <div className="footer-title">
                <div className="footer-logo">
                <LogoContainer className="footer-img"/>
                </div>
            <div>@2021 - React-Live</div>
            </div>
        </footer>
    );
};

export  default Footer;