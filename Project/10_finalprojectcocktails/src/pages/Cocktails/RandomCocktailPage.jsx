import '../../css/App.css';
import '../../css/EmbedPict.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RandomCocktail from '../../components/Cocktails/RandomCocktail';

const RandomCocktailPage = () => {

    return(
        <>
            <Header />
            <main className='App-main'>
                <section className="App-container Cocktail">
                    <RandomCocktail />
                </section>
            </main>
            
            <Footer />
        </>
    );
};

export default RandomCocktailPage;
