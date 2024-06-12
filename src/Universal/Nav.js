import React from 'react'
import './index.css'


class NavigationBar extends React.Component{
    render(){
        return(
                <div className='title-row'>
                    <a className='col-lg-12 softshares-tile' onClick={() => window.location = "/#/mainpage"} style={{cursor: "pointer"}}>
                        Softshares
                    </a>
                </div>
        )
    }
}

export default NavigationBar