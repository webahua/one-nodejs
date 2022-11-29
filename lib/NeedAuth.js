import React from 'react'
import { useSelector } from 'react-redux'

const NeedAuth = props => {
    const auth = useSelector(state => state.auth)
  return auth.isLogged ? props.children : <Navigate/>
}

export default NeedAuth