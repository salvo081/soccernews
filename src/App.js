import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import {useState, useEffect} from "react"; 


function App() {
  const [news, setNews]= useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // console.log(search);

    const query = search !== '' ? search : 'football';

    fetch(
      `http://hn.algolia.com/api/v1/search?query=${query}&tags=story`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Didn't work because ${res.status}`);
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log("data", data.hits);
        setNews(data.hits);
      })
      .catch((err) => console.log(err));
  }, [search]);

  function setSearchValue(e) {
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  // console.log(news[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" placeholder='Suche' id="suche" onChange={setSearchValue}></input>
      </header>
      <main className='App-main'>
        <h1>European Soccer News</h1>
        {/* funktioniert */}
        {/* {console.log(news[0])} */}

        {news.length && news.map((newsObj) => {
          return <Article {...newsObj} />;
        })}
        
      </main>
      <footer className='App-footer'>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
