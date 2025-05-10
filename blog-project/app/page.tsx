import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="bg-fuchsia-100 p-2 text-center items-center">
        Lorem ipsum dolor sit amet
      </div>
      <nav className="bg-white p-4 shadow-xl" >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold text-black">Logo</div>

          <div className="hidden md:block flex items-center justify-center space-x-32 md:px-16 md:py-2 lg:px-32 lg:py-2 rounded-4xl bg-fuchsia-100 uppercase ">
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Blog</a>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <FaSearch className="text-xl text-gray-600 bg-neutral-200 p-3 w-10 h-10" />
            <button className="bg-black p-2 cursor-pointer text-white">Login</button>
          </div>
        </div>
      </nav>
      <header className="relative">
        {/* Arka plan görseli */}
        <img src="/header.svg" alt="Header" className="w-full object-cover" />

        {/* Üzerine gelecek yazı */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  bg-white/60 backdrop-blur-sm text-black rounded shadow-md flex flex-col items-center space-y-1 md:space-y-3 px-2 py-1 sm:px-4 sm:py-4 md:px-8 md:py-8 w-[80%] sm:w-[70%] md:w-[50%]">
          <h4 className="text-sm sm:text-lg md:text-xl font-light text-center">
            BEST MAKE-UP PRODUCTS 2025
          </h4>
          <span className="text-xs sm:text-sm text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </span>
          <button className="bg-black text-white text-xs sm:text-sm py-2 px-4 rounded w-1/2 sm:w-1/3">
            READ MORE
          </button>
        </div>
      </header>

    </>
  );
}
