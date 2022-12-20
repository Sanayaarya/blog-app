

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = async () => {
      try {
        const res = await axios({
          method: 'POST',
          url: `https://mighty-oasis-08080.herokuapp.com/api/users`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            user: {
              username,
              email,
              password,
            },
          }),
        });
        setRegister(true);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    register();
  };

  return (
    <>
      <h1 className="text-4xl text-center mt-8">Sign Up</h1>
      <form className="my-6 w-2/6 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <span className="text-red-500 text-sm ml-2 mt-1 mb-3 block">
            {username}
          </span> */}
        <input
          type="text"
          placeholder="Email"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <span className="text-red-500 text-sm ml-2 mt-1 mb-3 block">
            {email}
          </span> */}
        <input
          type="password"
          placeholder="Password"
          className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <span className="text-red-500 text-sm ml-2">{password}</span> */}
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </form>
      <button
        type="submit"
        className=" bg-green hover:bg-green-dark text-white text-lg px-6 py-2 rounded block mx-auto"
        onClick={(e) => handleSubmit(e)}
      >
        Sign up
      </button>
      <Link to="/login" className="block text-center text-green mt-8">
        Already have an account? Sign in
      </Link>
    </>
  );
}

export default Register;