import React from 'react';
import {GetToken} from "./utility/TokenHelper.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import UserLoginPage from "./pages/UserLoginPage.jsx";
import OTPPage from "./pages/OTPPage.jsx";

const App = () => {


    if(GetToken()){

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListPage/>}/>
                    <Route path="/cart" element={<CartListPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
    else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListPage/>}/>
                    <Route path="/login" element={<UserLoginPage/>}/>
                    <Route path="/otp" element={<OTPPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }


};

export default App;