import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './util/Store'
import Layout from './components/Layout'
import todoApi from './api/todoAPI'

// todoApi.getTodos().then(todos => {
//   let store = configureStore({todos: todos.data});
// })

let store = configureStore({todos: []});

render(
  <Provider store={store}>
    <Layout title={'Todo App'}/>
  </Provider>,
  document.getElementById('todo-app')
);
