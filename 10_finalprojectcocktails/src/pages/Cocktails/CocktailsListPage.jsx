import '../../css/App.css';
import '../../css/EmbedPict.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import CoctailsList from '../../components/Cocktails/CoctailsList';

const CocktailsListPage = () => {

    return(
        <>
            <Header />
            <main className='App-main'>
                <section className="App-container Cocktail">
                    <CoctailsList />
                </section>
            </main>
            <Footer />
            
        </>
    );
};
export default CocktailsListPage;