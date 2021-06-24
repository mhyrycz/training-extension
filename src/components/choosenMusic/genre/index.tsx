import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from '../../select';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getTrainingType } from '../../../redux/trainingSlice';
import { getMusicGenre, updateMusicGenre } from '../../../redux/musicSlice';
import { MusicGenres, musicPlaylists } from '../../../trainings';
import { GenreWrapper } from './styles';

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

  const getGenresOptions = () => {
    return getTrainingTypeGenres().map(genre => (
      <MenuItem value={genre}>{genre}</MenuItem>
    ))
  }

  return (
    <GenreWrapper>
      <CustomSelect
        label='Gatunek muzyki'
        value={useAppSelector(getMusicGenre)}
        onChange={changeChoosenGenre}
        options={getGenresOptions()}
      />
    </GenreWrapper>
  );
}

export default Genre;
