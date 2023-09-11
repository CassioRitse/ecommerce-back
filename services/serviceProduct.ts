import { dbPrisma } from "../repository/prisma";

export const findAllProducts = async () => {
  return await dbPrisma.product.findMany();
};

export const findOneProduct = async (idProduct: string) => {
  return await dbPrisma.product.findUnique({
    where: {
      id: idProduct,
    },
  });
};
