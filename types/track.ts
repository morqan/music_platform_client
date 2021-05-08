export interface IComments {
    _id: string;
    username: string;
    text: string;
}

export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComments[];
}

export interface TrackState {
    track: ITrack[];
    error: string;
}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR'
}
export interface FetchTracksAction {
    type: TrackActionTypes.FETCH_TRACKS,
    payload: ITrack[]
}
export interface FetchTracksErrorAction {
    type: TrackActionTypes.FETCH_TRACKS_ERROR,
    payload: string
}

export type TrackAction = FetchTracksAction | FetchTracksErrorAction
