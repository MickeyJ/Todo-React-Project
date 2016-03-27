import React, { Component } from 'react'
import todoApi from '../../api/todoAPI'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default class Todos extends Component {
  constructor() {
    super();
    this.state = { todos: [] }
  }
  initState(){
    todoApi.getTodos().then(todos => {
      this.setState({
        todos: todos.data
      })
    });
  }
  updateState(callback){
    callback;
    this.initState()
  }
  componentDidMount(){
    this.updateState()
  }
  handleAddTodo(todo){
    this.updateState(todoApi.addTodo(todo));
  }
  handleDeleteTodo(id){
    this.updateState(todoApi.deleteTodo(id))
  }
  handleCompleteTodo(todo){
    this.updateState(todoApi.completeTodo(todo))
  }
  render(){
    return (
      <div className="jumbotron">
        <TodoForm handleAddTodo={todo => this.handleAddTodo(todo)} />
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Edit</th>
            <th>Things Todo</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
          </thead>
          <TodoList
            todos={this.state.todos}
            handleDelete={this.handleDeleteTodo.bind(this)}
            handleComplete={this.handleCompleteTodo.bind(this)}
          />
        </table>
      </div>
    )
  }
}

