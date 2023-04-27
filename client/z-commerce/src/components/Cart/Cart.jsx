import React from 'react';
import DeleleOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Cart.scss';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/16462830/pexels-photo-16462830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/7827817/pexels-photo-7827817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Dark LV Shade',
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      .`,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Marteens Yellow Boots',
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem.`,
    },
  ];
  return (
    <div className="cart">
      <h1>Items in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleleOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$400</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
