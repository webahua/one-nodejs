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
