import { useAppSelector } from '../../redux/hooks';
import { getChoosenTraining } from '../../redux/trainingSlice';
import MovieButton from './movieButton';
import { trainings, SeriesTypes } from '../../trainings';

function TrainingSeries() {
  const choosenTrainingName = useAppSelector(getChoosenTraining);
  const choosenTraining = trainings.find(t => t.name === choosenTrainingName);

  if (choosenTraining) {
    const warmUpDuration = choosenTraining.series[SeriesTypes.WARM_UP]
    const stretchingDuration = choosenTraining.series[SeriesTypes.STRETCHING]
    return (
      <>
        <MovieButton 
          title={SeriesTypes.WARM_UP} 
          duration={warmUpDuration} 
        />
        {choosenTraining.series[SeriesTypes.MAIN].map((s, index) => (
          <MovieButton title={`Seria ${index+1}`} duration={s} />
        ))}
        <MovieButton
          title={SeriesTypes.STRETCHING}
          duration={stretchingDuration} 
        />
      </>
    )
  }
  return null
}

export default TrainingSeries;
