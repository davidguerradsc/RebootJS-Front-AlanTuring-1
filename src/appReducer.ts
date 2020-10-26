import { combineReducers } from "redux";
import { users } from './Users/reducer'
import { conversations } from './Chat/reducer'

export const appReducer = combineReducers({
  users,
  conversations
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

/*

Implementation des conversations dans le store

- Créer une fonction (thunk - pre-action) a dispatch depuis mes composants qui va appeler l'API pour récupérer les conversations
puis elle dispatch une action qui vient update store
- Créer une action qui va update le store avec les conversations qu'on lui donne DONE
- créer un réducer + la réaction à l'action précedente DONE

- Update mes composants pour prendre en compte la liste dans le store
*/