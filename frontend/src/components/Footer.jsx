import React from "react";
import { MdOutlineSpa } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="px-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 py-10 md:py-20 text-center md:text-left">
        <div className="w-full md:w-1/4 flex flex-col gap-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2 bg-[#f8faf6] rounded-full">
              <MdOutlineSpa className="text-[#4D695C] text-lg" />
            </div>
            <h4 className="font-serif text-xl text-[#2D3833] font-extralight">
              The Glow Aesthetic
            </h4>
          </div>
          <p className="text-md text-gray-500 font-light">
            Elevating skincare to an art form. We combine medical rigor with
            luxurious care to bring out your best self.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <h4 className="text-xs text-[#365345] font-semibold px-3 py-2 bg-[#F6F9F7] rounded-full w-fit">
              IG
            </h4>
            <h4 className="text-xs text-[#365345] font-semibold px-3 py-2 bg-[#F6F9F7] rounded-full w-fit">
              FB
            </h4>
            <h4 className="text-xs text-[#365345] font-semibold px-3 py-2 bg-[#F6F9F7] rounded-full w-fit">
              TT
            </h4>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-md font-semibold text-gray-800">Treatments</h4>
          <div className="mt-6 flex flex-col gap-3">
            <h4 className="text-sm text-gray-500 tracking-wide">
              Anti-Aging Facials
            </h4>
            <h4 className="text-sm text-gray-500 tracking-wide">
              Laser Hair Removal
            </h4>
            <h4 className="text-sm text-gray-500 tracking-wide">
              Chemical Peels
            </h4>
            <h4 className="text-sm text-gray-500 tracking-wide">
              Dermal Fillers
            </h4>
            <h4 className="text-sm text-gray-500 tracking-wide">
              Microneedling
            </h4>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-md font-semibold text-gray-800">Visit Us</h4>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <CiLocationOn className="text-[#8FA89B] text-lg font-bold shrink-0" />
              <p className="text-sm text-gray-500 font-light">
                123 Serenity Blvd, Suite 400 Beverly Hills, CA 90210
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <MdOutlineCall className="text-[#8FA89B] text-lg font-bold shrink-0" />
              <h4 className="text-sm text-gray-500 font-light">
                (555) 123-4567
              </h4>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <CiMail className="text-[#8FA89B] text-lg font-bold shrink-0" />
              <h4 className="text-sm text-gray-500 font-light">
                hello@glowaesthetic.com
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-md font-semibold text-gray-800">Stay Updated</h4>
          <p className="text-sm text-gray-500 font-light mt-6">
            Subscribe to receive skincare tips and exclusive offers.
          </p>
          <input
            type="text"
            placeholder="Your email address"
            className="p-3 text-sm bg-[#F6F9F7] text-gray-900 tracking-wide rounded-lg w-full mt-4"
          />
          <button className="text-white p-3 rounded-xl font-semibold bg-[#365345] w-full mt-3">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 text-center py-8 gap-6 md:gap-0 mt-8 md:mt-0">
        <h4 className="text-xs text-[#8FA89B] font-medium tracking-wide">
          © 2023 The Glow Aesthetic Clinic. All rights reserved.
        </h4>
        <div className="flex gap-8">
          <h4 className="text-xs text-[#8FA89B] font-medium tracking-wide cursor-pointer hover:text-[#365345] transition-colors duration-300">
            Privacy Policy
          </h4>
          <h4 className="text-xs text-[#8FA89B] font-medium tracking-wide cursor-pointer hover:text-[#365345] transition-colors duration-300">
            Terms of Service
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
