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

export default pricing