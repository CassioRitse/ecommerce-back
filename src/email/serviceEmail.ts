import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gamil.com",
  port: 465,
  secure: true, // true para 465, false para outras portas
  auth: {
    user: "emaildoecommerce", // email que vai utilizar para enviar
    pass: "senhaemailecoomer", // app key do gmail para ser utilziado ao inves da senha original
  },
  tls: { rejectUnauthorized: false },
});
