import React from 'react';
import { Paper, TextField } from '@material-ui/core';

function InputLink() {
    return(
        <Paper elevation={6} style={{ padding: "25px" }}>
        <TextField
          fullWidth
          label="Paste your link here"
        />
      </Paper>
    )
}

export default InputLink;