import React from 'react';
import Header from './Header';
import Button from './Button';
import Jokes from './Jokes';
import '../App.css';

function App() {
  const [joke, setJoke] = React.useState("");
  const [indicatorVisible, setIndicatior] = React.useState(false);
  const [jokelist, setJokeList] = React.useState([]);

  function getJoke() {
    setIndicatior(true);
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        setIndicatior(false);
        setJoke(function () {
          return data.joke;
        });
        if (jokelist.length > 5) {
          setJokeList(jokelist.filter((item, index) => index !== jokelist.length - 1));
        }
        setJokeList(prev => {
          return [data.joke, ...prev];
        })
      })
  }

  return ( 
    <div className="App">
      <Header />
      <Button clicked={getJoke} /> 
      <Jokes joke={joke} loading={indicatorVisible} list={jokelist} /> 
    </div>
  );
}

export default App;