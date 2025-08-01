import React from 'react'

const Notification = ({hasNotification}) => {
  return (
    <div>
        {hasNotification && <p>You have a Message!</p>}

    </div>
  )
}

export default Notification