import React from 'react'
import Link from "next/link";
import { BsFillMoonStarsFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="py-6 md:py-10 mb-2 md:mb-12 flex flex-col md:flex-row justify-between items-center">
      <Link href={"/"} className="text-xl md:text-2xl font-burtons mb-4 md:mb-0">Paul Kweyu</Link>
      <ul className="flex flex-col md:flex-row md:items-center">
        <li className='mb-5'><Link href='/About' className="bg-gradient-to-r from-cyan-500 to-teal-700 text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:ml-8">About</Link></li>
        <li className='mb-5' ><Link href='/Portfolio' className="bg-gradient-to-r from-cyan-500 to-teal-700 text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:ml-8">Portfolio</Link></li>
        <li className='mb-5'><Link href='/Contact' className="bg-gradient-to-r from-cyan-500 to-teal-700 text-white px-4 py-2 rounded-md mb-2 md:mb-0 md:ml-8">Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
