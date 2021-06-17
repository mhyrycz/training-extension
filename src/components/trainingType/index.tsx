import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getTrainingType, updateTrainingType } from '../../redux/trainingSlice';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { TrainingTypes } from '../../trainings';

function TrainingType() {
  const dispatch = useAppDispatch()

  const changeTrainingType = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as string
    if (type) {
      dispatch(updateTrainingType(type))
    }
  };

  return (
    <Select
      labelId='demo-simple-select-placeholder-label-label'
      id='demo-simple-select-placeholder-label'
      value={useAppSelector(getTrainingType)}
      onChange={changeTrainingType}
      displayEmpty
      //className={classes.selectEmpty}
    >
      <MenuItem value={TrainingTypes.BJS}>{TrainingTypes.BJS}</MenuItem>
      <MenuItem value={TrainingTypes.PT}>{TrainingTypes.PT}</MenuItem>
      <MenuItem value={TrainingTypes.MG}>{TrainingTypes.MG}</MenuItem>
    </Select>
  );
}

export default TrainingType;
