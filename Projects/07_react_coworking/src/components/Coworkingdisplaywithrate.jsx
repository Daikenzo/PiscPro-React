// Displaying Coworkings list
import '../css/App.css'
import '../css/Main.css'
import CoworkingDisplay from './CoworkingDisplay';


const CoworkingDisplayWithRate = ({coworkingsApi}) =>{

    let CoworkingHightRating = coworkingsApi.filter((coworking)=>{
        return coworking.rating >= 4;
    })

    console.log(CoworkingHightRating);



    return(
        <section className="container" id="coworking-contents">
            
            <h2 >Les Coworking au minimum 4 étoiles</h2>

            <CoworkingDisplay coworkingsApi={CoworkingHightRating} />
        </section>
    );
};

export default CoworkingDisplayWithRate;