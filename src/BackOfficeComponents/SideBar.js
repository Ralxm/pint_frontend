import React from 'react'
import '../Universal/index.css'

export default function SideBar(){
    return(
        <div className='side-bar col-2'>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/estatistica"}>
                Estatísticas
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/auditlog"}>
                Audit Log
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/colaboradores"}>
                Colaboradores
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/cargos"}>
                Cargos
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/cidades"}>
                Cidades
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/categoria"}>
                Categorias
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/subcategoria"}>
                Subcategorias
            </div>
            <div className='col-lg-12 backoffice-option' onClick={() => window.location= "#/backoffice/post"}>
                Post
            </div>
        </div>
    )
}