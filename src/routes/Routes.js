import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, FreeFlow, Continuação, Register, Profile, PDF } from "../screens";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/home" element={<Home />} />
                <Route  path="/PDF" element={<PDF />} />
                <Route  path="/login" element={<Login />} />
                <Route  path="/perfil" element={<Profile />} />
                <Route  path="/registro" element={<Register />} />
                <Route path="/freeflow/:id" element={<FreeFlow />} />
                <Route path="/continuação/:id" element={<Continuação />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
