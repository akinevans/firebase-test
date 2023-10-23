import React from "react";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import { Link } from "react-router-dom";

export default function ForgotPassword2() {
  //TODO: get user email from firebase API, this is a placeholder function to be deleted later
  const getUserEmail = () => {
    let userEmail = "johnsmith1234@gmail.com";
    return <span className='font-bold'>{userEmail}</span>;
  };

  return (
    <div className='forgot-password-page-wrapper w-[100%] h-[100%]'>
      <LoginHeader />
      <div className='forgot-password-page-inner-wrapper flex flex-col justify-center items-center w-[100%] h-[100%]'>
        <div className='content-wrapper flex flex-col gap-[24px] max-w-[420px] w-[52%] mt-[264px]'>
          <h1 className='font-Poppins font-semibold w-[100%] text-[40px] leading-[54px] text-center text-black'>
            Firebase test
          </h1>
          <h1 className='font-Poppins font-semibold w-[100%] text-[40px] leading-[54px] text-center text-black'>
            Check Your Email
          </h1>
          <p className='mt-[-10px] font-Poppins font-normal text-[16px] leading-[24px] text-black text-center'>
            We have sent an email with password reset information to{" "}
            {getUserEmail()}
          </p>
          <p className='mt-[-24px] font-Poppins font-normal text-[16px] leading-[24px] text-black text-center'>
            Don't see it? Check spam folder.
          </p>
          <div className='flex flex-col gap-[24px]'>
            <button
              className={`w-[100%] py-[12px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-white bg-[#556AEB] outline outline-[1px] rounded-lg  `}
              onClick={() => {
                //TODO: handle resend email functionality
              }}
            >
              Resend Email
            </button>
            <Link
              to='/login'
              className={`w-[100%] h-[48px] mb-[24px] py-[12px] font-Poppins font-medium text-[16px] text-[#556AEB] text-center leading-[24px] bg-white rounded-lg border border-[#556AEB] cursor-pointer `}
            >
              Back to Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
