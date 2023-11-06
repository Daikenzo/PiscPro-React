import  '../css/Profile.css'

const   Profile = ({ userInfosFromFakeApi }) => {   
    // Quand on définit le composant (la fonction) Profile
    // on peut récupérer les props (les paramètres) envoyés par App
    // en les mettant en paramètre de la fonction
    // ici on récupère "userInfosFromFakeApi"
    const userdefault= {firstName:"", lastName:""}  ;
    
    
    return (
        <div>
            <div className="content">
                <h3>Profil de <strong>{userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</strong></h3>
               <ul className="user-info">
                   <li>Name: <span>{userInfosFromFakeApi.firstName}</span></li>
                   <li>LastName: <span>{userInfosFromFakeApi.lastName}</span></li>
                   <li>Age: <span>{userInfosFromFakeApi.age}</span></li>
                   <li>Mail: <span>{userInfosFromFakeApi.email}</span></li>
                   <li>Phone: <span>{userInfosFromFakeApi.phone}</span></li>
                   <li>adress: <ul>
                       <li>{userInfosFromFakeApi.adress}</li>
                       <li>{userInfosFromFakeApi.zipCode} {userInfosFromFakeApi.city}</li>
                       <li>{userInfosFromFakeApi.country}</li>
                   </ul></li>
                   <li>Metier: <span>{userInfosFromFakeApi.job}</span></li>
               </ul>
           </div>
        </div>

    );
};

export  default Profile;