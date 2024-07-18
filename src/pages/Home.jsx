import React from "react";
import Products from "./Products";
import PageTwo from "./PageTwo";
import Team from "./Team";
import Carousel from "./Carousel";
import WhatWeDo from "./WhatWeDo";

function Home() {
  return (
    <>
      <div className="w-full h-scre flex justify-center items-center relative">
        {/* <img
          class="h-96 w-full object-cover"
          src="https://images.unsplash.com/photo-1423768164017-3f27c066407f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image description"
        
          /> */}
        <h1 className="absolute text-4xl z-40 text-white ">
          {" "}
          Sarita & Associates Shaping the Future of Construction  
          <p className="shadow-2xl px-4 py-2 w-40 text-xl m-auto text-white mt-4 rounded-lg bg-[#E88100] hover:bg-yellow-800 transition-all ease-in-out flex items-center justify-center">
            Contact Us
          </p>
        </h1>
        <Carousel />

      </div>
      <div>
        <div>
          <h1 className="text-center tracking-tighter text-3xl md:text-5xl py-10">
            Building Dreams,
            <br /> Creating{" "}
            <span className="font-bold text-[#E88100] font-['Edwardian_Script_ITC'] md:text-7xl tracking-wider">
              Realities..
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="text-center text-xl md:text-3xl text-[#E88100]">
        {/* <h1 className="pt-5">Heading 1</h1> */}
      </div>
      <div className="px-4 md:px-0">
        <PageTwo />
      </div>
      <WhatWeDo />
      <Team />
    </>
  );
}

export default Home;
