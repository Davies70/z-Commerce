import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>GET IN TOUCH:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." name="" id="" />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
