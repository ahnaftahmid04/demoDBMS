import '../styles/login.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { AuthContext } from '../context/authContext'
import axios from 'axios'

export default function Login() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);

            window.location.href = '/onboarding';
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h1 className='loginLogo'>Hallow<br/>Nest.</h1>
                    <p className='loginDesc'>
                        Connect with friends and the world around you on Hallownest.
                    </p>
                    <span className='loginSpan'>Don't you have an account?</span>
                    <Link to='/register' className='link'>
                        <button className='loginRegisterButton'>Register</button>
                    </Link>
                </div>
                <div className='loginRight'>
                    <h1 className='loginHeader'>Login</h1>
                    <form className='loginBox'>
                        <input type='text' placeholder='Username' className='loginInput' onChange={handleChange}/>
                        <input type='password' placeholder='Password' className='loginInput' onChange={handleChange}/>
                        <Link to='/' className='link'>
                            <button className='loginButton' onClick={handleLogin}>Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}