import NavigationBar from "./Nav";
import LoginInput from "./Login";
import Footer from './Footer';
import React from 'react'
import ImagemLogin from "./ImagemLogin";
import Filtro from './mainpage/Filtro'
import PostBox from "./mainpage/Posts";
import * as data from './mainpage/posts.json'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./mainpage/Profile";
import Notifications from "./mainpage/Notifications";

const word = JSON.stringify(data);
const arr = JSON.parse(word);

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                <Router>   
                    <Routes>
                        <Route exact path='/' element={<LoginPage></LoginPage>}>
                        </Route>
                        <Route exact path='/mainpage' element={<PaginaPrincipal></PaginaPrincipal>}>
                        </Route>
                        <Route exact path='/chats' element={<PaginaChats></PaginaChats>}>

                        </Route>
                    </Routes>
                </Router>
                <Footer></Footer>
            </div>
        )
    }
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

export default MainPage