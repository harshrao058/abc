import React from 'react'
import poster from "../../public/poster.jpeg";
import banner3 from "../../public/banner3.jpeg";


const PageTwo = () => {
  return (
    <>
        <div className='w-full h-[60vh] bg-[#E88100] flex px-20 relative'>
            <div className='mt-10 w-[50vw] '>
                <h1 className='text-4xl bg-white w-80 px-4 py-2 '>Crafting Quality</h1>
                <p className='text-white text-xl pr-4 mt-8'>Transforming Visions into Reality with Innovation and Excellence <span className='text-bold underline italic text-2xl'>"Sarita Associates"</span> Your Trusted Partner in Residential, Institutional, Commercial, and Industrial Construction.</p>
            </div>
            <div className='rounded-full'>
                <img className=' rounded-8xl h-full w-[50vw] py-8' src={banner3} alt="" />
            </div>
        </div>
    </>
  )
}

export default PageTwo