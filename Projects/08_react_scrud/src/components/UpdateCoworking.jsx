import { useState } from "react";

const UpdateCoworking = ({coworking}) =>{
    /*const [UpdateCoworking, setUpdateCoworking] = useState([{
        id: coworking.id,
        name: coworking.name,
        address: coworking.address,
        phone:  coworking.phone,
        img: coworking.img,
}])*/

    const handleUpdateSubmit = (event) =>{
        // Don't reload page
        event.preventDefault();

        const CoworkingRequest = {

            name: event.target.name.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            //img: event.target.img.value
        };

        // Set Update
        console.log(CoworkingRequest);
    };
    


    return (
        <div className="App-form App-form form update-form">
            <h3 className="form-title">Mettre à jour les informations</h3>
            <form onSubmit={handleUpdateSubmit} className="update form App-form">
                <label htmlFor="name">Nom du coworking</label>
                <input type="text" name="name" defaultValue={coworking.name}/>
                <label htmlFor="phone">Téléphone</label>
                <input type="text" name="phone" defaultValue={coworking.phone}/>
                <label htmlFor="address">adresse : </label>
                <input type="address" name="address" defaultValue={coworking.address}/>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
};

export default UpdateCoworking;