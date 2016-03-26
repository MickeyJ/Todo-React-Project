import React from 'react'
import { isDoneStyle } from '../../style/styles'

const TodoList = state =>{
  return(
    <tbody>
      {state.todos.map((todo, idx) => (
        <tr completed={todo.completed} key={todo.id}>
          <td>{idx}</td>
          <td style={{fontSize: '20px'}}>
            {todo.name}
          </td>
          <td>
            <button
              className="btn completeBtn"
              style={isDoneStyle(todo.completed)}
              onClick={()=>state.handleComplete(todo)}>
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={()=>state.handleDelete(todo.id)}>
              X
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
};

export default TodoList