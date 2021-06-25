import CustomSelect from '../select';
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
    return filtered.map(t => t.variant)
  }

  return (
    <CustomSelect
      label='Wariant'
      value={useAppSelector(getChoosenTraining)}
      onChange={changeChoosenTraining}
      getOptions={getTrainingsForType}
    />
  );
}

export default ChoosenTraining;
