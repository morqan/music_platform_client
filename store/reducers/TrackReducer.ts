import {TrackAction, TrackActionTypes, TrackState} from "../../types/track";

const initialState: TrackState = {
    track: [],
    error: ''
}

export const trackReducer = (state = initialState, action: TrackAction) => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS:
            return {error: '', track: action.payload}
        case TrackActionTypes.FETCH_TRACKS_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }

}