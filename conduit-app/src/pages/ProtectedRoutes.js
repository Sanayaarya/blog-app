import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoutes({ component: Component, ...rest }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else window.location.href = `/login`;
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.token) {
          return <Component {...props} />;
        }
        
      }}
    />
  );
}
