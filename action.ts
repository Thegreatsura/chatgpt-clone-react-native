"use server";

import { render } from "@react-email/components";
import YelpRecentLoginEmail from "./app/test/email";
import { transporter } from "./lib/utils";

export const hihi = async (hi: number) => {
  console.log(hi);
};

const emailHtml = render(
  YelpRecentLoginEmail({
    loginDate: new Date(),
    loginDevice: "ios",
    loginIp: "124234335",
    loginLocation: "Ethiopia",
    userFirstName: "sura",
  })
);

const options = {
  from: "you@example.com",
  to: process.env.sendto,
  subject: "hello world",
  html: emailHtml,
};

export const sendMail = async () => {
  await transporter.sendMail(options);
};
