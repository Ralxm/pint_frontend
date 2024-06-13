import NavigationBar from "./Nav";
import LoginInput from "../LoginComponents/Login";
import Footer from './Footer';
import React from 'react'
import ImagemLogin from "../LoginComponents/ImagemLogin";
import Filtro from '../MainPageComponents/Filtro'
import PostBox from "../MainPageComponents/Posts";
import * as data from './posts.json'
import * as dummy from './post-dummy.json'
import { Route, Routes } from "react-router-dom";
import Profile from "../MainPageComponents/Profile";
import Notifications from "../MainPageComponents/Notifications";
import Post from "../PostComponents/Post"
import SideBar from "../BackOfficeComponents/SideBar";
import AuditLog from "../BackOfficeComponents/AuditLog"
import BackOffice from "../BackOffice/BackOffice";

const word = JSON.stringify(data);
const arr = JSON.parse(word);

const dummyjson = JSON.stringify(dummy);
const arrdummy = JSON.parse(dummyjson); 

export default function MainPage() {
        return (
            <div>
                <NavigationBar></NavigationBar> 
                    <Routes>
                        <Route path='/' element={<LoginPage></LoginPage>}>
                        </Route>
                        <Route path='mainpage' element={<PaginaPrincipal></PaginaPrincipal>}>
                        </Route>
                        <Route path='post' element={<Publicacao></Publicacao>}>
                        </Route>
                        <Route path='backoffice/*' element={<BackOffice></BackOffice>}>
                        </Route>
                    </Routes>
                <Footer></Footer>
            </div>
        )
}

function LoginPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <LoginInput></LoginInput>
                <ImagemLogin></ImagemLogin>
            </div>
        </div>
    )
}

function PaginaPrincipal() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Filtro></Filtro>
                <PostBox info={arr.posts}></PostBox>
                <div className="col-lg-3 pe-0 g-0">
                    <Profile></Profile>
                    <Notifications></Notifications>
                </div>
            </div>
        </div>
    )
}

function Publicacao(){
    return (
        <div className="container-fluid">
            <div className="row">
                <Post info={arrdummy}></Post>
                <div className="col-lg-3 pe-0 g-0">
                    <Profile></Profile>
                    <Notifications></Notifications>
                </div>
            </div>
        </div>
    )
}

/*function BackOffice(){
    return(
        <div className="container-fluid" style={{display: "flex"}}>
                <SideBar></SideBar>
                <Routes>
                    <Route path='auditlog' element={<AuditLog></AuditLog>}>
                    </Route>
                    <Route path='colaboradores' element={<Publicacao></Publicacao>}>
                    </Route>
                    <Route path='cidades' element={<BackOffice></BackOffice>}>
                    </Route>
                </Routes>
        </div>
    )
}*/