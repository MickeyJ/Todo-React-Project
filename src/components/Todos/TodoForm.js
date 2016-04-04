import React, { Component } from 'react'


export default class TodoForm extends Component{
  getRef(ref){
    this.todo = ref;
  }
  submitTodo(e){
    e.preventDefault();
    if(!this.todo.value) return;
    this.props.handleAddTodo(this.todo.value);
    this.todo.value = ''
  }
  render(){
    return(
      <div style={{marginBottom: 50}}>
        <form className="form-inline" >
          <input
            className="form-control"
            style={{width: 300}}
            type="text"
            placeholder="Todo Name"
            ref={(ref) => this.getRef(ref)}
          />
          <button
            className="btn btn-info"
            type="submit"
            onClick={(e) => this.submitTodo(e)}>
            Add
          </button>
        </form>
      </div>
    )
  }
}