import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getChoosenTraining, getTrainingType, updateChoosenTraining } from '../../redux/trainingSlice';
import { trainings } from '../../trainings';

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
    <>
    <div>
      Wybierz trening
    </div>
    <FormControl variant='outlined'>
      <Select
        value={useAppSelector(getChoosenTraining)}
        onChange={changeChoosenTraining}
      >
        {getTrainingsForType()}
      </Select>
    </FormControl>
    </>
  );
}

export default ChoosenTraining;
