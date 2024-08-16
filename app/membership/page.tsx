'use client'

import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SignInButton } from "@clerk/nextjs"

const membership = () => {
    const projects = [
        {
          title: "One Time Subscription - $200",
          description: {
            one: "✓ Unlimited Packages",
            two: "✓ Access to all Equiipment in the Gym.",
            three: "✓ Free medical checkup",
            four: "✓ Personal trainer for all class session (i.e yoga dance fitness, message therapy)",
            five: "✓ Additional amenities (i.e private lock rooms, cafe/smoothie bar).",
          }
            ,
       // Adjust these filenames
        },
        {
          title: "Annual Subscription - $60",
          description: {
            one: "✓ Access to all Equiipment in the Gym.",
            two: "✓ Free medical checkup",
            three: "✓ Personal trainer for all class session (i.e yoga dance fitness, message therapy)",
            four: "✓ Additional amenities (i.e private lock rooms, cafe/smoothie bar).",
          }
      
        },
        {
          title: "Monthly Subscription - $5",
          description: {
            one: "✓ Access to all Equiipment in the Gym.",
            two: "✓ General locker room",
            three: "✓ Limited access to some classes",
          }
            
      
        },
      ];
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
]
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-screen" >
        <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="./gym 1002.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="h-6 w-6" />            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 ">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end font-bold py-2 px-4">
            
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  alt=""
                  src="./gym 1002.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <IoMdClose aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://aware-mastodon-11.accounts.dev/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 mt-4">
            <div className="py-32 h-fit lg:h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                    Prepare to boost your fitness journey
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                    Discover how GYM100 can help you achieve your fitness goals <br /> 
                    Explore our membership options and join a community committed to your well being
                    </p>
                    <h1 className="text-3xl font-extrabold text-gray-900 mt-6">
                    Choose your perfect membership subscription
                    </h1>
                </div>
                <div className="max-w-5xl mx-auto px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:h-[450px]">
                    {projects.map((project, index) => (
                    <div
                        key={index}
                        className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-limegreen"

                    >
                        <div className="p-6">
                        <h3 className="text-xl font-bold border-b-2 text-white text-center">{project.title}</h3>
                        <p className="mt-2 text-white">{project.description.one}</p>
                        <p className="mt-2 text-white">{project.description.two}</p>
                        <p className="mt-2 text-white">{project.description.three}</p>
                        <p className="mt-2 text-white">{project.description.four}</p>
                        <p className="mt-2 text-white">{project.description.five}</p>
                        <br />
                        <a
                            href="/form"
                            className="mt-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
          </div>
        </main>
    </div>
  )
}

export default membership