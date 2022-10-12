import React from 'react'

export default function InovateBox({image,title,description}) {
  return (
    <div className='xl:w-[30%] w-full smd:w-[45%] flex flex-col items-center sm:min-w-[270px]'>
      <img className='rounded-full h-20 mvsm:h-32 lg:h-36 shadow-[0px_0px_20px_1px_#c9c9c9]' src={image} alt="" srcset="" />
      <h3 className='text-xl mvsm:text-2xl lg:text-3xl my-5 font-bold'>{title}</h3>
      <p className='text-sm text-center'>Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy </p>
    </div>
  )
}
