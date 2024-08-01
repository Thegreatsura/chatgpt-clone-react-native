import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";
// import { Button } from "../components/ui/button";
// import successIcon from "../public/assets/success.png";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";

const successVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "backIn",
      duration: 0.6,
    },
  },
};

type Props = {
  goTo?: (index: number) => void;
};

export const PaymentSuccessMessage = ({ goTo }: Props) => {
  return (
    <motion.section
      className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-2 text-center"
      variants={successVariants}
      initial="hidden"
      animate="visible"
    >
      <CardContent className="bg-muted flex flex-col items-center justify-center w-full rounded-xl p-3">
        <Image
          src="/success.png"
          width="150"
          height="150"
          alt="Success Icon"
          className="md:mb-4"
        />
        <h4 className="text-2xl font-semibold md:text-3xl">Thank you!</h4>
      </CardContent>
    </motion.section>
  );
};
