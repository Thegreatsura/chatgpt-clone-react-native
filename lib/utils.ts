import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { render } from "@react-email/components";
// import nodemailer from "nodemailer";
import YelpRecentLoginEmail from "@/app/test/email";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.email,
//     pass: process.env.password,
//   },
// });
