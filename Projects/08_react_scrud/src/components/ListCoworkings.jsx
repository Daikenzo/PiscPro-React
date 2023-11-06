import { useState } from "react";
import '../css/App.css';
import ShowCoworking from "./ShowCoworking";
import Loading from "./Loading";

const ListCoworkings = () => {
  // states
  let [coworkings, setCoworkings] = useState([]);
  const [city, setCity] = useState("");
  
  // Call API & set Data
  // setTimout(function, timer_milisecond)

  const fetchCoworkings =  async () => {
    if (coworkings.length === 0) {
      setTimeout(async () => {
        const coworkingsResponse = await fetch("/lib/Coworkings.json");
        const coworkingsData = await coworkingsResponse.json();
        // Update Data
        setCoworkings(coworkingsData);
      }, 1500);
    }
  };
  fetchCoworkings();
  
  // Handle Function
  const handleClick = (value) => {
    setCity(value);
  };

  // Filter
  const cityedCoworkings = coworkings.filter((coworking) => {
    if (city === null || city === "") {return true}
  
    return coworking.address === city;
  });
  
  // Display Jsx
  return (
    <section>
      <h2>Liste des coworkings</h2>
  
      <button onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
      <button onClick={() => handleClick("Merignac")}>Mérignac</button>
      <button onClick={() => handleClick("Lormont")}>Lormont</button>
      <button onClick={() => handleClick("Eysines")}>Eysines</button>
      <button onClick={() => handleClick(null)}>Tous</button>

      {cityedCoworkings.length === 0 ? (
        
        <Loading />
      ) : (
        <>
          {cityedCoworkings.map((coworking) => {
            return (
              <ShowCoworking key={coworking.id} coworking={coworking}/>
            );
          })}
        </>
      )}
      
    </section>
  );
};
  
export default ListCoworkings;