import React, { useState } from "react";
import HeroSection from "./HeroSection";
import ImageModal from "./ImageModal"; 
import off1 from "../../public/off1.jpeg";
import off2 from "../../public/off2.jpeg";
import off3 from "../../public/off3.jpeg";
import off4 from "../../public/off4.jpeg";


const Commercial = () => {
  const images = [
    off1,
    off2,
    off3,
    off4
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
      <HeroSection text="Commercial" />
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

export default Commercial;
