"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Star component for ratings
const Star = ({ filled, size = "w-3 h-3" }) => {
  return (
    <svg
      className={size}
      viewBox="0 0 24 24"
      fill={filled ? "#BE968E" : "none"}
      stroke="#BE968E"
      strokeWidth="2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

export default function SimilarItems() {
  const scrollContainerRef = useRef(null);
  const [isFavorited, setIsFavorited] = useState({});
  const [scrollAmount, setScrollAmount] = useState(300);

  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth >= 1024) {
        setScrollAmount(300); 
      } else {
        setScrollAmount(181);
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  // Sample product data
  const products = [
    {
      id: 1,
      image: "/images/products/black-dress.svg",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      originalPrice: null,
      discount: null,
      colors: ["#BE968E", "#333333", "#E8E8E8"],
      moreColors: 2,
      isInCart: false,
      isFavorited: false,
    },
    {
      id: 2,
      image: "/images/products/yellow-shirt.svg",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      originalPrice: 1300,
      discount: 25,
      colors: ["#BE968E", "#333333", "#E8E8E8"],
      moreColors: 2,
      isInCart: false,
      isFavorited: false,
    },
    {
      id: 3,
      image: "/images/products/brown-shirt.svg",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      originalPrice: null,
      discount: null,
      colors: ["#BE968E", "#333333", "#E8E8E8"],
      moreColors: 2,
      isInCart: true,
      isFavorited: true,
    },
    {
      id: 4,
      image: "/images/products/suit.svg",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      originalPrice: 1300,
      discount: 25,
      colors: ["#BE968E", "#333333", "#E8E8E8"],
      moreColors: 2,
      isInCart: false,
      isFavorited: false,
    },
    {
      id: 5,
      image: "/images/products/suit.svg",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",

      price: 900,
      originalPrice: 1300,
      discount: 25,
      colors: ["#BE968E", "#333333", "#E8E8E8"],
      moreColors: 2,
      isInCart: false,
      isFavorited: false,
    },
    {
      id: 6,
      image: "/images/products/black-dress.svg",
      category: "Dresses",
      rating: 4.5,
      reviews: 2910,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      originalPrice: null,
      discount: null,
      colors: ["#BE968E", "#333333", "#E8E8E8"],
      moreColors: 2,
      isInCart: false,
      isFavorited: false,
    },
  ];

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollDirection = direction === "left" ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: scrollDirection, behavior: "smooth" });
  };

  const toggleFavorite = (productId) => {
    setIsFavorited((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="w-full lg:mt-[99px] mt-[61px]">
      <div className="ml-5 lg:ml-[120px] ">
        {/* Title */}
        <div className="lg:mb-8 mb-4">
          <h2 className="text-[16px] lg:text-[24px] font-semibold text-[#020202] mb-[2px]">
            Similar Items
          </h2>
          <div className="w-[40px] h-[4px] rounded-[16px] bg-[#BE968E]" />
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-[9px] lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pr-5 lg:pr-[120px]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 bg-white lg:w-[288px] w-[172px]  overflow-hidden"
              >
                {/* Product Image Container */}
                <div className="relative bg-white w-full h-[207px] lg:h-[268px] border border-[#0000000D] rounded-[20px] ">
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 lg:top-4 lg:left-4 left-3 z-10 text-[#BE968E] lg:px-4 px-3 py-2 rounded-[8px] text-[10px] font-semibold border border-[#4040401A]">
                      {product.discount}% OFF
                    </div>
                  )}

                  {/* Action Icons */}
                  <div className="absolute lg:top-[16px] top-[12px] lg:right-[16px] right-[12px] z-10 flex lg:gap-2 gap-[5px]">
                    <button
                      className={`p-[6px] cursor-pointer rounded-[8px] border border-[#4040401A] flex items-center justify-center bg-white transition-colors ${
                        product.isInCart ? "bg-[#BE968E]" : "hover:bg-gray-50"
                      }`}
                    >
                      <Image
                        src={
                          product.isInCart
                            ? "/images/icons/bag-remove.svg"
                            : "/images/icons/bag-add.svg"
                        }
                        alt="Add to cart"
                        width={24}
                        height={24}
                        className="lg:w-6 lg:h-6 w-5 h-5"
                      />
                    </button>

                    <button
                      className={`p-[6px] cursor-pointer rounded-[8px] border border-[#4040401A] flex items-center justify-center bg-white transition-colors ${
                        product.isFavorited
                          ? "bg-[#BE968E]"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <Image
                        src={
                          product.isFavorited
                            ? "/images/icons/love-green.svg"
                            : "/images/icons/love-red.svg"
                        }
                        alt="Favorite"
                        width={24}
                        height={24}
                        className="lg:w-6 lg:h-6 w-5 h-5"
                      />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="w-full h-full flex items-center justify-center  pt-[58px] lg:pt-[62px] px-[16px] pb-[12px] lg:pb-[8px]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="pt-2">
                  <div className="mb-2 flex items-center justify-between">
                    {/* Category */}
                    <span className="inline-block  text-[#545454] text-xs font-medium ">
                      {product.category}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-[4px]">
                      <Image
                        src="/images/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span className="text-xs flex items-center text-[#020202]">
                        {product.rating}
                        <span className="text-[10px] ml-[4px] font-normal text-[#545454]">
                          ({product.reviews})
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-medium text-[#020202] mb-[8px] lg:mb-3 ">
                    {product.title}
                  </h3>

                  <div className="flex flex-col gap-[8px] lg:gap-0 lg:flex-row lg:items-center justify-between">
                    {/* Price */}
                    <div className="flex items-center gap-2 ">
                      <span className="text-[16px] font-medium text-[#020202]">
                        AED {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs font-medium text-[#8A8A8A] line-through">
                          AED {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Color Options */}
                    <div className="flex items-center gap-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-[20px] h-[20px] rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      {product.moreColors > 0 && (
                        <span className="text-sm font-medium text-[#020202]">
                          +{product.moreColors}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex mr-5 lg:mr-[120px] items-center justify-center  gap-[12px] mt-[32px]">
            <button
              onClick={() => handleScroll("left")}
              className="w-[50px] h-[50px] bg-[#E8EDF2] hover:bg-[#BE968E] rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <Image
                src="/images/icons/arrow-left-black.svg"
                alt="Previous"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-[50px] h-[50px] bg-[#BE968E] hover:bg-[#a8857d] rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <Image
                src="/images/icons/arrow-right-white.svg"
                alt="Next"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
