import { useEffect } from 'react';
import CustomSelect from '../../select';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getMusicPace, updatePlaylist, getMusicGenre, getMusicPlaylist } from '../../../redux/musicSlice';
import { getTrainingType } from '../../../redux/trainingSlice';
import { PlaylistProps, musicPlaylists } from '../../../trainings';
// import { PaceWrapper } from './styles';

function Playlist() {
  const dispatch = useAppDispatch()
  const trainingType = useAppSelector(getTrainingType);
  const choosenGenre = useAppSelector(getMusicGenre);
  const choosenPace = useAppSelector(getMusicPace);
  const choosenPlaylist = useAppSelector(getMusicPlaylist);

  useEffect(()=>{
    dispatch(updatePlaylist(null));
  }, [choosenPace, dispatch]);

  const getPlaylistTitles = () => {
    const filteredPlaylists = musicPlaylists.filter(p => 
      p.trainingType.find(type => type === trainingType)
      && p.genre === choosenGenre
      && p.pace === choosenPace
    );
    const titles = filteredPlaylists.map(p => p.title);
    return titles
  };

  const changeChoosenPace = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const playlist = event.target.value as PlaylistProps['title'];
    if (playlist) {
      dispatch(updatePlaylist(playlist))
    }
  };


  return (
    <>
      {
        choosenGenre &&
          (
            <CustomSelect
              label='Playlista'
              value={choosenPlaylist}
              onChange={changeChoosenPace}
              getOptions={getPlaylistTitles}
            />
          )
      }
    </>
  );
}

export default Playlist;
