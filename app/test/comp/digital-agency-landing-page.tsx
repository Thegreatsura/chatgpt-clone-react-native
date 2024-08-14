import React from "react";
import { Button } from "@/components/ui/button";

export const LandingPageAgency = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-700 to-orange-500 text-white">
      <header className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold">X</div>
        <nav className="space-x-6">
          <a href="#services">Our Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black"
        >
          Book a call
        </Button>
      </header>

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-light mb-6">
          Unlocking <span className="font-normal">Digital Success</span>
        </h1>
        <p className="max-w-md mb-8">
          We are a full-stack agency creating captivating web experiences,
          driving e-commerce growth, and maximizing digital impact.
        </p>
        <div className="space-x-4">
          <Button className="bg-white text-black hover:bg-gray-200">
            Book a Consultation
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
          >
            More about us
          </Button>
        </div>
      </main>

      <footer className="absolute bottom-0 w-full p-6 flex justify-between text-sm">
        <div>Scroll down ↓</div>
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-2">Web Design</h3>
            <p>Ecommerce Design</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Social Media Marketing</h3>
            <p>Email Marketing</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Conversion Rate Optimization</h3>
            <p>Paid Traffic & Ad</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">User Generated Content</h3>
            <p>and more...</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
