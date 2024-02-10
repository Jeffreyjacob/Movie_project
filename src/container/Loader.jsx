import React from 'react'
import { Loader } from 'rsuite'

const LoaderComponent = () => {
  return (
    <div className='w-full  flex justify-center h-[100vh]  items-center flex-col'>
      <img  src={`https://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/02/Logo-2.png`}
        width={300} />
         <Loader size='lg' color='' />
    </div>
  )
}

export default LoaderComponent