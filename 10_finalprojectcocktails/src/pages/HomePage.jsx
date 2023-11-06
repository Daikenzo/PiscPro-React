import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/App.css'
import '../css/EmbedPict.css'

import RandomCocktail from '../components/Cocktails/RandomCocktail'

const HomePage = () =>{

    return(
        <>
            <Header />
            <main className="App-main">
                <section className="App-container" id='Home-contents'>
                    <h2>Welcome to Home!</h2>
                    <p>Vous êtes à la page d'acceuil</p>
                </section>

                <section className="App-container Cocktail">
                    <RandomCocktail HomePage="true"/>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;