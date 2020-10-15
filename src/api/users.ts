import axios from "axios"
import { IUser } from "../Users/types";

export function getUsers(): Promise<IUser[]> {
  return axios.get('http://localhost:3000/api/users/').then(res => res.data);
}