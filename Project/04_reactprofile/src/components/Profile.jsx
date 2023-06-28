import  '../css/Profile.css'

const   Profile = () =>{
    const user = {
        firstName: "John",
        lastName: "Doe",
        age: 42,
        email: "contact@johndoe.fr",
        phone: "0123456789",
        adress: "1 rue de la Paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        job: "Développeur web"
        };
    
    
    return (
        <div>
        
            <div className="content">
               <ul className="user-info">
                   <li>Name: <span>{user.firstName}</span></li>
                   <li>LastName: <span>{user.lastName}</span></li>
                   <li>Age: <span>{user.age}</span></li>
                   <li>Mail: <span>{user.email}</span></li>
                   <li>Phone: <span>{user.phone}</span></li>
                   <li>adress: <ul>
                       <li>{user.adress}</li>
                       <li>{user.zipCode} {user.city}</li>
                       <li>{user.country}</li>
                   </ul></li>
                   <li>Metier: <span>{user.job}</span></li>
               </ul>
           </div>
        </div>

    );
};

export  default Profile;