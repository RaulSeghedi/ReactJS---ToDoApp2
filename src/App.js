import React, { Component } from 'react';
import TodosList from './Components/todos-list';
import CreateTodo from './Components/create-todo';
import _ from 'lodash';

const todos = [
    {
        task: 'make React tutorial',
        isCompleted: true
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos // equal with : todos: todos
        };
    }

    createTask(task){
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({
            todos: this.state.todos
        })
    }

    toggleTask(task){
        let foundTodo = this.state.todos.find(todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask){
        let foundTodo = this.state.todos.find(todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }

  render() {
    return (
      <div>
          <h1>React ToDos App</h1>
          <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
          <TodosList
              todos={this.state.todos}
              toggleTask={this.toggleTask.bind(this)}
              saveTask={this.saveTask.bind(this)}
              deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    );
  }
}

export default App;
