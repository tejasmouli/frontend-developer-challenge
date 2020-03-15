import React from 'react';

import './App.css';

import { Grid } from "@material-ui/core";

import { InputLink, VideoView, VideoList } from './components'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedVideo: null,
      playlist: []
    }
  }
  

  addLink = videoId => {
    if (this.state.playlist.includes(videoId)){
      alert("Video already in the playlist");
    } else {
      this.state.playlist.push(videoId);
      if(this.state.selectedVideo===null){
        this.setState({
          selectedVideo:this.state.playlist[0],
          playlist:this.state.playlist
        });
      } else {
      this.setState({...this.state,playlist:this.state.playlist});
      console.log(this.state);
    }
  }
}

  render() {
    return (
      <Grid className="input-bar" container>
        <Grid item xs={11}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLink giveLinkToAppend={this.addLink} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <VideoView videoId={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <VideoList {...this.state} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
