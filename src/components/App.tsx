import './App.css';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';
import TrainingSeries from './trainingSeries';

const onClick = () => {
  for(let i=0; i<5; i++) {
    chrome.tabs.create({url:'https://qczaj.pl/moje-konto/my-favourites/'}, function(tab) {
    });
  }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button className="cycki" onClick={() => onClick()}>
          New Tabs
        </button>
        <TrainingType />
        <ChoosenTraining />
        <TrainingSeries />
      </header>
    </div>
  );
}

export default App;
