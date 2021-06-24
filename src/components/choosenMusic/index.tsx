import Genre from './genre';
import { useAppSelector } from '../../redux/hooks';
import { getChoosenTraining } from '../../redux/trainingSlice'

function ChoosenMusic() {
  const choosenTraining = useAppSelector(getChoosenTraining);

  return (
    <>
      {Boolean(choosenTraining) && <Genre/>}
    </>
  );
}

export default ChoosenMusic;
