import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { MusicGenres, Playlist } from '../trainings';

interface MusicState {
    genre: MusicGenres | null;
    playlist: Playlist | null;
    pace: number | null;
}

const initialState: MusicState = {
    genre: null,
    playlist: null,
    pace: null,
}

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        updateMusicGenre: (state, action: PayloadAction<MusicGenres>) => ({
            ...state,
            genre: action.payload
        }),
        updatePlaylist: (state, action: PayloadAction<Playlist>) => ({
            ...state,
            playlist: action.payload
        }),
        updatePace: (state, action: PayloadAction<number>) => ({
            ...state,
            pace: action.payload
        }),
    }
})

export const { updateMusicGenre, updatePlaylist, updatePace } = musicSlice.actions;

export const getMusicGenre = (state: RootState) => state.music.genre;
export const getMusicPlaylist = (state: RootState) => state.music.playlist;
export const getMusicPace = (state: RootState) => state.music.pace;

export default musicSlice.reducer 