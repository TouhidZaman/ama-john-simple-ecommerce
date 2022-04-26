import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    //hook for creating new user with email and password
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => setEmail(event.target.value);
    const handlePasswordBlur = (event) => setPassword(event.target.value);
    const handleConfirmPassBlur = (event) => setConfirmPass(event.target.value);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    if (error) {
        // setErrorMessage("User creation failed");
        console.log(error.message);
    }

    //Handling create user
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPass) {
            setErrorMessage(`Passwords doesn't match`);
            return;
        }
        setErrorMessage("");
        createUserWithEmailAndPassword(email, password);
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
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordBlur}
                            type="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            onBlur={handleConfirmPassBlur}
                            type="password"
                            name="confirm-password"
                            required
                        />
                    </div>
                    <p>{loading && "Loading...."}</p>
                    <p style={{ color: "red" }}>{errorMessage || error?.code}</p>
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
