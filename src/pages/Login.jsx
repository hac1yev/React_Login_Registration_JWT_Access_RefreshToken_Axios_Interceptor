import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { authSliceAction } from "../store/auth-slice";

const Login = () => {
    const persist = useSelector(state => state.authReducer.persist);

    const [user,setUser] = useState("");
    const [pwd,setPwd] = useState("");
    const [errorMsg,setErrorMsg] = useState("");
    const [success,setSuccess] = useState(false);
    const userRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus();
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth', 
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            dispatch(authSliceAction.getAuthInfo({
                roles: response.data.roles,
                accessToken: response.data.accessToken
            }));

            setUser("");
            setPwd("");
            setSuccess(true);

            dispatch(authSliceAction.removeExpiredRefresh(false));

            navigate(from, { replace: true });

        } catch (err) {
            if(!err.response){
                setErrorMsg('No Server Response');
            } else if(err.response.status === 401) {
                setErrorMsg(err.response.data);
            } else {
                setErrorMsg('Login Failed');
            }
        }
    }

    const togglePersist = () => {
        dispatch(authSliceAction.getPersist());  
    };

    useEffect(() => {
        window.localStorage.setItem("persist", persist);
    }, [persist]);

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
                    <h2>Sign In</h2>
                    {errorMsg && !success && 
                        <div className="error-div">
                            <p className="err-msg">{errorMsg}</p>
                        </div>
                    }
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <input ref={userRef} type="text" onChange={(e) => setUser(e.target.value)} value={user} autoComplete="new-password" placeholder="Username:" required />
                        </div>
                        <div className="inputBox">
                            <input type="password"  onChange={(e) => setPwd(e.target.value)} value={pwd} autoComplete="new-password" placeholder="Password:" required />
                        </div>
                        <div className="persistCheck">
                            <input type="checkbox" id="persist" onChange={togglePersist} checked={persist} />
                            <label htmlFor="persist">Trust This Device</label>
                        </div>
                        <div className="need-account">
                            <p>Need an Account?</p>
                            <Link to="/register">Sign Up</Link>
                        </div>
                        <button className="login-button">Sign In</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login