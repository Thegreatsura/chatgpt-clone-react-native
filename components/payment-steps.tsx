import React from "react";
import AwashBank from "./awashbank/awashbank";
import { Crypto } from "./crypto/crypto";
import { Telebirr } from "./telebirr/telebirr";

type Props = {
  paymentMethod: "Crypto" | "Telebirr" | "AwashBank";
};

const Paymentsteps = ({ paymentMethod }: Props) => {
  switch (paymentMethod) {
    case "Telebirr":
      return <Telebirr />;
    case "AwashBank":
      return <AwashBank />;
    case "Crypto":
      return <Crypto />;

    default:
      break;
  }
};

export default Paymentsteps;
