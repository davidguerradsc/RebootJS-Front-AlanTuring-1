import React from 'react';
import { IUser } from '../types';

interface UsersListItemProps{
  user: IUser;
}

class UsersListItem extends React.Component<UsersListItemProps> {
  render(){
    return <h2>Un utilisateur</h2>
  }
}




export default UsersListItem;