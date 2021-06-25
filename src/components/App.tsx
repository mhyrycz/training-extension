import { useState } from 'react';
import { AppWrapper, DefineTraining } from './globalStyles';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';
import ChoosenMusic from './choosenMusic';
import TrainingSeries from './trainingSeries';
import GoToTraining from './goToTraining';
import TrainingGif from './trainingGif';

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
            <DefineTraining>
              <TrainingType />
              <ChoosenTraining />
            </DefineTraining>
            <TrainingGif/>
            <TrainingSeries />
            <ChoosenMusic />
          </>
        )}
    </AppWrapper>
  );
}

export default App;
