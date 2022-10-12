import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer'
import FooterBottom from '../Footer/FooterBottom'
import ExploreWorksBox from './ExploreWorksBox';

export default function ExploreWorks() {

    return (
        <div className=" top-[10vh] h-[90vh] absolute">
            <div className='hidden md:flex'>
                <Outlet />
                <div className='flex gap-9 flex-1 min-w-[25vw] px-5 py-6 text-lg font-semibold flex-col '>
                    <NavLink
                        end
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
                        className={({ isActive }) =>
                            isActive ? "text-[#F79635]" : "text-my-white"
                        }
                        to="osma"
                        
                    // to="osma"
                    >
                        Ofma
                    </NavLink>
                </div>
            </div>
            <div className=' flex flex-col gap-5 md:hidden'>
                <ExploreWorksBox bg='bg-Primary-Colour' title="EatsEzy" description="Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy " subtitle="Mobile App Design & Developement" image="mobile-mockup.png"/>
                <ExploreWorksBox bg='bg-[#D74008]' title="Bigfoot" description="Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy " subtitle="Mobile App Design & Developement" image="mobile-mockup.png"/>
                <ExploreWorksBox bg='bg-[#592D80]' title="acai" description="Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy " subtitle="Mobile App Design & Developement" image="mobile-mockup.png"/>
            </div>
            <Footer />
            <FooterBottom />
        </div>
    )
}
