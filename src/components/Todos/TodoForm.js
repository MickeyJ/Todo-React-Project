import React, { Component } from 'react'

export default class TodoForm extends Component{
  getRef(ref){
    this.todo = ref;
  }
  handleSubmit(){
    if(!this.todo.value) return;
    this.props.handleAddTodo(this.todo.value)
  }
  render(){
    return(
      <div className="col-sm-10" style={{marginBottom: 50}}>
        <div className="form-inline" >
          <input
            className="form-control"
            type="text"
            placeholder="Todo Name"
            ref={(ref) => this.getRef(ref)}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.handleSubmit()}>
            Add
          </button>
        </div>
      </div>
    )
  }
}