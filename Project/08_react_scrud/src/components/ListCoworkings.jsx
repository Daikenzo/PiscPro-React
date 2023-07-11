import { useState } from "react";

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

    const [filter, setFilter] = useState(false);

    const handleFilteredCityBor = () => {
        setFilter("Bordeaux");
    };
    const handleFilteredCityMer = () => {
        setFilter("Merignac");
    };
    const handleFilteredCityLor = () => {
        setFilter("Lormont");
    };
    const handleFilteredCityEys = () => {
        setFilter("Eysines");
    };

    const filteredCoworkings = coworkings.filter((coworking) => {
        if (filter === false) {return true}
        return coworking.address === filter;
    })
  
    return (
      <section>
        <h2>Liste des coworkings</h2>
  
        <button onClick={handleFilteredCityBor}>Bordeaux</button>
        <button onClick={handleFilteredCityMer}>Mérignac</button>
        <button onClick={handleFilteredCityLor}>Lormont</button>
        <button onClick={handleFilteredCityEys}>Eysines</button>
  
        {filteredCoworkings.map((coworking) => {
          return (
            <article key={coworking.id}>
              <h3>{coworking.name}</h3>
              <p>{coworking.address}</p>
              <p>{coworking.phone}</p>
              <img src={coworking.img} alt={coworking.name} />
            </article>
          );
        })}
      </section>
    );
  };
  
  export default ListCoworkings;