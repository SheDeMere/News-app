import React from 'react'
import { useSelector } from 'react-redux'

import HeaderUser from './headerUsers'
import HeaderAdmin from './headerAdmin'
function Index () {
  const { admin } = useSelector(state => state.login)

  return (
    <div>
      {admin ? <HeaderAdmin /> : <HeaderUser />}
    </div>
  )
}

export default Index