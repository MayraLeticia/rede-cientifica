import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login } from "../screens";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route  path="/home" element={<Home />} />
                <Route  path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
