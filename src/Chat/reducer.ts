import { IConversationsAction, IConversationsState, UPDATE_CONVERSATION, UPDATE_CONVERSATION_LIST } from "./types"

export function conversations(state: IConversationsState = defaultConversationsState(), action: IConversationsAction): IConversationsState{
  switch(action.type){
    case UPDATE_CONVERSATION_LIST:
      return {
        ...state,
        list: action.conversations
      }
    case UPDATE_CONVERSATION:
      return {
        ...state,
        list: [
          ...state.list.filter(conv => conv._id !== action.conversation._id),
          action.conversation
        ]
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