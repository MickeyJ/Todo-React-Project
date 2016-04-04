import React, { Component } from 'react'
import { isDoneStyle } from '../../style/styles'





const TodoList = props =>{
  // console.log(props.todos);
  return(
    <tbody>
    {props.todos.map((todo, idx) => (
      <tr key={todo.id}>
        <td>{idx}</td>
        <td style={{fontSize: '20px'}}>
          {todo.name}
        </td>
        {props.todoMarkup}
        <td>
          <button
            className="btn completeBtn"
            style={isDoneStyle(todo.completed)}
            onClick={()=>props.handleComplete(todo)}>
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={()=>props.handleDelete(todo.id)}>
            X
          </button>
        </td>
      </tr>
    ))}
    </tbody>
  )
};

export default TodoList