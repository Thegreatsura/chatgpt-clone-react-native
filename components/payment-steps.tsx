import React from "react";
import AwashBank from "./awashbank/awashbank";
import { Crypto } from "./crypto/crypto";
import { Telebirr } from "./telebirr/telebirr";

type Props = {
  paymentMethod: "Crypto" | "Telebirr" | "AwashBank";
  loading: boolean;
  className?: string;
};

const Paymentsteps = ({ paymentMethod, loading, className }: Props) => {
  switch (paymentMethod) {
    case "Telebirr":
      return <Telebirr className={className} />;
    case "AwashBank":
      return <AwashBank className={className} />;
    case "Crypto":
      return <Crypto className={className} />;

    default:
      break;
  }
};

export default Paymentsteps;
