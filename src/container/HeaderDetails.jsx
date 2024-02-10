import React from 'react'
import { HomeIcon } from '@heroicons/react/20/solid';

const HeaderDetails = ({MainTitle,subTitle}) => {
  return (
    <div  className='flex justify-center bg-cover bg-center'
      style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),
      url("https://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2019/02/23-1.jpg")`,
      opacity:"0.9"}}>
        <div>
        <h1 className='text-white lg:text-[60px] text-4xl leading-normal py-6 mt-20 max-md:w-150px'>
            {MainTitle}
        </h1>
        <p className='font-roboto-condensed flex justify-center items-center mb-8'>
          <HomeIcon className='w-5 h-5 text-white'/>
          <span className='text-white text-xl px-1 font-extrabold'>Home /</span> 
          <span className='text-red-600 text-xl font-bold leading-normal px-2'>{subTitle}</span>
        </p>
        </div>
       
    </div>
  )
}

export default HeaderDetails;