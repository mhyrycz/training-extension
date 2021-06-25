import Genre from './genre';
import Pace from './pace';
import Playlist from './playlist';
import GoToMusic from './goToMusic';
import { GenrePaceWrapper } from './styles';
import { Header, MaxWidth } from '../globalStyles';

function ChoosenMusic() {
  return (
    <MaxWidth>
      <Header>
        Muzyka
      </Header>
      <GenrePaceWrapper>
        <Genre/>
        <Pace/>
        <Playlist/>
      </GenrePaceWrapper>
      <GoToMusic/>
    </MaxWidth>
  );
}

export default ChoosenMusic;
