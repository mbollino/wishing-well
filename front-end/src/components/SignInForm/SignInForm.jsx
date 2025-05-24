import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

import { signIn } from '../../services/authServices';

import { UserContext } from '../../contexts/UserContext';

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (evt) => {
    setMessage('');
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const signedInUser = await signIn(formData);

      setUser(signedInUser);
      navigate('/');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <main>
        <h1>Sign In</h1>
        <p>{message}</p>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='userName'>Username:</label>
            <input
              type='text'
              autoComplete='off'
              id='name'
              value={formData.userName}
              name='userName'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              autoComplete='off'
              id='password'
              value={formData.password}
              name='password'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </form>
        <button onClick={() => navigate('/')}>Cancel</button>
      </main>
    </>
  );
};

export default SignInForm;
