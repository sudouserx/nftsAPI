# API Documentation

## Authentication

### Create Login Token

Creates a login token by providing the username and password.

- **URL:** `/auth`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```

- **Success Response:**
  - **Code:** `200 OK`
  - **Response Body:**

  ```json
  {
    "token": "your-login-token"
  }
  ```

- **Error Response:**
  - **Code:** `500 Internal Server Error`
  - **Response Body:**

  ```json
  {
    "message": "Error message"
  }
  ```

## NFTs

### Get All NFTs

Retrieves a list of all NFTs.

- **URL:** `/nfts`
- **Method:** `GET`
- **Headers:**
  - **Authorization:** `Bearer your-login-token`
- **Success Response:**
  - **Code:** `200 OK`
  - **Response Body:**

  ```json
  [
    {
      "tokenId": 1,
      "tokenUri": "https://example.com/nfts/1"
    },
    {
      "tokenId": 2,
      "tokenUri": "https://example.com/nfts/2"
    },
    ...
  ]
  ```

- **Error Response:**
  - **Code:** `500 Internal Server Error`
  - **Response Body:**

  ```json
  {
    "message": "Error message"
  }
  ```

### Get NFT by ID

Retrieves a specific NFT by its ID.

- **URL:** `/nfts/:id`
- **Method:** `GET`
- **Headers:**
  - **Authorization:** `Bearer your-login-token`
- **Success Response:**
  - **Code:** `200 OK`
  - **Response Body:**

  ```json
  {
    "tokenId": 1,
    "tokenUri": "https://example.com/nfts/1"
  }
  ```

- **Error Response:**
  - **Code:** `500 Internal Server Error`
  - **Response Body:**

  ```json
  {
    "message": "Error message"
  }
  ```

### Mint NFT

Mints a new NFT and assigns it to the specified receiver address.

- **URL:** `/nfts`
- **Method:** `POST`
- **Headers:**
  - **Authorization:** `Bearer your-login-token`
- **Request Body:**

  ```json
  {
    "receiverAddress": "0x1234567890"
  }
  ```

- **Success Response:**
  - **Code:** `200 OK`
  - **Response Body:**

  ```json
  {
    "tokenId": 1,
    "tokenUri": "https://example.com/nfts/1"
  }
  ```

- **Error Response:**
  - **Code:** `500 Internal Server Error`
  - **Response Body:**

  ```json
  {
    "message": "Error message"
  }
  ```

### Update NFT

Updates the details of an NFT.

- **URL:** `/nfts/:id`
- **Method:** `PATCH`
- **Headers:**
  - **Authorization:** `Bearer your-login-token`
- **Request Body:**
  - Update payload

- **Success Response:**
  - **Code:** `200 OK`

- **Error Response:**
  - **Code:**

 `500 Internal Server Error`
  - **Response Body:**

  ```json
  {
    "message": "Error message"
  }
  ```

### Delete NFT

Deletes an NFT with the specified ID.

- **URL:** `/nfts/:id`
- **Method:** `DELETE`
- **Headers:**
  - **Authorization:** `Bearer your-login-token`

- **Success Response:**
  - **Code:** `200 OK`
  - **Response Body:** Transaction receipt

- **Error Response:**
  - **Code:** `500 Internal Server Error`
  - **Response Body:**

  ```json
  {
    "message": "Error message"
  }
  ```

Please note that you need to replace `your-login-token`, `your-username`, `your-password`, `0x1234567890`, and `:id` with appropriate values.
