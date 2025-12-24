"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImageGallery({ images = [] }) {
  const [currentPersonImageIndex, setCurrentPersonImageIndex] = useState(2);
  const [selectedColorIndex, setSelectedColorIndex] = useState(3);

  // Person image variations (all blue-shirt, different angles/views)
  const personImageVariations = [
    { src: "/images/products/blue-shirt.svg", alt: "Product Main" },
    { src: "/images/products/blue-shirt.svg", alt: "Product Main" },
    { src: "/images/products/blue-shirt.svg", alt: "Product Main" },
    { src: "/images/products/blue-shirt.svg", alt: "Product Main" },
  ];

  // Color options (for bottom thumbnails)
  const colorOptions = [
    { src: "/images/products/red-shirt.svg", alt: "Product Red", color: "Red" },
    { src: "/images/products/white-shirt.svg", alt: "Product White", color: "White" },
    { src: "/images/products/red-shirt.svg", alt: "Product Red", color: "Red" },
    { src: "/images/products/white-shirt.svg", alt: "Product White", color: "White" },
  ];

  const handlePrevious = () => {
    setCurrentPersonImageIndex((prev) =>
      prev === 0 ? personImageVariations.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentPersonImageIndex((prev) =>
      prev === personImageVariations.length - 1 ? 0 : prev + 1
    );
  };

  const handlePersonImageClick = (index) => {
    setCurrentPersonImageIndex(index);
  };

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
  };

  return (
    <div className="mx-auto lg:mx-0  max-w-[524px] ">
      {/* Main Image Container */}
      <div className="relative bg-[#F5F5F5] lg:h-[565px] h-[381px] rounded-[24px] overflow-hidden mb-4">
        
        {/* Person Image Indicators at Top */}
        <div 
          className="absolute top-0 left-0 right-0 w-full h-[73px] z-20 flex items-center justify-center gap-2"
          style={{ background: 'linear-gradient(0deg, rgba(244, 244, 244, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)' }}
        >
          {personImageVariations.map((image, index) => (
            <button
              key={index}
              onClick={() => handlePersonImageClick(index)}
              className={`relative w-[120px] h-[4px] rounded-[16px] transition-all ${
                currentPersonImageIndex === index
                  ? "bg-white"
                  : "bg-[#D4D4D4]"
              }`}
              aria-label={`View person image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Main Image - Always shows blue-shirt with current person variation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[206px] lg:w-[305px] z-100 lg:h-[514px] h-[346px]">
          {personImageVariations[currentPersonImageIndex]?.src ? (
            <Image
              src={personImageVariations[currentPersonImageIndex].src}
              alt={personImageVariations[currentPersonImageIndex].alt || "Product"}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">Product Image</span>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer lg:w-12 lg:h-12 w-8 h-8  bg-[#C4C4C4] hover:bg-[#BE968E] rounded-full flex items-center justify-center shadow-md transition-all"
          aria-label="Previous image"
        >
       <Image src="/images/icons/arrow-left-white.svg" alt="Previous image" width={24} height={24} className="w-[13px] h-[13px] lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 lg:w-12 lg:h-12 w-8 h-8  bg-[#BE968E] cursor-pointer  rounded-full flex items-center justify-center shadow-md transition-all"
          aria-label="Next image"
        >
                <Image src="/images/icons/arrow-right-white.svg" alt="Previous image" width={24} height={24} className="w-[13px] h-[13px] lg:w-6 lg:h-6" />

        </button>
      </div>

      {/* Color Thumbnail Images */}
      <div className="flex relative w-full gap-2">
        {/* red Hoodie */}
        <button
          onClick={() => handleColorClick(0)}
          className={`relative flex-1 aspect-square lg:py-[21px] lg:px-[14px] py-[14px] px-[9px] rounded-[24px] overflow-hidden border transition-all bg-[#F5F5F5] ${
            selectedColorIndex === 0
              ? "border-[#BE968E]"
              : "border-transparent hover:border-[#BE968E]"
          }`}
        >
          <Image
            src={colorOptions[0].src}
            alt={colorOptions[0].alt}
            fill
            className="object-cover  w-[96px] h-[96px] lg:w-[142px] lg:h-[142px]"
          />
        </button>

        {/* white Hoodie */}
        <button
          onClick={() => handleColorClick(1)}
          className={`relative flex-1 aspect-square lg:py-[21px] lg:px-[14px] py-[14px] px-[9px] rounded-[24px] overflow-hidden border transition-all bg-[#F5F5F5] ${
            selectedColorIndex === 1
              ? "border-[#BE968E]"
              : "border-transparent hover:border-[#BE968E]"
          }`}
        >
          <Image
            src={colorOptions[1].src}
            alt={colorOptions[1].alt}
            fill
            className="object-cover  w-[96px] h-[96px] lg:w-[142px] lg:h-[142px]"
          />
        </button>

        {/* red Hoodie with +2 Overlay */}
        <button
          onClick={() => handleColorClick(2)}
          className={`relative flex-1 aspect-square lg:py-[21px] lg:px-[14px] py-[14px] px-[9px] rounded-[24px] overflow-hidden border transition-all bg-[#F5F5F5] ${
            selectedColorIndex === 2
              ? "border-[#BE968E]"
              : "border-transparent hover:border-[#BE968E]"
          }`}
        >
          {colorOptions[2]?.src ? (
            <>
              <Image
                src={colorOptions[2].src}
                alt={colorOptions[2].alt}
                fill
                className="object-cover  w-[96px] h-[96px] lg:w-[142px] lg:h-[142px]"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">+2</span>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">+2</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

