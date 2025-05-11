import React from 'react'
import Navbar from '@/components/Navbar'

interface BrowseLayoutProps{
     children:React.ReactNode
}
const BrowseLayout = ({children}:BrowseLayoutProps) => {
  return (
    <>
       <Navbar/>
       <div className='min-h-screen'>
          {children}
       </div>
     
    </>
  )
}

export default BrowseLayout;