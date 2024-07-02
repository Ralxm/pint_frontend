import NavigationBar from "./Nav";
import LoginInput from "../LoginComponents/Login";
import Footer from './Footer';
import React, {useEffect} from 'react'
import ImagemLogin from "../LoginComponents/ImagemLogin";
import Filtro from '../MainPageComponents/Filtro'
import PostBox from "../MainPageComponents/Posts";
import * as data from './posts.json'
import * as dummy from './post-dummy.json'
import { Route, Routes } from "react-router-dom";
import Profile from "../MainPageComponents/Profile";
import Notifications from "../MainPageComponents/Notifications";
import Pub from "../PostComponents/Post"
import SideBar from "../BackOfficeComponents/SideBar";
import AuditLog from "../BackOfficeComponents/AuditLog"
import BackOffice from "../BackOffice/BackOffice";
import authService from "../views/auth-service";
import { useNavigate } from "react-router-dom";
import Main from '../MainPageComponents/PaginaPrincipal'

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
    let user = authService.getCurrentUser();
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('mainpage');
        }
    }, [user, navigate]);

    if(!user){
        return (
            <div className="container-fluid">
                <div className="row">
                    <LoginInput></LoginInput>
                    <ImagemLogin></ImagemLogin>
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}

function PaginaPrincipal() {
    let user = authService.getCurrentUser();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/');
        }
    }, [user, navigate]);

    if(user){
        return (
            <div className="container-fluid">
                <div className="row">
                    <Main></Main>
                </div>
            </div>
            
            /*<div className="container-fluid">
                <div className="row">
                    <Filtro></Filtro>
                    <PostBox info={arr.posts}></PostBox>
                    <div className="col-lg-3 pe-0 g-0">
                        <Profile></Profile>
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>*/
        )
    }
}

function Publicacao(){
    return (
        <div className="container-fluid">
            <div className="row">
                <Pub info={arrdummy}></Pub>
                <div className="col-lg-3 pe-0 g-0">
                    <Profile></Profile>
                    <Notifications></Notifications>
                </div>
            </div>
        </div>
    )
}