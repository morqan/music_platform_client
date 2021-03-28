import React from 'react';
import MainLayouts from "../../layouts/MainLayouts";
import {Card, Grid, Button, Box} from "@material-ui/core";
import {useRouter} from 'next/router'
import { ITrack } from '../../types/track';
import TrackList from "../../components/TrackList";
const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        { _id: '1', name: 'track1', artist: 'artist 1', text: 'text 1', listens: 1 , audio:'http://localhost:5000/audio/', picture:'http://localhost:5000/tracks/create', comments:[]},
        { _id: '2', name: 'track2', artist: 'artist 2', text: 'text 2', listens: 1 , audio:'http://localhost:5000/audio/', picture:'http://localhost:5000/tracks/create', comments:[]},
        { _id: '3', name: 'track3', artist: 'artist 3', text: 'text 3', listens: 1 , audio:'http://localhost:5000/audio/', picture:'http://localhost:5000/tracks/create', comments:[]}
    ]
    return (
        <MainLayouts>
            <Grid container style={{justifyContent: 'center'}}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container style={{justifyContent: 'space-between'}}>
                            <h1>Track list</h1>
                            <Button variant="contained" color="primary" onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayouts>
    );
};

export default Index;
