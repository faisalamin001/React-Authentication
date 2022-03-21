import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<CreateAccount />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot' element={<ForgotPassword />} />
          <Route path='welcome' element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
