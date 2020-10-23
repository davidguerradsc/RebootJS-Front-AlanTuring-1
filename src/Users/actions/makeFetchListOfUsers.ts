import { getUsers } from "../../api/users";
import { listOfUsers } from "./updateListOfUsers";

export function makeFetchListOfUsers() {
  return async (dispatch: any) => {
    try {
      const listOfUsers = await getUsers();
      dispatch(listOfUsers(listOfUsers))
    } catch (err) {
      console.error(err);
    }
  }
}