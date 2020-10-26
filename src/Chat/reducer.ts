import { IConversationsAction, IConversationsState, UPDATE_CONVERSATION_LIST } from "./types"

export function conversations(state: IConversationsState = defaultConversationsState(), action: IConversationsAction): IConversationsState{
  switch(action.type){
    case UPDATE_CONVERSATION_LIST:
      return {
        ...state,
        list: action.conversations
      }
    default:
      return state
  }
}

function defaultConversationsState(){
  return {
    list: []
  }
}