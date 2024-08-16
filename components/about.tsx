import React from 'react'


const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 h-fit lg:h-svh" id = "about">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-1 items-center justify-center gap-8">
        {/* Image section */}
        <div className="flex lg:justify-center">
          <div className="lg:w-96 lg:h-96 bg-gray-300 hidden lg:inline-block rounded-md overflow-hidden mt-16">
            <img
              src="./woman-helping-man-exercise-medium-shot 1 (1).png" 
              alt="About Us"
              className="w-full h-full  object-cover "
            />
          </div>
        </div>

        {/* Text section */}
        <div className=''>
          <h1 className="text-4xl font-bold text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-gray-600 lg:w-96">
          At Gym-100, we’re more than just a fitness center- we’re your
          dedicated partner in achieving peak wellness and performance.
          Whether you are looking for a short-term gym membership or a long
          term commitment to your health, our affordable fitness plan have you
          covered. Join one of the best gym in PH city and start your fitness journey
          today!
          </p>
          <br />
          <a
          href="https://aware-mastodon-11.accounts.dev/sign-up"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Learn more
          </a>
        </div>
      </div>
  </div>
  )
}

export default About