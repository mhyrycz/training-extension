import Button from '../button';

interface Props {
  isCorrectPage: boolean;
  setIsCorrectPage: React.Dispatch<React.SetStateAction<boolean>>;
}

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
      {!isCorrectPage && 
        <Button
          title='Przejdź do strony treningu'
          onClick={() => goToPage()}
        />
      }
    </>
  );
}

export default GoToTraining;
