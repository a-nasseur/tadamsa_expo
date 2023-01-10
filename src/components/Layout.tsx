import React from 'react';


import { GlobalProps } from '../utils/GlobalProps';
import Navbar from './Navbar';


function Layout({ children }: GlobalProps) {
  return (
   <>
    <Navbar />
       <main>{children}</main> 
    
   </>
  )
}

export default Layout;