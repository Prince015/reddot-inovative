import React from "react";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import ServicesBox from "../components/Services/ServicesBox";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonialBox from "../components/Testimonial/TestimonialBox";
import { Link } from "react-router-dom";
export default function Home({ executeScroll, homeRef, ourWorksRef, aboutRef, industriesRef, servicesRef }) {
  return (
    <div className=" top-[10vh] h-[90vh] fixed overflow-y-auto">
      <div ref={homeRef} className="px-4  flex  mvsm:px-6 md:px-20 msm:px-10">
        <div>
          <h1 className="text-2xl min-w-fit vsm:text-3xl sm:text-4xl mvsm:text-5xl md:text-7xl  xl:text-8xl text-secondary-2 font-black">
            We Can Help You <br />{" "}
            <span className="text-Primary-Colour">Innovate</span> Your <br />{" "}
            Business
          </h1>
          <p className=" mt-7 text-lg">
            Bring your idea to life in no time.Here at Red Dot Innovative we
            focus on technology, innovation to accelerate your business.
          </p>
          <button onClick={() => {
            executeScroll(ourWorksRef);
          }} className=" mt-7 min-w-fit bg-secondary px-14 rounded-sm py-2 text-white font-bold text-base">
            Our Work
          </button>
        </div>
        <div className=" self-end hidden lg:inline-block w-[41%] h-fit  ">
          <img src="mobile-mockup.png" alt="" srcset="" />
        </div>
      </div>
      <div ref={aboutRef} className="px-4 mvsm:px-6 md:px-20 msm:px-10 bg-secondary-2 mt-[50vh] sm:mt-8  flex flex-col items-center py-16 gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          ABOUT US
        </h4>
        <h2 className="text-white text-center text-2xl msm:text-3xl md:text-4xl lg:text-6xl font-extrabold">
          innovate . automate . acclerate
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
      <div ref={servicesRef} className="px-4 mvsm:px-6 md:px-20 msm:px-10 bg-white flex flex-col items-center py-16 gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          SERVICES
        </h4>
        <h2 className="text-secondary-2 text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl font-extrabold">
          We Provide Best Services For Business
        </h2>
        <div className="grid py-3 msm:py-16 gap-12 w-full grid-cols-1 msm:grid-cols-2">
          <ServicesBox bg="bg-my-yellow" phone="show" />
          <ServicesBox bg="bg-my-blue" phone="show" />
          <ServicesBox bg="bg-Primary-Colour" />
          <ServicesBox bg="bg-my-green" />
          <ServicesBox bg="bg-my-blue" />
          <ServicesBox bg="bg-my-green" />
        </div>
      </div>
      <div ref={industriesRef} className="bg-secondary-2 h-fit relative py-16 ">
        <div className="px-4 mvsm:px-6 md:px-20 msm:px-10 flex flex-col items-center gap-5">
          <h4 className="text-Primary-Colour tracking-widest font-semibold ">
            INDUSTRIES
          </h4>
          <h2 className="text-white text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl md:leading-tight font-extrabold">
            Innvoating Experiences Across Industries
          </h2>
          <div className="hidden mvsm:flex mt-8 w-full  max-h-[500px] justify-center gap-2">
            <div className="w-[28%] relative h-auto">
              <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="food-&-beverages.jpeg" alt="" srcset="" />
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img className="mx-auto" src="foodicon.svg" alt="" srcset="" />
                <p className="text-lg font-bold text-white">Food & Beverages</p>
              </div>
            </div>
            <div className="flex max-h-[492px] box-border flex-1 gap-2 flex-col">
              <div className="h-1/2 relative">
                <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="healthcare.jpeg" alt="" srcset="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto" src="health-1.svg" alt="" srcset="" />
                  <p className="text-lg font-bold text-white">Healthcare</p>
                </div>
              </div>
              <div className="h-1/2 relative">
                <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="logistics.jpeg" alt="" srcset="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto" src="logistic-icon.svg" alt="" srcset="" />
                  <p className="text-lg font-bold text-white">Logistic</p>
                </div>
              </div>
            </div>
            <div className="w-[28%] relative h-auto">
              <img className="h-full hover:opacity-50 opacity-90 w-full object-cover" src="agri.jpeg" alt="" srcset="" />
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img className="mx-auto" src="farming-1.svg" alt="" srcset="" />
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
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="food-&-beverages.jpeg" alt="" srcset="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="foodicon.svg" alt="" srcset="" />
                  <p className="text-lg font-bold text-white">Food & Beverages</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative h-100px">
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="healthcare.jpeg" alt="" srcset="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="health-1.svg" alt="" srcset="" />
                  <p className="text-lg font-bold text-white">Healthcare</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative h-100px">
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="logistics.jpeg" alt="" srcset="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="logistic-icon.svg" alt="" srcset="" />
                  <p className="text-lg font-bold text-white">Logistic</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative h-100px">
                <img className="h-56 hover:opacity-50 opacity-100 w-full object-cover" src="agri.jpeg" alt="" srcset="" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img className="mx-auto " src="farming-1.svg" alt="" srcset="" />
                  <p className="text-lg font-bold text-white">Agriculture</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div ref={ourWorksRef} className="relative bg-black h-[60vh] mvsm:h-[90vh] my-16 py-16 flex flex-col items-center gap-5">
        <img className="absolute top-0 left-0 h-full opacity-40 object-cover" src="our-work.png" alt="" srcset="" />
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
      <div className="px-4 w-[100vw] bg-white  pb-16  mvsm:px-6 md:px-20 msm:px-10 flex flex-col items-center gap-5">
        <h4 className="text-Primary-Colour tracking-widest font-semibold ">
          OUR SUCCESS
        </h4>
        <h2 className="text-secondary-2 text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl md:leading-tight font-extrabold">
          Our Pride is in our customers Success
        </h2>
        <div className="mt-5 w-full">
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
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="relative">
                <img className="" src="EATSEZY.png" alt="" srcset="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] self-end text-xs mvsm:text-xl leading-5 md:text-3xl lg:text-4xl  xl:text-5xl font-medium" >Eatsezy is singapore’s restaurant  <span className=" font-bold leading-3 sm:leading-3 text-sm  mvsm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-Primary-Colour ">table booking app</span></p>
                  <img className=" self-start h-1/12 w-1/12" src="big-foot-logo.png" alt="" srcset="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="ofms.png" alt="" srcset="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] self-end text-xs mvsm:text-xl leading-5 md:text-3xl lg:text-4xl  xl:text-5xl font-medium" >OFMS is <span className=" font-bold leading-3 sm:leading-3 text-sm mvsm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#F79635] "> a Luxury Real Estate and Facility Management.</span></p>
                  <img className=" self-start h-1/12 w-1/12" src="big-foot-logo.png" alt="" srcset="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="acai.png" alt="" srcset="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] self-end text-xs mvsm:text-xl leading-5 md:text-3xl lg:text-4xl  xl:text-5xl font-medium" >Project Acai is Singapore’s First  <span className=" font-bold leading-3 sm:leading-3 text-sm mvsm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#592D80] ">Acai Superfood Cafe</span></p>
                  <img className=" self-start h-1/12 w-1/12" src="big-foot-logo.png" alt="" srcset="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="bigfoot.png" alt="" srcset="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] self-end text-xs mvsm:text-xl leading-5 md:text-3xl lg:text-4xl  xl:text-5xl font-medium" >Bigfoot is singapore’s largest <span className=" font-bold leading-3 sm:leading-3 text-sm mvsm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#155B9F] "> logistics & supply chain Group</span></p>
                  <img className=" self-start h-1/12 w-1/12" src="big-foot-logo.png" alt="" srcset="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="" src="youadme.png" alt="" srcset="" />
                <div className="absolute top-0 h-[41%] justify-between flex   left-1/4">
                  <p className=" text-[#232635CC] self-end text-xs mvsm:text-xl leading-5 md:text-3xl lg:text-4xl  xl:text-5xl font-medium" >YouAdMe is a <span className=" font-bold leading-3 sm:leading-3 text-sm mvsm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FDCF09] ">Social Commerce Platform For Businesses</span></p>
                  <img className=" self-start h-1/12 w-1/12" src="big-foot-logo.png" alt="" srcset="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="px-4 py-16 bg-[#F4F6F5] w-[100vw]  mvsm:px-6 md:px-20 msm:px-10 flex flex-col items-center gap-5">
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
      <Footer />
      <FooterBottom />
    </div>
  );
}
