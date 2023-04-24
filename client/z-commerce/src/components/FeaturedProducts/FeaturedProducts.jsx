import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/16462830/pexels-photo-16462830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/7827817/pexels-photo-7827817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Tops and Wine',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Shoes',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Skirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Hat',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} products </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
      </div>
      <div className="bottom">
        {data.map(item => <Card item={item} key={item.id} /> )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
