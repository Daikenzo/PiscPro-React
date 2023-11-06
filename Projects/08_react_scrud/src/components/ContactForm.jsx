import { useState } from "react";


const ContactForm = () => {
    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    
    const handleSumitData = (event) =>{
        event.preventDefault();

        setContactData({
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            message: event.target.message.vale,
        });
    };

    return (
        <div className="contact ">
            <form onSubmit={handleSumitData} className="contact form App-form">
                <label htmlFor="lastname">Nom</label>
                <input type="text" name="lastName" id="lastName"/>
                <label htmlFor="firstName">Prenom</label>
                <input type="text" name="firstName" id="firstname"/>
                <label id="email">Email : </label>
                <input type="email" name="email" id="email" />
                <label htmlFor="message"></label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit">Envoyer</button>
            </form>
            <div className="message-send">
                { !(contactData.firstName === "" || 
                contactData.lastName === "" ||
                contactData.email === ""  ||
                contactData.message === "" ) && (
                <p>
                    Merci de m'avoir contacté, 
                    {contactData.firstName} {contactData.lastName}
                </p>)}
            </div>

        </div>
    );
};

export default ContactForm;