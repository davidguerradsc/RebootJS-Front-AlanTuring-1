import React from 'react';
import { getConversations } from '../../api/messages';
import { IConversation } from '../types';

interface ChatScreenState {
  conversation: IConversation;
}

class ChatScreen extends React.Component<{}, ChatScreenState> {
  componentDidMount(){
    getConversations().then(conversations => {
      this.setState({
        conversation: conversations[0]
      })
    })
  }
  
  render(){
    return (
      <h1>Chat</h1>
    )
  }
}

export default ChatScreen;