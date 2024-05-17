import React from 'react'
import '../index.css'

class Notification extends React.Component{
    render(){
        return(
            <div className='container-fluid col-lg-12 notification'>
                <div className='col-lg-12 notification-title'>
                    <h4>Post do Ti Manel</h4>
                </div>
                <div className='col-lg-12 notification-text'>
                    <p>Modal body text goes here.</p>
                </div>
                <div className='col-lg-12 notification-buttons'>
                    <Aceitar></Aceitar>
                    <Rejeitar></Rejeitar>
                </div>
            </div>
        )
    }
}

function Aceitar(){
    return(
        <button className='button-aceitar'>
            Aceitar
        </button>
    )
}


function Rejeitar(){
    return(
        <button className='button-rejeitar'>
            Rejeitar
        </button>
    )
}

export default Notification