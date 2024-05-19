import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, FreeFlow } from "../screens";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route  path="/home" element={<Home />} />
                <Route  path="/login" element={<Login />} />
                <Route path="/freeflow/:id" element={<FreeFlow />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
