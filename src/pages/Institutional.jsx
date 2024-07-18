import React, { useState } from "react";
import HeroSection from "./HeroSection";
import ImageModal from "./ImageModal"; 
import insti2 from "../../public/insti2.jpeg";
import insti3 from "../../public/insti3.jpeg";
import insti4 from "../../public/insti4.jpeg";
import insti5 from "../../public/insti5.jpeg";
import insti6 from "../../public/insti6.jpeg";
import insti7 from "../../public/insti7.jpeg";
import insti8 from "../../public/insti8.jpeg";

const Institutional = () => {
  const images = [
    insti2,
    insti3,
    insti4,
    insti5,
    insti6,
    insti7,
    insti8,
    // Add more images as needed
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <HeroSection text='Institutional' />
      <div className="">
        <div className="flex overflow-auto gap-8 px-16 justify-around py-8 flex-wrap">
          {images.map((image, index) => (
            <div className="flex w-[40vw] h-full ">
              <img
                key={index}
                src={image}
                alt={`Dimension ${index + 1}`}
                className="rounded-lg"
                onClick={() => openImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeImage} />
      )}
    </div>
  );
};

export default Institutional;
