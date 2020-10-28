import { IUser } from "../../Users/types";

const users : IUser[] = [
  {_id: '', firstname: "John", lastname: "Doe", email: "email", conversationsSeen: {}, status: 'offline'},
  {_id: '', firstname: "Jane", lastname: "Doe", email: "anotherEmail", conversationsSeen: {}, status: 'offline'}
];
export const getUsers = jest.fn().mockReturnValue(Promise.resolve(users));

export default { getUsers }