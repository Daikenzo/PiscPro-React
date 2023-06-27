// profiles components

import React from "react";
import './Profile.css';

// warning : toujours le nom du fichier du composant + début par une maj
const   Profile = () =>{
    const   user = {
        firstName:  "Charlie",
        lastName:   "Brown",
        age:        "18",
        metier:     "Devellopeur"
    };



    return (
        <div className="user-content container">
            <h4>User Info</h4>
            <ul className="user-info">
                <li id="userName">{user.firstName} <span class="capitalize">{user.lastName}</span></li>
                <li id="userAge">{user.age} ans</li>
                <li id="userStaff">{user.metier}</li>
            </ul>
        </div>
    );
};

export  default Profile;