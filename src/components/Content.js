import React, { Component } from 'react'
import todoApi from '../api/todoAPI'
import TodoList from './Todos/TodoList'
import TodoForm from './Todos/TodoForm'


export default class Content extends Component {
  constructor() {
    super();
    this.state = {todos: [] }
  }
  getState(){
    todoApi.getTodos().then(todos => {
      this.setState({
        todos: todos.data
      })
    });
  }
  resetState(callback){
    callback;
    this.getState()
  }
  componentWillMount(){
    this.getState()
  }
  handleAdd(todo){
    this.resetState(todoApi.addTodo(todo));
  }
  handleDelete(id){
    this.resetState(todoApi.deleteTodo(id))
  }
  handleComplete(todo){
    this.resetState(todoApi.completeTodo(todo))
  }
  render(){
    return (
      <div className="jumbotron">
        <TodoForm handleAddTodo={todo => this.handleAdd(todo)} />
        <table className="table table-hover">
          <thead>
          <tr>
            <th> </th>
            <th>Things Todo</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
          </thead>
          <TodoList
            todos={this.state.todos}
            handleDelete={this.handleDelete.bind(this)}
            handleComplete={this.handleComplete.bind(this)}
          />
        </table>
      </div>
    )
  }
}

