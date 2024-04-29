import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <form action="mailto:paulkweyu8@gmail.com" method="post" encType="text/plain">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200"></input>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200"></input>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200"></textarea>
            </div>
            <button type="submit" className="bg-gradient-to-r from-cyan-500 to-teal-700 text-white px-4 py-2 rounded-md">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
