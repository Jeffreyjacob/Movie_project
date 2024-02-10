import React from 'react'
import { Footlinks, Footlinks2 } from '../assets/constant';

const Footer = () => {
  return (
    <div className='w-full flex flex-col  max-lg:px-8 bg-[#221f1f] 
    font-roboto-condensed'>
         <div className='md:flex md:justify-center md:gap-8 mt-8'>
           <div>
            <img  src='https://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/02/Logo-2.png'
                  width={250}/>
              <p className='text-white text-md md:max-w-md'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
           </div>
           <div>
             <h3 className='text-3xl font-extrabold text-white mt-5'>Explore</h3>
             <ul className='grid md:grid-cols-2 grid-cols-1 lg:gap-5 mt-5'>
                {
                    Footlinks.map((links)=>(
                        <li key={links.name} className='text-white text-sm md:pr-14'
                        style={{listStyle:"inside"}}
                        >
                        {links.name}
                        </li>
                    ))
                }
             </ul>
           </div>
        </div>

        <div className='md:flex md:justify-center md:gap-14 mt-4 mb-8'>

            <div>
            <h3 className='text-3xl font-extrabold text-white mt-5'>Company</h3> 
           <ul className='grid md:grid-cols-2 grid-cols-1 lg:gap-5 mt-5'>
               {
                Footlinks2.map((links)=>(
                    <li key={links.name} className='text-white text-sm md:pr-12'
                    style={{listStyle:"inside"}}>
                      {links.name}
                    </li>
                ))
               }
           </ul>
            </div>
            <div>
                <h3 className='text-3xl font-extrabold text-white mt-5'>Download App</h3>
                 <p className='text-white text-md md:max-w-md'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className='flex gap-5'>
                <img src='https://ucarecdn.com/7641a59d-0953-43d1-b91f-16981900ad03/googleplaybadgelogosvgrepocom.svg'
                  width={150}
                />
                <img src='https://ucarecdn.com/57c9863f-a836-42d1-84ee-2432f8ec44e7/downloadontheappstoreapplelogosvgrepocom.svg'
                width={150}/>
                </div>
            </div>
           
        </div>
        <div className='bg-red-600 flex justify-center py-5'>
            <p className='text-sm text-white'>Copyright 2024 steamlab All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer;