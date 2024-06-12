import React from 'react'
import '../Universal/index.css'

export default function SideBar(){
    return(
        <div className='side-bar col-2'>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/auditlog"}>
                Audit Log
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/colaboradores"}>
                Colaboradores
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/cidades"}>
                Cidades
            </div>
            <div className='col-lg-12 backoffice-option'>
                
            </div>
            <div className='col-lg-12 backoffice-option'>
                
            </div>
        </div>
    )
}