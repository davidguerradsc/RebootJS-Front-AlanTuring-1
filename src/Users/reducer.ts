import { IUsersAction, IUsersState, UPDATE_CONNECTED_USER, UPDATE_USERS } from "./types";

export function users(state: IUsersState = defaultUsersState(), action: IUsersAction): IUsersState {
  switch (action.type) {
    case UPDATE_CONNECTED_USER:
      return {
        ...state,
        connectedUser: action.user
      }
    case UPDATE_USERS:
      return {
        ...state,
        list: action.users
      }
    default:
      return state
  }
}

function defaultUsersState() {
  return {
    list: [],
  }
}