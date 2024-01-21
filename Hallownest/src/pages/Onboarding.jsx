import { useState } from 'react';
import '../styles/onboarding.css';
import axios from 'axios';


const locations = ['Location 1', 'Location 2', 'Location 3'];

export default function Onboarding() {
  const [inputs, setInputs] = useState({
    bio: '',
    location: '',
  });

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      // Assuming you have the JWT token stored in localStorage
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        console.error('No authentication token found.');
        return;
      }
      await axios.put('http://localhost:8800/api/users/', inputs, { headers });
      window.location.href = '/';
    } catch (err) {
      setErr(err.response ? err.response.data : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      await axios.put('http://localhost:8800/api/users/', inputs, { withCredentials: true });
      window.location.href = '/';
    } catch (err) {
      setErr(err.response ? err.response.data : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className='onboarding'>
      <div className='onboardingWrapper'>
        <h1 className='onboardingTitle'>Onboarding</h1>
        <p className='onboardingDesc'>
          Complete your profile to start using Hallownest.
        </p>
        <form className='onboardingBox'>
          <label htmlFor='location' className='onboardingLabel'>
            Location:
          </label>
          <input
            type='text'
            name='location'
            onChange={handleChange}
            className='onboardingInput'
            placeholder='Location'
          >
            {/*
            <option value='' disabled>
              Choose a location
            </option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
            */}
          </input>

          <label htmlFor='bio' className='onboardingLabel'>
            Bio:
          </label>
          <input
            type='text'
            name='bio'
            onChange={handleChange}
            rows='4'
            className='onboardingInput'
          ></input>
          <button type='submit' className='onboardingButton' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}