// import
import { useState } from "react";
import '../css/App.css'

const CreateCoworking = () => {

     // State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Modification des éléments du formulaire pour l'affichage
    setTitle(event.target.title.value);
    setDescription(event.target.description.value);
    setAddress(event.target.address.value);
  };

    return (
        <>

            <form onSubmit={handleSubmit} className="form-contents App-form">
                <label className="App-form" htmlFor="title">Nom du Coworking</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
                <label htmlFor="address">Adress</label>
                <input type="text" name="address" id="dress" />

                <button type="submit">Ajouter un Coworking</button>
            </form>

            <div className="App-list">
                <p>Nom du Coworking : <span>{title}</span></p>
                <p>Adresse: <span>{address}</span></p>
                <p>Description: <span>{description}</span></p>
            </div>
        </>
    );
};

export default CreateCoworking;