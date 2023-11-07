import logo from './logo.svg';
import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <main className="App-main">
        <p>Bonjour la Piscine</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
