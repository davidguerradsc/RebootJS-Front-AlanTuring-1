import { IUsersAction, IUsersState, UPDATE_CONNECTED_USER } from "./types";

export function users(state: IUsersState = defaultUsersState(), action: IUsersAction): IUsersState {
  switch (action.type) {
    case UPDATE_CONNECTED_USER:
      return {
        ...state,
        connectedUser: action.user
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