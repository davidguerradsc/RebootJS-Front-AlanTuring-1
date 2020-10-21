import { IConversation } from "../Chat/types";

export function getConversations():Promise<IConversation[]>{
  // TODO
  // axios vers le back pour récuperer les messages
  // processus de transformation des messages -> une liste de conversations
  // renverra la liste des conversations

  return Promise.resolve([{
    _id: '1234',
    targets: ['5f8eb1d643b38ab3691eb6d5', '5f8eb41b43b38ab3691eb6d6'],
    updatedAt: new Date(),
    unseenMessages: 0,
    messages: [{
      _id: '123',
      conversationId: '1234',
      createdAt: new Date(),
      emitter: '5f8eb1d643b38ab3691eb6d5',
      targets: ['5f8eb41b43b38ab3691eb6d6'],
      content: 'Salut ça va ?',
    },
    {
      _id: '124',
      conversationId: '1234',
      createdAt: new Date(),
      emitter: '5f8eb41b43b38ab3691eb6d6',
      targets: ['5f8eb1d643b38ab3691eb6d5'],
      content: 'Oui et toi ?',
    }]
  }, {
    _id: '12345',
    targets: ['5f8eb08e8bf2813b9e235976', '5f8fe4d6e00960960abadf33'],
    updatedAt: new Date(),
    unseenMessages: 0,
    messages: [{
      _id: 'abcde',
      conversationId: '12345',
      createdAt: new Date(),
      emitter: '5f8eb08e8bf2813b9e235976',
      targets: ['5f8fe4d6e00960960abadf33'],
      content: 'Coucou',
    },
    {
      _id: 'abcdef',
      conversationId: '12345',
      createdAt: new Date(),
      emitter: '5f8fe4d6e00960960abadf33',
      targets: ['5f8eb08e8bf2813b9e235976'],
      content: 'Hey ça va ?',
    }]
  }])
}