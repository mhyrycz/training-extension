import { useAppSelector } from '../../redux/hooks';
import { getChoosenTraining } from '../../redux/trainingSlice';
import Button from '@material-ui/core/Button';
import { trainings, SeriesTypes } from '../../trainings';

function TrainingSeries() {
  const choosenTrainingName = useAppSelector(getChoosenTraining);

  const handlePickMovie = (duration: string) => {
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function(tabs) {
        const { id: tabId } = tabs[0];
        let code = `Array.from(document.getElementsByClassName('movie-duration')).find(e => e.innerText === '${duration} min').click()`;
        if(tabId) {
          chrome.tabs.executeScript(tabId, { code });
        }
      }
    );
  }

  const getChosenTrainingSeries = () => {
    const choosenTraining = trainings.find(t => t.name === choosenTrainingName);
    if (choosenTraining) {
      const warmUpDuration = choosenTraining.series[SeriesTypes.WARM_UP]
      const stretchingDuration = choosenTraining.series[SeriesTypes.STRETCHING]
      return (
        <>
          <Button onClick={() => handlePickMovie(warmUpDuration)}>
            {SeriesTypes.WARM_UP}
          </Button>
          {choosenTraining.series[SeriesTypes.MAIN].map((s, index) => (
            <Button onClick={() => handlePickMovie(s)}>
              {`Series ${index+1}`}
            </Button>
          ))}
          <Button onClick={() => handlePickMovie(stretchingDuration)}>
            {SeriesTypes.STRETCHING}
          </Button>
        </>
      )
    }
    return null
  }

  return getChosenTrainingSeries()
}

export default TrainingSeries;
