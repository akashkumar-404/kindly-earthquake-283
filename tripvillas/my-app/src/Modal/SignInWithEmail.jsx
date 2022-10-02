import React from 'react'
import './ModalFuc.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState, useRef, useEffect } from 'react';
// import MobileModal from './MobileModal';
const SignInWithEmail = () => {

    const [openFirst, setOpenFirst] = useState(false);
    const modalRef = useRef(null);
    const [toggle, setToggle] = useState("Sign In");
    const [signUpSignIn, setsignUpSignIn] = useState("Sign Up Instead");

    const toggleValue = () => {
        let value = toggle;
        let value2 = signUpSignIn;
        if (value === "Sign In" && value2 === "Sign Up Instead") {
            setToggle("Sign Up");
            setsignUpSignIn("Sign In Instead");
        }
        else {
            setToggle("Sign In");
            setsignUpSignIn("Sign Up Instead");
        }
    };

    useEffect(() => {
        if (setOpenFirst) {

        }
    }, [openFirst])

    return (

        <div>
            <form action=''>
                <div className='emailMainDiv'>
                    <div className='headingDiv'>
                        <h2 className='signInSignUpHead'>{toggle}</h2>
                        <p onClick={toggleValue} className='signInWithEmail'>{signUpSignIn}</p>
                    </div>
                    <hr></hr>
                    <input style={{ marginTop: "10px", width: "570px", marginLeft: "14px" }} className='digitInput' type="email" placeholder='Email Address...' />
                    <br />
                    <input style={{ marginTop: "24px", width: "570px", marginLeft: "14px" }} className='digitInput' type="password" placeholder='Password...' />
                    <p style={{ marginTop: "24px", marginLeft: "14px" }} className='signInWithEmail'>Sign In With Mobile & One Time Password?</p>
                    <hr></hr>
                    <div style={{ marginLeft: "364px", width: "230px" }} className='buttonDiv'>
                        <button className='buttonStyles'>CANCEL</button>
                        <input className='verifySubmit' type="submit" value="sign in" />
                    </div>
                </div>
            </form>
            <Modal
                ref={modalRef}
                open={openFirst}
                onClose={() => setOpenFirst(false)}
                initialFocusRef={modalRef}
            >
                {/* <MobileModal /> */}
            </Modal>
        </div>
    )
}

export default SignInWithEmail;
