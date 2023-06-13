const { ethers } = require("ethers");
import { getSigner } from "../middleware/utils";
import abi from "../ABI/MyNFTCollectionABI.json"
import dotenv from "dotenv";
dotenv.config();

const contractAddress = process.env.NFT_CONTRACT_ADDRESS;
const signer = getSigner();
const nftContract = new ethers.Contract(contractAddress, abi, signer);

/** CREATE */
/**
 * Params:
 * - req: Request object containing the receiver address in the request body
 * - res: Response object to send the minted NFT details as a JSON response
 */
export const mintNFT = async (req, res) => {
  const receiverAddress = req.body.receiverAddress;
  const tx = await nftContract.safeMint(
    ethers.utils.getAddress(receiverAddress)
  );
  await tx.wait();
  const tokenId = await nftContract.getCurrentTokenId();
  const tokenUri = await nftContract.tokenURI(tokenId);
  res.status(200).json({
    tokenId,
    tokenUri,
  });
};

/** READ */
/**
 * Params:
 * - req: Request object
 * - res: Response object to send the list of all NFTs as a JSON response
 */
export const getAllNFTs = async (req, res) => {
  const nfts = [];
  const latestTokenId = await nftContract.getCurrentTokenId();
  for (let i = 0; i < latestTokenId; i++) {
    const tokenUri = await nftContract.tokenURI(i);
    nfts.push({
      tokenId: i,
      tokenUri,
    });
  }

  res.status(200).json(nfts);
};

/**
 * Params:
 * - req: Request object containing the NFT ID in the request parameters
 * - res: Response object to send the NFT details as a JSON response
 */
export const getNFTById = async (req, res) => {
  const tokenId = req.params.id;
  const tokenUri = await nftContract.tokenURI(tokenId);
  res.status(200).json({
    tokenId,
    tokenUri,
  });
};

/** UPDATE  */
/**
 * Params:
 * - req: Request object containing the updated NFT details
 * - res: Response object
 */
export const updateNFT = async (req, res) => {};

/** DELETE */
/**
 * Params:
 * - req: Request object containing the NFT ID in the request parameters
 * - res: Response object to send the burn transaction receipt as a JSON response
 */
export const deleteNFT = async (req, res) => {
  const tokenId = req.params.id;
  const tx = await nftContract.burn(tokenId);
  const receipt = await tx.wait();
  res.status(200).json(receipt);
};
