import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
     <header className="relative">
        {/* Arka plan görseli */}
        <img src="../images/header.svg" alt="Header" className="w-full object-cover" />

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
  )
}

export default Header;