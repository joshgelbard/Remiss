import React from 'react';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <p>Hello, {currentUser.username}</p>
    );
  } else {
    return (
      <p>No one is logged in.</p>
    );
  }
};

export default Greeting;
