// import
import { useState } from "react";
import '../css/App.css'

const CreateCoworking = () => {

     // State
  /*    
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");*/

  const [title, setChangeTitle] = useState("");
  const [description, setChangeDescription] = useState("");
  const [address, setChangeAddress] = useState("");
/*
  const handleSubmit = (event) => {
    event.preventDefault();

    // Modification des éléments du formulaire pour l'affichage
    setTitle(event.target.title.value);
    setDescription(event.target.description.value);
    setAddress(event.target.address.value);
  };*/

  const handleChangeTitle = (event) =>{
    setChangeTitle(event.target.value);
  };
  const handleChangeDescription = (event) =>{
    setChangeDescription(event.target.value);
  };
  const handleChangeAdress = (event) =>{
    setChangeAddress(event.target.value);
  };

    return (
        <>

            <form  className="form-contents App-form">
                <label className="App-form" htmlFor="title">Nom du Coworking</label>
                <input onChange={handleChangeTitle} type="text" name="title" id="title" />
                <label htmlFor="description">Description</label>
                <textarea onChange={handleChangeDescription}name="description" id="description" cols="30" rows="10"></textarea>
                <label htmlFor="address">Adress</label>
                <input onChange={handleChangeAdress}type="text" name="address" id="adress" />

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