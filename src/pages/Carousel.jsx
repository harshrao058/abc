import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import s1 from "../../public/s1.jpeg";
import s2 from "../../public/s2.jpeg";
import banner1 from "../../public/banner1.jpeg";
import banner2 from "../../public/banner2.jpeg";
import banner3 from "../../public/banner3.jpeg";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [banner1, banner2, banner3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full relative">
      <div className="overflow-hidden w-full h-[80vh] relative">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          >
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="object-fill w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
