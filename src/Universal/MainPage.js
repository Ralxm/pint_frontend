import NavigationBar from "./Nav";
import LoginInput from "../LoginComponents/Login";
import Footer from './Footer';
import React from 'react'
import ImagemLogin from "../LoginComponents/ImagemLogin";
import Filtro from '../MainPageComponents/Filtro'
import PostBox from "../MainPageComponents/Posts";
import * as data from './posts.json'
import { Route, Routes } from "react-router-dom";
import Profile from "../MainPageComponents/Profile";
import Notifications from "../MainPageComponents/Notifications";

const word = JSON.stringify(data);
const arr = JSON.parse(word);

export default function MainPage() {
        return (
            <div>
                <NavigationBar></NavigationBar> 
                    <Routes>
                        <Route path='/' element={<LoginPage></LoginPage>}>
                        </Route>
                        <Route path='mainpage' element={<PaginaPrincipal></PaginaPrincipal>}>
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

function PaginaChats(){
    return(
        <div>
            asdasd
        </div>
    )
}