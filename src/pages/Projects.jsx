import React from "react";
import { Star, ChevronDown } from "lucide-react";
import off1 from "../../public/off1.jpeg";
import insti2 from "../../public/insti2.jpeg";
import insti3 from "../../public/insti3.jpeg";
import insti4 from "../../public/insti4.jpeg";
import insti5 from "../../public/insti5.jpeg";
import insti6 from "../../public/insti6.jpeg";
import insti7 from "../../public/insti7.jpeg";
import { Link } from "react-router-dom";
import { IoArrowForwardSharp } from "react-icons/io5";
import SixtyBedded from "./SixtyBedded.jsx";
import CompletedProjects from "./CompletedProjects.jsx";
export const Projects = () => {
  return (
    <section className="mx-16 overflow-hidden">
      <div>
        <CompletedProjects />
      </div>
     <div className="w-full py-10  flex justify-center rounded items-center  bg-[#E88100]">
     <h2 className="text-4xl  font-semibold text-white">
        Projects That We Offers
      </h2>
     </div>
      <div className="flex flex-col mt-10">
        <div className=" flex flex-wrap items-center relative">
          <img alt="" className="h-80  w-1/2 rounded object-cover" src={off1} />
          <div className="flex w-1/2 flex-col justify-center px-16 ">
            <h1 className="text-4xl font-semibold">Commercial Projects</h1>
            <p>
              Discover premium office spaces designed to enhance productivity
              and inspire creativity, featuring modern amenities, flexible
              layouts, and prime locations.
            </p>
            <Link
              to="/commercial"
              className="rounded-md flex hover:gap-3  transition-all ease-in-out items-center gap-1 w-1/ m-auto bg-[#E88100] px-4 my-2 py-2 text-sm  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Know More <IoArrowForwardSharp />
            </Link>
          </div>
        </div>
        <div className=" flex flex-wrap items-center ">
          <div className="flex w-1/2 flex-col justify-center px-16 ">
            <h1 className="text-4xl font-semibold">Institutional Projects</h1>
            <p>
              Explore our range of institutional properties, offering
              state-of-the-art facilities designed to meet the needs of
              educational, healthcare, and governmental institutions with a
              focus on sustainability and community impact.
            </p>
            <Link
              to="/institutional"
              className="rounded-md flex hover:gap-3  transition-all ease-in-out items-center gap-1 w-1/ m-auto bg-[#E88100] px-4 my-2 py-2 text-sm  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Know More <IoArrowForwardSharp />
            </Link>
          </div>
          <img
            alt="Institutional"
            className="h-80  w-1/2 rounded object-cover"
            src={insti2}
          />
        </div>
        <div className=" flex flex-wrap items-center ">
          <img
            alt="Industrial"
            className="h-80  w-1/2 rounded object-cover"
            src=""
          />
        </div>
        <div className=" flex flex-wrap items-center ">
          <img
            alt="Commertial"
            className="h-80  w-1/2 rounded object-cover"
            src=""
          />
        </div>
      </div>
    </section>
  );
};
