import React, { Component } from "react";
import Todo from "./Todo";

const todos = [
  { text: 'Finir le jour 7', done: true},
  { text: 'Apprendre React', done: false},
  { text: 'Progresser grâce à RebootJS', done: false}
];
class TodoList extends Component {
  render(){
    return (
      <ul>
        {todos.map((todo, index) =>
          <Todo key={index} todo={todo}/>
        )}
      </ul>

    )
  }
}

export default TodoList;