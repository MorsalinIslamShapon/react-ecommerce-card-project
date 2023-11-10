import React, {useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {UserLoginRequest} from "../apiRequest/apiRequest.js";
import {useNavigate} from "react-router-dom";
import FullScreenLoader from "./FullScreenLoader.jsx";

const LoginForm = () => {

    const [FormValue,SetFormValue]=useState({UserEmail:""});
    const [loader,SetLoader]=useState("d-none");


    const navigate=useNavigate();

   const InputOnChange = (key,value) => {
       SetFormValue(FormValue=>({
           ...FormValue,
           [key]:value
       }))
   }


   const submitForm = async () => {
       if(FormValue.UserEmail.length===0){
           toast.error("Email Address Required")
       }
       else{
           SetLoader("")
           let msg= await UserLoginRequest(FormValue);
           SetLoader("d-none")
           if(msg==="success"){
              toast.success("Request Successful");
              navigate("/otp")
             }
             else {
             toast.error("Request Fail ! Try Again")
            }
       }
   }




    return (
        <>
            <div className="container mt-5 ">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-5">
                        <h3>Login</h3>
                        <input value={FormValue.UserEmail} onChange={(e)=>{InputOnChange('UserEmail',e.target.value)}} type="email" className="form-control" placeholder="Your Email Address"/>
                        <button onClick={submitForm} className="btn my-2 w-100 btn-primary">Next</button>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
            <FullScreenLoader visibility={loader}/>
        </>
    );
};

export default LoginForm;