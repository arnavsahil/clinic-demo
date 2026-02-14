import React from "react";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineBiotech } from "react-icons/md";
import missDoctor from "../assets/miss_doctor.png";
import mrDoctor from "../assets/mr_doctor.png";

const Experts = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-[#F9F7F2]">
      <div className="w-full md:w-1/2 px-8 py-10 md:py-24 text-center md:text-left">
        <h4 className="text-xs font-medium tracking-widest text-[#8FA89B]">
          MEDICAL EXCELLENCE
        </h4>
        <h4 className="font-serif text-3xl md:text-5xl text-[#2D3833] mt-6">
          Guided by Science, Delivered with Care
        </h4>
        <p className="text-xl mt-6 text-gray-700 font-light">
          Our clinic is led by board-certified dermatologists who prioritize
          safety, efficacy, and natural results. We don't just treat skin; we
          understand the biology behind it.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 mt-8 text-left">
          <MdOutlineSchool className="text-[#8FA89B] text-5xl bg-white p-3 rounded-full shrink-0" />
          <div>
            <h4 className="font-serif text-xl tracking-tight text-[#2D3833] font-extralight">
              Board Certified
            </h4>
            <p className="text-gray-600 font-extralight text-md">
              Every procedure is overseen by qualified medical specialists.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-left">
          <MdOutlineBiotech className="text-[#8FA89B] text-5xl bg-white p-3 rounded-full shrink-0" />
          <div>
            <h4 className="font-serif text-xl tracking-tight  text-[#2D3833]font-extralight">
              Advanced Technology
            </h4>
            <p className="text-gray-600 font-extralight text-md">
              FDA-approved equipment and premium pharmaceutical-grade products.
            </p>
          </div>
        </div>
        <button className="text-white px-8 py-4 rounded-full font-semibold bg-[#365345] mt-10">
          Meet Our Team
        </button>
      </div>
      <div className="images w-full md:w-1/2 px-8 py-10 md:py-24 flex gap-4">
        <div className="w-1/2 mt-0 md:mt-4">
          <img
            src={missDoctor}
            alt="female doctor"
            className="rounded-2xl h-96 object-cover"
          />
          <div className="bg-white flex flex-col gap-2 items-center justify-center rounded-2xl px-3 md:px-7 py-4 mt-4 text-center w-full">
            <h4 className="font-serif text-lg md:text-xl tracking-tight text-[#2D3833] font-extralight">
              Dr. Elena Vance
            </h4>
            <h4 className="text-[10px] md:text-xs font-medium tracking-wider text-[#8FA89B]">
              LEAD DERMATOLOGIST
            </h4>
          </div>
        </div>
        <div className="w-1/2 mt-0 md:-mt-4">
          <img
            src={mrDoctor}
            alt="male doctor"
            className="rounded-2xl h-96 object-cover"
          />
          <div className="bg-white flex flex-col gap-2 items-center justify-center rounded-2xl px-3 md:px-7 py-4 mt-4 text-center w-full">
            <h4 className="font-serif text-lg md:text-xl tracking-tight text-[#2D3833] font-extralight">
              Dr. James Chen
            </h4>
            <h4 className="text-[10px] md:text-xs font-medium tracking-wider text-[#8FA89B]">
              COSMETIC SURGEON
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
