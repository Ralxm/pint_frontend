import NavigationBar from "./Nav";
import LoginInput from "../LoginComponents/Login";
import Footer from './Footer';
import React, {useEffect} from 'react'
import ImagemLogin from "../LoginComponents/ImagemLogin";
import { Route, Routes } from "react-router-dom";
import BackOffice from "../BackOffice/BackOffice";
import authService from "../views/auth-service";
import { useNavigate } from "react-router-dom";
import Main from '../MainPageComponents/PaginaPrincipal'
import Post from '../PostComponents/Post'


export default function MainPage() {
        return (
            <div>
                <NavigationBar></NavigationBar> 
                    <Routes>
                        <Route path='/' element={<LoginPage></LoginPage>}>
                        </Route>
                        <Route path='mainpage' element={<PaginaPrincipal></PaginaPrincipal>}>
                        </Route>
                        <Route path='post/:id' element={<Publicacao></Publicacao>}>
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
        )
    }
}

function Publicacao(){
    return (
        <div className="container-fluid">
            <div className="row">
                <Post></Post>
            </div>
        </div>
    )
}