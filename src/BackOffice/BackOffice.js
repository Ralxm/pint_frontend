import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../Universal/index.css';
import SideBar from '../BackOfficeComponents/SideBar';

import AuditLog from '../BackOfficeComponents/AuditLog';
import Colaborador from '../BackOfficeComponents/Colaborador';
import Cargo from '../BackOfficeComponents/Cargo'
import Cidade from '../BackOfficeComponents/Cidade'
import Categoria from '../BackOfficeComponents/Categoria'
import Subcategoria from '../BackOfficeComponents/Subcategoria';
import Post from '../BackOfficeComponents/Post'

function BackOffice(){
    return(
        <div className="container-fluid" style={{display: "flex"}}>
                <SideBar></SideBar>
                <Routes>
                    <Route path='auditlog' element={<AuditLog></AuditLog>}>
                    </Route>
                    <Route path='colaboradores' element={<Colaborador></Colaborador>}>
                    </Route>
                    <Route path='cargos' element={<Cargo></Cargo>}>
                    </Route>
                    <Route path='cidades' element={<Cidade></Cidade>}>
                    </Route> 
                    <Route path='categoria' element={<Categoria></Categoria>}>
                    </Route> 
                    <Route path='subcategoria' element={<Subcategoria></Subcategoria>}>
                    </Route> 
                    <Route path='post' element={<Post></Post>}>
                    </Route>
                </Routes>
        </div>
    )
}

export default BackOffice;