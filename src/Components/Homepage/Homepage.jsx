import React from 'react'
import Navbar from '../Navbar/Navbar'
import Notification from '../Notification/Notification'
import Filter from '../Filter/Filter'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Filter/>
        <Notification hasNotification={true}/>

    </div>
  )
}

export default Homepage