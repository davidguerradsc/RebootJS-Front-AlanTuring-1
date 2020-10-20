import { List, ListItem } from '@material-ui/core';
import React from 'react';

export function AttendeesList({users} : {users: string[]}){
  return <List>
       {/* Pour utiliser UsersListItem il faudrait avoir accès à la liste des users et récupéere
       celui correspondant aux id de la liste reçue en props. 
        {users.map((user, index) => <UsersListItem key={index} user={user} />)} */}
        {users.map((user,index) => <ListItem key={index}>{user}</ListItem>)}
      </List>
}