import React from "react";
import Image from "next/image";

export const ProfileGallery = () => {
  return (
    <div className="bg-gray-100 p-8 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-6xl w-full">
        <div className="flex">
          {/* Left sidebar */}
          <div className="w-1/4 p-6 border-r border-gray-200">
            <ProfileInfo />
            <CollectionsList />
          </div>

          {/* Right content area */}
          <div className="w-3/4 p-6">
            <GalleryHeader />
            <GalleryGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileInfo = () => (
  <div className="mb-6">
    <Image
      src="/placeholder-avatar.jpg"
      alt="Elsa Nilsson"
      width={64}
      height={64}
      className="rounded-full mb-2"
    />
    <h2 className="font-bold text-lg">Elsa Nilsson</h2>
    <p className="text-sm text-gray-600 mb-2">
      Product designer at Spotify and design educator based in Stockholm, Sweden
    </p>
    <a
      href="https://elsanilsson.com"
      className="text-sm text-blue-600 hover:underline"
    >
      elsanilsson.com
    </a>
    <div className="mt-4 space-x-2">
      <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
        Follow
      </button>
      <button className="border border-gray-300 px-4 py-1 rounded-full text-sm">
        Message
      </button>
    </div>
  </div>
);

const CollectionsList = () => (
  <div>
    <h3 className="font-semibold mb-2">Collections</h3>
    <ul className="space-y-1">
      {[
        "Rabbit hole",
        "Outdoors",
        "Architecture",
        "Readings",
        "Mood",
        "Films",
      ].map((item) => (
        <li
          key={item}
          className="text-sm hover:bg-gray-100 p-1 rounded cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const GalleryHeader = () => (
  <div className="flex justify-between items-center mb-4">
    <div>
      <h1 className="font-bold text-xl">Rabbit hole</h1>
      <p className="text-sm text-gray-500">
        128 items · Last updated: 10 hours ago
      </p>
    </div>
    <button className="text-gray-400 hover:text-gray-600">
      {/* Three dots icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </button>
  </div>
);

const GalleryGrid = () => (
  <div className="grid grid-cols-3 gap-4">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="relative aspect-square rounded-lg overflow-hidden group"
      >
        <Image
          src={`/placeholder-image-${i + 1}.jpg`}
          alt={`Gallery item ${i + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {i === 1 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="absolute bottom-2 right-2 text-white text-sm">
              4:03
            </span>
          </div>
        )}
      </div>
    ))}
  </div>
);
