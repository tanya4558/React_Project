"use client";
import { useState } from 'react';
import { NavOptionsData } from "@/data/NavOptions";
import { ChevronDown } from "lucide-react";
import React from "react";
import Link from 'next/link';
 
function SubNavbar() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
 
  const handleOptionClick = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };
 
  return (
    <div className="py-3 flex items-center shadow-[0_2px_5px] shadow-[#12121220] text-primaryBlue font-semibold text-base z-50">
      <nav className="container mx-auto flex space-x-7">
        {NavOptionsData.map((options, i) => (
          <div key={i} className="relative">
            <div
              className="flex flex-row items-center gap-x-1 cursor-pointer hover:text-primaryBlue/80 transition-all duration-200"
              onClick={() => handleOptionClick(i)}
            >
              <Link href={options.url ?? "#"}>{options.optionName}</Link>
              {options.subOptions && (
                <ChevronDown size={15} strokeWidth={3} />
              )}
            </div>
            {openDropdownIndex === i && options.subOptions && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-md">
                {options.subOptions.map((subOption, j) => (
                  <Link key={j} href={subOption.url ?? "#"}>
                    <div className="py-2 px-4 hover:bg-gray-100">{subOption.optionName}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
 
export default SubNavbar;