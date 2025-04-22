import Navbar from "@/components/common/Navbar";
import Herosection from "@/components/Herosection";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url(/assets/images/bg_herosection.png)] bg-no-repeat bg-cover h-[863px]">
      <Navbar />
      <Herosection />
    </div>
  );
};

export default page;
