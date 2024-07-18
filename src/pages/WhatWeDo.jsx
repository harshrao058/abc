import React from 'react';
import { FaLightbulb, FaDraftingCompass, FaUsersCog, FaHardHat, FaHome, FaBuilding, FaPalette, FaHammer, FaTools, FaCubes, FaRuler, FaBook, FaPencilRuler, FaFilm, FaMapMarkedAlt } from 'react-icons/fa';

const WhatWeDo = () => {
  const services = [
    { icon: <FaHome size={30} className="text-red-500" />, title: 'Architecture' },
    { icon: <FaLightbulb size={30} className="text-yellow-500" />, title: 'Planning' },
    { icon: <FaPalette size={30} className="text-green-500" />, title: 'Interior' },
    { icon: <FaHammer size={30} className="text-blue-500" />, title: 'Construction' },
    { icon: <FaTools size={30} className="text-purple-500" />, title: 'Renovation' },
    { icon: <FaCubes size={30} className="text-pink-500" />, title: 'Conceptualizing' },
    { icon: <FaCubes size={30} className="text-indigo-500" />, title: '3D Modelling' },
    { icon: <FaRuler size={30} className="text-orange-500" />, title: '3D Rendering' },
    { icon: <FaBook size={30} className="text-teal-500" />, title: 'Vastu Consultancy' },
    { icon: <FaPencilRuler size={30} className="text-cyan-500" />, title: 'Sketching' },
    { icon: <FaFilm size={30} className="text-amber-500" />, title: 'Animations' },
    { icon: <FaMapMarkedAlt size={30} className="text-lime-500" />, title: 'Map Approval' }
  ];

  return (
    <div className="bg-dark-blue text-center py-12 px-8">
      <h2 className="text-4xl mb-4 text-black">Services</h2>
      <h1 className="text-yellow-500 text-2xl font-semibold mb-8">"Constructing the Future with Integrity"</h1>
      <div className="flex gap-8 flex-wrap justify-center">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white flex flex-col items-center py-8 rounded-lg shadow-md w-60  px-5 flex-grow md:flex-grow-0"
          >
            <div className="text-center mb-4">{service.icon}</div>
            <h3 className="text-dark-blue font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
