import '../styles/register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post('http://localhost:8800/api/auth/register', inputs);
      // Assuming registration was successful, you can redirect or perform other actions here
      window.location.href = '/onboarding';
    } catch (err) {
      setErr(err.response ? err.response.data : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='register'>
      <div className='registerWrapper'>
        <div className='registerLeft'>
          <h1 className='registerLogo'>Hallow<br/>Nest.</h1>
          <p className='registerDesc'>
            Connect with friends and the world around you on Hallownest.
          </p>
          <span className='registerSpan'>Don't you have an account?</span>
          <Link to='/login' className='link'>
            <button className='registerButton'>Login</button>
          </Link>
        </div>
        <div className='registerRight'>
          <h1 className='registerHeader'>Register</h1>
          <form className='registerBox'>
            <input
              type='text'
              placeholder='Username'
              className='registerInput'
              name='username'
              onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Email'
              className='registerInput'
              name='email'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              className='registerInput'
              name='password'
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Name'
              className='registerInput'
              name='name'
              onChange={handleChange}
            />
            <button
              className='registerLoginButton'
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
