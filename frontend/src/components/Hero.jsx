import React, { useState, useEffect } from "react";
import heroImg from "../assets/heroimg.jpg";
import { FaUserDoctor } from "react-icons/fa6";
import Form from "./Form"; // your form component

const Hero = () => {
  const [openForm, setOpenForm] = useState(false);
  const [showModal, setShowModal] = useState(false); // for animation

  const openBooking = () => {
    setOpenForm(true);
    setTimeout(() => setShowModal(true), 10); // trigger animation
  };
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setOpenForm(false), 300); // allow animation to finish
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = openForm ? "hidden" : "auto";
  }, [openForm]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-center min-h-screen py-8 md:py-16">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 bg-[#FDFCFA] pt-28 pb-12 md:pt-24 md:pb-0 md:h-screen">
        
        <div className="text-xs text-[#4D695C] font-medium tracking-wider px-4 py-2 bg-[#E8F2EE] rounded-full w-fit mb-6 md:mb-10 mx-auto md:mx-0">
          ACCEPTING NEW PATIENTS
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-4xl md:text-7xl font-serif text-[#2D3833] leading-tight">
            Experience the <br className="hidden md:block" />
            <span className="text-[#8FA89B]"> Glow Aesthetic</span>
          </h4>

          <p className="text-lg md:text-xl font-sans font-light text-[#2D3833] mt-6 md:mt-8 max-w-lg mx-auto md:mx-0">
            Where medical expertise meets holistic wellness. We specialize in
            natural enhancements and restorative skin therapies designed to
            reveal your inner radiance.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 w-full md:w-auto justify-center md:justify-start pb-8 md:pb-12">
          <button
            onClick={openBooking}
            className="text-white px-8 py-3.5 rounded-full font-semibold bg-[#8FA89B] w-full sm:w-auto hover:bg-[#7a9185] transition-colors"
          >
            Book Consultation
          </button>

          <button className="text-[#2D3833] px-8 py-3.5 rounded-full border border-teal-800 font-semibold bg-white w-full sm:w-auto hover:bg-gray-50 transition-colors">
            Explore Treatments
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col md:block relative justify-center items-center bg-[#F9F8F5] md:overflow-hidden md:pt-24 md:pb-20 md:px-12">
        <img
          src={heroImg}
          alt="clinic"
          className="rounded-4xl w-[85%] md:w-[70%] object-cover shadow-xl max-h-[80%] md:max-h-[80%] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mt-8 md:mt-0"
        />

        <div className="bg-white relative md:absolute z-10 mt-6 md:mt-0 md:bottom-20 md:left-20 rounded-2xl gap-4 flex items-center p-4 md:p-6 shadow-lg w-[80%] sm:w-auto max-w-xs md:max-w-sm mx-auto md:mx-0">
          <div className="bg-[#F9F8F5] p-3 rounded-full shrink-0">
            <FaUserDoctor className="text-[#4D695C] text-xl" />
          </div>

          <div>
            <h4 className="text-xs text-[#8FA89B] font-semibold tracking-wider uppercase">
              Certified
            </h4>
            <h4 className="text-sm md:text-base font-semibold text-[#2D3833]">
              Dermatology Excellence
            </h4>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openForm && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999] transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`w-[95%] max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl transform transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Form closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
