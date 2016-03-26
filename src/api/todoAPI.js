import axios from 'axios'
var API = 'http://localhost:3000/api';

const todoApi = {

  getTodos: () =>(
    axios.get(API+'/todos')
      .then(response => response)
      .catch((response) =>{})
  ),
  addTodo: todo => (
    axios.post(API+'/add/'+ todo)
  ),
  completeTodo: todo => (
    axios.post(API+`/done/${todo.id}/${!todo.completed}`)
  ),
  deleteTodo: id => (
    axios.post(API+'/delete/'+ id)
  )
};
export default todoApi


