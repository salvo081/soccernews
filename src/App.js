import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import {useState, useEffect} from "react"; 


function App() {
  const [news, setNews]= useState({});
  useEffect(() => {
    fetch(
      `http://hn.algolia.com/api/v1/search?query=football&tags=story`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Didn't work because ${res.status}`);
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setNews(data);
      })
      .catch((err) => console.log(err));
  }, []);
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
