import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, FreeFlow, Continuação } from "../screens";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route  path="/home" element={<Home />} />
                <Route  path="/login" element={<Login />} />
                <Route path="/freeflow/:id" element={<FreeFlow />} />
                <Route path="/continuação/:id" element={<Continuação />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
