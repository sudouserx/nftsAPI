import "dotenv/config";
import { ethers } from "ethers";

/*
 * returns sepolia provider by default
 * returns mainnet provider if arg 1 is set to true
 *
 */
const getProvider = (mainnet = false) => {
  const infuraUrl = mainnet
    ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
    : `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;

  return new ethers.providers.JsonRpcProvider(infuraUrl);
};

const getSigner = (mainnet = false) => {
  const provider = getProvider();
  return new ethers.Wallet(process.env.PRIVATE_KEY, provider);
};

export { getProvider, getSigner };
