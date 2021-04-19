import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
    let active = false
    const track: ITrack =   { _id: '1', name: 'track1', artist: 'artist 1', text: 'text 1', listens: 1 , audio:'http://localhost:5000/audio/', picture:'http://localhost:5000/image/f3610e2e-d91f-422b-8416-e0c624e19125.png', comments:[]}
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <Grid direction='column' container style={{width: 199, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({}) }/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => ({}) }/>
        </div>
    );
};

export default Player;
