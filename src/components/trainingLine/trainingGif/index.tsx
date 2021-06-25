import { useAppSelector } from '../../../redux/hooks';
import {getTrainingType } from '../../../redux/trainingSlice';
import { TrainingTypes } from '../../../trainings';
import { GifComponent } from './styles';
import BJSGif from '../../../gifs/BJS.gif';
import PTGif from '../../../gifs/PT.gif';
import MGGif from '../../../gifs/MG.gif';
import MSGif from '../../../gifs/MS.gif';

function TrainingGif() {
  const choosenType = useAppSelector(getTrainingType);

  const getTrainingGif = () => {
    switch(choosenType) {
      case TrainingTypes.BJS:
        return <GifComponent src={BJSGif} alt="BJS" />
      case TrainingTypes.PT:
        return <GifComponent src={PTGif} alt="PT" />
      case TrainingTypes.MG:
        return <GifComponent src={MGGif} alt="MG" />
      case TrainingTypes.MS:
        return <GifComponent src={MSGif} alt="MS" />
      default:
        return null;
    }
  }

  return getTrainingGif();
}

export default TrainingGif;
