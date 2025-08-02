import React from 'react'
import Navbar from '../Navbar/Navbar'
import Notification from '../Notification/Notification'
import Filter from '../Filter/Filter'
import InputHandling from '../InputHandling/InputHandling'
import FetchData from '../FetchData/FetchData'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Filter/>
        <Notification hasNotification={true}/>
        <InputHandling/>
        

    </div>
  )
}

export default Homepage