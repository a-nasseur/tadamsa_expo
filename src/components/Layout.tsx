import React from 'react';


import { GlobalProps } from '../utils/GlobalProps';
import Footer from './Footer';
import Navbar from './Navbar';


function Layout({ children }: GlobalProps) {
  return (
   <>
    <Navbar />
       <main>{children}</main> 
    {/* <Footer /> */}
    
   </>
  )
}

export default Layout;