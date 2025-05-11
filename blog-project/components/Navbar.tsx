import Link from 'next/link';
import React from 'react'
import { FaSearch } from "react-icons/fa";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
     <div className="bg-fuchsia-100 p-2 text-center items-center">
        Lorem ipsum dolor sit amet
      </div>
      <nav className="bg-white p-4 shadow-xl" >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold text-black">Logo</div>

          <div className="hidden md:block flex items-center justify-center space-x-32 md:px-16 md:py-2 lg:px-32 lg:py-2 rounded-4xl bg-fuchsia-100 uppercase ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <FaSearch className="text-xl text-gray-600 bg-neutral-200 p-3 w-10 h-10" />
            <button className="bg-black p-2 cursor-pointer text-white">Login</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;