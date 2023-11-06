import '../css/App.css';
import UpdateCoworking from './UpdateCoworking';

const ShowCoworking = ({coworking}) =>{
    const handleDelete = () =>{
        console.log(coworking.id);
      }

    return (
        <article key={coworking.id} className="App-card">
          <h3>{coworking.name}</h3>
          <div className="App-card">
            <div className="App-card-info">
              <p><strong>Adresse:</strong><br/>{coworking.address}</p>
              <p><strong>Telephone:</strong><br/>{coworking.phone}</p>
            </div>
            <img src={coworking.img} alt={coworking.name} />
          </div>
          <button onClick={handleDelete} className="btn btn-delete-coworking App-btn">Suprrimer le coworking</button>
          <UpdateCoworking coworking={coworking} />
      </article>
    );
};

export default ShowCoworking;