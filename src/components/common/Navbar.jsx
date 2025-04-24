"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (sidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebar]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar]);

  return (
    <nav className="max-w-[1140px] w-full mx-auto flex justify-between items-center gap-5 p-4">
      <a href="/">
        <Image
          src="/assets/images/logo.png"
          width={176}
          height={74}
          alt="logo"
          unoptimized
        />
      </a>

      {/* Navigation (shared for both desktop and mobile sidebar) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 right-0 max-lg:transition-all max-lg:duration-300 max-lg:ease-in-out z-50
          flex max-lg:flex-col max-lg:gap-[20px] items-center  
          max-lg:w-[300px] max-lg:h-screen max-lg:bg-[#21b9ff] lg:static lg:flex-row lg:h-auto lg:bg-transparent
          ${sidebar ? "left-0" : "left-[-150%] lg:left-0"}`}
      >
        {/* Close button for mobile sidebar */}
        <button
          onClick={() => setSidebar(false)}
          className="text-white text-[78px] rotate-45 font-normal right-5 lg:hidden absolute top-[-30px]"
        >
          +
        </button>

        <ul className="flex flex-col lg:flex-row items-center gap-5 p-1">
          <a href="/">
            <Image
              src="/assets/images/logo.png"
              width={176}
              height={74}
              alt="logo"
              unoptimized
              className="lg:hidden"
            />
          </a>
          {["Home", "About Us", "Why Us", "Services"].map((text, index) => (
            <Link
              key={index}
              href="/"
              className="text-lg text-white hover:underline font-medium cursor-pointer"
            >
              {text}
            </Link>
          ))}

          {/* Mobile Button */}
          <div className="bg-white lg:hidden rounded-[100px]">
            <button
              type="submit"
              className="bg-gradient-to-r w-full from-[#29E0FF] to-[#1FB0FF] bg-clip-text px-6.5 py-3.5 text-transparent font-bold border-[2px] hover:scale-75 duration-300"
            >
              Customer Login
            </button>
          </div>
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="bg-white hover:bg-transparent cursor-pointer max-lg:hidden rounded-[100px] px-6.5 py-3.5 text-transparent font-bold border-[2px] border-white hover:scale-75 duration-300">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#29E0FF] to-[#1FB0FF] bg-clip-text"
        >
          Customer Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebar(!sidebar)}
        className="lg:hidden flex flex-col gap-1 "
      >
        <div className=" w-[30px] h-[3px] bg-white rounded-[50px] "></div>
        <div className=" w-[30px] h-[3px] bg-white rounded-[50px] "></div>
        <div className=" w-[30px] h-[3px] bg-white rounded-[50px] "></div>
      </button>
    </nav>
  );
};

export default Navbar;
