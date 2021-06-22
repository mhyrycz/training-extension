import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from '../select';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getChoosenTraining, getTrainingType, updateChoosenTraining } from '../../redux/trainingSlice';
import { trainings } from '../../trainings';
import { ChoosenTrainingWrapper, Label } from './styles';

function ChoosenTraining() {
  const dispatch = useAppDispatch()
  const choosenType = useAppSelector(getTrainingType);

  const changeChoosenTraining = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const training = event.target.value as string
    if (training) {
      dispatch(updateChoosenTraining(training))
    }
  };

  const getTrainingsForType = () => {
    const filtered = trainings.filter(t => t.type === choosenType)
    return filtered.map(t => (
      <MenuItem value={t.name}>{t.name}</MenuItem>
    ))
  }

  return (
    <ChoosenTrainingWrapper>
      <Label>
        Wybierz trening
      </Label>
      <CustomSelect
        value={useAppSelector(getChoosenTraining)}
        onChange={changeChoosenTraining}
        options={getTrainingsForType()}
      />
    </ChoosenTrainingWrapper>
  );
}

export default ChoosenTraining;
