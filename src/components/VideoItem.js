import React from 'react';
import { Grid, Paper } from "@material-ui/core";

import base_url from '../utils/youtube'

import axios from 'axios';

class VideoItem extends React.Component {

    constructor({videoId}) {
        super();
        this.videoId = videoId;
    }

    componentDidMount() {
        axios.get(base_url+this.videoId)
            .then(response => {
                this.setState(response.data);
            })
            .catch(error => {
            });
    }

    item = {
            type: "video",
            author_name: "KenTT",
            thumbnail_url: "https://i.ytimg.com/vi/znzlsYjxy6o/hqdefault.jpg",
            provider_url: "https://www.youtube.com/",
            title: "Modern Agriculture Machines At New level - Amazing Heavy Equipment Machines Working",
            version: "1.0",
            width: 480,
            thumbnail_height: 360,
            html: "<iframe width='480' height='270' src='https://www.youtube.com/embed/znzlsYjxy6o?feature=oembed' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
            height: 270,
            thumbnail_width: 480,
            provider_name: "YouTube",
            author_url: "https://www.youtube.com/channel/UC8DXSGBmnbQbhzcaX2imFyQ"
        }

    render() {
        return(
            
            <Grid item>
                <Paper elevation={6} style={{ display: "flex", alignItems: "center", cursor: "pointer",padding: "10px" }} >
                    <img width="120px" alt="thumbnail" src={this.state?.items[0].snippet.thumbnails.default.url} />
                    {this.state?.items[0].snippet.title}
                </Paper>
            </Grid>)
    }
}

export default VideoItem;