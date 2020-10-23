export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IUsersState {
  list: IUser[]
  connectedUser?: IUser
}

export const FETCH_CONNECTED_USER = 'FETCH_CONNECTED_USER'
export const UPDATE_CONNECTED_USER = 'UPDATE_CONNECTED_USER'

export interface IFetchConnectedUserAction {
  type: typeof FETCH_CONNECTED_USER
}
export interface IUpdateConnectedUserAction {
  type: typeof UPDATE_CONNECTED_USER
  user: IUser
}

export type IUsersAction = IFetchConnectedUserAction | IUpdateConnectedUserAction