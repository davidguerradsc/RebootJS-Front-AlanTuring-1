import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { sendMessage } from '../../api/messages';

interface ChatInputProps {
  conversationId: string;
  targets: string[];
}
interface ChatInputState {
  messageInput: string
}
class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
  constructor(props: ChatInputProps) {
    super(props);
    this.state = { messageInput: '' }
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendMessage(
      this.state.messageInput,
      this.props.conversationId,
      this.props.targets
    )
    this.setState({
      messageInput: ''
    })
    // Update conversation ?
  }

  handleChange = (newMessage: string) => {
    this.setState({
      messageInput: newMessage
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item xs={9}>
            <TextField
              fullWidth={true}
              variant="outlined"
              placeholder="Type your message here"
              onChange={(e) => this.handleChange(e.target.value)}
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