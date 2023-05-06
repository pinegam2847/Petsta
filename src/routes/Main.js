import React from "react";
import { auth } from "../firebase";
import { Link, Outlet } from "react-router-dom";
import './../style/main.css'

function Auth() {




    return (<div className="main_container">

        <div className='navbar'>
            <h1>LOGO</h1>

            <button onClick={() => { auth.signOut() }}>로그아웃</button>

            <Link to='/main/editprofile'>사용자 정보 수정</Link>
        </div>

        <br></br>
            <div className="main_feed">
                <div className="box">게시물1</div>
                <div className="box">게시물2</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
                <div className="box">게시물</div>
            </div>

        <Outlet>대충 프로필 수정 나타내는 Outlet</Outlet>

    </div>
    )
}
export default Auth;