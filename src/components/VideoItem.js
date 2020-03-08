import React from 'react';
import { Grid, Paper } from "@material-ui/core";

function VideoItem() {

    var item = {
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

    return(
        <Grid item>
            <Paper elevation={6} style={{ display: "flex", alignItems: "center", cursor: "pointer",padding: "10px" }} >
                <img width="300px" alt="thumbnail" src={item.thumbnail_url} />
                <p style={{ paddingLeft: "10px" }}>{item.title}</p>
            </Paper>
        </Grid>
    )
}

export default VideoItem;