import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from '../select';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getTrainingType, updateTrainingType, updateChoosenTraining } from '../../redux/trainingSlice';
import { updateMusicGenre } from '../../redux/musicSlice';
import { TrainingTypes } from '../../trainings';
import { TrainingTypeWrapper } from './styles';

function TrainingType() {
  const dispatch = useAppDispatch()

  const changeTrainingType = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as TrainingTypes
    if (type) {
      dispatch(updateTrainingType(type))
      dispatch(updateChoosenTraining(null))
      dispatch(updateMusicGenre(null))
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
      <CustomSelect
        label='Wybierz linię treningową'
        value={useAppSelector(getTrainingType)}
        onChange={changeTrainingType}
        options={typesOptions}
      />
    </TrainingTypeWrapper>
  );
}

export default TrainingType;
