import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from '../select';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getTrainingType, updateTrainingType, updateChoosenTraining } from '../../redux/trainingSlice';
import { TrainingTypes } from '../../trainings';

function TrainingType() {
  const dispatch = useAppDispatch()

  const changeTrainingType = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as string
    if (type) {
      dispatch(updateTrainingType(type))
      dispatch(updateChoosenTraining(null))
    }
  };

  const typesOptions =  [
      <MenuItem value={TrainingTypes.BJS}>{TrainingTypes.BJS}</MenuItem>,
      <MenuItem value={TrainingTypes.PT}>{TrainingTypes.PT}</MenuItem>,
      <MenuItem value={TrainingTypes.MG}>{TrainingTypes.MG}</MenuItem>,
  ]

  return (
    <>
      <div>
        Wybierz linię treningową
      </div>
      <CustomSelect
        value={useAppSelector(getTrainingType)}
        onChange={changeTrainingType}
        options={typesOptions}
      />
    </>
  );
}

export default TrainingType;
