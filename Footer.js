
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-2 text-center">
        <p> Developed by Yash Chauhan</p>
        <p>
          <a href="/" >Privacy Policy</a> | 
          <a href="/" >Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
