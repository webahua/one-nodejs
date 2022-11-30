import React from 'react'
import Checkoutsss from '../components/Checkoutsss'
import { Provider } from 'react-redux'
import store from '../lib'

function checkoutss() {
  return (
    <Provider store={store}>
    <Checkoutsss/>
    </Provider>
  )
}

export default checkoutss