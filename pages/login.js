<<<<<<< HEAD
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

=======
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

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default login