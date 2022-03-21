import React from "react";
import Header from "./Header";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  function Logout() {
    signOut(auth);
    navigate("/login");
    console.log("Logged out");
  }
  /* 
  first import onAuthStateChanged from 'firebase/auth'
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }); 
  
  
  show in UI
     <h4> User Logged In: </h4>
      {user?.email}
  */
  return (
    <div
      className='overflow: auto;
    '
    >
      <Header />
      <h1 className='text-center py-20 text-8xl bg-slate-800 text-white font-bold'>
        Welcome
      </h1>
      <p className='text-center px-40 leading-relaxed  pb-0 bg-slate-800 text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, magnam
        veniam. Iure facere deleniti qui temporibus commodi maxime similique?
        Dolore porro aspernatur eius debitis ipsum veritatis perferendis sint
        earum omnis, inventore voluptates voluptas quia odio ex ab, expedita
        vitae qui dolorem enim. Dignissimos exercitationem magnam iste dolorum
        repudiandae consequatur labore? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Optio, magnam veniam. Iure facere deleniti qui
        temporibus commodi maxime similique? Dolore porro aspernatur eius
        debitis ipsum veritatis perferendis sint earum omnis, inventore
        voluptates voluptas quia odio ex ab, expedita vitae qui dolorem enim.
        Dignissimos exercitationem magnam iste dolorum repudiandae consequatur
        labore?
      </p>
      <div className='text-center bg-slate-800 py-12'>
        <button
          onClick={Logout}
          className='text-center m-auto hover:bg-black  border rounded px-10 py-2 text-xl  bg-slate-900 text-white'
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
