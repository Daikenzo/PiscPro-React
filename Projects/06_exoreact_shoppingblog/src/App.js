
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const productsFromApi = [
    {
      name: "Chaise",
      price: 100,
      description: "Une chaise",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Table",
      price: 200,
      description: "Une table",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Canapé",
      price: 300,
      description: "Un canapé",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Télé",
      price: 400,
      description: "Une télé",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Frigo",
      price: 500,
      description: "Un frigo",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Four",
      price: 600,
      description: "Un four",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
  ]; 
const cartFromApi = {
    items: [
      {
        product: "Chaise",
        amount: 200,
        quantity: 2,
      },
    ],
    totalAmount: 400,
    createdAt: "2021-09-01T10:00:00.000Z",
    user: "John Doe",
  }; 

  return (
    <div className="App">
      <Header className="App-header"/>
        <main>
          
        </main>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;


/*
<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/