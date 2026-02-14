import React from "react";
import { FaRegFaceFlushed } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Treatments = () => {
  const cardsData = [
    {
      title: "Clinical Facials",
      desc: "Deep cleansing and hydration protocols designed to restore your skin's natural barrier and glow.",
    },
    {
      title: "Laser Therapy",
      desc: "State-of-the-art light therapy for rejuvenation, pigmentation correction, and texture refinement.",
    },
    {
      title: "Injectables",
      desc: "Subtle, natural-looking enhancements performed by certified medical professionals.",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-center mt-16 md:mt-12 px-6 md:px-72">
        <h4 className="font-mono text-md text-[#8FA89B]">CURATED TREATMENTS</h4>
        <h4 className="font-serif text-5xl mt-4">
          Holistic Care for Every Skin
        </h4>
        <p className="text-xl text-center mt-6 text-gray-500 font-light">
          We believe in a tailored approach. Our treatments combine cutting-edge
          medical technology with the restorative power of touch.
        </p>
      </div>

      <div className="cards flex flex-col md:flex-row justify-around gap-8 md:gap-12 px-8 py-16">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 group hover:scale-95 hover:transition-all duration-300 ease-out p-8 rounded-3xl shadow-[0_-6px_10px_rgba(0,0,0,0.05),0_6px_10px_rgba(0,0,0,0.05)] bg-white">
            <div className="icon flex items-center justify-between">
              <FaRegFaceFlushed className="text-[#8FA89B] group-hover:text-white text-6xl bg-[#f1f1f1] group-hover:bg-[#8FA89B] p-3 rounded-2xl" />
              <FaRegFaceFlushed className="text-[#F4F6F5] group-hover:text-gray-200 text-6xl" />
            </div>
            <div className="mt-8">
              <h4 className="font-serif text-2xl tracking-wide">
                {card.title}
              </h4>
              <p className="text-gray-600 font-extralight text-md mt-3">
                {card.desc}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <button className="text-[#8FA89B] text-sm font-semibold">
                View Protocol
              </button>
              <FaArrowRight className="text-[#8FA89B] text-xs group-hover:translate-x-1" />
            </div>
          </div>
        ))}
        {/* <div className="w-1/3 group hover:scale-95 hover:transition-all duration-300 ease-out p-8 rounded-3xl shadow-[0_-6px_10px_rgba(0,0,0,0.05),0_6px_10px_rgba(0,0,0,0.05)] bg-white">
          <div className="icon flex items-center justify-between">
            <FaRegFaceFlushed className="text-[#8FA89B] group-hover:text-white text-6xl bg-[#f1f1f1] group-hover:bg-[#8FA89B] p-3 rounded-2xl" />
            <FaRegFaceFlushed className="text-[#F4F6F5] group-hover:text-gray-200 text-6xl" />
          </div>
          <div className="mt-8">
            <h4 className="font-serif text-2xl tracking-wide">
              Clinical Facials
            </h4>
            <p className="text-gray-600 font-extralight text-md mt-3">
              Deep cleansing and hydration protocols designed to restore your
              skin's natural barrier and glow.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <button className="text-[#8FA89B] text-sm font-semibold">
              View Protocol
            </button>
            <FaArrowRight className="text-[#8FA89B] text-xs group-hover:translate-x-1" />
          </div>
        </div>
        <div className="w-1/3 group hover:scale-95 hover:transition-all duration-300 ease-out p-8 rounded-3xl shadow-[0_-6px_10px_rgba(0,0,0,0.05),0_6px_10px_rgba(0,0,0,0.05)] bg-white">
          <div className="icon flex items-center justify-between">
            <FaRegFaceFlushed className="text-[#8FA89B] group-hover:text-white text-6xl bg-[#f1f1f1] group-hover:bg-[#8FA89B] p-3 rounded-2xl" />
            <FaRegFaceFlushed className="text-[#F4F6F5] group-hover:text-gray-200 text-6xl" />
          </div>
          <div className="mt-8">
            <h4 className="font-serif text-2xl tracking-wide">
              Clinical Facials
            </h4>
            <p className="text-gray-600 font-extralight text-md mt-3">
              Deep cleansing and hydration protocols designed to restore your
              skin's natural barrier and glow.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <button className="text-[#8FA89B] text-sm font-semibold">
              View Protocol
            </button>
            <FaArrowRight className="text-[#8FA89B] text-xs group-hover:translate-x-1" />
          </div>
        </div>
        <div className="w-1/3 group hover:scale-95 hover:transition-all duration-300 ease-out p-8 rounded-3xl shadow-[0_-6px_10px_rgba(0,0,0,0.05),0_6px_10px_rgba(0,0,0,0.05)] bg-white">
          <div className="icon flex items-center justify-between">
            <FaRegFaceFlushed className="text-[#8FA89B] group-hover:text-white text-6xl bg-[#f1f1f1] group-hover:bg-[#8FA89B] p-3 rounded-2xl" />
            <FaRegFaceFlushed className="text-[#F4F6F5] group-hover:text-gray-200 text-6xl" />
          </div>
          <div className="mt-8">
            <h4 className="font-serif text-2xl tracking-wide">
              Clinical Facials
            </h4>
            <p className="text-gray-600 font-extralight text-md mt-3">
              Deep cleansing and hydration protocols designed to restore your
              skin's natural barrier and glow.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <button className="text-[#8FA89B] text-sm font-semibold">
              View Protocol
            </button>
            <FaArrowRight className="text-[#8FA89B] text-xs group-hover:translate-x-1" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Treatments;
