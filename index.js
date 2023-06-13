import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import nftRouter from "./routes/nftRoutes";
import authRouter from "./routes/auth";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/** ROUTES */
app.use("/auth", authRouter);
app.use("/nfts", nftRouter);

// port not defined 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
