import  '../css/img-contains.css';
import '../css/profiles.css';

const   Profiles = ({UserCurrent}) => {
    const   defaultUser = [{
        id:0,
        firstName:  "invité",
        lastName:   "",
    }]
    if(!UserCurrent.firstName){
        UserCurrent.id = defaultUser.id;
        UserCurrent.firstName = defaultUser.firstName;
        /*aside: balise html 5 permettant de ne pas referencer le contenu par les moteur/ fonctionne comme section ou div */

        /*etape code
        1: mettre en dur les elements et fonction de base
        2: voir comment factoriser le code
        3: voir les props si besoin a la fin
        
        https://stackify.com/premature-optimization-evil/
        */

    }

    return  (
        <aside className='Profile-containers containers' id="profile-Infos">
            <h2>Profile de Toto</h2>
            <div className="profils-info tab-contents" id="profil-info">
                <div className="tab-element "><span className="tab-title">{UserCurrent.firstName} {UserCurrent.lastName}</span></div>
                <div className="tab-element"><span className="tab-title">age : </span>{UserCurrent.age}</div>
                <div className="tab-element"><span className="tab-title">mail : </span>{UserCurrent.email}</div>
                <div className="tab-element"><span className="tab-title">Telephone : </span>{UserCurrent.phone}</div>
                <div className="tab-element"><span className="tab-title">adresse : </span><div className='adress'>{UserCurrent.adress}<br/>
                    </div>
                    <div className='adress'>
                    {UserCurrent.zipCode} {UserCurrent.city}
                    </div>
                </div>
                <div className="tab-element"><span className="tab-title">Pays : </span>{UserCurrent.country}</div>
                <div className="tab-element"><span className="tab-title">Job : </span>{UserCurrent.job}</div>
            </div>
        </aside>
    );
};

export  default Profiles;