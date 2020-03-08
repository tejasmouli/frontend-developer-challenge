import React from 'react';
import VideoItem from "./VideoItem";
import { Grid } from '@material-ui/core';

function VideoList() {
    return(
        <Grid container spacing={2}>
            <VideoItem />
            <VideoItem />
            <VideoItem />
        </Grid>
    )
}

export default VideoList;