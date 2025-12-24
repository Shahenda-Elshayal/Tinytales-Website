"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="relative pt-[29px] pb-[48px] lg:pb-[44px] lg:pt-[56px] px-5 md:px-[120px] w-full lg:mt-[154px] mt-[242px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banners/kids-photo.svg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#020202B2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 ">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-2">
          {/* Column 1: Logo and Description */}
          <div className="">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/images/logo/footer-logo.svg"
                alt="Tinytales Logo"
                width={66}
                height={51}
                className="w-auto h-auto"
              />
            </div>
            {/* Description */}
            <p className="text-[#FFFFFFCC] text-xs  lg:text-sm lg:text-[#FFFFFFB2] mb-[32px] lg:mb-0 lg:max-w-[324px] max-w-[326px]">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
              in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
              quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          {/* Contact Us and Let Us Help - Side by side on mobile/tablet */}
          <div className="flex lg:contents gap-8 lg:gap-0">
            {/* Contact Us on mobile/tablet */}
            <div className="lg:hidden">
              <h3 className="text-white text-[16px] font-semibold mb-[20px]">
                Contact Us
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors">
                    +87 01928491
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icons/gmail.svg"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors">
                    Named@gmail.com
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icons/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors">
                    381, cairo, egypt
                  </span>
                </div>
              </div>
            </div>

            {/* Let Us Help */}
            <div className="mt-[0px] lg:mt-[9px]">
              <h3 className="text-white text-[16px] lg:text-[24px] font-semibold mb-5 lg:mb-6">
                Let Us Help
              </h3>
              <ul className="lg:space-y-[9px] ">
                <li className="mb-[16px]">
                  <Link
                    href="/"
                    className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                  >
                    My Account
                  </Link>
                </li>
                <li className="mb-[16px]">
                  <Link
                    href="/faqs"
                    className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="mb-[16px]">
                  <Link
                    href="/contact"
                    className="text-[#FFFFFFB2] lg:hidden text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                  >
                    Contact & Support
                  </Link>
                </li>
                <li className="mb-[16px]">
                  <Link
                    href="/categories"
                    className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                  >
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Policies */}
          <div className="hidden lg:block mt-[9px]">
            <h3 className="text-white text-[16px] lg:text-[24px] font-semibold mb-5 lg:mb-6">
              Policies
            </h3>
            <ul className="lg:space-y-[9px] space-y-[16px]">
              <li>
                <Link
                  href="/refund-policy"
                  className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation-policy"
                  className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                >
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#FFFFFFB2] text-[14px] lg:text-[16px] hover:text-[#BE968E] font-normal lg:font-medium transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Send Email & Follow Us */}
          <div className="mt-[20px] lg:mt-[9px] md:w-[369px] w-full">
            <div className="">
              {/* Send Email */}
              <div>
                <h3 className="text-white text-[16px] lg:text-[24px] font-semibold mb-6">
                  Send Email
                </h3>
                <form
                  onSubmit={handleEmailSubmit}
                  className="relative flex items-center bg-white rounded-lg overflow-hidden"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="flex-1 px-6 rounded-[12px] bg-white text-[#020202] placeholder-[#8A8A8A] text-sm focus:outline-none border-none"
                    required
                  />
                  <button
                    type="submit"
                    className="m-2 bg-[#BE968E] text-white font-medium hover:bg-[#a8857d] transition-colors whitespace-nowrap rounded-[12px] text-[12px] lg:text-[16px] py-[10px] px-[24px] lg:px-[46px]"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Follow Us */}
              <div className="mt-[20px] lg:mt-6">
                <h3 className="text-white text-[16px] font-semibold mb-[12px]">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <Image
                      src="/images/logo/facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="flex items-center justify-center"
                    aria-label="Twitter"
                  >
                    <Image
                      src="/images/logo/twitter.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/images/logo/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Image
                      src="/images/logo/linked.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="flex items-center justify-center"
                    aria-label="WhatsApp"
                  >
                    <Image
                      src="/images/logo/whatsapp.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                    />
                  </a>

                  {/* Telegram */}
                  <a
                    href="#"
                    className="flex items-center justify-center"
                    aria-label="Telegram"
                  >
                    <Image
                      src="/images/logo/telegram.svg"
                      alt="Telegram"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
