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
       <Dictionary defaultKeyword="hello"/>
        </main>
        <footer className="App-footer"> 
        <small > 
          <a href="https://github.com/Hanie20/dictionary-project" > Coded </a> 
          by <a href="https://www.linkedin.com/in/johanie-damas-b595b71b5"> Johanie Damas </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
