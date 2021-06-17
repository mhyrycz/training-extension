import './App.css';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';
import TrainingSeries from './trainingSeries';

const onClick = () => {
  chrome.tabs.create({url:'https://qczaj.pl/moje-konto/my-favourites/'});
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button className="cycki" onClick={() => onClick()}>
          Przejdź do Qczaj fitness
        </button>
        <TrainingType />
        <ChoosenTraining />
        <TrainingSeries />
      </header>
    </div>
  );
}

export default App;
