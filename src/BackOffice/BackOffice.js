import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../Universal/index.css';
import SideBar from '../BackOfficeComponents/SideBar';
import AuditLog from '../BackOfficeComponents/AuditLog';
import Colaborador from '../BackOfficeComponents/Colaborador';

function BackOffice(){
    return(
        <div className="container-fluid" style={{display: "flex"}}>
                <SideBar></SideBar>
                <Routes>
                    <Route path='auditlog' element={<AuditLog></AuditLog>}>
                    </Route>
                    <Route path='colaboradores' element={<Colaborador></Colaborador>}>
                    </Route>
                    <Route path='cidades' element={<AuditLog></AuditLog>}>
                    </Route>
                </Routes>
        </div>
    )
}

export default BackOffice;