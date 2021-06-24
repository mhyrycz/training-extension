import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from '../select';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getChoosenTraining, getTrainingType, updateChoosenTraining } from '../../redux/trainingSlice';
import { trainings, TrainingTypes } from '../../trainings';
import { GifComponent } from './styles';
import BJSGif from '../../gifs/BJS.gif';
import PTGif from '../../gifs/PT.gif';
import MGGif from '../../gifs/MG.gif';
import MSGif from '../../gifs/MS.gif';

function ChoosenTraining() {
  const dispatch = useAppDispatch()
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

  const changeChoosenTraining = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const training = event.target.value as string
    if (training) {
      dispatch(updateChoosenTraining(training))
    }
  };

  const getTrainingsForType = () => {
    const filtered = trainings.filter(t => t.type === choosenType)
    return filtered.map(t => (
      <MenuItem value={t.variant}>{t.variant}</MenuItem>
    ))
  }

  return (
    <>
      {getTrainingGif()}
      <CustomSelect
        label='Wybierz wariant'
        value={useAppSelector(getChoosenTraining)}
        onChange={changeChoosenTraining}
        options={getTrainingsForType()}
      />
    </>
  );
}

export default ChoosenTraining;
