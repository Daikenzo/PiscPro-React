import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/App.css'
import '../css/EmbedPict.css'
// Error page
const NoPage = () =>{

    return(
        <>
            <Header />
            <main className="App-main">
                <div className="App-container" id='404-ErrorPage'>
                    <h2>ERREUR 404 : Page Non trouvé</h2>
                    <p>La page que vous essayer de joindre n'existe pas</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default NoPage;