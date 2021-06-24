import { useState } from 'react';
import { AppWrapper } from './globalStyles';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';
import ChoosenMusic from './choosenMusic';
import TrainingSeries from './trainingSeries';
import GoToTraining from './goToTraining';

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
            <TrainingType />
            <ChoosenTraining />
            <TrainingSeries />
            <ChoosenMusic />
          </>
        )}
    </AppWrapper>
  );
}

export default App;
