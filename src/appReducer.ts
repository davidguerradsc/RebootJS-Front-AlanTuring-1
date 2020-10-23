import { combineReducers } from "redux";
import { users } from './Users/reducer'

export const appReducer = combineReducers({
  users
});

/*
- fetch vers l'api DONE :)
- creer un reducer pour users
- essayer de passer par les valeurs par défaut pour remplir le state avec la liste des users, le user connecté
- ...


*/