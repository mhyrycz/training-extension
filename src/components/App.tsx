import { useState } from 'react';
import './App.css';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';
import TrainingSeries from './trainingSeries';
import GoToTraining from './goToTraining';

function App() {
  const [isCorrectPage, setIsCorrectPage] = useState<boolean>(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <GoToTraining 
          isCorrectPage={isCorrectPage}
          setIsCorrectPage={setIsCorrectPage}
        />
        {isCorrectPage && (
          <>
            <TrainingType />
            <ChoosenTraining />
            <TrainingSeries />
          </>
        )} 
      </header>
    </div>
  );
}

export default App;
