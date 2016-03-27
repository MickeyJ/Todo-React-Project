import axios from 'axios'
import path from 'path'
var API = path.resolve(window.location.pathname,'api/todos');

const todoApi = {
  getTodos: () => (
    axios.get(API)
      .then(response => response)
      .catch(response =>{})
  ),
  addTodo: todo => (
    axios.post(API +`/${todo}`)
  ),
  completeTodo: todo => (
    axios.put(API +`/${todo.id}/${!todo.completed}`)
  ),
  deleteTodo: id => (
    axios.delete(API +`/${id}`)
  )
};
export default todoApi


