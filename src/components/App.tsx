import './App.css';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getTrainingType, updateTrainingType } from "../redux/trainingSlice";

const onClick = () => {
  for(let i=0; i<5; i++) {
    chrome.tabs.create({url:'https://qczaj.pl/moje-konto/my-favourites/'}, function(tab) {
    });
  }
}

function App() {
  const dispatch = useAppDispatch()

  const onClickUpdateTraining = () => dispatch(updateTrainingType("klata"))

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => onClick()}>
          New Tabs
        </button>
        <button type="button" onClick={onClickUpdateTraining}>
          choose training
        </button>
        {JSON.stringify(useAppSelector(getTrainingType))}
      </header>
    </div>
  );
}

export default App;
