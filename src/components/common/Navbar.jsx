"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (sidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebar]);

  return (
    <nav className="max-w-[1140px] w-full mx-auto flex justify-between items-center gap-5 p-4">
      <a href="/">
        <Image
          src="/assets/images/logo.png"
          width={176}
          height={74}
          alt="logo"
        />
      </a>

      <div
        className={`fixed max-lg:transition-all max-lg:duration-300 max-lg:ease-in-out z-50
          lg:static flex gap-4 items-center max-lg:flex-col max-lg:items-start
          max-lg:w-[300px] max-lg:h-screen max-lg:bg-[#000] max-lg:pt-10 max-lg:px-6 
          ${sidebar ? "left-0" : "left-[-150%]"}`}
      >
        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          About Us
        </Link>
        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          Why Us
        </Link>
        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          Services
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 right-0 max-lg:transition-all max-lg:duration-300 max-lg:ease-in-out z-50
   flex max-lg:flex-col max-lg:gap-[10px] items-center 
    max-lg:w-[300px] max-lg:h-screen max-lg:bg-[#000] max-lg:p-4 
    ${sidebar ? "left-0" : "left-[-150%]"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setSidebar(false)}
          className="text-white text-xl rotate-45 font-normal right-6 lg:hidden absolute"
        >
          +
        </button>

        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          About Us
        </Link>
        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          Why Us
        </Link>
        <Link
          href="/"
          className="text-lg leading-[120%] text-white hover:underline duration-300 font-medium"
        >
          Services
        </Link>
      </div>

      {/* Desktop Button */}
      <button className="w-[175px] h-[48px] max-lg:hidden leading-[120%] text-base font-bold font-Raleway text-skyblue bg-white rounded-[100px] border-[2px] border-white hover:scale-75 cursor-pointer duration-300">
        Customer Login
      </button>

      {/* Mobile Menu Button */}
      <button onClick={() => setSidebar(!sidebar)} className="lg:hidden">
        <Image
          src="/assets/images/menu.svg"
          width={40}
          height={40}
          alt="menu"
        />
      </button>
    </nav>
  );
};

export default Navbar;
