import React from 'react';
import MainLayouts from "../../layouts/MainLayouts";
import {Card, Grid, Button, Box} from "@material-ui/core";
import {useRouter} from 'next/router'
import { ITrack } from '../../types/track';
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {wrapper} from "../../store";
import {fetchTracks} from "../../store/actions-creators/track";
const Index = () => {
    const router = useRouter()
    const {error, track} = useTypedSelector(state => state.track)
    if (error) {
        return <MainLayouts><h1>{error}</h1></MainLayouts>
    }
    return (
        <MainLayouts>
            <Grid container style={{justifyContent: 'center'}}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container style={{justifyContent: 'space-between', padding: '12px'}}>
                            <h1>Track list</h1>
                            <Button variant="contained" color="primary" onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={track} />
                </Card>
            </Grid>
        </MainLayouts>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    store.dispatch(fetchTracks())
})
