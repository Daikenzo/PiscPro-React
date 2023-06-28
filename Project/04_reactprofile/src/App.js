
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Profile from './components/Profile';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <main> 
        <section>
          <Profile />
        </section>
        
        <Experiences />
      </main>
      <Footer />
    </div>
  );
}

export default App;
