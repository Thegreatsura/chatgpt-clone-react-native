import { Card, CardContent } from "@/components/ui/card";

interface SaleConfirmationProps {
  backgroundColor?: string;
  cardBackgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  borderRadius?: string;
  fontSizes?: {
    small?: string;
    medium?: string;
    large?: string;
    xlarge?: string;
  };
  fontWeights?: {
    normal?: string;
    medium?: string;
    bold?: string;
  };
  spacing?: string;
  iconClassName?: string;
  cardClassName?: string;
  showIcon?: boolean;
  orderDetails?: {
    orderNumber: string;
    date: string;
    name: string;
    email: string;
  };
  productName?: string;
  productPrice?: string;
  footerText?: string;
}

const defaultProps: SaleConfirmationProps = {
  backgroundColor: "bg-black",
  cardBackgroundColor: "bg-indigo-600",
  textColor: "text-white",
  accentColor: "text-yellow-400",
  borderRadius: "rounded-lg",
  fontSizes: {
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
    xlarge: "text-2xl",
  },
  fontWeights: {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  },
  spacing: "p-4",
  iconClassName: "w-6 h-6",
  cardClassName: "",
  showIcon: true,
  orderDetails: {
    orderNumber: "123456",
    date: "23 Jul 2024, 10:13",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  productName: "Creator (Monthly)",
  productPrice: "$19.00",
  footerText: "blacktwist.app — social media scheduler for Threads",
};

export function SaleConfirmationV3(props: SaleConfirmationProps) {
  const {
    backgroundColor,
    cardBackgroundColor,
    textColor,
    accentColor,
    borderRadius,
    fontSizes,
    fontWeights,
    spacing,
    iconClassName,
    cardClassName,
    showIcon,
    orderDetails,
    productName,
    productPrice,
    footerText,
  } = { ...defaultProps, ...props };

  return (
    <div
      className={`min-h-screen ${backgroundColor} flex items-center justify-center ${spacing}`}
    >
      <div className="w-full max-w-md space-y-4">
        <div className={`flex items-center space-x-2 ${accentColor}`}>
          {showIcon && (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={iconClassName}
            >
              <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3Z" />
            </svg>
          )}
          <span
            className={`${textColor} ${fontSizes?.xlarge} ${fontWeights?.bold}`}
          >
            Woohoo! You made a sale!
          </span>
        </div>

        <Card
          className={`${cardBackgroundColor} overflow-hidden ${borderRadius} ${cardClassName}`}
        >
          <CardContent className="p-0">
            <div className="relative aspect-video">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${Math.random() * 30 + 10}px`,
                    height: `${Math.random() * 30 + 10}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: [
                      "#FFC107",
                      "#FF5722",
                      "#03A9F4",
                      "#4CAF50",
                      "#E91E63",
                    ][Math.floor(Math.random() * 5)],
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🥳</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2 text-gray-400">
          <p className={fontSizes?.medium}>
            Order #:{" "}
            <span className={textColor}>{orderDetails?.orderNumber}</span>
          </p>
          <p className={fontSizes?.medium}>
            Date: <span className={textColor}>{orderDetails?.date}</span>
          </p>
          <p className={fontSizes?.medium}>
            Name: <span className={textColor}>{orderDetails?.name}</span>
          </p>
          <p className={fontSizes?.medium}>
            Email: <span className={textColor}>{orderDetails?.email}</span>
          </p>
        </div>

        <div className={`flex justify-between items-center ${textColor}`}>
          <span className={fontSizes?.medium}>{productName}</span>
          <span className={`${fontSizes?.large} ${fontWeights?.bold}`}>
            {productPrice}
          </span>
        </div>

        <div className={`text-gray-500 ${fontSizes?.small} text-center`}>
          {footerText}
        </div>
      </div>
    </div>
  );
}
