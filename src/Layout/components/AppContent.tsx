import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginScreen from '../../Login/components/LoginScreen';
import TodoList from '../../TodoList/components/TodoList';
import ProfileScreen from '../../Users/components/ProfileScreen';
import UsersList from '../../Users/components/UsersList';
import { ErrorScreen } from './ErrorScreen';

class AppContent extends React.Component {
  render(){
    return (
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/users" component={UsersList} />
        <Route path="/profile" component={ProfileScreen} />
        <Route exact path="/" component={TodoList} />
        <Route><ErrorScreen errorMessage='Oops ! It seems like we did not find this page!'/></Route>
      </Switch>
    )
  }
}

export default AppContent;