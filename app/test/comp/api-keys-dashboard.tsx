import React, { useState } from "react";
import { ChevronDown, Copy, Eye, EyeOff, Plus } from "lucide-react";

export const ApiKeyDashboard = () => {
  const [selectedProject, setSelectedProject] = useState("Louis Vuitton");
  const [selectedCampaign, setSelectedCampaign] = useState(
    "Summer 24' Campaign"
  );
  const [selectedEnvironment, setSelectedEnvironment] = useState("Production");

  return (
    <div className="bg-white min-h-screen">
      <header className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ProjectSelector
              selected={selectedProject}
              setSelected={setSelectedProject}
            />
            <CampaignSelector
              selected={selectedCampaign}
              setSelected={setSelectedCampaign}
            />
            <EnvironmentSelector
              selected={selectedEnvironment}
              setSelected={setSelectedEnvironment}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700">
              Add teammates
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <nav className="border-b border-gray-200">
        <ul className="flex">
          {[
            "Overview",
            "Users",
            "Organizations",
            "Billing",
            "Configure",
            "Settings",
          ].map((item) => (
            <li key={item}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="p-6">
        <div className="flex">
          <aside className="w-64 pr-8">
            <h2 className="font-semibold mb-4">General</h2>
            <ul className="space-y-2">
              {["Authentication", "SMS template", "Email templates"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            <h2 className="font-semibold mt-6 mb-4">Organization</h2>
            <ul className="space-y-2">
              {["Settings", "Roles and permissions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="font-semibold mt-6 mb-4">Security</h2>
            <ul className="space-y-2">
              {["Restrictions", "Fraud detection"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="font-semibold mt-6 mb-4">Developers</h2>
            <ul className="space-y-2">
              {[
                "Sessions",
                "JWT templates",
                "Webhooks",
                "Paths / Routing",
                "Domains",
                "Integrations",
                "API keys",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`text-gray-600 hover:text-gray-900 ${
                      item === "API keys" ? "font-semibold" : ""
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">API keys</h1>
            <p className="text-gray-600 mb-6">
              Manage API keys for this instance
            </p>

            <QuickCopySection />
            <PublishableKeySection />
            <SecretKeysSection />
          </div>
        </div>
      </main>
    </div>
  );
};

const ProjectSelector = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="relative">
    <button className="flex items-center space-x-2 font-semibold">
      <span>{selected}</span>
      <ChevronDown size={16} />
    </button>
  </div>
);

const CampaignSelector = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="relative">
    <button className="flex items-center space-x-2 font-semibold">
      <span>{selected}</span>
      <ChevronDown size={16} />
    </button>
  </div>
);

const EnvironmentSelector = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="relative">
    <button className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
      <span>{selected}</span>
      <ChevronDown size={16} />
    </button>
  </div>
);

const QuickCopySection = () => (
  <div className="bg-gray-900 text-white p-4 rounded-lg mb-6">
    <div className="flex justify-between items-center mb-2">
      <h2 className="font-semibold">Quick Copy</h2>
      <button className="text-sm text-gray-400 hover:text-white">
        Show API URLs
      </button>
    </div>
    <p className="text-sm text-gray-400 mb-4">
      Choose your framework and paste the code into your environment file.
    </p>
    <div className="bg-gray-800 p-2 rounded">
      <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
        <span>.env.local</span>
        <Copy size={16} className="cursor-pointer hover:text-white" />
      </div>
      <pre className="text-sm">
        <code>
          NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_Y2xlcmsuY29tIGlzIGF3ZXNvbWU
          CLERK_SECRET_KEY=sk_live_***************************
        </code>
      </pre>
    </div>
  </div>
);

const PublishableKeySection = () => (
  <div className="mb-6">
    <h2 className="font-semibold mb-2">Publishable key</h2>
    <p className="text-sm text-gray-600 mb-4">
      This key should be used in your frontend code. It can be safely shared,
      and does not need to be kept secret.
    </p>
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value="pk_live_Y2xlcmsuY29tIGlzIGF3ZXNvbWU"
        readOnly
        className="flex-grow bg-gray-100 p-2 rounded"
      />
      <button className="p-2 hover:bg-gray-100 rounded">
        <Copy size={16} />
      </button>
    </div>
  </div>
);

const SecretKeysSection = () => {
  const [showSecretKeys, setShowSecretKeys] = useState(false);

  return (
    <div>
      <h2 className="font-semibold mb-2">Secret keys</h2>
      <p className="text-sm text-gray-600 mb-4">
        Securely manage these sensitive keys. Do not share them with anyone. If
        you suspect that one of your secret keys has been compromised, you
        should create a new key, update your code, then delete the compromised
        key.
      </p>
      <div className="space-y-4">
        <SecretKeyRow label="Default secret key" />
        <SecretKeyRow label="Test" />
        <SecretKeyRow label="Testing token" />
      </div>
      <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
        <Plus size={16} className="mr-2" />
        Add new key
      </button>
      <p className="mt-4 text-sm text-orange-600">
        Clerk support will never ask you to share your secret keys.
      </p>
    </div>
  );
};

const SecretKeyRow = ({ label }: { label: string }) => {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{label}</span>
      <div className="flex items-center space-x-2">
        <input
          type={showKey ? "text" : "password"}
          value="sk_live_Y2xlcmsuY29tIGlzIGF3ZXNvbWU"
          readOnly
          className="bg-gray-100 p-2 rounded"
        />
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => setShowKey(!showKey)}
        >
          {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <Copy size={16} />
        </button>
      </div>
    </div>
  );
};
