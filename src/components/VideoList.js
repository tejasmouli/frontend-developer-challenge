import React from 'react';
import VideoItem from './VideoItem';

import { Grid } from '@material-ui/core';

class VideoList extends React.Component {
    constructor({playlist}){
        super()
        this.state = {playlist}
    }

    componentWillReceiveProps({playlist}) {
        this.setState({...this.state,playlist})
    }

    render() {
        return(
            <Grid container spacing={1}>
                {JSON.stringify(this.state)}
                <VideoItem />
                <VideoItem />
                <VideoItem />
            </Grid>
        )
    }
}

export default VideoList;