<<<<<<< HEAD
import React from 'react'
import Pricing from '../components/Pricing'
import { Provider } from 'react-redux'
import store from '../lib'

function pricing() {
  return (
    <Provider store={store}>
        <Pricing/>
    </Provider>
    
  )
}

=======
import React from 'react'
import Pricing from '../components/Pricing'
import { Provider } from 'react-redux'
import store from '../lib'

function pricing() {
  return (
    <Provider store={store}>
        <Pricing/>
    </Provider>
    
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default pricing