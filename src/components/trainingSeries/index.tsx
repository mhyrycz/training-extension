import { useAppSelector } from '../../redux/hooks';
import { getChoosenTraining, getTrainingType } from '../../redux/trainingSlice';
import MovieButton from './movieButton';
import { ButtonsWrapper, NoTraining } from './styles';
import { Header, TrainingSeriesWrapper } from '../globalStyles';
import { trainings, SeriesTypes } from '../../trainings';

function TrainingSeries() {
  const choosenTrainingType = useAppSelector(getTrainingType);
  const choosenTrainingName = useAppSelector(getChoosenTraining);
  const choosenTraining = trainings.find(
    t => t.variant === choosenTrainingName && t.type === choosenTrainingType
  );

  const getTraining = () => {
    if (choosenTraining) {
      const warmUpDuration = choosenTraining.series[SeriesTypes.WARM_UP]
      const stretchingDuration = choosenTraining.series[SeriesTypes.STRETCHING]
      const mainDurations = choosenTraining.series[SeriesTypes.MAIN]
      
      const totalDuration = () => {
        const durations = [ warmUpDuration, stretchingDuration, ...mainDurations ]
        
        let minutes = 0;
        let seconds = 0;
    
        durations.forEach(d => {
        const splitDuration = d.split(':');
        minutes += parseInt(splitDuration[0])
        seconds += parseInt(splitDuration[1])
        })
        
        minutes = (minutes + Math.floor(seconds/60))
        seconds = seconds%60;

        return `Czas treningu: ${minutes} minut ${seconds} sekund`;
      }

      return (
        <>
        <ButtonsWrapper>
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
        </ButtonsWrapper>
        {totalDuration()}
        </>
      )
    }
    return (
      <NoTraining>
        Wybierz linię i wariant treningu
      </NoTraining>
    );
  }
  return (
    <TrainingSeriesWrapper>
      <Header>
        Twój trening
      </Header>
      {getTraining()}
    </TrainingSeriesWrapper>
  );
}

export default TrainingSeries;
