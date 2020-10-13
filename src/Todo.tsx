import React from 'react';

interface ITodoProps {
  todo: { text: string, done: boolean }
}

interface ITodoState {
  done: boolean;
}

class Todo extends React.Component<ITodoProps, ITodoState> {
  constructor(props: ITodoProps){
    super(props);

    this.state = { done: props.todo.done };
  }

  completeTodo = () => {
    this.setState({done: true});
  }

  render(){
    return (
      <div>
        <button onClick={this.completeTodo}>C'est fait</button>
        <li>Todo : {this.props.todo.text}, Done: {this.state.done.toString()}</li>
      </div>
    )
  };
}

export default Todo;