import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import UsersList from './Users/components/UsersList';
import TodoList from './TodoList/components/TodoList';

function App() {
  return (
    <Switch>
      <Route path="/users" component={UsersList} />
      <Route path="/" component={TodoList} />
    </Switch>
  );
}

export default App;
