import CustomSelect from '../../select';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getTrainingType, updateTrainingType, updateChoosenTraining } from '../../../redux/trainingSlice';
import { updateMusicGenre } from '../../../redux/musicSlice';
import { TrainingTypes } from '../../../trainings';

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

  const getTrainingLines = () => {
    return [
      TrainingTypes.BJS,
      TrainingTypes.PT,
      TrainingTypes.MG,
      TrainingTypes.MS
    ];
  }

  return (
    <CustomSelect
      label='Linia'
      value={useAppSelector(getTrainingType)}
      onChange={changeTrainingType}
      getOptions={getTrainingLines}
      width='200px'
    />
  );
}

export default TrainingType;
