import { useState } from 'react';
import { AppWrapper } from './globalStyles';
import ChoosenMusic from './choosenMusic';
import TrainingSeries from './trainingSeries';
import GoToTraining from './goToTraining';
import TrainingLine from './trainingLine';

function App() {
  const [isCorrectPage, setIsCorrectPage] = useState<boolean>(false);

  return (
    <AppWrapper
      isCorrectPage={isCorrectPage}
    >
        <GoToTraining 
          isCorrectPage={isCorrectPage}
          setIsCorrectPage={setIsCorrectPage}
        />
        {isCorrectPage && (
          <>
            <TrainingLine/>
            <TrainingSeries/>
            <ChoosenMusic />
          </>
        )}
    </AppWrapper>
  );
}

export default App;
