import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';



function Meta({ ...seoProps }: NextSeoProps) {
  return (
    <NextSeo 
        {...seoProps}
    
    />
  )
}

export default Meta;
