import '../css/Footer.css';
import  '../css/img-contains.css'
import logo from '../img/edgar-chaparro-Lwx-q6OdGAc-unsplash.jpg'

const   Footer =    () =>  {
    const   openBarHour = [
        {
            id:         1,
            day:        "Lundi",
            barOpen:    "7h00",
            barClose:   "2h00",
        },
        {
            id:         2,
            day:        "Mardi",
            barOpen:    "7h00",
            barClose:   "2h00",
        },
        {
            id:         3,
            day:        "Mercredi",
            barOpen:    "8h00",
            barClose:   "0h00",
        },
        {
            id:         4,
            day:        "Jeudi",
            barOpen:    "7h00",
            barClose:   "2h00",
        },
        {
            id:         5,
            day:        "Vendredi",
            barOpen:    "7h00",
            barClose:   "4h00",
        },
        {
            id:         6,
            day:        "Samedi",
            barOpen:    "7h00",
            barClose:   "0h00",
        }
    ]


    return (
        <footer className="footer-container">
            
            <section className="bar-info" id="bar-infos">
                <div className="bar-info bar-info-img">
                    <div className='img-container'>
                        <img className="img-src" src={logo} alt="BarMode" />
                    </div>
                </div>
                <div className="bar-info info-contents">
                    <div className="bar-info hour-info">
                        <h3>Horraire d'Ouverture :</h3>
                        <ul className="hour-info info-tab">
                            {openBarHour.map((currentDay)=>{
                                return(
                                    <li key={currentDay.id} className='day'><strong className="day day-title">{currentDay.day}: </strong>
                                    {currentDay.barOpen} - {currentDay.barClose}
                                    </li>
                                )})}
                        </ul>
                    </div>
                </div>
            </section>
            
        </footer>
    );
};

export  default Footer;