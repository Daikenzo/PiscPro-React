
// Import Elements
import  './css/App.css';
import  Profile from "./Profile";
import Articles from './Articles';

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
      <main class="App-body">
        <Articles />
      </main>
    </div>
  );
}
// exporter la fonction externe
// default: récupére par défaut cette fonction
export default App;
