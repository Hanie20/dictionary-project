import logo from './logo.png';
import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo"
        alt="logo" />
      </header>
     <main>
       <Dictionary />
        </main>
        <footer className="App-footer"> 
        <small > Coded by Johanie Damas </small>
        </footer>
      </div>
    </div>
  );
}

export default App;