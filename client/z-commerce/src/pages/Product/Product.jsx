import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedimg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    'https://images.pexels.com/photos/16288373/pexels-photo-16288373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12839796/pexels-photo-12839796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedimg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedimg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Hot Pants</h1>
        <span className='price'>$59.99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga.
        </p>
        <button
          onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        >
          -
        </button>
        {quantity}
        <button onClick={(e) => setQuantity((next) => next + 1)}>+</button>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Chanel</span>
          <span>Product Type: Chino pants, Women</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
