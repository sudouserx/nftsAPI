import express from "express";
import {
  getAllNFTs,
  getNFTById,
  mintNFT,
  updateNFT,
  deleteNFT,
} from "../controllers/nfts.js";
import { verifyToken } from "../middleware/auth.js";
import limitRate from "../middleware/rateLimit.js";

const nftRouter = express.Router();

/** READ */
nftRouter.get("/", verifyToken, limitRate, getAllNFTs);
nftRouter.get("/:id", verifyToken, limitRate, getNFTById);

/** WRITE */
nftRouter.post("/", verifyToken, limitRate, mintNFT);

/** UPDATE */
nftRouter.patch("/:id", verifyToken, limitRate, updateNFT);

/** DELETE  */
nftRouter.delete("/:id", verifyToken, limitRate, deleteNFT);

export default nftRouter;
