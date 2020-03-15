import React from 'react';

import getParams from '../utils/func';

import { Paper, TextField } from '@material-ui/core';

function InputLink(props) {

    var checkValidLink = event => {
      if(event.key === 'Enter') {
        var {v} = getParams(event.target.value);
        if(v===undefined){
          alert("Invalid link");
        } else {
          props.giveLinkToAppend(v);
        }
      }
      event.target.value = "";
    }

    return(
        <Paper elevation={6} style={{ padding: "25px" }}>
        <TextField
          fullWidth
          label="Paste your link here"
          onKeyPress={checkValidLink}
        />
      </Paper>
    )
}

export default InputLink;