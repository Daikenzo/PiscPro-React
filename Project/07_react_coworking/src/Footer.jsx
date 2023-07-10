// Import 
import './css/App.css';
import './css/Footer.css';

const Footer = ({siteLogo , copyrigthTxt}) =>{

    return(
        <footer className="App-footer">
            <div className="footer-container App-container App-grid collum-2">
                <div className="image-container App-grid grid-item" id="logo-content">
                    <img src={siteLogo} className="App-logo" alt="logo" />
                </div>
                <div className="App-grid grid-item" id="copiryth-content">
                  @React
                </div>
            </div>
    </footer>
    );
};

export default Footer;