//immport
import { useState } from "react";

const Welcome = () =>{
    const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(true);

    const MessageHandleClick = () => {
        // au click, on modifie la valeur de la variable du state
        // et donc le composant est rechargé
        setDisplayWelcomeMessage(false);
      };


    return (
       <div>
        { displayWelcomeMessage && 
            <div className="welcome welcomeMsg">Welcome</div>
        }

            <button onClick={MessageHandleClick} className="welcome welcome-btn">S'identifier</button>
        
       </div> 
    );
};

export default Welcome;