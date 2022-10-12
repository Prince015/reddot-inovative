import React from "react";
import { Link } from "react-router-dom";

export default function FooterBottom() {
  return (
    <div className="px-4 mvsm:px-6 md:px-20 msm:px-10 bg-secondary-2 flex flex-col items-center py-10 gap-3">
      <div className="grid gap-3 py-5 grid-cols-1  msm:grid-cols-2  lg:grid-cols-3">
        <div className=" flex  items-center flex-col">
          <img className="h-20 w-20" src="big-foot-logo.png" alt="" />
          <p className="text-white my-4 msm:w-10/12 ">
            Loreum ipsum is dummy text.Loreum ipsum is dummy text.Loreum ipsum
            is dummy text.Loreum ipsum is dummy text.Loreum{" "}
          </p>
          <div></div>
        </div>
        <div className="flex msm:justify-center gap-7  sm:gap-14">
          <div className=" flex flex-col gap-5">
            <p className="text-white min-w-max tracking-wide font-bold">
              Quick Links
            </p>
            <ul className="text-my-white flex flex-col gap-3">
              <li>
                {" "}
                <Link>Services</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Work</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Industries</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>About us</Link>{" "}
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5">
            <p className="text-white tracking-wide font-bold">Policies</p>
            <ul className="text-my-white flex flex-col gap-3">
              <li>
                {" "}
                <Link>Cookie Policy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Terms & Conditions</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>FAQs</Link>{" "}
              </li>
              <li>
                {" "}
                <Link>Help</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h3 className="text-Primary-Colour font-medium text-xl">
            Want to engage with us?
          </h3>
          <p className="text-my-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <form className="flex gap-3">
            <input
              className="flex-1  sm:hidden block min-w-[10px] px-4 rounded-sm py-3 text-my-white text-sm "
              placeholder="Email Id"
              type="email"
              name="email"
              id=""
            />
            <input
              className="flex-1 sm:block hidden min-w-fit px-4 rounded-sm py-3 text-my-white text-sm "
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              id=""
            />
            <button className="min-w-fit bg-secondary px-6 rounded-sm py-2 text-white font-bold text-base">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <hr className="border-spacing-1 w-full mt-8 opacity-50 border-my-white" />
      <p className="text-center text-white text-base tracking-wide">
        +65 8100 0443 <br />
        Copyright © Red Dot Innovative <br />7 TEMASEK BOULEVARD #12-07, SUNTEC
        TOWER ONE, Singapore, 038987
      </p>
    </div>
  );
}
