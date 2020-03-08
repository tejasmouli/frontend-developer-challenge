import React from 'react';
import './App.css';

import { Grid } from "@material-ui/core";

import { InputLink, VideoItem, VideoView, VideoList } from './components'


function App() {
  return (
    <Grid className="input-bar" container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <InputLink />
          </Grid>
          <Grid item xs={12} sm={8}>
            <VideoView />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;