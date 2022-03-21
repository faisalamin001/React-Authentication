import React from "react";
import Header from "./Header";

function ForgotPassword() {
  return (
    <>
      <Header />
      <div class='block p-6 m-auto mt-10  rounded-lg shadow-lg bg-white max-w-lg'>
        <h1 className='text-center text-2xl mb-8 font-bold'>Reset Password</h1>

        <form>
          <div class='form-group mb-6'>
            <label
              for='exampleInputEmail2'
              class='form-label inline-block mb-2 text-gray-700'
            >
              Email address
            </label>
            <input
              type='email'
              class='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInputEmail2'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>

          <button
            type='submit'
            class='
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
          >
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
