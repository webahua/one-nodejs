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

export default signup