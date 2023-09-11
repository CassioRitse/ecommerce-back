import { Request, Response } from "express";
import { newPurchase } from "../services/servicePurchse";
import { transporter } from "../email/serviceEmail";

export const postNewPurchase = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await newPurchase(data);

    const mailOptions = {
      from: "no-reply@ecommerce.com",
      to: data.email,
      subject: "Comprar Ecommerce",
      text: result,
    };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email enviado: " + info.response);
    //   }
    // });

    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.json({ erro: error });
  }
};
