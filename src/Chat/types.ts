export interface IConversation {
  _id: string;
  targets: string[];
  updatedAt: Date;
  unseenMessages: number;
  messages: IConversationMessage[];
}

export interface IConversationMessage {
  conversationId: string;
  _id: string;
  emitter: string;
  content: string;
  createdAt: Date;
  targets: string[];
}

export const UPDATE_CONVERSATION_LIST = 'UPDATE_CONVERSATION_LIST';

export interface IConversationsState {
  list: IConversation[]
}

export interface IUpdateConversationListAction {
  type: typeof UPDATE_CONVERSATION_LIST,
  conversations: IConversation[]
}

export type IConversationsAction = IUpdateConversationListAction