import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const menuCloseIcon = <svg className="fill-Primary-Colour" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3.25 17.625v-1.5h17.5v1.5Zm0-4.875v-1.5h17.5v1.5Zm0-4.875v-1.5h17.5v1.5Z" /></svg>
const  menuOpenIcon = <svg className="fill-Primary-Colour" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>
export default function Navbar({visible,homeRef, aboutRef, industriesRef, servicesRef, executeScroll}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenu = () => {
    // console.log(!isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
    // console.log(isMenuOpen)
  }
  return (
    <div className={`z-50 h-24 top-0 left-0 fixed bg-white transition-all duration-150 ${visible ? 'top-0' : '-top-24'} items-center w-full flex justify-between py-4 px-4 mvsm:px-6 md:px-20 msm:px-10`}>
      <Link to="/">
      <img className="h-16 w-auto" src="../../big-foot-logo.png" alt="logo" />
      </Link>
      <div onClick={handleMenu} className="block smd:hidden">
        {isMenuOpen ? menuOpenIcon : menuCloseIcon}
      </div>
      <div className={`px-4 ${isMenuOpen ?'h-[90vh] overflow-y-auto py-8' : 'overflow-hidden h-0'} flex box-border flex-col gap-10  duration-200 transition-all ease-in-out   left-0 mvsm:px-6 smd:hidden top-24 absolute w-full bg-white`}>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-Primary-Colour text-xl font-bold">Works</h2>
            <p className="text-my-white font-semibold">Our Creations</p>
          </div>
          <div>
            <h2 className="text-Primary-Colour text-xl font-bold">Services</h2>
            <p className="text-my-white font-semibold">What we Offers</p>
          </div>
          <div>
            <h2 className="text-Primary-Colour text-xl font-bold">About Us</h2>
            <p className="text-my-white font-semibold">Get to know us</p>
          </div>
          <div>
            <h2 className="text-Primary-Colour text-xl font-bold">Contacts</h2>
            <p className="text-my-white font-semibold">Find Us</p>
          </div>
        </div>
        <div>
          <h2 className="text-black text-2xl font-bold leading-8">WE CREATE DIGITAL EXPERIENCES</h2>
          <p className="text-my-white my-3 font-semibold">Acclerate.Automate.Innovate</p>
          <p className="text-black">Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum is dummy text.</p>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-my-white text-xl font-semibold">
              Call Us</p>
            <p className="text-black mt-1 font-bold">
              +65 123456789</p>
          </div>
          <div>
            <p className="text-my-white text-xl font-semibold">
              Write Us</p>
            <p className="text-black mt-1 font-bold">
              hello@reddot.com</p>
          </div>
        </div>
        <button className=" mx-auto bg-secondary px-5 rounded-sm py-2 text-white font-bold text-base">
          GET FREE QUOTE
        </button>
      </div>
      <div className="hidden smd:flex items-center gap-6 md:gap-12 justify-between">
        <nav className="flex text-text/heading gap-4 md:gap-7 font-bold text-base w-full justify-between">
          <Link
            className="hover:text-Primary-Colour"
            onClick={() => {
                executeScroll(homeRef);
              }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-Primary-Colour"
            onClick={() => {
                executeScroll(aboutRef);
              }}
            to="/"
          >
            About Us
          </Link>
          <Link
            className="hover:text-Primary-Colour"
            onClick={() => {
                executeScroll(industriesRef);
              }}
            to="/"
          >
            Industries
          </Link>
          <Link
            className="hover:text-Primary-Colour"
            onClick={() => {
                executeScroll(servicesRef);
              }}
            to="/"
          >
            Services
          </Link>
        </nav>
        <button className="min-w-fit transition-colors duration-150 hover:bg-Primary-Colour bg-secondary px-5 rounded-sm py-2 text-white font-bold text-base">
          GET FREE QUOTE
        </button>
      </div>
    </div>
  );
}
