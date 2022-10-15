import React from "react";

export default function ServicesBox({icon,bg,phone}) {
  return (
    <div className={` ${!phone && 'hidden'} msm:block bg-secondary-2 p-3`}>
      <h3 className="text-white text-xl sm:text-2xl msm:text-3xl md:text-4xl font-extrabold">
        Product <br /> Devlopement
      </h3>
      <p className="text-white my-4 w-3/4 " >Loreum ipsum is dummy textLoreum ipsum is dummy text</p>
      <div className={`h-40  md:h-52 w-40  md:w-52 lg:h-80 lg:w-80  mt-8 mb-5 border-[6px] border-white rounded-full ${bg} mx-auto`}>
        <img className=" h-full w-full" src={icon} alt="" srcset="" />
      </div>
    
    </div>
  );
}
