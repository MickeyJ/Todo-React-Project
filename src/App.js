import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './util/Store'
import Layout from './components/Layout'
import todoApi from './api/todoAPI'

//let initialState = {
//
//};
//
//todoApi.getTodos().then(todos => {
//
//  initialState.todos = todos.data
//
//});

let initialState = {
  todos: [
    {
      text: 'dished',
      completed: false,
      id: 1
    }
  ]
};

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('todo-app')
);