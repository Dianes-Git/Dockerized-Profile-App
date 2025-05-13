import React from 'react';
import './Form.css';

const RegisterPage = () => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
