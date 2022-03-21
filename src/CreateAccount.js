import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function CreateAccount() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function Register(e) {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      setError("");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <Header />

      <div className='block p-6 m-auto mt-10  rounded-lg shadow-lg bg-white max-w-lg'>
        <h1 className='text-center text-2xl mb-8 font-bold'>Create account</h1>

        {error && (
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
            role='alert'
          >
            <strong className='font-bold'>Error!</strong>
            <span className='block sm:inline'> {error}</span>
            <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
              <svg
                className='fill-current h-6 w-6 text-red-500'
                role='button'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <title>Close</title>
                <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
              </svg>
            </span>
          </div>
        )}

        <form>
          <div className='form-group mb-6'>
            <label className='form-label inline-block mb-2 text-gray-700'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control
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
              id='name'
              placeholder='Enter your name'
            />
          </div>

          <div className='form-group mb-6'>
            <label className='form-label inline-block mb-2 text-gray-700'>
              Email address
            </label>
            <input
              type='email'
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className='form-control
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
          <div className='form-group mb-6'>
            <label className='form-label inline-block mb-2 text-gray-700'>
              Password
            </label>
            <input
              type='password'
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className='form-control block
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
              id='exampleInputPassword2'
              placeholder='Password'
            />
          </div>

          <button
            type='submit'
            onClick={Register}
            className='
      w-full
      p-4
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
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
