"use client";
import React, { useState } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const loadingStates = [
  {
    text: "We building awesome app",
  },
  {
    text: "Let's chill the fuck out",
  },
  {
    text: "We'll meeting when it's finished",
  },
  {
    text: "l'll make me it happen",
  },
  {
    text: "I got go",
  },
  {
    text: "See u soon",
  },
  {
    text: "Pic out",
  },
  {
    text: "I hope you like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

async function wait(dur: number, callback: () => void) {
  const pro = new Promise((resolve) => {
    setTimeout(() => {
      resolve("5 seconds have passed");
      console.log("log");
    }, dur);
  });

  callback();
  return;
}

export async function Fallback() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={true} duration={1000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      {/* <button
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      ></button> */}
    </div>
  );
}

export const Load = async () => {
  function waitFiveSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("5 seconds have passed");
      }, 30000);
    });
  }
  const msg = await waitFiveSeconds();
  return <div>{msg as string}</div>;
};
