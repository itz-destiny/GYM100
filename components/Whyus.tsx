// pages/why-choose-us.tsx

"use client"; // Ensure this is at the top

import React from 'react';

export default function WhyChooseUs() {
  const projects = [
    {
      title: "Cutting Edge Equipment",
      description:
        "Work out the latest fitness technology and machines designed to enhance your training.",
      image: "Vector.png", // Adjust these filenames
    },
    {
      title: "Expert Trainers",
      description:
        "Benefits from personalized Guidance and motivation from our certified trainers, dedicated to your success.",
      image: "full-shot.png",
    },
    {
      title: "Community Support",
      description:
        " Join a vibrant community of fitness enthusiast and share in the journey to better health together.",
      image: "people-exercising.png",
    },
  ];

  return (
    <div className="py-12 bg-gray-100 h-fit lg:h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Why Choose Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the benefits of partnering with us.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-[500px]  md:h-96"
          >
            <img
              src={`./${project.image}`} // Adjust the path as necessary
              alt={project.title}
              className="w-full h-[70%] lg:h-48 object-cover"
            />
            <div className="p-6 h-[20%">
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
