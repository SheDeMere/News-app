import React from 'react';
import { useSelector } from 'react-redux';
import NewsGuest from '../Components/newsGuest';
import NewsUser from '../Components/newsUser';
import NewsAdmin from '../Components/newsAdmin';
function Index () {
  const { guest, user, admin } = useSelector(state => state.login)
  return (
   <div>
     {guest && <NewsGuest/>}
     {user && <NewsUser />}
     {admin && <NewsAdmin />}
   </div>
  )
}

export default Index