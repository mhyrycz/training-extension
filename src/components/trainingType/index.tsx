import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from '../select';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getTrainingType, updateTrainingType, updateChoosenTraining } from '../../redux/trainingSlice';
import { TrainingTypes } from '../../trainings';
import { TrainingTypeWrapper, Label } from './styles';

function TrainingType() {
  const dispatch = useAppDispatch()

  const changeTrainingType = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as TrainingTypes
    if (type) {
      dispatch(updateTrainingType(type))
      dispatch(updateChoosenTraining(null))
    }
  };

  const typesOptions =  [
      <MenuItem value={TrainingTypes.BJS}>{TrainingTypes.BJS}</MenuItem>,
      <MenuItem value={TrainingTypes.PT}>{TrainingTypes.PT}</MenuItem>,
      <MenuItem value={TrainingTypes.MG}>{TrainingTypes.MG}</MenuItem>,
      <MenuItem value={TrainingTypes.MS}>{TrainingTypes.MS}</MenuItem>,
  ]

  return (
    <TrainingTypeWrapper>
      <Label>
        Wybierz linię treningową
      </Label>
      <CustomSelect
        value={useAppSelector(getTrainingType)}
        onChange={changeTrainingType}
        options={typesOptions}
      />
    </TrainingTypeWrapper>
  );
}

export default TrainingType;
