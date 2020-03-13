import React from 'react';

import './VideoView.css';

import { Paper  } from "@material-ui/core";

function VideoView() {

    const videoSrc = `https://www.youtube.com/embed/znzlsYjxy6o`;

    return(
        <React.Fragment>
            <Paper elevation={6}>
                <div className="video-container">
                <iframe
                    frameBorder="0"
                    height="270px"
                    width="480px"
                    title="Video Player"
                    src={videoSrc}/>
                </div>
            </Paper>
        <Paper elevation={6} style={{ padding: "15px" }}>
          
        </Paper>
      </React.Fragment>
    )
}

export default VideoView;