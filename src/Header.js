import React from "react";
import { Link } from "react-router-dom";
import img1 from "./firebaseimg.png";

function Header() {
  return (
    <>
      <header className='bg-slate-700 text-white'>
        <nav className='flex items-center justify-between bg-teal p-6'>
          <div className='flex items-center flex-no-shrink text-white mr-6'>
            <img
              className='h-10 w-7 mr-2'
              alt='wow'
              width='44'
              height='60'
              src={img1}
            />

            <span className='font-semibold text-xl tracking-tight'>
              <Link to='/'>Firebase Auth</Link>
            </span>
          </div>

          <div className='flex justify-center items-center'>
            <div className='text-sm flex justify-center items-center text-center '>
              <a
                href='#'
                className='block mt-4 lg:inline-block text-lg text-slate-400   lg:mt-0 text-teal-lighter hover:text-white mx-6'
              >
                Home
              </a>
              <a
                href='#'
                className='block mt-4 lg:inline-block text-lg text-slate-400   lg:mt-0 text-teal-lighter hover:text-white mx-6'
              >
                Services
              </a>
              <a
                href='#'
                className='block mx-6 lg:inline-block text-lg text-slate-400   lg:mt-0 text-teal-lighter hover:text-white'
              >
                Blog
              </a>
            </div>
          </div>
          <div>
            <a
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white   hover:bg-slate-500 mt-4 lg:mt-0'
            >
              Contact us
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
