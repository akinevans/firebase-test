import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-[200px]'>
      <h1 className='text-[30px]'>Home Page...</h1>
      <Link to='/login' className='text-blue-600'>
        Login
      </Link>
      <Link to='/forgot-password' className='text-blue-600'>
        Forgot Password
      </Link>
      <Link to='/reset-password' className='text-blue-600'>
        Reset Password
      </Link>
    </div>
  );
}
