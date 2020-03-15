import React from 'react';
import VideoItem from './VideoItem';

import { Paper, Grid } from '@material-ui/core';

class VideoList extends React.Component {
    constructor({playlist}){
        super();
        this.state = {playlist};
    }

    componentWillReceiveProps({playlist}) {
        this.setState({...this.state,playlist})
    }

    render() {
        if(this.state.playlist.length===0)
            return <Paper className="no-video" elevation={6}>
                The playlist is currently empty...
            </Paper>
        return(
            <Grid container spacing={1}>
                {this.state.playlist.map(
                    (ytVideoId, i) => 
                    <VideoItem key={i} videoId={ytVideoId} />)}
            </Grid>
        )
    }
}

export default VideoList;