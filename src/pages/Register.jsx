import axios from "../api/axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const userRef = useRef();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        userRef.current.focus();
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/register', 
                JSON.stringify({ user: userName, pwd: password}),
                {
                    headers: { 'Content-type': 'application/json' },
                    withCredentials: true
                }
            )
            navigate('/login', { state: { from: location }, replace: true });
        } catch (error) {
            if(!error.response) {
                setErrorMsg('No Server Response');
            }else if(error.response.status === 409){
                setErrorMsg('Username Token');
            }else{
                setErrorMsg('Registration Failed');
            }
        }
    };

    return (
        <section className="background-section">
            <>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span> <span></span> <span></span>
            </>
            <div className="signin">
                <div className="content">
                    <h2>Sign Up</h2>
                    {errorMsg && 
                        <div className="error-div">
                            <p className="err-msg">{errorMsg}</p>
                        </div>
                    }
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <input autoComplete="off" ref={userRef} onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="Username:"  />
                        </div>
                        <div className="inputBox">
                            <input autoComplete="password" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password:"  />
                        </div>
                        <div className="inputBox">
                            <input autoComplete="new-password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" placeholder="Confirm Password:"  />
                        </div>
                        <div className="need-account">
                            <p>You have an Account?</p>
                            <Link to="/login">Sign in</Link>
                        </div>
                        <button className="login-button">Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register