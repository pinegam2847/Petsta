import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { auth } from "./../firebase.js"
import AppRouter from "./Router.js";

function App() {

  const [LoggedIn, setLoggedIn] = useState(null);
  const naivate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // 사용자가 로그인한 상태
        setLoggedIn(true);
        naivate('/main');
      } else {
        // 사용자가 로그아웃한 상태
        setLoggedIn(null);
        naivate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <AppRouter LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
