import { IListOfUsersAction, IUser, LIST_OF_USERS } from '../types';

export function listOfUsers (listOfUsers: IUser[]) :
IListOfUsersAction{
  return {
    type: LIST_OF_USERS,
    user: listOfUsers
  }
}
