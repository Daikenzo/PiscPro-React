import logo from './img/logo.svg';
import './css/App.css';
import './css/Main.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
// coworkings components
import CoworkingDisplay from './components/CoworkingDisplay';
import CoworkingDisplayWithRate from './components/Coworkingdisplaywithrate';

function App() {
  const coworkingsFromFakeApi = [
    {
      id: 1,
      name: "Coworking 1",
      address: "Adresse 1",
      city: "Ville 1",
      image: "https://picsum.photos/200/300",
      rating: 4,
    },
    {
      id: 2,
      name: "Coworking 2",
      address: "Adresse 2",
      city: "Ville 2",
      image: "https://picsum.photos/200/300",
      rating: 3,
    },
    {
      id: 3,
      name: "Coworking 3",
      address: "Adresse 3",
      city: "Ville 3",
      image: "https://picsum.photos/200/300",
      rating: 5,
    },
    {
      id: 4,
      name: "Coworking 4",
      address: "Adresse 4",
      city: "Ville 4",
      image: "https://picsum.photos/200/300",
      rating: 2,
    },
  ];

  return (
    <>
      <Header siteLogo={logo} />
      <main className="main-container App-main">
        <CoworkingDisplay coworkingsApi={coworkingsFromFakeApi} />

        <CoworkingDisplayWithRate coworkingsApi={coworkingsFromFakeApi} />
      </main>

      <Footer siteLogo={logo} />
    </>
  );
};

export default App;
