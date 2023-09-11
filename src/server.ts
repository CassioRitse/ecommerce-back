import express from "express";
import cors from "cors";
import {
  getAllProducts,
  getOneProducts,
} from "../controllers/controllerProduct";
import { postNewPurchase } from "../controllers/controllerPurchase";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/products", getAllProducts);
app.get("/product/:idProduct", getOneProducts);
app.post("/purchase", postNewPurchase);

app.listen(3333, () => "server running on port 3333");
