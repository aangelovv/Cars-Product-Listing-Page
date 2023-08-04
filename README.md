# Orlando Car Deals Single Page Application

Before running the scripts, run npm install in the main folder /skillwork.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Summary

## Implemented functionalities

The project is a single-page web application named "Orlando Car Deals", built using React, a popular JavaScript library for building user interfaces, specifically single-page applications. The purpose of this application is to provide an intuitive user interface for browsing and shopping vehicles.

The project's UI is divided into different components for improved maintainability and reusability. The app consists of several main sections:

1. Header: This includes a logo and a navigational menu with different categories of car products. The header is designed to be 'sticky', i.e., it remains visible as the user scrolls down the page.

2. Product counter: This displays the number of products currently shown on the page out of the total available.

3. Product Grid: This section showcases the products. Each product is represented by a tile, which contains an image of the product, its name, a short description, its price, a rating system, and an 'Add to cart' button.

4. Filtering mechanism: This enables users to filter products based on certain characteristics. In our case, it's the color and the price of the products.

5. Sorting mechanism: This feature provides users the ability to sort products alphabetically (from A-Z and Z-A) and also based on price (ascending and descending).

6. Product name and description: This is a section that provides a brief description of the selected category and its name.

7. Load More: This is a button that allows users to load more products into the product grid.

8. Footer: This section contains links to pages like T&C, Privacy Policy, and Contact Us.

## Technologies used

Under the hood, this application makes use of several popular libraries:

### Front-End

- ReactJS: This project uses the latest version of React for building the user interface. React is chosen for its efficiency, flexibility, and powerful features such as hooks and context API.

- React Router: For handling page navigation within the application, the project uses React Router. It's a popular routing solution for React applications, allowing us to render specific components based on the current path in a dynamic single-page application.

- React-Icons: This library provides a wide array of icons from different icon packs. It's used to enhance the aesthetic appeal of the project and improve the user experience.

- CSS Modules: This project uses CSS Modules to style React components. CSS Modules let us write CSS that is scoped locally to individual components, thus eliminating the risk of name collisions and unexpected overrides. This means that the styles applied to a component are local to that component, and won't affect or be affected by styles in other components. It greatly increases the maintainability of the CSS and ensures a consistent look and feel across the application.

### Back-End

- Parse (Back4App): This project uses Parse JavaScript SDK, hosted on Back4App, as the backend. Back4App provides a scalable and flexible backend for the application featuring user database management. It allows us to focus on the frontend development, ensuring the backend processes run smoothly and securely.

## What were the challenges

Implementing this project involved creating responsive, interactive components and managing state across these components. Challenges faced included handling data management tasks, ensuring the responsiveness of the app, and maintaining a clean, understandable codebase despite the complexity of the features implemented. This project demonstrates a strong understanding of React and modern front-end development practices.
