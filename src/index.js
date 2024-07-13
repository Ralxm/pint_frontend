import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './Universal/MainPage'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthService from "./views/auth-service";
import authService from './views/auth-service';

const baseurl = 'https://pint-backend-8vxk.onrender.com';

export default function AppComponent(){
    const [currentUser, setcurrentUser] = useState("");

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setcurrentUser({ currentUser: user });
        }
    }, []);
    
    function logOut() {
        AuthService.logout();
    }
}

const router = createHashRouter([
    {
        path:"/*",
        element:<MainPage></MainPage>,
    }
]);

ReactDOM.createRoot(document.getElementById('raiz')).render(
    <BrowserRouter>
        <RouterProvider router={router}></RouterProvider>
    </BrowserRouter>
    //</React.StrictMode> 
)

//ReactDOM.render(<MainPage />, document.getElementById('raiz'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
