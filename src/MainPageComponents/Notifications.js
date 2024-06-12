import React from 'react'
import '../Universal/index.css'
import Notification from './Notification'

class Notifications extends React.Component{
    render(){
        return(
            <div className='container-fluid notifications-box'>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
                <Notification></Notification>
            </div>
        )
    }
}

export default Notifications