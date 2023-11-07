import logo from './logo.svg';
import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
