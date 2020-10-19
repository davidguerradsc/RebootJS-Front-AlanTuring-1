import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginScreen from '../Login/components/LoginScreen';
import TodoList from '../TodoList/components/TodoList';
import ProfileScreen from '../Users/components/ProfileScreen';
import UsersList from '../Users/components/UsersList';

class AppContent extends React.Component {
  render(){
    return (
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/users" component={UsersList} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/" component={TodoList} />
      </Switch>
    )
  }
}

export default AppContent;