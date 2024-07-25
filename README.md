# My E-Commerce Project

- This project is a fully functional e-commerce application built with React and styled with Tailwind CSS. It incorporates user authentication, cart management, and utilizes Ant Design for a polished and professional UI experience.

# Features

- Product Listing: Browse a variety of products with filtering options based on categories like laptops, smartphones, tablets, watches, and headphones.
- Product Details: View detailed information about each product including description, price, and image.
- Cart Management: Add, remove, and manage items in your shopping cart.
- User Authentication: Register, log in, and log out. User authentication is managed with local storage.
- Order Summary: View a summary of your order including total price, delivery fee, and grand total.

# Authentication

The project uses local storage to handle user authentication. Users can:

- Register: Create a new account.
- Log In: Access their account using credentials.
- Log Out: Sign out from their account.
  // The authentication state is managed in the local storage, ensuring that user data persists across sessions.

# Cart Management

- The cart functionality includes:
- Add to Cart: Add products to the cart. The quantity of each product can be adjusted.
- Remove from Cart: Remove individual items from the cart.
- Clear Cart: Remove all items from the cart in one action.
- Order Summary: Displays total price, delivery fee, and grand total before submission.

# All cart data is stored in local storage, so items persist even if the user refreshes the page.

# Design and UI

- Ant Design: Utilizes Ant Design components such as Modal, Rate, and Popconfirm to provide a clean and interactive user interface.
- Tailwind CSS: Applied for responsive styling and custom layouts.

# Components

- Navbar: Displays the main navigation links.
- Footer: Includes additional information and links.
- ProductItem: Displays individual product details with options to add to the cart.
- Cart: Manages the shopping cart, allowing users to view, modify, and submit their orders.

# Technology Stack

- Frontend: React, Tailwind CSS, Ant Design
- State Management: MobX
- Data Fetching: Axios
- Local Storage: Used for authentication and cart persistence

# You can use this project just with cloning

## Setup and Installation

To get started with this project, follow these instructions:

### Clone the Repository

Open your terminal and clone the repository using the following command:

```bash
git clone <repository-url>
git clone https://github.com/username/repository-name.git
Navigate to the Project Directory
Change into the project directory:
cd <repository-name>
npm install
-- or --
yarn install

npm run dev
```
