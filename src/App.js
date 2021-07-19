import logo from './logo.svg';
import './App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Navigation from './Navigation';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <div>Navigation</div>
      <div>Header</div>
      <div>Projects</div>
      <div>Contact</div>
      <div>Footer</div>

      <header className="App-header">
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
        
        </a>
      </header>
    </div>
  );
}

export default App;
