import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import FooterBottom from '../Footer/FooterBottom'
import ExploreWorksBox from './ExploreWorksBox';

export default function ExploreWorks() {

    const navigate = useNavigate()
    const handleMouseEnter =(str)=>{
        navigate(`${str}`)
    }
    return (
        <div className="snap-y snap-mandatory overflow-auto h-screen scroll-pt-24 absolute">
            <div className='snap-start pt-24 h-screen hidden md:flex'>
                <Outlet />
                <div className='flex relative'>
                <div className=' h-full flex text-xl justify-around gap-9 flex-1 min-w-[25vw] pl-5 lg:pl-8 py-6 font-bold flex-col '>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("/ourworks")}}
                        className={({ isActive }) =>
                            isActive ? "text-Primary-Colour" : "text-my-white"
                        }
                        to="/ourworks"
                    // to="/ourworks"
                    >
                        EatsEzy
                    </NavLink>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("bigfoot")}}
                        className={({ isActive }) =>
                            isActive ? "text-[#D74008]" : "text-my-white"
                        }
                        to="bigfoot"

                    // to="bigfoot"
                    >
                        Bigfoot
                    </NavLink>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("acai")}}
                        className={({ isActive }) =>
                            isActive ? "text-[#592D80]" : "text-my-white"
                        }
                        to="acai"

                    // to="acai"
                    >
                        acai
                    </NavLink>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("legate")}}
                        className={({ isActive }) =>
                            isActive ? "text-[#F47325]" : "text-my-white"
                        }
                        to="legate"

                    // to="legate"
                    >
                        LEGATE
                    </NavLink>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("express-cart")}}
                        className={({ isActive }) =>
                            isActive ? "text-[#F7BE47]" : "text-my-white"
                        }
                        to="express-cart"

                    // to="express-cart"
                    >
                        Express Cart
                    </NavLink>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("you-adme")}}
                        className={({ isActive }) =>
                            isActive ? "text-[#FDCF09]" : "text-my-white"
                        }
                        to="you-adme"

                    // to="you-adme "
                    >
                        YOU adme
                    </NavLink>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("orizon-motorcycles")}}
                        className={({ isActive }) =>
                            isActive ? "text-[#F2994A]" : "text-my-white"
                        }
                        to="orizon-motorcycles"

                    // to="orizon-motorcycles "
                    >
                        Orizon Motorcycles
                    </NavLink>
                    <NavLink
                        end
                        onMouseEnter={()=>{handleMouseEnter("osma")}}
                        className={({ isActive }) =>
                            isActive ? "text-[#F79635]" : "text-my-white"
                        }
                        to="osma"

                    // to="osma"
                    >
                        Ofma
                    </NavLink>
                </div>
                <h2 style={{writingMode:"vertical-lr"}} className='absolute top-1/2 -translate-y-1/2 right-0 font-bold text-explore/work/vr pr-5 w-fit text-7xl lg:text-8xl'>Work</h2>
                </div>
            </div>
            {/* <div className='snap-start pt-24 flex flex-col gap-5 md:hidden'> */}
                <div className='md:hidden snap-start pt-24'><ExploreWorksBox bg='bg-Primary-Colour' title="EatsEzy" description="Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy " subtitle="Mobile App Design & Developement" image="../explore-eatzezy.png" /></div>
                <div className='md:hidden snap-start my-5'><ExploreWorksBox bg='bg-[#D74008]' title="Bigfoot" description="Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy " subtitle="Mobile App Design & Developement" image="../explore-bigfoot.png" /></div>
                <div className='md:hidden snap-start'><ExploreWorksBox bg='bg-[#592D80]' title="acai" description="Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy " subtitle="Mobile App Design & Developement" image="../explore-acai.png" /></div>
            {/* </div> */}
            <div className="snap-start">
                <Footer />
            </div>
            <div className="snap-start">
                <FooterBottom />
            </div>
        </div>
    )
}
