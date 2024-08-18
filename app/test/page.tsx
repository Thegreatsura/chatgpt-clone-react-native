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
import { AIAssistantHero } from "./comp/ai-assistant-hero";
import { AILandingPage } from "./comp/ai-chat-app-landing-page";
import { APIKeysManagement } from "./comp/api-keys-management";
import { ClaimsManagementInterface } from "./comp/claims-management-interface";
import { DepositModal } from "./comp/deposit-modal";
import { LandingPageAgency } from "./comp/digital-agency-landing-page";
import { OrderConfirmationCardV2 } from "./comp/order-confirmation-card";
import { PreferencesComponent } from "./comp/preferences-component";
import { ApiKeyDashboard } from "./comp/api-keys-dashboard";
import { UsageDashboard } from "./comp/usage-dashboard";
import { ActivityDashboard } from "./test-comp/ActivityDashboard";
import { AIServiceLandingPage } from "./test-comp/AIServiceLandingPage";
import { SkinCareCard } from "./test-comp/skin-care-card";

//bad
import { AIModelSelector } from "./comp/ai-model-selector-ui";
import { BrandingPage } from "./comp/branding-page-component";
import { ClaudeAIInterface } from "./comp/claude-ai-interface";
import { ClaudeInterface } from "./comp/claude-interface";
import { DashboardChart } from "./comp/dashboard-component";
import { Portfolio } from "./comp/nextjs-shadcn-portfolio";
import { PortfolioV2 } from "./comp/profile-page-component";
import { StripeCheckoutClone } from "./comp/stripe-checkout-clone";
import { SubscriptionPaymentForm } from "./comp/subscription-payment-form";
import { RevenueOverview } from "./comp/payment-gateway-overview";
import { ProfileGallery } from "./comp/profile-gallery-component";
import { AIModelSelectorV2 } from "./test-comp/AIModelSelector";
import { ArtoDashboard } from "./test-comp/arto-card-dashboard";
import { ArtoCard } from "./test-comp/ArtoCard";
import { ChatInterface } from "./test-comp/ChatInterface";
import { CheckoutPageCustomizer } from "./test-comp/CheckoutPageCustomizer";
import { IntegrationShowcase } from "./test-comp/integration-showcase-component";
import { MessageInput } from "./test-comp/MessageInput";
import { ProfileCard } from "./test-comp/profile-card-component";
import { TwoFactorAuthAndTransaction } from "./test-comp/TwoFactorAuthAndTransaction";
import { UserProfileDropdown } from "./test-comp/UserProfileDropdown";

const Page = () => {
  return <AIServiceLandingPage />;
  // return (
  //   <div className="h-screen w-full flex items-center justify-center">
  //     <PreferencesComponent />
  //   </div>
  // );
};

export default Page;
