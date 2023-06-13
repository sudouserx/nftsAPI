# NFTs API

This repository contains the codebase for an application that provides APIs for authentication and managing NFTs (Non-Fungible Tokens).

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Description

The codebase is built with Node.js and Express.js, utilizing Ethereum's ethers.js library for interacting with an NFT contract. It provides the following functionality:

- Authentication: Allows users to obtain a login token by providing their username and password.
- NFT Management: Allows users to perform CRUD (Create, Read, Update, Delete) operations on NFTs, including minting new NFTs, retrieving all NFTs, retrieving a specific NFT by ID, updating an NFT, and deleting an NFT.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sudouserx/nftsAPI.git
```

2. Install the dependencies:

```bash
cd nftsAPI
npm install || yarn add
```

3. Set up the environment variables:

- Create a `.env` file in the root directory.
- Define the following environment variables in the `.env` file:

  ```plaintext
  JWT_SECRET=your-jwt-secret-key
  NFT_CONTRACT_ADDRESS=your-nft-contract-address
  INFURA_KEY=infura-api-key
  PRIVATE_KEY=wallet-private-key
  ```

4. Start the application:

```bash
npm start
```

The application will be running on `http://localhost:3000`.

## Usage

To use the APIs, you can use tools like cURL or Postman. Here are some example requests:

1. **Create a login token:**

```http
POST /auth
Content-Type: application/json

{
  "username": "your-username",
  "password": "your-password"
}
```

2. **Get all NFTs:**

```http
GET /nfts
Authorization: Bearer your-login-token
```

3. **Get a specific NFT by ID:**

```http
GET /nfts/:id
Authorization: Bearer your-login-token
```

4. **Mint a new NFT:**

```http
POST /nfts
Authorization: Bearer your-login-token
Content-Type: application/json

{
  "receiverAddress": "0x1234567890"
}
```

5. **Update an NFT:**

```http
PATCH /nfts/:id
Authorization: Bearer your-login-token
Content-Type: application/json

{
  // Update payload
}
```

6. **Delete an NFT:**

```http
DELETE /nfts/:id
Authorization: Bearer your-login-token
```

Please note that you need to replace `your-login-token` with the actual login token obtained from the authentication API, and `your-username`, `your-password`, `your-nft-contract-address`, `0x1234567890`, and `:id` with appropriate values.

## API Documentation

The API documentation for this codebase can be found in the [API.md](./API.md) file.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This codebase is released under the [MIT License](./LICENSE).
