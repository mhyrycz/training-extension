import Button from '../../button';
import { useAppSelector } from '../../../redux/hooks'
import { getMusicPlaylist } from '../../../redux/musicSlice'
import { musicPlaylists } from '../../../trainings';

function GoToMusic() {
  const choosenPlaylistTitle = useAppSelector(getMusicPlaylist);
  const choosenPlaylistLink = musicPlaylists.find(
    p => p.title === choosenPlaylistTitle
  )?.link

  const goToPage = () => {
    if(choosenPlaylistLink) {
      chrome.tabs.create({url:`https://${choosenPlaylistLink}`});
    }
  }

  return (
    <Button
      title='Otwórz playlistę'
      onClick={() => goToPage()}
      disabled={!Boolean(choosenPlaylistLink)}
    />
  );
}

export default GoToMusic;
