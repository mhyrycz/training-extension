import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
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

  return (
    <>
      <div>
        Wybierz linię treningową
      </div>
      <FormControl variant="outlined">
        <Select
          value={useAppSelector(getTrainingType)}
          onChange={changeTrainingType}
          //className={classes.selectEmpty}
        >
          <MenuItem value={TrainingTypes.BJS}>{TrainingTypes.BJS}</MenuItem>
          <MenuItem value={TrainingTypes.PT}>{TrainingTypes.PT}</MenuItem>
          <MenuItem value={TrainingTypes.MG}>{TrainingTypes.MG}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default TrainingType;
