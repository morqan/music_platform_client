import React from 'react';
import {useRouter} from "next/router";
import MainLayouts from "../../layouts/MainLayouts";
import {ITrack} from "../../types/track";
import {Button, Grid, TextField} from "@material-ui/core";
import {comment} from "postcss";

const TrackPage = () => {
    const router = useRouter()
    const track: ITrack =   { _id: '1', name: 'track1', artist: 'artist 1', text: 'text 1', listens: 1 , audio:'http://localhost:5000/audio/', picture:'http://localhost:5000/image/f3610e2e-d91f-422b-8416-e0c624e19125.png', comments:[]}
    return (
        <MainLayouts>
            <Button variant={'outlined'} style={{fontSize: 29}} onClick={() => router.push('/tracks')}>
                Go to list
            </Button>
            <Grid>
                <img src={track.picture} alt=""/>
                <div>
                    <h1>Track name: {track.name}</h1>
                    <h1>Artist: {track.artist}</h1>
                    <h1>Listens: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Track text</h1>
            <p>{track.text}</p>
            <Grid>
                <TextField label='Your name' fullWidth/>
                <TextField label='Comment' fullWidth multiline rows={4}/>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayouts>
    );
};

export default TrackPage;
