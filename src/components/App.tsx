import './App.css';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';

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
        <button onClick={() => onClick()}>
          New Tabs
        </button>
        <TrainingType />
        <ChoosenTraining />
      </header>
    </div>
  );
}

export default App;
