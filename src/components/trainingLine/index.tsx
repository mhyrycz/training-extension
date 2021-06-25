import { SpaceBetween, Header, MaxWidth } from '../globalStyles';
import { ColumnWrapper } from './styles';
import TrainingType from './trainingType';
import ChoosenTraining from './choosenTraining';
import TrainingGif from './trainingGif';

function TrainingLine() {
  return (
    <MaxWidth>
      <Header>
        Linia treningowa
      </Header>
      <SpaceBetween>
        <ColumnWrapper>
          <TrainingType />
          <ChoosenTraining />
        </ColumnWrapper>
        <TrainingGif/>
      </SpaceBetween>
    </MaxWidth>
  );
}

export default TrainingLine;
