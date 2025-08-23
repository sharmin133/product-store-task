"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const sliderImages = [
  "/ImageAll/big2-produits-naturels.jpg",
  "/ImageAll/cosmetic-and.jpg",
  "/ImageAll/tempsnipuu-1.png",
  "/ImageAll/stock-vector-cosmetics.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Slider Section */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderImages.map((img, index) => (
          <div key={index} className="w-screen flex-shrink-0 relative h-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
