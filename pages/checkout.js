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

export default checkout