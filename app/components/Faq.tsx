import React from 'react'

const faq = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 h-svh">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image section */}
      <div className="flex justify-center">
        <div className="w-96 h-96 bg-gray-300 rounded-md overflow-hidden mt-16">
          <img
            src="./gym100backg1.png" 
            alt="faq"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text section */}
      <div className=''>
        <h2 className="text-4xl font-bold text-gray-900">
          FAQ
        </h2>
        
      </div>
    </div>
  </div>
  )
}

export default faq