# Z-Commerce

Z-Commerce is a modern fashion e-commerce website built using React, Redux, Sass, Strapi, and Stripe. It allows users to browse and purchase the latest fashion items, manage their shopping cart, and complete transactions securely using Stripe payment processing.

## Screenshots

![image](./icons/slider.PNG)
![image](./icons/purchase.PNG)
![image](./icons/sort.png)

## Getting Started

To get started with Z-Commerce, follow these steps:

- Clone this repository to your local machine.
- Install the necessary dependencies by running npm install in the client directory.
- Create a .env file in the client directory with the following environment variable:

```bash
REACT_APP_API_URL=http://localhost:1337
```

- Start the development server by running npm start in the client directory.
- Install the necessary dependencies by running npm install in the api directory.
- Create a .env file in the api directory with the following environment variable:

```bash
DATABASE_URI=<your database URI>
JWT_SECRET=<your JWT secret>
STRIPE_SECRET_KEY=<your Stripe secret key>
```

- Start the Strapi server by running npm run develop in the api directory.
- Open http://localhost:3000 in your browser to view the website.

Note: You will need to have Node.js and MySQL installed on your local machine.

## Features

Z-Commerce includes the following features:

- Browse and filter for products by category or price
- View detailed product information, including multiple images and product variants
- Add and remove products from the shopping cart
- Complete transactions securely using Stripe payment processing

## Technologies Used

Z-Commerce is built using the following technologies:

- React: A popular frontend library for building user interfaces
- Redux: A state management library for managing global state in the application
- Sass: A CSS preprocessor that makes it easier to write and maintain styles
- Strapi: A headless CMS that provides an API for managing content
- Stripe: A payment processing platform for processing transactions securely

## Creator

Davies Ajayi

## Version History

- 0.10
