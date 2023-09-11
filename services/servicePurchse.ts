import { dbPrisma } from "../repository/prisma";

interface Purchase {
  email: string;
  products: Products[];
}

interface Products {
  qnt: number;
  productId: string;
}

export const newPurchase = async (data: Purchase) => {
  const purchase = await dbPrisma.purchase.create({
    data: {
      email: data.email,
    },
  });

  const productPromises = data.products.map(async (product) => {
    await dbPrisma.products_Purchase.create({
      data: {
        qnt: product.qnt,
        productId: product.productId,
        purchaseId: purchase.id,
      },
    });
  });

  await Promise.all(productPromises);

  return purchase;
};
