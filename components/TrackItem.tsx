import React from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from  '../styles/TrackItem.module.scss'
import {Pause, PlayArrow, Delete} from "@material-ui/icons";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track,active= false}) => {
    // @ts-ignore
    return (
        <div className={styles.track}>
            <IconButton>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <img src={track.picture} alt="track img" width={65} height={65} />
            <Grid direction='column' container style={{width: 199, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>03:45 / 04:15</div>}
            <IconButton style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </div>
    );
};

export default TrackItem;
