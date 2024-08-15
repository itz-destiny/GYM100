import React from 'react'


const about = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 h-svh">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image section */}
      <div className="flex justify-center">
        <div className="w-96 h-96 bg-gray-300 rounded-md overflow-hidden mt-16">
          <img
            src="./woman-helping-man-exercise-medium-shot 1 (1).png" 
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text section */}
      <div className=''>
        <h1 className="text-4xl font-bold text-gray-900">
          About Us
        </h1>
        <p className="mt-4 text-gray-600 w-96">
        At Gym-100, we’re more than just a fitness center, we’re your dedicated partner in achieving peak wellness & performance.  
        With our cutting edge facilities, top-notch trainers and a supportive community, we’re here to help you reach your fitness 
        goal, whether you’re beginning your journey or striving for your personal best.
        </p>
        <br />
        <a
        href="#"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        Learn more
        </a>
      </div>
    </div>
  </div>
  )
}

export default about