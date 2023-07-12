import { useState } from "react";
import '../css/App.css';
import ShowCoworking from "./ShowCoworkings";

const ListCoworkings = () => {
    const coworkings = [
      {
        id: 1,
        name: "Coworking 1",
        address: "Bordeaux",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "Coworking 2",
        address: "Merignac",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 3,
        name: "Coworking 3",
        address: "Bordeaux",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 4,
        name: "Coworking 4",
        address: "Eysines",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 5,
        name: "Coworking 5",
        address: "Lormont",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
    ];
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