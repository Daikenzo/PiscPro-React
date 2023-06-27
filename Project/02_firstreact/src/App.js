
// Import Elements
import './App.css';
import Profile from "./Profile";

function App() {
  // Main function -  app

  // output jsx
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bonjour Piscine
        </p>
        <Profile />
      </header>
    </div>
  );
}
// exporter la fonction externe
// default: récupére par défaut cette fonction
export default App;
