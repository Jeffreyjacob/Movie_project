import React from 'react'

const Button = ({title,icon}) => {
  return (
    <button className='text-white bg-red-600 max-md:text-md text-lg uppercase px-4 py-3 flex '>
        {icon && icon}
       {title}
    </button>
  )
}

export default Button