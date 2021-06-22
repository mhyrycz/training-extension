import MuiButton from '@material-ui/core/Button';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

const Button = styled(MuiButton)(spacing);

interface ButtonType {
  title: string;
  duration: string;
}

function MovieButton(props: ButtonType) {

  const handlePickMovie = (duration: string) => {
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function(tabs) {
        const { id: tabId } = tabs[0];
        const code = `Array.from(document.getElementsByClassName('movie-duration')).find(e => e.innerText === '${duration} min').click()`;
        if(tabId) {
          chrome.tabs.executeScript(tabId, { code });
        }
      }
    );
  }

  return (
    <Button
      marginRight={2}
      variant="contained"
      size="small"
      onClick={() => handlePickMovie(props.duration)}
    >
      {props.title} - {props.duration}
    </Button>
  );

}

export default MovieButton;
