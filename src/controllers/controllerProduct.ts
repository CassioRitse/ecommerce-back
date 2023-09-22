import { Request, Response } from "express";
import { findAllProducts, findOneProduct } from "../services/serviceProduct";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await findAllProducts();
    return res.json(result);
  } catch (error) {
    return res.json({ erro: error });
  }
};

export const getOneProducts = async (req: Request, res: Response) => {
  try {
    const idProduct = req.params.idProduct;
    const result = await findOneProduct(idProduct);
    return res.json(result);
  } catch (error) {
    return res.json({ erro: error });
  }
};
