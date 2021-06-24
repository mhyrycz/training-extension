import MenuItem from '@material-ui/core/MenuItem';
import { useEffect } from 'react';
import CustomSelect from '../../select';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getMusicPace, updatePace, getMusicGenre } from '../../../redux/musicSlice';
import { getTrainingType } from '../../../redux/trainingSlice';
import { TrainingTypes, Playlist, musicPlaylists } from '../../../trainings';
import { PaceWrapper } from './styles';

function Pace() {
  const dispatch = useAppDispatch()
  const trainingType = useAppSelector(getTrainingType);
  const choosenGenre = useAppSelector(getMusicGenre);
  const paceValue = useAppSelector(getMusicPace);

  useEffect(()=>{
    dispatch(updatePace(null));
  }, [choosenGenre, dispatch]);

  const isPaceIncluded = trainingType !== TrainingTypes.MG;

  const getPaces = () => {
    const filteredPlaylists = musicPlaylists.filter(p => 
      p.trainingType.find(type => type === trainingType) 
      && p.genre === choosenGenre
      && p.pace
    );
    const paces = filteredPlaylists.map(p => p.pace) as number[];
    const uniquePaces = paces.filter((v, i, a) => a.indexOf(v) === i);
    return uniquePaces
  }

  const getPaceOptions = () => {
    return getPaces().map(option => (
      <MenuItem value={option}>{option}</MenuItem>
    ))
  }

  const changeChoosenPace = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const pace = event.target.value as Playlist["pace"];
    if (pace) {
      dispatch(updatePace(pace))
    }
  };


  return (
    <>
      {
        isPaceIncluded && 
        choosenGenre &&
          (
            <PaceWrapper>
              <CustomSelect
                label='Wybierz tempo'
                value={paceValue}
                onChange={changeChoosenPace}
                options={getPaceOptions()}
              />
            </PaceWrapper>
          )
      }
    </>
  );
}

export default Pace;
