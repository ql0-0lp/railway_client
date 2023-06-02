import React, {useContext, useEffect} from 'react';
import './globalCSS/root.css'
import './globalCSS/reset.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRoute";
import Footer from "./components/Footer/Footer";
import {check, checkAdmin} from "./http/userAPI";
import {Context} from "./index";
import jwt_decode from "jwt-decode";

const App = () => {

    const {user} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token'))
            check().then((data) => {
                user.setUserId(data.user_id)
                if (data) {
                    checkAdmin().then((role) => user.setIsAdmin(role))
                    user.setIsAuth(true)
                }
            })
    }, [])

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;