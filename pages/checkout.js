<<<<<<< HEAD
import React from 'react'
import Checkout from '../components/Checkout'
import { Provider } from 'react-redux'
import store from '../lib'

function checkout() {
  return (
    <Provider store={store}>
    <Checkout/>
    </Provider>
  )
}

=======
import React from 'react'
import Checkout from '../components/Checkout'
import { Provider } from 'react-redux'
import store from '../lib'

function checkout() {
  return (
    <Provider store={store}>
    <Checkout/>
    </Provider>
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default checkout