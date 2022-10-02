import React from 'react'
import { Modal } from 'react-responsive-modal';
import { useState, useEffect, useRef } from 'react';
import 'react-responsive-modal/styles.css';
import Select from 'react-select';
import './ModalFuc.css';
// import SignInWithEmail from './SignInWithEmail';
const MobileModal = () => {
    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [openSecond, setOpenSecond] = useState(false);

    useEffect(() => {
        if (setOpenSecond) {
            setOpen(false);
        }
        else if(setOpen){
            setOpenSecond(false);
        }
    }, [openSecond,open])
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
            <Modal
                ref={modalRef}
                open={open}
                onClose={() => setOpen(false)}
                initialFocusRef={modalRef}
            >
                <h2 className='signInSignUpHead'>Sign In</h2>
                <hr></hr>
                <form action="">
                    <div className='modalDiv'>
                        <div className='modalInnerDiv'>
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
                        <p onClick={() => setOpenSecond(true)} className='signInWithEmail'>Sign In With Email?</p>
                    </div>
                    <hr></hr>
                    <div className='buttonDiv'>
                        <button className='buttonStyles'>CANCEL</button>
                        <input className='verifySubmit' type="submit" value="VERIFY WITH OTP" />
                    </div>

                </form>
            </Modal>
            <Modal
                ref={modalRef}
                open={openSecond}
                onClose={() => setOpenSecond(false)}
                initialFocusRef={modalRef}
            >
                {/* <SignInWithEmail /> */}
            </Modal>
        </div>
    )
}

export default MobileModal