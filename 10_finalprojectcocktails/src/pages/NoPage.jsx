import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/App.css'
import '../css/EmbedPict.css'
// Error page
const NoPage = ({errorType}) =>{

    let message = "";
    if(errorType === '404'){
         message = "La page que vous essayer de joindre n'existe pas"
    }
    if(errorType === '403'){
        message = "Vous n'êtes pas autorisé."
   }

    return(
        <>  
            <Header />
            {errorType? (<>
                <main className="App-main">
                <div className="App-container" id='404-ErrorPage'>
                    <h2>ERREUR {errorType} : </h2>
                    <p>{message}</p>
                </div>
            </main>
            </>):(
            <>
                <main className="App-main">
                    <div className="App-container" id='404-ErrorPage'>
                        <h2>ERREUR 404 : Page Non trouvé</h2>
                        <p>La page que vous essayer de joindre n'existe pas</p>
                    </div>
                </main>
            </>
            )}
            
            <Footer />
        </>
    );
};

export default NoPage;