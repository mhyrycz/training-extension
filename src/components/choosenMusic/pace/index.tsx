import { useEffect } from 'react';
import CustomSelect from '../../select';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getMusicPace, updatePace, getMusicGenre } from '../../../redux/musicSlice';
import { getTrainingType } from '../../../redux/trainingSlice';
import { TrainingTypes, PlaylistProps, musicPlaylists } from '../../../trainings';

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
    );
    const paces = filteredPlaylists.map(p => p.pace) as number[];
    const uniquePaces = paces.filter((v, i, a) => a.indexOf(v) === i);
    return uniquePaces
  }

  const changeChoosenPace = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const pace = event.target.value as PlaylistProps["pace"];
    dispatch(updatePace(pace))
  };


  return (
    <>
      {
        isPaceIncluded &&
          (
            <CustomSelect
              label='Tempo'
              value={paceValue}
              onChange={changeChoosenPace}
              getOptions={getPaces}
              disabled={!Boolean(choosenGenre)}
              width='90px'
            />
          )
      }
    </>
  );
}

export default Pace;
