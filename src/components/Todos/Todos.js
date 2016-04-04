import React, { Component } from 'react'
import todoApi from '../../api/todoAPI'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


export default class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
    todoApi.getTodos().then(todos => {
      this.setState({todos: todos.data})
    });
  }
  initState(){
    todoApi.getTodos().then(todos => {
      this.setState({
        todos: todos.data
      })
    });
  }
  handleAddTodo(todo){
    todoApi.addTodo(todo);
    this.initState()
  }
  handleDeleteTodo(id){
    
    todoApi.deleteTodo(id);
    this.initState()
  }
  handleCompleteTodo(todo){
    todoApi.completeTodo(todo);
    this.initState()
  }
  render(){
    return (
      <div className="jumbotron">
        <TodoForm handleAddTodo={todo => this.handleAddTodo(todo)} />
        <table className="table table-hover">
          <thead>
          <tr>
            <th> </th>
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

