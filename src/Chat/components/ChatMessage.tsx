import React from 'react';
import { IConversationMessage } from '../types';

export function ChatMessage ({message} : {message:IConversationMessage}
  ){
    return (
      <h5>
        message: {message.content}
      </h5>
    )
  }