# V-Shop: E-Commerce Website

V-Shop is a modern e-commerce frontend web application that allows users to browse products, add them to the cart or wishlist, and proceed through a secure checkout process. This project is built using **React** for the frontend, **Redux** for state management.

## Features

- **Product Browsing**: View a list of products, filter, and search.
- **Product Detail Page**: Detailed view of individual products.
- **Shopping Cart**: Add, update, or remove products from the cart.
- **Wishlist**: Add products to the wishlist and move them to the cart.
- **Authentication**: Secure login and registration for users.
- **Responsive Design**: Fully responsive and works across all screen sizes.
- **Toast Notifications**: Interactive notifications for key actions (e.g., add to cart, remove from wishlist).

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for predictable state across the app.
- **Redux Toolkit**: Simplified Redux state management.
- **React Redux**: Official React bindings for Redux.
- **React Router**: Routing for navigating between pages.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Toastify**: Notifications for important actions (e.g., adding to cart).
- **React Hook Form**:For input field validation.

### Tools & Other Libraries

- **Vite**: For creating the project.
- **ESLint**: Linting tool for keeping code consistent.
- **Prettier**: Code formatter to ensure a clean codebase.

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

## Installation [Steps to Set Up the Project]

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/v-shop.git
```

### 2. Install dependencies:

```bash
cd v-shop
npm install
```

### 3. Start the development server:

```bash

npm start
```

### 4. Navigate to http://localhost:3000 in your browser to access the application.
