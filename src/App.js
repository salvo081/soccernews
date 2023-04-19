import logo from './logo.svg';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" placeholder='Suche' id="suche"></input>
      </header>
      <main className='App-main'>
        <h1>European Soccer News</h1>
        <Article />
        <Article />
        <Article />
      </main>
      <footer className='App-footer'>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
