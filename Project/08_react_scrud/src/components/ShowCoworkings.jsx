const ShowCoworking = ({coworking}) =>{
    const handleDelete = () =>{
        console.log(coworking.id);
      }

    return (
        <article key={coworking.id} className="App-form">
            <h3>{coworking.name}</h3>
            <p>{coworking.address}</p>
            <p>{coworking.phone}</p>
            <img src={coworking.img} alt={coworking.name} />
            <button onClick={handleDelete} className="btn btn-delete-coworking">Suprrimer le coworking</button>
      </article>
    );
};

export default ShowCoworking;