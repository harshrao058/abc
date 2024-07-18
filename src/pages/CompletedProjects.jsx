import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardSharp } from "react-icons/io5";

import TBed from "../../public/TBed.png";
// import { PiBuildingApartmentThin } from "react-icons/pi";

function CompletedProjects() {
  return (
    <div>
      <div class="mx-auto max-w-7xl py-10">
        <div>
          <div class="">
            <div className="w-full flex items-center justify-center">
              <h2 className="text-4xl mb-4 font-semibold text-black">
                Our Projects
              </h2>
            </div>
          </div>
          <div class="mt-6 flex justify-around">
            <div class="rounded-md border border-black/30 p-6">
              <p className="text-green-600 font-semibold ">Completed</p>
              <dt class="text-lg font-semibold leading-6 text-gray-900">
                200 Bedded Hospital, Madipur Delhi
              </dt>
              {/* <img src={TBed} alt="" className="rounded-lg" /> */}
              {/* <PiBuildingApartmentThin  /> */}
              <Link
                to="https://drive.google.com/file/d/1dj26KBe4GgmwpXl7UUKl1TZWYHHB2-AV/view?usp=drive_link"
                className="rounded-md flex hover:gap-3 justify-center  transition-all ease-in-out items-center gap-1 w-1/ m-auto bg-green-600 px-4 my-2 py-2 text-sm  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Know More <IoArrowForwardSharp />
              </Link>
            </div>
            <div class="rounded-md border border-black/30 p-6">
              <p className="text-green-600 font-semibold ">Completed</p>

              <dt class="text-lg font-semibold leading-6 text-gray-900">
                50 Bedded Hospital, Kheeri Prayagraj
              </dt>
              <Link
                to="/commercial"
                className="rounded-md flex hover:gap-3 justify-center  transition-all ease-in-out items-center gap-1 w-1/ m-auto bg-green-600 px-4 my-2 py-2 text-sm  text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Know More <IoArrowForwardSharp />
              </Link>

              {/* <img src={TBed} alt="" className="rounded-lg" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedProjects;
