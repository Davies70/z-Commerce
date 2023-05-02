import React from 'react';
import DeleleOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from '../../makeRequest';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let totalPrice = 0;
    products.forEach((item) => (totalPrice += item.quantity * item.price));
    return totalPrice.toFixed(2);
  };

  const stripePromise = loadStripe(
    'pk_test_51N33agHC5258jsdXDI9EALyG5TbqTH1t3wIILwYi95YWBtV140KdUw3UN10xONPR6BHy9MVc6HcXuyJFnRZRsYci00MhUHoCBe'
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post('/orders', { products });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Items in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleleOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${total()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span
        className="reset"
        onClick={() => {
          dispatch(resetCart());
        }}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
