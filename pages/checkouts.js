import React from 'react'
import Checkoutss from '../components/Checkoutss'
import { Provider } from 'react-redux'
import store from '../lib'

function checkouts() {
  return (
    <Provider store={store}>
    <Checkoutss/>
    </Provider>
  )
}

export default checkouts