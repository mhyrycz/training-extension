import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface TrainingState {
    type: string | null;
    choosenTraining: string | null;
}

// Define the initial state using that type
const initialState: TrainingState = {
    type: null,
    choosenTraining: null,
}

export const trainingSlice = createSlice({
    name: 'training',
    initialState,
    reducers: {
        updateTrainingType: (state, action: PayloadAction<string>) => ({
            ...state,
            type: action.payload
        }),
        updateChoosenTraining: (state, action: PayloadAction<string | null>) => ({
            ...state,
            choosenTraining: action.payload
        }),
    }
})

export const { updateTrainingType, updateChoosenTraining } = trainingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTrainingType = (state: RootState) => state.training.type;
export const getChoosenTraining = (state: RootState) => state.training.choosenTraining;

export default trainingSlice.reducer 