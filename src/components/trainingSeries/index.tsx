import { useAppSelector } from '../../redux/hooks';
import { getChoosenTraining } from '../../redux/trainingSlice';
import Button from '@material-ui/core/Button';
import { trainings } from '../../trainings';

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
      return (
        <>
          <Button onClick={() => handlePickMovie(choosenTraining.warmUp)}>
            Warm-up
          </Button>
        </>
      )
    }
    return null
  }

  return getChosenTrainingSeries()
}

export default TrainingSeries;
