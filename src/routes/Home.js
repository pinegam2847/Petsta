import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import Modal from 'react-modal';


import LogIn from "./../components/LogInPage";
import SignUp from "./../components/SignUpPage";

import './../style/home.css'

function Home() {


    const [modalIsOpen, setModalIsOpen] = useState(false);


    const StyledLink = styled(Link)`
  text-decoration : none
  `;
    return (
        <div className="main">
            <div className="firstpage">
                <h1>Welcome To Petsta!</h1>
                <img src="./main.jpg" style={{width:'300px'}}></img>
                <div className="movepage">
                    <StyledLink to='/signuppage'>Sign Up</StyledLink>
                    <button onClick={() => setModalIsOpen(true)}>Log In</button>
                    <Modal 
                        isOpen={modalIsOpen} 
                        onRequestClose={() => setModalIsOpen(false)}
                        style={
                            {
                                overlay: {
                                },
                                content: {
                                    backgroundColor: 'rgba( 255, 255, 255, 0.5 )'
                                }
                            }
                        }
                        closeTimeoutMS={500}
                        
                        >
                        <LogIn />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Home;