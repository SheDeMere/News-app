import React from 'react'
import { useSelector } from 'react-redux'
import HeaderGuest from './headerUsers'
import HeaderUser from './headerUsers'
import HeaderAdmin from './headerAdmin'
function Index () {
  const {guest, user, admin} = useSelector(state => state.login)
  return (
    <div>
      {guest && HeaderGuest}
      {user && HeaderUser}
      {admin && HeaderAdmin}
    </div>
  )
}

export default Index