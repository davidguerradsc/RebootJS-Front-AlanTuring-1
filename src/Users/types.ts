export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IUsersState {
  list: IUser[]
  connectedUser?: IUser
}

export const UPDATE_CONNECTED_USER = 'UPDATE_CONNECTED_USER'
export const UPDATE_USERS = 'UPDATE_USERS'

export interface IUpdateConnectedUserAction {
  type: typeof UPDATE_CONNECTED_USER
  user: IUser
}

export interface IUpdateUsersAction {
  type: typeof UPDATE_USERS
  users: IUser[]
}

export type IUsersAction = IUpdateConnectedUserAction | IUpdateUsersAction
