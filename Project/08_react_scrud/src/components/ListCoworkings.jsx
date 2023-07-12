import { useState } from "react";
import '../css/App.css';
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {
  let [coworkings, setCoworkings] = useState([]);
  
  const fetchCoworkings = async () => {
    if (coworkings.length === 0) {
      const coworkingsResponse = await fetch("/lib/Coworkings.json");
      const coworkingsData = await coworkingsResponse.json();
      // set API
      setCoworkings(coworkingsData);
    }
  };

  fetchCoworkings();


  const [city, setCity] = useState("Bordeaux");

  const handleClick = (value) => {
    setCity(value);
  };

    

  
    const cityedCoworkings = coworkings.filter((coworking) => {
      if (city === null) {return true}
  
      return coworking.address === city;
    });
  
  
    return (
      <section>
        <h2>Liste des coworkings</h2>
  
        <button onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
        <button onClick={() => handleClick("Merignac")}>Mérignac</button>
        <button onClick={() => handleClick("Lormont")}>Lormont</button>
        <button onClick={() => handleClick("Eysines")}>Eysines</button>
        <button onClick={() => handleClick(null)}>Tous</button>

        {cityedCoworkings.map((coworking) => {
          return (
            <ShowCoworking key={coworking.id} coworking={coworking}/>
          );
        })}
      </section>
    );
  };
  
  export default ListCoworkings;