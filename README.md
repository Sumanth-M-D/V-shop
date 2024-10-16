# V-Shop: E-Commerce Website

V-Shop is a modern e-commerce web application that allows users to browse products, add them to the cart or wishlist, and proceed through a secure checkout process. This project is built using **React** for the frontend, **Redux** for state management, and **Node.js** with **MongoDB** for backend and database.

## Features

- **Product Browsing**: View a list of products, filter, and search.
- **Product Detail Page**: Detailed view of individual products.
- **Shopping Cart**: Add, update, or remove products from the cart.
- **Wishlist**: Add products to the wishlist and move them to the cart.
- **Checkout Process**: Secure checkout with multiple shipping options.
- **Authentication**: Secure login and registration for users.
- **Responsive Design**: Fully responsive and works across all screen sizes.
- **Toast Notifications**: Interactive notifications for key actions (e.g., add to cart, remove from wishlist).

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for predictable state across the app.
- **React Router**: Routing for navigating between pages.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Toastify**: Notifications for important actions (e.g., adding to cart).

### Backend

- **Node.js**: JavaScript runtime for the backend server.
- **Express.js**: Web framework for building APIs and handling requests.
- **MongoDB**: NoSQL database for storing products, users, and orders.
- **Mongoose**: ODM library for interacting with MongoDB.

### Tools & Other Libraries

- **Parcel**: Development bundler for building the project.
- **ESLint**: Linting tool for keeping code consistent.
- **Prettier**: Code formatter to ensure a clean codebase.
- **Redux Toolkit**: Simplified Redux state management.
- **React Redux**: Official React bindings for Redux.

## Project Structure

```bash
├── public                # Public directory for static files
├── src                   # Source code
│   ├── components         # Reusable UI components
│   ├── features           # Redux slices for managing application state
│   ├── pages              # Main pages for the app (e.g., Home, Cart, Wishlist)
│   ├── general            # General components (e.g., buttons, form elements)
│   └── App.js             # Main App component
├── .env                   # Environment variables file
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```
