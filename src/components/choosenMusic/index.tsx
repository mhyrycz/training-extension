import Genre from './genre';
import Pace from './pace';
import Playlist from './playlist';
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
    </MaxWidth>
  );
}

export default ChoosenMusic;
