import React from 'react';
import './Footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eu lacinia dui. Suspendisse volutpat leo at ipsum porta malesuada.
            Mauris efficitur pellentesque dui, eu suscipit urna laoreet non.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Z-Commerce</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
          <Link className="item" to="https://github.com/Davies70/z-Commerce">
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
