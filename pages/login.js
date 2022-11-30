import React from 'react'
import { Provider } from 'react-redux'
import Login from '../components/Login'
import store from '../lib'

function login() {

  return (
    <Provider store={store}>
      <Login/>
    </Provider>
    
  )
}

export default login