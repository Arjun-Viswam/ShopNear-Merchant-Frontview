import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Login.module.css";
import DoValidation from "../Components/Signupcomponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import firebase from "../Components/firebase";
import cookie from "universal-cookie";
import { useHistory } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
const server = "http://localhost:5550";

function Signup() {
  const history = useHistory();
  useEffect(() => {
    const Merchant_token = Cookies.get("Merchant_token");
    if (Merchant_token) {
      history.push("/merchant")
    }else{
      history.push = "/merchant/signup"
    }
  },[]);

  const shopnameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();
  const coderef = useRef();
  const Cookies = new cookie();

  const [showActiveForm, setShowActiveForm] = useState(false);
  const [InputData, setInputData] = useState({});
  const [EmailError, setEmailError] = useState(false);
  const [MobileError, setMobileError] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  const [TimeOut, setTimeOut] = useState(false);
  const [value, setValue] = useState();
  const [MobileInput, setMobileInput] = useState(false);

  const setUpRecaptcha = () => { 
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      });
  };

  const onSignInSubmit = (event) => {
    event.preventDefault();
    if(value && isValidPhoneNumber(value)){
    let userData = {};
    userData.email = emailref.current.value;
    userData.mobile = value;
    axios
      .post(`${server}/merchant/checkData/`, userData)
      .then((checkRes) => {
        if (checkRes.data.response.existing) {
          setEmailError(true);
        } else if (checkRes.data.response.mobileExist) {
          setMobileError(true);
        } else {
          setUpRecaptcha();
          const phoneNumber = value;
          const appVerifier = window.recaptchaVerifier;
          firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              setInputData({
                shopname:shopnameref.current.value,
                email: emailref.current.value,
                mobile: value,
                password: passwordref.current.value,
              });
              setShowActiveForm(true);
            })
            .catch((error) => {
              console.log(error);
              // Error; SMS not sent
              setNotFound(true);
            });
        }
      })
      .catch((error) => {
        setNotFound(true);
      });
    }else{
      setMobileInput(true)
    }
  };

  const otpSubmit = (event) => {
    event.preventDefault();
    const code = coderef.current.value;
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        axios
          .post(`${server}/merchant/signup/`, InputData)
          .then((res) => {
            let data = JSON.parse(JSON.stringify(res.data));
            Cookies.set("token", data.token);
            localStorage.setItem("shopname", data.data.shopname);
            history.push("/merchant");
          })
          .catch((err) => {
            setNotFound(true);
          });
      })
      .catch((error) => {
        setTimeOut(true);
       
        
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    shopname: Yup.string()
      .min(4, "Must be more than 3 Characters")
      .required("Enter your shop name"),
    email: Yup.string()
      .email("Please type a valid email")
      .required("Enter your email"),
    password: Yup.string()
      .min(6, "Must be more than 6 Characters")
      .required("Enter your password"),
    mobile: Yup.string()
      .min(10)
      .max(10)
      .matches(phoneRegExp, "Phone number is not valid"),
    checkbox: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{
        shopname: "",
        email: "",
        mobile: "",
        password: "",
      }}
      validationSchema={validate}
    >
      {(formik) => {
        return (
          <div>
            {NotFound ? (
              <div>
                <img
                  style={{ width: "100%" }}
                  src="/images/404.jpg"
                  alt="server under maintenance"
                />
              </div>
            ) : (
              <div className={`${style.container123} container`}>
                <div className={`${style.contentCenter} row`}>
                  <div className="col-md-7 col-lg-5">
                    <div className={style.lgform}>
                      <div className={style.mainheading}>
                        <h2>Sign Up to Shop Near Merchant</h2>
                        <div className={style.lineshape1}>
                          <img src="/images/line.svg" alt="" />
                        </div>
                      </div>
                      {!showActiveForm ? (
                        <Form onSubmit={onSignInSubmit}>
                          <div className={style.formgroup}>
                          <label className="label15">Shop Name*</label>
                            <DoValidation
                              ref={shopnameref}
                              type="text"
                              className={style.jobinput}
                              name="shopname"
                              placeholder="Enter the Shop Name"
                              required
                            />
                          </div>
                          <div className={style.formgroup}>
                            <label className="label15">Email Address*</label>
                            <DoValidation
                              ref={emailref}
                              type="email"
                              className={style.jobinput}
                              name="email"
                              placeholder="Enter Email Address"
                              required
                            />
                            {EmailError ? (
                              <a className="error">
                                Entered Email already Exist
                              </a>
                            ) : null}
                          </div>
                          <div className={style.formgroup}>
                            <label className="label15">Phone Number*</label>
                            <PhoneInput
                              country="US"
                              className={style.jobinput}
                              value={value}
                              onChange={setValue}
                              name="mobile"
                              placeholder="Enter your Contact number"
                              error={
                                value
                                  ? isValidPhoneNumber(value)
                                    ? undefined
                                    : "Invalid phone number"
                                  : "Phone number required"
                              }
                              required
                            />
                            {MobileInput? <p style={{color:"red"}}>Enter a valid Number</p> : " "}
                            {MobileError ? (
                              <a className="error">
                                Entered Mobile Number already Exist
                              </a>
                            ) : null}
                          </div>
                          <div className={style.formgroup}>
                            <label className={style.label15}>Password*</label>
                            <DoValidation
                              ref={passwordref}
                              type="password"
                              className={style.jobinput}
                              name="password"
                              placeholder="Enter your Password"
                              required
                            />
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              name="checkbox"
                              tabindex="0"
                              required
                            />
                            <label className={style.label15}>
                              &nbsp; I accept the Terms of Services
                            </label>
                          </div>
                          <div id="recaptcha-container"></div>
                          <button type="submit" className={style.lrbtn}>
                            Next
                          </button>
                          <div className={style.done145}>
                            Already have an account?
                            <a href="/merchant/login">
                              Sign in Now
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </Form>
                      ) : (
                        <Form onSubmit={otpSubmit}>
                          <input
                            type="text"
                            ref={coderef}
                            className={style.jobinput}
                            name="code"
                            placeholder="Enter the OTP"
                          ></input>
                          <span style={{color:"green",fontWeight:"bold"}}></span>
                          <button type="submit" className={style.lrbtn}>
                            Next
                          </button>
                        </Form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {TimeOut ? (
              <div>
                <img
                  src="/images/timeout.webp"
                  alt="server under maintenance"
                />
              </div>
            ) : null}
          </div>
        );
      }}
    </Formik>
  );
}

export default Signup;
