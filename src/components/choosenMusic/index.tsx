import Genre from './genre';
import Pace from './pace';
import Playlist from './playlist';
import GoToMusic from './goToMusic';
import { Header, MaxWidth, SpaceBetween } from '../globalStyles';

function ChoosenMusic() {
  return (
    <MaxWidth>
      <Header>
        Muzyka
      </Header>
      <SpaceBetween>
        <Genre/>
        <Pace/>
        <Playlist/>
      </SpaceBetween>
      <GoToMusic/>
    </MaxWidth>
  );
}

export default ChoosenMusic;
