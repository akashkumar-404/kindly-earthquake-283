import React from 'react'
import './ModalFuc.css';
import Select from 'react-select';
import { useState, useRef } from "react";
// import { Modal } from 'react-responsive-modal';
// import 'react-responsive-modal/styles.css';
// import MobileModal from './MobileModal';

const SignUp = (signUp) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [toggle, setToggle] = useState("Sign Up");
  const [signUpSignIn, setsignUpSignIn] = useState("Sign In Instead");
  // const [openfirst, setOpenFirst] = useState(false);
  // const modalRef = useRef(null);

  const toggleValue = () => {
    // console.log(signUp)
    let value = toggle;
    let value2 = signUpSignIn;
    if (value === "Sign Up" && value2 === "Sign In Instead") {
      setToggle("Sign In");
      setsignUpSignIn("Sign Up Instead");
    }
    else {
      setToggle("Sign Up");
      setsignUpSignIn("Sign In Instead");
    }
  };
  const options = [
    { value: '1', label: '+1' },
    { value: '7', label: '+7' },
    { value: '20', label: '+20' },
    { value: '27', label: '+27' },
    { value: '30', label: '+30' },
    { value: '31', label: '+31' },
    { value: '32', label: '+32' },
    { value: '33', label: '+33' },
    { value: '34', label: '+34' },
    { value: '36', label: '+36' },
    { value: '39', label: '+39' },
    { value: '40', label: '+40' },
    { value: '41', label: '+41' },
    { value: '43', label: '+43' },
    { value: '44', label: '+44' },
    { value: '45', label: '+45' },
    { value: '46', label: '+46' },
    { value: '47', label: '+47' },
    { value: '48', label: '+48' },
    { value: '49', label: '+49' },
    { value: '51', label: '+51' },
  ];
  return (
    <div>
      <form action="">
        <div className='headingDiv'>
          <h2 className='signInSignUpHead'>{toggle}</h2>
          <p onClick={() => {
            toggleValue()
            // setOpenFirst(true);
            console.log("sign up",signUp)
          }
          } className='signInWithEmail'>{signUpSignIn}</p>
        </div>
        <hr></hr>
        <div style={{ height: "60px" }} className='modalInnerDiv'>
          <div className='selectDiv'>
            <Select className='selectStyle'
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
          <div className='inputDiv'>
            <input className='digitInput' type="text" placeholder='Mobile Number...' />
            <p className='onlyDigits'>Only digits allowed.</p>
          </div>
        </div>

        <div>
          <input style={{ marginTop: "10px", width: "578px", marginLeft: "8px" }} className='digitInput' type="email" placeholder='Email Address...' />
          <br />
          <input style={{ marginTop: "24px", width: "578px", marginLeft: "8px" }} className='digitInput' type="password" placeholder='Password...' />
        </div>

        <div style={{ marginTop: "20px", marginLeft: "8px" }}>

          <input className='firstname' type="text" placeholder='First Name' />
          <input style={{ marginLeft: "38px" }} className='firstname' type="text" placeholder='Last Name' />

        </div>

        <hr style={{ marginTop: "20px" }}></hr>
        <div className='buttonDiv'>
          <button className='buttonStyles'>CANCEL</button>
          <input className='verifySubmit' type="submit" value="VERIFY WITH OTP" />
        </div>
      </form>
      {/* <Modal
        ref={modalRef}
        open={openfirst}
        onClose={() => setOpenFirst(false)}
        initialFocusRef={modalRef}
      >
        <MobileModal />
      </Modal> */}
    </div>
  )
}

export default SignUp;
