import { useState } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { selectBeers, updateBeersList } from "../redux/beersSlice";

const onClick = () => {
  for(let i=0; i<5; i++) {
    chrome.tabs.create({url:'https://qczaj.pl/moje-konto/my-favourites/'}, function(tab) {
    });
  }
}

function App() {
  const dispatch = useAppDispatch()

  const onClickUpdateBeers = () => dispatch(updateBeersList(["ale", "pale", "dark"]))

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => onClick()}>
          New Tabs
        </button>
        <button type="button" onClick={onClickUpdateBeers}>
                    pour Beers
        </button>
        {JSON.stringify(useAppSelector(selectBeers))}
      </header>
    </div>
  );
}

export default App;
