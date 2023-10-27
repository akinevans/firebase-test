import React, { useEffect, useState } from "react";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";

//TODO: add ability to sign in once user is created
//TODO refactor everything inside of useEffect
//TODO: Work on form input popup logic 'required' and 'incorrect password' etc...

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passEyeVisible, setPassEyeVisible] = useState(false);
  const [confirmEyeVisible, setConfirmEyeVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [emailError, setEmailError] = useState(false);

  // true renders text at 24px, false at 16px
  const [passTextSize, setPassTextSize] = useState(false);
  const [confirmPassTextSize, setConfirmPassTextSize] = useState(false);

  const navigate = useNavigate();

  // Error state styling for incorrect form inputs
  const errorStyling = " text-[#c9324e] outline-[2px] outline-[#c9324e] ";

  // Sign up a new user with firebase
  const signupNewUser = (e) => {
    e.preventDefault();

    //! TODO: implement actual email validation
    if (validateEmail(email)) {
      if (termsAccepted) {
        //& validate password login
        if (validatePasswords(password, confirmPassword)) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              alert("Successfully created user!");
              navigate("/login");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
            });
        } else {
          console.log("passwords don't match");
          alert("passwords do not match");
        }
      }
    }
  };

  //! TODO: implement actual password validation
  const validatePasswords = (passwordValue, confirmPasswordValue) => {
    if (passwordValue !== confirmPasswordValue) {
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    if (email === "") {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  // get the value of the input fields for password and confirm password,
  useEffect(() => {
    const passwordInput = document.getElementById("passwordInput"),
      confirmPasswordInput = document.getElementById("confirmPassword"),
      passEye = document.getElementById("passwordEye"),
      passConfirmEye = document.getElementById("confirmPasswordEye");

    // when password  & confirm password input fields are changed call checkPasswordInput function
    passwordInput.onChange = checkPasswordInput(
      "passwordInput",
      passwordInput.type
    );
    confirmPasswordInput.onChange = checkPasswordInput(
      "confirm-passwordInput",
      confirmPasswordInput.type
    );

    // When the eye icon is clicked, password visibility will toggle
    passEye.onclick = triggerPasswordTextVisibility;
    passConfirmEye.onclick = triggerConfirmTextVisibility;

    function triggerPasswordTextVisibility() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        setPassTextSize(false);
      } else {
        passwordInput.type = "password";
        setPassTextSize(true);
      }
      return;
    }

    function triggerConfirmTextVisibility() {
      if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        setConfirmPassTextSize(false);
      } else {
        confirmPasswordInput.type = "password";
        setConfirmPassTextSize(true);
      }
      return;
    }

    function checkPasswordInput(field, inputType) {
      if (field === "passwordInput" && inputType === "password") {
        setPassEyeVisible(true);
        setPassTextSize(true);
      } else if (
        field === "confirm-passwordInput" &&
        inputType === "password"
      ) {
        setConfirmEyeVisible(true);
        setConfirmPassTextSize(true);
      }
    }

    // passwordInput.onchange = validatePassword;
    // confirmPasswordInput.onchange = validatePassword;
  });

  return (
    <div className='login-page-wrapper w-[100%]'>
      <LoginHeader />
      <div className='flex flex-col justify-center items-center login-page-inner-wrapper w-[100%] h-[100%]'>
        <div className='content-wrapper flex flex-col gap-[24px] mt-[192px] max-w-[420px] w-[52%]'>
          <h1 className='font-Poppins font-semibold w-[100%] text-[40px] leading-[54px] text-center text-black'>
            Sign Up
          </h1>
          <form
            action=''
            onSubmit=''
            className='flex flex-col gap-[24px] border-b-[1px] border-[#CED4DA]'
          >
            <input
              type='text'
              placeholder='Your Full Name'
              required
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg  `}
            />
            <input
              type='email'
              id='email'
              placeholder='Your Email'
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg  `}
            />
            {/* //! add state to trigger required error message */}
            <p
              className={`mt-[-20px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                emailError ? errorStyling : "hidden"
              }`}
            >
              This field is required
            </p>
            <div className='password-input-wrapper relative'>
              <input
                id='passwordInput'
                type='password'
                required
                minLength={6}
                placeholder='Create Password'
                onChange={(e) => setPassword(e.target.value)}
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px]  ${
                  passTextSize ? " text-[24px] py-[3.6px] " : ""
                }  `}
              />
              {/* //! add state to trigger password error messages (Firebase may help with this) */}

              <p className='hidden mt-[2px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px]'>
                Your password should be at least 6 characters long.
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}

              <img
                className={`absolute top-[15px] right-[17px] w-[22px] h-[15px] cursor-pointer ${
                  passEyeVisible ? "" : "hidden"
                }`}
                src=''
                alt=''
                id='passwordEye'
              />
            </div>
            <div className='confirm-password-input-wrapper relative'>
              <input
                id='confirmPassword'
                type='password'
                required
                minLength={6}
                placeholder='Confirm Password'
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${
                  confirmPassTextSize ? "text-[24px] py-[3.6px]" : ""
                }  `}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* //! add state to trigger password error messages (Firebase may help with this) */}

              <p className='hidden mt-[2px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px]'>
                Your password does not match.
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}
              <img
                className={`absolute top-[15px] right-[17px] w-[22px] h-[15px] cursor-pointer ${
                  confirmEyeVisible ? "" : "hidden"
                }`}
                src=''
                alt=''
                id='confirmPasswordEye'
              />
            </div>
            <div className='terms-and-conditions-checkbox-wrapper flex flex-row justify-start items-center'>
              <div className='checkbox-and-label-wrapper'>
                <input
                  type='checkbox'
                  id='checkbox'
                  name='terms'
                  value='checkbox'
                  required
                  checked={termsAccepted}
                  onClick={() => {
                    setTermsAccepted(!termsAccepted);
                  }}
                  className='w-[16px] h-[16px] mr-[8px] rounded-lg cursor-pointer'
                />
                <label
                  for='remember-me'
                  className='mr-[4px] font-Poppins font-medium text-[#6C757D] text-[16px] text-center leading-[24px]'
                >
                  {" "}
                  I agree to the
                </label>
              </div>
              <Link
                to='/terms'
                target='_blank'
                className='font-Poppins font-medium text-[#556AEB] text-[16px] text-center leading-[24px] underline'
              >
                Terms and Conditions
              </Link>
            </div>
            {/* //& submit button */}
            <input
              type='submit'
              value='Sign Up'
              className={`w-[100%] h-[48px] mb-[24px] font-Poppins font-medium text-[16px] text-white text-center leading-[24px] bg-[#556AEB] rounded-lg cursor-pointer `}
              onClick={signupNewUser}
            />
          </form>

          <Link
            to=''
            className='flex flex-row justify-center items-center gap-[16px] w-[100%] h-[48px] py-[12px] font-Poppins text-[16px] leading-[24px] text-[#556AEB]  rounded-lg border-[1px] border-[#556AEB] text-center'
          >
            {/* <img src={google} alt='Google Logo' className='w-[24px] h-[24px]' /> */}
            Sign Up with Google
          </Link>
          <div className='sign-up-wrapper flex flex-row justify-center items-center'>
            <p className='font-Poppins font-medium text-[16px] leading-[24px] text-black'>
              Already have an Account?{" "}
              <Link
                to='/login'
                className='ml-[4px] font-Poppins font-medium text-[16px] leading-[24px] text-[#556AEB] cursor-pointer underline'
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
