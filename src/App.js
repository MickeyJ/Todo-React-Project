import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './util/Store'
import Layout from './components/Layout'
import todoApi from './api/todoAPI'

const initialState = {
  todos: []
};

//todoApi.getTodos().then(todos => {
//  todos.data.map(todo => {
//    initialState.todos.push(todo)
//  });
//});

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <Layout title={'Todo App'}/>
  </Provider>,
  document.getElementById('todo-app')
);
