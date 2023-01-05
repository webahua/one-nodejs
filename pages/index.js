<<<<<<< HEAD
import Layout from "../components/Layout"
import { Provider } from 'react-redux'
import store from '../lib'

export default function Home() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
=======
import Layout from "../components/Layout"
import { Provider } from 'react-redux'

import store from '../lib'

export default function Home() {
  return (
    <Provider store={store}>
    <Layout />
    </Provider>
  )
}
>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
