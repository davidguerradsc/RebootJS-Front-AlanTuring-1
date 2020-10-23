import { IUsersAction, IUsersState, LIST_OF_USERS, UPDATE_CONNECTED_USER } from "./types";

export function users(state: IUsersState = defaultUsersState(), action: IUsersAction): IUsersState {
  switch(action.type){
    case UPDATE_CONNECTED_USER:
      return {
        ...state,
        connectedUser: action.user
      }
    case LIST_OF_USERS:
      return {
        ...state,
        list: action.users
      }
    default:
      return state
  }
}

function defaultUsersState(){
  return {
    list: [],
  }
}