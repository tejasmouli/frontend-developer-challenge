import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import { Grid } from "@material-ui/core";

import { InputLink, VideoView, VideoList } from './components'

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid className="input-bar" container>
      <Grid item xs={11}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLink onEnterPress={addNewVideo}/>
          </Grid>
          <Grid item xs={12} sm={8}>
            <VideoView />
          </Grid>
          <Grid item xs={12} sm={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

var addNewVideo = link => {
  console.log(link);
  axios.get('https://www.youtube.com/oembed?url='+link, {
    headers: {
      'Access-Control-Allow-Origin': 'https://www.youtube.com/',
      'crossorigin': 'anonymous'
    }
  })
      .then(res => {
        console.log(res.data)
      })
}


export default App;
