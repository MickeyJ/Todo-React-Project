import axios from 'axios'
var API = 'http://localhost:3000/api/todos';

const todoApi = {

  getTodos: () =>(
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


