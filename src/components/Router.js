import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Auth from "../routes/Auth";
import Home from "../routes/Home";

function AppRouter() {
    const [LoggedIn, setLoggedIn] = useState(false);
    return (
        <Routes>
            {LoggedIn ?
                <Route path="/home" element={<Home />} />
                :
                <Route path="/auth" element={<Auth />} />
            }
        </Routes>
    )
}

export default AppRouter;
