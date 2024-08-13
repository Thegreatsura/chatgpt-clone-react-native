"use client";
import React from "react";
import { Dashboard } from "./dashboard-05";
import { SaleConfirmation } from "./sale-confirmation-component";
import { render } from "@react-email/components";
import YelpRecentLoginEmail from "./email";

// good
import { Customize } from "./customize-page";
import { EnterprisePlanCard } from "./enterprise-plan-card";
import { OrderConfirmation } from "./order-confirmation-component";
import { PaymentPageCustomization } from "./payment-page-customization";

const Page = () => {
  return <OrderConfirmation />;
};

export default Page;
