import React, { useState, useEffect } from "react";
import { MdOutlineFormatQuote } from "react-icons/md";
import icon from "../assets/icon.png";
import Form from "./Form"; // your form component

const Testimonials = () => {
  const [openForm, setOpenForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openBooking = () => {
    setOpenForm(true);
    setTimeout(() => setShowModal(true), 10); // trigger animation
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setOpenForm(false), 300); // wait for animation
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
    <div>
      {/* Testimonials Quote */}
      <div className="bg-[#F6F9F7] flex flex-col gap-8 md:gap-12 justify-center items-center py-12 md:py-24 mt-16">
        <div>
          <MdOutlineFormatQuote className="text-4xl md:text-5xl text-[#8FA89B] p-3 bg-white rounded-full" />
        </div>
        <div>
          <h4 className="font-serif text-center text-2xl md:text-5xl text-[#2D3833] px-6 md:px-52">
            "The Glow Aesthetic isn't just a name—it's exactly what you leave
            with. The team is incredibly professional, and the atmosphere is so
            calming."
          </h4>
        </div>
        <div className="flex flex-col text-center items-center">
          <div
            className="w-16 h-16 bg-cover bg-center rounded-full border-4 border-white"
            style={{ backgroundImage: `url(${icon})` }}
          ></div>
          <h4 className="text-xl text-[#2D3833] mt-4 font-semibold">
            Emily Richardson
          </h4>
          <h4 className="text-[#81948b] text-md">
            Aesthetic Member since 2021
          </h4>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2D3833] flex flex-col items-center text-center px-6 md:px-72 py-12 md:py-24">
        <h4 className="font-serif text-white text-3xl md:text-5xl">
          Start Your Skin Journey
        </h4>
        <p className="text-[#D0DCD5] text-lg md:text-xl mt-4">
          Book your initial consultation today and receive a complimentary
          comprehensive skin analysis plan customized just for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12 w-full sm:w-auto">
          <button
            onClick={openBooking}
            className="text-white px-10 py-4 rounded-full font-semibold bg-[#8FA89B] hover:bg-[#7a9185] transition-colors"
          >
            Book Appointment
          </button>
          <button className="text-white px-10 py-4 rounded-full border border-white font-semibold bg-[#2D3833] hover:bg-gray-800 transition-colors">
            Contact Us
          </button>
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

export default Testimonials;
