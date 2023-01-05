<<<<<<< HEAD
import React from 'react'
import store from '../lib'

import Signup from '../components/Signup'
import { Provider } from 'react-redux'

function signup() {
  
  return (
    <Provider store={store}>

    <Signup/>

    </Provider>
    
  )
}

=======
import React from 'react'
import store from '../lib'

import Signup from '../components/Signup'
import { Provider } from 'react-redux'

function signup() {
  
  return (
    <Provider store={store}>

    <Signup/>

    </Provider>
    
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default signup