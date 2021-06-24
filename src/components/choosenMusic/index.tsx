import Genre from './genre';
import Pace from './pace';
import { useAppSelector } from '../../redux/hooks';
import { getChoosenTraining } from '../../redux/trainingSlice';

function ChoosenMusic() {
  const choosenTraining = useAppSelector(getChoosenTraining);

  return (
    <>
      {Boolean(choosenTraining) && (
        <>
          <Genre/>
          <Pace/>
        </>
      )}
    </>
  );
}

export default ChoosenMusic;
