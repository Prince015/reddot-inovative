import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import ServicesBox from "../components/Services/ServicesBox";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactTypingEffect from 'react-typing-effect';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";


import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonialBox from "../components/Testimonial/TestimonialBox";
import { Link } from "react-router-dom";
import { handleScroll } from "../components/Helper/Helper";

export default function Home({setVisible, executeScroll, homeRef, ourWorksRef, aboutRef, industriesRef, servicesRef }) {
  
  let homeBody = document.getElementsByClassName("home_body")[0]
  const [prevScrollpos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if (!homeBody) {
      homeBody = document.getElementsByClassName("home_body")[0]
    }
    homeBody?.addEventListener('scroll',()=>handleScroll(homeBody,prevScrollpos,setVisible,setPrevScrollPos));
    return () => homeBody?.removeEventListener('scroll',()=>handleScroll(homeBody,prevScrollpos,setVisible,setPrevScrollPos))
  },[homeBody?.scrollTop])

  useEffect(() => {
    setVisible(true)
  }, [])
  

  return (
    <div className="absolute home_body h-screen snap-mandatory layout overflow-auto snap-y">
      <div ref={homeRef} className="h-screen pt-24 snap-start  px-4 mvsm:px-6 md:px-20 msm:px-10">
        <div className="flex">
          <div className="relative w-full">
            <h1 className="text-2xl min-w-fit vsm:text-3xl sm:text-4xl mvsm:text-5xl md:text-7xl  xl:text-8xl text-secondary-2 font-black">
              We Can Help You <br />{" "}
              <span className="text-Primary-Colour">


                <ReactTypingEffect
                  text={["Innovate", "Automate", "Acclerate"]}
                  speed={200}
                  eraseSpeed={200}
                  eraseDelay={2000}
                  typingDelay={2000}
                  cursor="_"
                />
              </span> Your <br />{" "}
              Business
            </h1>
            <p className=" mt-7 max-w-lg text-lg">
              Bring your idea to life in no time.Here at Red Dot Innovative we
              focus on technology, innovation to accelerate your business.
            </p>
            <button onClick={() => {
              executeScroll(ourWorksRef);
            }} className=" mt-7 min-w-fit bg-secondary px-14 rounded-sm py-2 text-white font-bold text-base">
              Our Work
            </button>
            <div className=" absolute top-28 justify-center items-center right-0 hidden lg:flex w-[41%] ">
              <img src="bg circles.svg" alt="" />
              <img className="absolute flex self-center" src="mobile-mockup.png" alt="" />
            </div>
          </div>

        </div>
        
        <svg onClick={() => {
                executeScroll(aboutRef);
              }} className="w-fit cursor-pointer left-1/2 -translate-x-1/2 absolute bottom-24 lg:mt-0" width="36" height="56" viewBox="0 0 36 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="56" fill="#C9C9C9" />
          <g clip-path="url(#clip0_1_82)">
            <rect width="1440" height="8983" transform="translate(-702 -814)" fill="white" />
            <rect width="1440" height="785" transform="translate(-702 -694)" fill="white" />
            <rect x="1" y="1" width="34" height="54" rx="17" stroke="#222638" stroke-width="2" />
            <path d="M18 12L18 20" stroke="#222638" stroke-width="2" stroke-linecap="round" />
          </g>
          <defs>
            <clipPath id="clip0_1_82">
              <rect width="1440" height="8983" fill="white" transform="translate(-702 -814)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div ref={aboutRef} className=" snap-start px-4 mvsm:px-6 md:px-20 msm:px-10 bg-secondary-2  flex flex-col items-center py-16 gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          ABOUT US
        </h4>
        <h2 className="text-white text-center text-2xl msm:text-3xl md:text-4xl lg:text-6xl font-extrabold">
          <ReactTypingEffect
            text={["Innovate", "Automate", "Acclerate"]}
            speed={100}
        eraseSpeed={100}
        eraseDelay={2000}
        typingDelay={2000}
        cursor="_"
          />
        </h2>
        <p className="text-white mvsm:font-medium text-center">
          Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is
          dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy
          text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum
          ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy
          text.Loreum{" "}
        </p>
        <Link to='/about-us' className="min-w-fit bg-secondary px-5 rounded-sm py-2 text-white font-bold text-base">
          Know More
        </Link >
      </div>
      <div ref={servicesRef} className="snap-start px-4 mvsm:px-6 md:px-20 msm:px-10 bg-white flex flex-col items-center py-16 gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          SERVICES
        </h4>
        <h2 className="text-secondary-2 text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl font-extrabold">
          We Provide Best Services For Business
        </h2>
        <div className="grid py-3 msm:py-16 gap-12 w-full grid-cols-1 msm:grid-cols-2">
          <ServicesBox icon="Product Devlopement.png" bg="bg-my-yellow" phone="show" />
          <ServicesBox icon="Web Developement.png" bg="bg-my-blue" phone="show" />
          <ServicesBox icon="iot.png" bg="bg-Primary-Colour" />
          <ServicesBox icon="SMS.png" bg="bg-my-green" />
          <ServicesBox icon="Data Analytics.png" bg="bg-my-blue" />
          <ServicesBox icon="Enterprise Mobility.png" bg="bg-my-green" />
        </div>
      </div>
      <div ref={industriesRef} className="snap-start bg-secondary-2 h-fit relative py-16 ">
        <div className="px-4 mvsm:px-6 md:px-20 msm:px-10 flex flex-col items-center gap-5">
          <h4 className="text-Primary-Colour tracking-widest font-semibold ">
            INDUSTRIES
          </h4>
          <h2 className="text-white text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl md:leading-tight font-extrabold">
            Innvoating Experiences Across Industries
          </h2>
          <div className="hidden mvsm:flex mt-8 w-full  max-h-[500px] justify-center gap-2">
            <div className="w-[28%] relative h-auto">
              <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="food-&-beverages.jpeg" alt="" />
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img className="mx-auto" src="foodicon.svg" alt="" />
                <p className="text-lg font-bold text-white">Food & Beverages</p>
              </div>
            </div>
            <div className="flex max-h-[492px] box-border flex-1 gap-2 flex-col">
              <div className="h-1/2 relative">
                <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="healthcare.jpeg" alt="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto" src="health-1.svg" alt="" />
                  <p className="text-lg font-bold text-white">Healthcare</p>
                </div>
              </div>
              <div className="h-1/2 relative">
                <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="logistics.jpeg" alt="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto" src="logistic-icon.svg" alt="" />
                  <p className="text-lg font-bold text-white">Logistic</p>
                </div>
              </div>
            </div>
            <div className="w-[28%] relative h-auto">
              <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="agri.jpeg" alt="" />
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img className="mx-auto" src="farming-1.svg" alt="" />
                <p className="text-lg font-bold text-white">Agriculture</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[100vw]  mt-8 mvsm:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="w-full relative h-100px">
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="food-&-beverages.jpeg" alt="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="foodicon.svg" alt="" />
                  <p className="text-lg font-bold text-white">Food & Beverages</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative h-100px">
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="healthcare.jpeg" alt="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="health-1.svg" alt="" />
                  <p className="text-lg font-bold text-white">Healthcare</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative h-100px">
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="logistics.jpeg" alt="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="logistic-icon.svg" alt="" />
                  <p className="text-lg font-bold text-white">Logistic</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative h-100px">
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="agri.jpeg" alt="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="farming-1.svg" alt="" />
                  <p className="text-lg font-bold text-white">Agriculture</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div ref={ourWorksRef} className="snap-start relative bg-black h-screen my-16 py-16 flex flex-col items-center gap-5">
        <img className="absolute top-0 left-0 h-full opacity-40 object-cover" src="our-work.png" alt="" />
        <h4 className="text-Primary-Colour relative tracking-widest font-semibold ">
          OUR WORK
        </h4>
        <h2 className="text-white relative text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl md:leading-tight font-extrabold">
          We Create Experiences We Believe In.
        </h2>
        <Link to='/ourworks' className="min-w-fit bg-secondary z-10 mt-8 px-5 rounded-sm py-2 text-white font-bold text-base">
          EXPLORE OUR WORK
        </Link>
      </div>
      <div className="snap-start py-8 px-4 w-[100vw] bg-white  pb-16  mvsm:px-6 md:px-20 msm:px-10 flex flex-col items-center gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          OUR SUCCESS
        </h4>
        <h2 className="text-secondary-2 text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl md:leading-tight font-extrabold">
          Our Pride is in our customers Success
        </h2>
        <div className="mt-5 w-full">
          <Swiper
            slidesPerView={window.innerWidth<430 ? 1 : 1.25}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="relative">
                <img className="" src="EATSEZY.png" alt="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] text-xl our_success_p self-end lg:text-3xl xl:text-[40px] xl:leading-tight font-medium" >Eatsezy is singapore’s restaurant  <span className=" font-bold text-sm  mvsm:text-2xl our_scuucess_span lg:text-4xl xl:text-5xl text-Primary-Colour ">table booking app</span></p>
                  <img className="mt-3 mr-3 self-start h-1/12 w-1/12" src="eatsezy-logo.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="ofms.png" alt="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] text-xl our_success_p self-end lg:text-3xl xl:text-[40px] xl:leading-tight font-medium" >OFMS is <span className=" font-bold text-sm mvsm:text-2xl our_scuucess_span lg:text-4xl xl:text-5xl text-[#F79635] "> a Luxury Real Estate and Facility Management.</span></p>
                  <img className="mt-3 mr-3 self-start h-1/12 w-1/12" src="ofms-logo.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="acai.png" alt="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] text-xl our_success_p self-end lg:text-3xl xl:text-[40px] xl:leading-tight font-medium" >Project Acai is Singapore’s First  <span className=" font-bold text-sm mvsm:text-2xl our_scuucess_span lg:text-4xl xl:text-5xl text-[#592D80] ">Acai Superfood Cafe</span></p>
                  <img className="mt-3 mr-3 self-start h-1/12 w-1/12" src="big-foot-logo.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="bigfoot.png" alt="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] text-xl our_success_p self-end lg:text-3xl xl:text-[40px] xl:leading-tight font-medium" >Bigfoot is singapore’s largest <span className=" font-bold text-sm mvsm:text-2xl our_scuucess_span lg:text-4xl xl:text-5xl text-[#155B9F] "> logistics & supply chain Group</span></p>
                  <img className="mt-3 mr-3 self-start h-1/12 w-1/12" src="bigfoot-logo.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="youadme.png" alt="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] text-xl our_success_p self-end lg:text-3xl xl:text-[40px] xl:leading-tight font-medium" >YouAdMe is a <span className=" font-bold text-sm mvsm:text-2xl our_scuucess_span lg:text-4xl xl:text-5xl text-[#FDCF09] ">Social Commerce Platform For Businesses</span></p>
                  <img className="mt-3 mr-3 self-start h-1/12 w-1/12" src="youadme-logo.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="snap-start px-4 py-16 bg-[#F4F6F5] w-[100vw]  mvsm:px-6 md:px-20 msm:px-10 flex flex-col items-center gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          CUSTOMER TESTIMONIAL
        </h4>
        <h2 className="text-secondary-2 text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl md:leading-tight font-extrabold">
          What Our Customer Says?
        </h2>
        <div className="mt-5  w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <TestimonialBox image='Rectangle 4503.png' description='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy.' name='JOHN SMITH' company='DIRECTOR, ABC PTE LTD' />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox image='Rectangle 4503.png' description='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy.' name='JOHN SMITH' company='DIRECTOR, ABC PTE LTD' />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox image='Rectangle 4503.png' description='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy.' name='JOHN SMITH' company='DIRECTOR, ABC PTE LTD' />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox image='Rectangle 4503.png' description='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy.' name='JOHN SMITH' company='DIRECTOR, ABC PTE LTD' />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox image='Rectangle 4503.png' description='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy.' name='JOHN SMITH' company='DIRECTOR, ABC PTE LTD' />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox image='Rectangle 4503.png' description='Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy.' name='JOHN SMITH' company='DIRECTOR, ABC PTE LTD' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="snap-start">
        <Footer />
      </div>
      <div className="snap-start">
        <FooterBottom />
      </div>
    </div>
  );
}
