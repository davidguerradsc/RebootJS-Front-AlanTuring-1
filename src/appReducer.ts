import { combineReducers } from "redux";
import { users } from './Users/reducer'

export const appReducer = combineReducers({
  users
});

export type IAppState = ReturnType<typeof appReducer>

/*
- Créer une fonction qui appelle les users de façon synchrone ("pre-action")
- Créer une fonction qui récupère la liste des users ("action")
- reducers reçoit les infos des users fetché (résultat de la préaction "cas dans le reducer")

- Composants
  - AppLayout => Dispatch la préaction pour fetch les users
  - UsersList => Connecter au store pour accéder à la liste

- Beaucoup de nouveaux types
*/