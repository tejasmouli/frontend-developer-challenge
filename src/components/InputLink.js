import React from 'react';
import { Paper, TextField } from '@material-ui/core';

function InputLink(props) {

  var keyPressed = event => {
    if (event.key === "Enter") {
      console.log(event.target.value)
      props.onEnterPress(event.target.value);
    }
  }

    return(
        <Paper elevation={6} style={{ padding: "25px" }}>
        <TextField
          fullWidth
          label="Paste your link here"
          onKeyPress={keyPressed}
        />
      </Paper>
    )
}

export default InputLink;