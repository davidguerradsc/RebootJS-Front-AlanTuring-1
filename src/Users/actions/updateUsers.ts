import { IUpdateUsersAction, IUser, UPDATE_USERS } from "../types";

export function updateUsers(users: IUser[]) : IUpdateUsersAction{
  return {
    type: UPDATE_USERS,
    users: users
  }
}