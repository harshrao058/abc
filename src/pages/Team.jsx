import React from 'react';
import img1 from '../../public/IMG1.jpeg';
import img2 from '../../public/IMG2.jpeg';
import img3 from '../../public/IMG3.jpeg';
import img4 from '../../public/IMG4.jpeg';
import team1 from '../../public/team1.jpeg';
import team2 from '../../public/team2.jpeg';
import mamber from '../../public/mamber.jpeg';

const teamMembers = [
  {
    name: 'Sarita Mishra',
    title: 'Founder & Chief Architect',
    imgSrc: mamber,
  },
  {
    name: 'Avinash Mani',
    title: 'Structural Engineer',
    imgSrc: img1,
  },
  
  {
    name: 'ER. IP Singh  ',
    title: 'Charted Enggineer',
    imgSrc: team1,
    position: "at Rv Group of Construction, Ghaziabad."
  },
  {
    name: 'AR. Ranveer Singh',
    title: 'Principal Architect',
    imgSrc: team2,
    position: "at ASR Architects & Developers"
  },
  {
    name: 'Manish Maurya ',
    title: 'Civil Engineer',
    imgSrc: img3,
  },
  {
    name: 'Harshita Mishra',
    title: 'Sr. Interior Designer',
    imgSrc: img2,
  },
  
];

const additionalMembers = [
  {
    name: 'Name',
    title: 'Retail Architect',
    imgSrc: 'path-to-image3.jpg',
  },
  {
    name: 'Name',
    title: 'Retail Architect',
    imgSrc: 'path-to-image4.jpg',
  },
  {
    name: 'Name',
    title: 'Project Architect',
    imgSrc: 'path-to-image5.jpg',
  },
  {
    name: 'Name',
    title: 'Civil Engineer',
    imgSrc: 'path-to-image6.jpg',
  },
  // Add more members if needed
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl  text-center mb-8">Our Team</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.title}</p>
            <p className="text-gray-500 text-sm" >{member.position}</p>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {additionalMembers.map((member, index) => (
          <div key={index} className="text-center p-4 border rounded-lg shadow-md">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.title}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Team;
