import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPass, setConfirmPass] = useState("");
   const [error, setError] = useState("");

   const handleEmailBlur = (event) => setEmail(event.target.value);
   const handlePasswordBlur = (event) => setPassword(event.target.value);
   const handleConfirmPassBlur = (event) => setConfirmPass(event.target.value);
   const handleCreateUser = (event) => {
      event.preventDefault();
      if (password !== confirmPass) {
         setError(`Passwords doesn't match`);
      }
   };
   return (
      <div className="form-container">
         <div>
            <h2 className="form-title">Sign UP</h2>
            <form onSubmit={handleCreateUser}>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                     onBlur={handleEmailBlur}
                     type="email"
                     name="email"
                     id=""
                     required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                     onBlur={handlePasswordBlur}
                     type="password"
                     name="password"
                     id=""
                     required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                     onBlur={handleConfirmPassBlur}
                     type="password"
                     name="confirm-password"
                     id=""
                     required
                  />
               </div>
               <p style={{ color: "red" }}>{error}</p>
               <input className="form-submit" type="submit" value="Sign Up" />
            </form>
            <p>
               Already have an account?{" "}
               <Link className="form-link" to={"/login"}>
                  Login
               </Link>
            </p>
         </div>
      </div>
   );
};

export default SignUp;
