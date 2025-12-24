"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import burgerIcon from "@/public/images/icons/burger-icon.svg";

// Icon Components
const HomeIcon = () => (
  <Image
    src="/images/icons/home.svg"
    alt="Home"
    width={20}
    height={20}
    className="w-5 h-5"
  />
);

const CategoryIcon = () => (
  <Image
    src="/images/icons/apps.svg"
    alt="Category"
    width={20}
    height={20}
    className="w-5 h-5"
  />
);

const AboutUsIcon = () => (
  <Image
    src="/images/icons/interactive.svg"
    alt="About Us"
    width={20}
    height={20}
    className="w-5 h-5"
  />
);

const ContactUsIcon = () => (
  <Image
    src="/images/icons/contact.svg"
    alt="Contact Us"
    width={20}
    height={20}
    className="w-5 h-5"
  />
);

const FAQIcon = () => (
  <Image
    src="/images/icons/chat-information.svg"
    alt="FAQs"
    width={20}
    height={20}
    className="w-5 h-5"
  />
);

const ShoppingBagIcon = () => (
  <Image
    src="/images/icons/shopping-bag.svg"
    alt="Shopping Bag"
    width={24}
    height={24}
    className="w-6 h-6"
  />
);

const BellIcon = () => (
  <Image
    src="/images/icons/notification.svg"
    alt="Notification"
    width={24}
    height={24}
    className="w-6 h-6"
  />
);

const HeartIcon = () => (
  <Image
    src="/images/icons/love.svg"
    alt="Heart"
        width={24}
    height={24}
    className="w-6 h-6"
  />
);

const ChevronDownIcon = () => (
  <Image
    src="/images/icons/down-arrow.svg"
    alt="down-arrow"
    width={24}
    height={24}
    className="w-6 h-6"
  />
);

const UserIcon = () => (
  <Image
    src="/images/icons/user.svg"
    alt="Home"
    width={24}
    height={24}
    className="w-6 h-6"
  />
);

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const navigationLinks = [
    { href: "/", label: "Home", icon: <HomeIcon /> },
    { href: "/category", label: "Our Category", icon: <CategoryIcon /> },
    { href: "/about", label: "About Us", icon: <AboutUsIcon /> },
    { href: "/contact", label: "Contact Us", icon: <ContactUsIcon /> },
    { href: "/faqs", label: "FAQs", icon: <FAQIcon /> },
  ];

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  return (
    <nav
      className="bg-white"
      style={{ boxShadow: "0px 0px 52px -24px #00000040" }}
    >
      <div className="px-5 md:px-[120px]">
        <div className="flex justify-between items-center py-5 gap-2">
          <div className="flex items-center gap-[42px]">
            {/* Logo Section */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <div className="relative">
                <Image
                  src="/images/logo/logo.svg"
                  alt="TinyTales Logo"
                  width={48}
                  height={48}
                  className="w-full h-full"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Links - Desktop Only */}
            <div className="hidden lg:flex items-center gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1 text-[#8A8A8A] text-sm font-normal hover:text-gray-600 transition-colors group"
                >
                  <span className="text-gray-600 group-hover:text-gray-900">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Utility Icons and Dropdowns - Desktop Only */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Shopping Bag */}
            <button className="cursor-pointer">
              <ShoppingBagIcon />
            </button>

            {/* Bell */}
            <button className="cursor-pointer">
              <BellIcon />
            </button>

            {/* Heart */}
            <button className="cursor-pointer">
              <HeartIcon />
            </button>

            {/* Language Selector */}
            <div className="relative ">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center  text-[#020202] text-sm font-medium cursor-pointer"
              >
                <span className="text-sm font-medium">{currentLanguage}</span>
                <ChevronDownIcon />
              </button>
              {languageOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLanguageOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                    <button
                      onClick={() => {
                        setCurrentLanguage("EN");
                        setLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLanguage("AR");
                        setLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      العربية
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* User Profile */}
            <div className="relative ">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center cursor-pointer "
              >
                <UserIcon />
                <ChevronDownIcon />
              </button>
              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                    {user ? (
                      <>
                        <Link
                          href="/dashboard"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <hr className="my-1" />
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                        <Link
                          href="/register"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Burger Icon - Mobile Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden cursor-pointer"
          >
            <Image
              src={burgerIcon}
              alt="Menu"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Mobile Menu Card */}
          <div className="absolute top-20 right-5 lg:hidden z-5000 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {/* Navigation Links */}
            <div className="flex flex-col gap-2 mb-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-[#8A8A8A] text-sm font-normal hover:text-gray-600 transition-colors py-1.5"
                >
                  <span className="text-gray-600">{link.icon}</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            <hr className="my-2 border-gray-200" />

            {/* Utility Icons */}
            <div className="flex items-center gap-3 mb-3">
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <ShoppingBagIcon />
              </button>
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <BellIcon />
              </button>
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <HeartIcon />
              </button>
            </div>

            <hr className="my-2 border-gray-200" />

            {/* Language Selector */}
            <div className="relative mb-3">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center text-[#020202] text-sm font-medium cursor-pointer w-full"
              >
                <span className="text-sm font-medium">{currentLanguage}</span>
                <ChevronDownIcon />
              </button>
              {languageOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLanguageOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                    <button
                      onClick={() => {
                        setCurrentLanguage("EN");
                        setLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLanguage("AR");
                        setLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      العربية
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center cursor-pointer w-full"
              >
                <UserIcon />
                <ChevronDownIcon />
              </button>
              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setUserMenuOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
                    {user ? (
                      <>
                        <Link
                          href="/dashboard"
                          onClick={() => {
                            setUserMenuOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => {
                            setUserMenuOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <hr className="my-1" />
                        <button
                          onClick={() => {
                            handleLogout();
                            setMobileMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          onClick={() => {
                            setUserMenuOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                        <Link
                          href="/register"
                          onClick={() => {
                            setUserMenuOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
