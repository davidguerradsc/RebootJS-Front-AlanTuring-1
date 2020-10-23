import { combineReducers } from "redux";
import { users } from './Users/reducer'

export const appReducer = combineReducers({
  users
});

export type IAppState = ReturnType<typeof appReducer>

/*
- fetch vers l'api DONE :)
- creer un reducer pour users DONE :)
- essayer de passer par les valeurs par défaut pour remplir le state avec la liste des users, le user connecté


- Actions:
  Charger les users et les mettres dans le store
  Charger le user connecté et qui le met dans le store


- ...


*/