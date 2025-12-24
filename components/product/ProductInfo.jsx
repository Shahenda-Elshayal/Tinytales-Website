"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductInfo({
  category = "T-Shirt",
  title = "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
  currentPrice = "$300.00",
  originalPrice = "$360.00",
  description = "Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy",
  types = ["Cotton", "Polyester", "Linen", "Wool", "Silk", "Blend"],
  sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
  colors = [
    { name: "Red", value: "#D90202" },
    { name: "Blue", value: "#B8CCDA" },
    { name: "Olive", value: "#988755" },
    { name: "Navy", value: "#7198C8" },
    { name: "Gray", value: "#5D5D5B" },
  ],
}) {
  const [selectedType, setSelectedType] = useState(types[0] || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors[1] || colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const totalPrice = (
    parseFloat(currentPrice.replace("$", "")) * quantity
  ).toFixed(2);

  return (
    <div className="w-full">
      {/* Category Tag */}
      <div className="flex mb-4 items-center justify-between">
        <span className="inline-block px-4 py-2 text-[#BE968E] text-sm font-semibold rounded-[32px] border-[0.5px] border-[#BE968E]">
          {category}
        </span>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer max-w-[48px] max-h-[48px] p-2 border border-[#4040401A] rounded-[8px] flex items-center justify-center">
            <Image
              src="/images/icons/bag-add.svg"
              alt="Bag Add"
              className="max-w-[32px] max-h-[32px]"
              width={32}
              height={32}
            />
          </div>
          <div className="cursor-pointer max-w-[48px] max-h-[48px] p-2 border border-[#4040401A] rounded-[8px] flex items-center justify-center">
            <Image
              src="/images/icons/love-red.svg"
              alt="Heart"
              className="max-w-[32px] max-h-[32px]"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>

      {/* Title with Action Icons */}
      <h1 className="mb-2 text-[16px] lg:text-[24px] max-w-[340px] lg:max-w-[524px] font-medium text-[#020202] ">
        {title}
      </h1>

      {/* Price */}
      <div className="mb-4">
        <div className="flex items-center gap-2 ">
          <span className="text-[20px] font-medium text-[#020202]">
            {currentPrice}
          </span>
          {originalPrice && (
            <span className="text-[16px] font-normal text-[#8A8A8A] line-through">
              {originalPrice}
            </span>
          )}
        </div>
        <p className="text-[12px] font-normal text-[#333333]">
          This price is exclusive of taxes.
        </p>
      </div>

      {/* Description */}
      <div className="w-full lg:max-w-[510px]">
        <p className="text-[#333333] text-[14px] font-normal leading-relaxed">
          {description}
        </p>
      </div>

      {/* Divider */}
      <hr className="mt-[20px] mb-[34px] border-0 h-px bg-[#E6E6E6]" />

      {/* Type Dropdown */}
      <div className="relative">
        <label className="absolute top-[-18px] z-10 left-[12px] text-[12px] font-normal p-2 text-[#020202] bg-white ">
          Type
        </label>
        <div className="relative">
          <button
            onClick={() => {
              setTypeDropdownOpen(!typeDropdownOpen);
              setSizeDropdownOpen(false);
            }}
            className="lg:w-[299px] w-full px-[20px] py-[14px] border border-[#E6E6E6] rounded-lg bg-white text-[#020202] text-[12px] font-medium focus:outline-none focus:border-[#020202] cursor-pointer text-left flex items-center justify-between"
          >
            <span>{selectedType}</span>
            <Image
              src="/images/icons/down-arrow.svg"
              alt="Dropdown arrow"
              width={12}
              height={12}
              className={`transition-transform ${
                typeDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {typeDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setTypeDropdownOpen(false)}
              />
              <div className=" w-[299px] absolute top-full left-0 right-0 mt-1 bg-white border border-[#E6E6E6] rounded-lg shadow-lg z-20 overflow-hidden">
                <div className="px-4 py-2 flex items-center gap-2 text-sm text-[#8A8A8A] border-b border-[#E6E6E6]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#8A8A8A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Pick a Type</span>
                </div>
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setTypeDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm text-[#020202] hover:bg-gray-50 transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Size Dropdown */}
      <div className="relative mt-6">
        <label className="absolute top-[-18px] z-10 left-[12px] text-[12px] font-normal p-2 text-[#020202] bg-white ">
          Size
        </label>
        <div className="relative">
          <button
            onClick={() => {
              setSizeDropdownOpen(!sizeDropdownOpen);
              setTypeDropdownOpen(false);
            }}
            className="lg:w-[299px] w-full px-[20px] py-[14px] border border-[#E6E6E6] rounded-lg bg-white text-[#020202] text-[12px] font-medium focus:outline-none focus:border-[#020202] cursor-pointer text-left flex items-center justify-between"
          >
            <span>{selectedSize}</span>
            <Image
              src="/images/icons/down-arrow.svg"
              alt="Dropdown arrow"
              width={12}
              height={12}
              className={`transition-transform ${
                sizeDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {sizeDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setSizeDropdownOpen(false)}
              />
              <div className=" w-[299px] absolute top-full left-0 right-0 mt-1 bg-white border border-[#E6E6E6] rounded-lg shadow-lg z-20 overflow-hidden">
                <div className="px-4 py-2 flex items-center gap-2 text-sm text-[#8A8A8A] border-b border-[#E6E6E6]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#8A8A8A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Pick a Size</span>
                </div>
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm text-[#020202] hover:bg-gray-50 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mt-[32px]">
        <label className="block text-[16px] lg:text-[20px] font-medium text-[#020202] mb-4">
          Colors
        </label>

        <div className="flex items-start gap-4 flex-wrap">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <button
                onClick={() => setSelectedColor(color)}
                className={`w-[60px] bg-[#F4F7F9] h-[60px] rounded-full  transition-all flex items-center justify-center ${
                  selectedColor.value === color.value
                    ? "border-[1.5px] border-[#020202]"
                    : ""
                }`}
                aria-label={color.name}
              >
                <div
                  className="w-[32px] h-[32px] rounded-full"
                  style={{ backgroundColor: color.value }}
                ></div>
              </button>
              {selectedColor.value === color.value && (
                <span className="text-[14px] font-medium text-[#545454]">
                  {color.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="mt-[32px] ">
        <label className="block text-[16px] lg:text-[20px] font-medium text-[#020202] mb-4">
          Quantity{" "}
          <span className="text-[12px] lg:text-[16px] font-normal text-[#8A8A8A]">
            ({currentPrice} for Piece)
          </span>
        </label>

        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-2 gap-6">
          <div className="flex w-[302px] mr-auto items-center gap-5">
            {/* Main Quantity Container */}
            <div className="flex  items-center bg-[#F5F5F5] rounded-[12px] p-2">
              {/* Minus Button */}
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center bg-white rounded-[12px] hover:bg-gray-300 transition-colors"
              >
                <span className="block text-[28px] mt-[-2px] font-medium text-[#B0B0B0]">
                  -
                </span>
              </button>

              {/* Number Input */}
              <input
                type="number"
                value={quantity.toString().padStart(2, "0")}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="flex-1 w-full bg-transparent text-[24px] font-medium text-[#333333] text-center border-0 focus:ring-0 focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
                min="1"
              />

              {/* Plus Button */}
              <button
                type="button"
                onClick={() => handleQuantityChange(1)}
                className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center bg-white rounded-[12px] hover:bg-gray-300 transition-colors"
              >
                <Image
                  src="/images/icons/plus.svg"
                  alt="Plus"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {/* Optional Price Display (uncomment if needed) */}
            <span className="text-[24px] font-medium text-[#020202]">
              ${totalPrice}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="lg:w-[234px] w-full bg-[#BE968E] text-white font-medium text-[16px] py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#a8857d] transition-colors ">
            Add To Cart
            <Image
              src="/images/icons/shopping-bag-red.svg"
              alt="Add to Cart"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
