"use client";

import heroImage from "@/public/images/banners/hero-bg.svg";

export default function HeroSection() {
  return (
    <div
      className="h-[134px] bg-[#F5F5F5] md:h-[191px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage.src || heroImage})` }}
    >
      <div className="relative inline-flex items-center justify-center">
        <h1
          className="absolute text-[40px] md:text-[80px] font-bold text-transparent pointer-events-none"
          style={{
            WebkitTextStroke: "1px #0000000D",
            textStroke: "1px #0000000D",
            whiteSpace: "nowrap",
          }}
        >
          <span className="hidden md:inline">Product Details</span>
          <span className="md:hidden">T-Shirt</span>
        </h1>
        {/* Main text on top */}
        <h1 className="relative text-[20px] md:text-[32px] font-semibold text-[#020202] z-10">
          <span className="hidden md:inline">Product Details</span>
          <span className="md:hidden">T-Shirt</span>
        </h1>
      </div>
    </div>
  );
}
