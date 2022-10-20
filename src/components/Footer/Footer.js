import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-4 mt-8 mvsm:px-6 md:px-20 msm:px-10 bg-secondary flex flex-col items-center py-10 gap-3">
      <p className="text-white tracking-widest font-semibold">
        NEED HELP? WE'RE READY.
      </p>
      <h2 className="text-white text-center text-2xl msm:text-3xl md:text-5xl lg:text-6xl md:leading-tight font-bold">
        Build Something Treat Together
      </h2>
      <Link to='/contact-us' className=" mt-7 min-w-fit bg-Primary-Colour px-14 rounded-sm py-2 text-white font-bold text-base">
        GET IN TOUCH
      </Link>
    </div>
  );
}
