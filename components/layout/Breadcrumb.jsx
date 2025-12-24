"use client";

import Link from "next/link";
import Image from "next/image";

export default function Breadcrumb({ items = [] }) {
  const defaultItems = [
    { label: "Home", href: "/" },
    { label: "Our Category", href: "/" },
    { label: "Product Details", href: null }, 
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="bg-[#ECECEC66] mt-4 mx-5 md:mx-[120px] rounded-2xl">
      <div className="p-4 md:px-8 md:py-4">
        <nav className="flex items-center text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-gray-900 transition-colors text-[12px] md:text-[16px] font-medium text-[#020202]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#8A8A8A] text-[12px] md:text-[16px] font-medium">{item.label}</span>
              )}
              {index < breadcrumbItems.length - 1 && (
               <Image src="/images/icons/arrow-right.svg" alt="arrow-right" width={24} height={24} className="w-6 h-6" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

