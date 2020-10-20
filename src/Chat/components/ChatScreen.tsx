import React, { Fragment } from 'react';
import { getConversations } from '../../api/messages';
import { Loading } from '../../Layout/components/Loading';
import { IConversation } from '../types';
import { AttendeesList } from './AttendeesList';
import ChatInput from './ChatInput';
import { ChatMessages } from './ChatMessages';

interface ChatScreenState {
  conversation?: IConversation;
}

class ChatScreen extends React.Component<{}, ChatScreenState> {
  constructor(props: {}){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    getConversations().then(conversations => {
      this.setState({
        conversation: conversations[0]
      })
    })
  }

  render(){
    const { conversation } = this.state;
    if(!conversation) return <Loading />

    return (
      <Fragment>
        <h1>Chat</h1>
        <ChatMessages messages={conversation.messages} />
        <ChatInput />
        <AttendeesList users={conversation.targets}/>
      </Fragment>
    )
  }
}

export default ChatScreen;