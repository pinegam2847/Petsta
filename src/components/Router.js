import React from "react";
import { Routes, Route} from 'react-router-dom'

import Main from "../routes/Main.js";
import Home from "../routes/Home";
import EditProfile from "../routes/EditProfile.js"
import LogIn from "./LogInPage";
import SignUp from "./SignUpPage";


function AppRouter({LoggedIn,setLoggedIn}) {

    return (<>
    {}
        <Routes>
            {LoggedIn ?
                <Route path="/main" element={<Main />} >
                    <Route path="editprofile" element={<EditProfile />} />
                </Route>
                :
                <>
                    <Route path="/" element={<Home />} />
                </>
            }
            <Route path="/loginpage" element={<LogIn setLoggedIn={setLoggedIn} />} />
            <Route path="/signuppage" element={<SignUp setLoggedIn={setLoggedIn} />} />
        </Routes>
        </>
    )
}

export default AppRouter;
