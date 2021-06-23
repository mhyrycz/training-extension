import MuiButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

interface Props {
  isCorrectPage: boolean;
  setIsCorrectPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button = styled(MuiButton)(spacing);

function GoToTraining({isCorrectPage, setIsCorrectPage}: Props) {
  const QCZAJ_PAGE = 'qczaj.pl/moje-konto/my-favourites/';

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    const currentUrl = tabs[0].url?.split('//')[1]
    if (currentUrl === QCZAJ_PAGE) {
      setIsCorrectPage(true)
    } else {
      setIsCorrectPage(false)
    }
  });

  const goToPage = () => {
    chrome.tabs.create({url:`https://${QCZAJ_PAGE}`});
  }

  return (
    <>
    { !isCorrectPage && 
    <Button 
      marginRight={2}
      variant='contained'
      size='small'
      onClick={() => goToPage()}
    >
      Przejdź do strony treningu
    </Button>}
    </>
  );
}

export default GoToTraining;
