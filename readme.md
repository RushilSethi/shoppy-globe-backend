# ShoppyGlobe E-Commerce API

This API allows you to manage products, user authentication, and shopping cart functionality for an e-commerce platform.

---

## API Endpoints

### Products

#### 1. Fetch All Products
**GET** `/products`

- **Description:** Fetch a list of all products.

#### 2. Fetch Single Product
**GET** `/products/:id`

- **Description:** Fetch details of a single product by its ID.
- **Parameters:** 
  - `id`: The unique identifier of the product.

---

### Cart

#### 1. Add to Cart
**POST** `/cart`

- **Description:** Add a product to the shopping cart.
- **Request Body:**
  - `productId`: The unique identifier of the product.
  - `quantity`: The quantity of the product to add.

#### 2. Update Cart
**PUT** `/cart/:id`

- **Description:** Update the quantity of a product in the cart.
- **Parameters:** 
  - `id`: The unique identifier of the cart item.
- **Request Body:**
  - `quantity`: The new quantity of the product.

#### 3. Delete from Cart
**DELETE** `/cart/:id`

- **Description:** Remove a product from the cart.
- **Parameters:** 
  - `id`: The unique identifier of the cart item.

---

### Users

#### 1. Register User
**POST** `/register`

- **Description:** Register a new user.
- **Request Body:**
  - `name`: Name of the user.
  - `email`: Email of the user.
  - `password`: Password for the account.

#### 2. Login User
**POST** `/login`

- **Description:** Authenticate a user and return a JWT token.
- **Request Body:**
  - `email`: Email of the user.
  - `password`: Password of the user.

---

## Environment Variables

Make sure to set up the following environment variables in a `.env` file:

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT token generation.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file.

4. Start the server:
   ```bash
   npm start
   ```

---

Let me know if you need additional modifications!