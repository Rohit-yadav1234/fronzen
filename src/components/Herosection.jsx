import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className="relative overflow-hidden flex flex-col-reverse gap-3 pb-[380px]">
      <div className="max-w-[1140px] w-full mx-auto px-3 flex flex-col lg:flex-row items-start justify-between mt-6 lg:mt-20">
        <div className="flex flex-col gap-3 lg:gap-5 w-full text-center lg:text-left z-10">
          <h1 className="lg:max-w-[900px] w-full font-semibold italic leading-[100%] sm:leading-[110%] text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Cold Chain Service now just a Click away
          </h1>
          <p className="text-white w-full lg:max-w-[535px] mx-auto lg:mx-0 mb-0 lg:mb-5 text-base sm:text-lg md:text-xl font-medium leading-[125%] sm:leading-[150%]">
            We provide a Plug'n'Play model for temperature-sensitive products,
            empowering our customers with the essential tools to expand their
            business while we ensure the preservation and transportation of
            perishable goods.
          </p>

          <div className="flex  items-center justify-center lg:justify-start gap-3 sm:gap-[14px]">
            <button className="text-[#1FB0FF] hover:text-white hover:bg-[#35D0FF] hover:border-2 transition duration-300 w-[150px] bg-white rounded-full py-2 px-4 font-bold text-base leading-[120%]">
              Get Started
            </button>
            <button className="text-white hover:text-[#1FB0FF] hover:bg-white hover:border-2 transition duration-300 w-[150px] border-2 border-white rounded-full py-2 px-4 font-bold text-base leading-[120%]">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="absolute top-[300px] sm:top-[320px] md:top-[300px] lg:top-[200px] right-0">
        <Image
          className="max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
          src="/assets/images/truck.png"
          width="826"
          height="426"
          alt="herosection_img"
        />
      </div>
    </div>
  );
};

export default Herosection;
