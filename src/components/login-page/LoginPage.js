import React, { useEffect, useState } from "react";
import pmuLogo from "../../assets/images/pngs/pmu.jpg"
import background from "../../assets/images/pngs/image-removebg-preview.png"
import "./loginpage.scss"
import errorIcon from "../../assets/images/svgs/error.svg"
import { postApiData } from "../../utils/apiServices";
import { BASE_URL, LOGIN_URL } from "../../utils/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const LoginPageComponent = ()=>{
    const navigate = useNavigate();
     const notify = (msg) => toast(msg);
    
    const [userEmail, setUserEmail] = useState({value: '', isValid: false, errorMsg: 'Please enter your email', isTouched: false})

    const [valid, setValid] = React.useState({value: '', isValid: false, errorMsg: 'Please enter your Password', isTouched: false});
    // const [errorMsg, setErrorMsg] = React.useState('');

    const updateValidation = ()=>{
        console.log("text")
    }
    return(
        <div className="login-page">
            <ToastContainer />
            <div>
                <div className="image-block">
                <img src={background} className="logo-bg"/>
                <img src={pmuLogo} className="pmu-logo"/>
                <p className="project-heading">
                    Project <span className="colored-text">Management</span> Universe
                </p>
           </div>
            </div>
           
           <div className="login-page-block">
            <div className="sign-in-block">
                <p className="sign-in-txt active-txt" >
                    Sign In
                </p>
              
            </div>
            <div className="input-block">
                <div className="email-block">
                    <input type="email" 
                         className="input-field"
                          placeholder="Email Id"
                          value={userEmail.value}
                            onChange={(e) => {
                                let pattern= new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+")
                                if(e.target.value.length <= 0) {
                                    setUserEmail({value: e.target.value, isValid: false, errorMsg: 'Please enter your email', isTouched: false})
                                } else if(!pattern.test(e.target.value)) {
                                    setUserEmail({value: e.target.value, isValid: false, errorMsg: 'Please enter valid email', isTouched: false})
                                } else {
                                    setUserEmail({value: e.target.value, isValid: true, errorMsg: '', isTouched: false})
                                }
                            }}
                          />
                    {!userEmail.isValid && userEmail.isTouched ? <p className="error-msg">
                        <img src={errorIcon}/>
                        {userEmail.errorMsg}</p> : <></>}
                </div>
                <div className="email-block">
                    <input type="password" className="input-field" placeholder="Password"   
                        onChange={(e)=>{
                            if(e.target.value.length <= 0) {
                                setValid({value: e.target.value, isValid: false, errorMsg: 'Please Enter Valid Password', isTouched: false})
                            } 
                            else{
                                setValid({value: e.target.value, isValid: true, errorMsg: '', isTouched: false})
                            }
                        }}
                    />
                    {!valid.isValid && valid.isTouched ?<p className="error-msg">
                        <img src={errorIcon}/>
                        {valid.errorMsg}</p>:<></>}
                </div>
                <button className="login-btn common-btn-styles" onClick={() => {
                    
                    if(!userEmail.isValid || !valid.isValid) {
                        setUserEmail((prev) => {return {...prev,  isTouched: true}})
                        setValid((prev) => {return {...prev,  isTouched: true}})
                        notify("Invalid Request")
                    }
                    else{
                        let payload =
                            {
                                email: userEmail.value,
                                password: valid.value
                            }
                        
                        console.log("called")
                         postApiData(
                            `${BASE_URL}${LOGIN_URL}`,
                            "POST",
                            payload
                          )
                            .then((response) => {
                              if (response.status === 200) {
                                    if(response.data.message === "SUCCESS"){
                                        navigate('/projects')
                                    }
                                    else{
                                        notify(response.data.message)
                                    }
                              }
                            })
                            .catch((error) => {
                                notify("Invalid Request")
                                console.log(error,"erroe text")
                            });
                    }
                    
                }} >
                Login
            </button>
            </div>
           
            <p className="forgot-pass">Forgot Password?</p>
           </div>
        </div>
    )

}
export default LoginPageComponent;