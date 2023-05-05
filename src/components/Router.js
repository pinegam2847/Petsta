import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Auth from "../routes/Auth";
import Home from "../routes/Home";

import LogIn from "./LogInPage";
import SignUp from "./SignUpPage";


function AppRouter() {
    const [LoggedIn, setLoggedIn] = useState(false);
    return (
        <Routes>
            {LoggedIn ?
                <Route path="/auth" element={<Auth />} />
                :
                <>
                    <Route path="/" element={<Home />} />
                </>
            }
            <Route path="/loginpage" element={<LogIn />} />
            <Route path="/signuppage" element={<SignUp />} />
        </Routes>
    )
}

export default AppRouter;
