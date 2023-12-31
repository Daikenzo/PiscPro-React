// Displaying Coworkings list
import '../css/App.css'
import '../css/Main.css'


const CoworkingDisplay = ({coworkingsApi, display}) =>{
    let displayCoworking = false;

    // display /State
    //const [DisplayCoworking, setDisplayCoworkings];//


    const handleOnClick = () =>{
        console.log('click');
    }

    return(
        <div className="container App-grid">
            
            { displayCoworking && (coworkingsApi.map((Coworking) =>{

                return ( <article className="coworking-item App-cards" key={Coworking.id}>
                    <div className="coworking-content App-card">
                        <div className="coworking-info">
                            <h3 className="coworking-title">{Coworking.name}</h3>
                            <div className="adress">
                                <p>{Coworking.adress}</p>
                                <p>{Coworking.city}</p>
                            </div>
                            <div className="coworking-rating">
                                {Coworking.rating} étoiles</div>
                        </div>
                        <div className="image-content App-card-pic">
                            <img src={Coworking.image} alt="" className="coworking-pic" />
                        </div>
                    </div>
                    
                </article>

                );
            }))};
            <button onClick={handleOnClick}>Display</button>
        </div>
    );
};

export default CoworkingDisplay;