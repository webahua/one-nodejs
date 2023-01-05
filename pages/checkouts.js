<<<<<<< HEAD
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

=======
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

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default checkouts