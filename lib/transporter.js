import nodemailer from "nodemailer";

// authenticated "host". Email will be always sent from this email to both parties.
const hostEmail = process.env.HOST_EMAIL;
const hostPass = process.env.HOST_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: hostEmail,
    pass: hostPass,
  },
});
