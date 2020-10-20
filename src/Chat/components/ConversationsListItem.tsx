import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { IConversation } from '../types';

export function ConversationsListItem({conversation} : {conversation: IConversation}){
  return <ListItem>
    <ListItemText
      primary={conversation._id}
      secondary={conversation.messages[0].content}
    />
  </ListItem>
}