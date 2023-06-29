
import './App.css';
import  './css/ImgContainer.css'
import Header from './Header';
import Footer from './Footer';
import Profile from './components/Profile';
import Jobs from './components/job';
import FeedPosts from './components/FeedPosts';

function App() {
  // On créé la variable contenant les infos de l'utilisateur
  // dans le composant App
  // afin de pouvoir la partager avec les composants enfants
  // c'est à dire avec Header et Profile
  const userInfosFromFakeApi = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };

  return (
    <div className="App">
      {/* 
      Pour envoyer la variable userInfosFromFakeApi au composant Header et au
      composant Footer, on la passe en paramètre de ces composants
      C'est ce qu'on appelle les "props"

     */}
      <Header className="App-header" userInfosFromFakeApi={userInfosFromFakeApi}/>
      <main className='App-main'> 
        <section className='user-profile'>
          <Profile userInfosFromFakeApi={userInfosFromFakeApi}/>
          <Jobs  />
        </section>  
        <section  className='comment-user post'>
          <FeedPosts className="post post-feed "/>
        </section>
        
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
