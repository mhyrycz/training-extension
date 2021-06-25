import Genre from './genre';
import Pace from './pace';
import Playlist from './playlist';
import { useAppSelector } from '../../redux/hooks';
import { getChoosenTraining } from '../../redux/trainingSlice';
import { GenrePaceWrapper } from './styles';

function ChoosenMusic() {
  const choosenTraining = useAppSelector(getChoosenTraining);

  return (
    <>
      {Boolean(choosenTraining) && (
        <GenrePaceWrapper>
          <Genre/>
          <Pace/>
          <Playlist/>
        </GenrePaceWrapper>
      )}
    </>
  );
}

export default ChoosenMusic;
