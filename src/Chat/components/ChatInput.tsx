import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';

class ChatInput extends React.Component {
  render(){
    return (
      <form>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item xs={9}>
            <TextField
              fullWidth={true}
              variant="outlined"
              placeholder="Type your message here"
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary">Envoyer</Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default ChatInput;