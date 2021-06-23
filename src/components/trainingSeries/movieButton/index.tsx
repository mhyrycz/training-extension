import Button from '../../button';

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
      title={`${props.title} - ${props.duration}`}
      onClick={() => handlePickMovie(props.duration)}
    />
  );

}

export default MovieButton;
