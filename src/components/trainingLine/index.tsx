import { DefineTraining, Header, MaxWidth } from '../globalStyles';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';
import TrainingGif from './trainingGif';

function TrainingLine() {
  return (
    <MaxWidth>
      <Header>
        Linia treningowa
      </Header>
      <DefineTraining>
        <TrainingType />
        <ChoosenTraining />
        <TrainingGif/>
      </DefineTraining>
    </MaxWidth>
  );
}

export default TrainingLine;
