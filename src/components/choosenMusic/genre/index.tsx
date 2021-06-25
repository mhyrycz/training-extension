import CustomSelect from '../../select';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getTrainingType } from '../../../redux/trainingSlice';
import { getMusicGenre, updateMusicGenre } from '../../../redux/musicSlice';
import { MusicGenres, musicPlaylists } from '../../../trainings';

function Genre() {
  const dispatch = useAppDispatch()
  const trainingType = useAppSelector(getTrainingType);

  const getTrainingTypeGenres = () => {
    const playlists = musicPlaylists.filter(p => p.trainingType.find(type => type === trainingType));
    const genres = playlists.map(p => p.genre)
    const uniqueGenres = genres.filter((v, i, a) => a.indexOf(v) === i);
    return uniqueGenres
  }

  const changeChoosenGenre = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const genre = event.target.value as MusicGenres
    if (genre) {
      dispatch(updateMusicGenre(genre));
    }
  };

  return (
    <CustomSelect
      label='Gatunek'
      value={useAppSelector(getMusicGenre)}
      onChange={changeChoosenGenre}
      getOptions={getTrainingTypeGenres}
    />
  );
}

export default Genre;
