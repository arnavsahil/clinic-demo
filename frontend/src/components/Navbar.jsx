import React, { useState, useEffect } from "react";
import { MdOutlineSpa } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import Form from "./Form";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [showModal, setShowModal] = useState(false); // for animation

  const closeMenu = () => setMenuOpen(false);

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
    <div className="fixed top-0 z-50 w-full bg-white border border-gray-100">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#f8faf6] rounded-full">
            <MdOutlineSpa className="text-[#4D695C] text-2xl" />
          </div>
          <h4 className="font-serif text-lg md:text-2xl text-[#2D3833] font-extralight">
            The Glow Aesthetic
          </h4>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <a href="">Services</a>
          <a href="">Experts</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* ✅ Desktop Only Button */}
          <div className="bg-[#8FA89B] px-6 py-3 rounded-full hidden md:block">
            <button
              onClick={openBooking}
              className="text-white text-md font-medium"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-[#4D695C]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-6 pb-4 md:hidden">
          <a onClick={closeMenu} href="" className="text-[#4D695C] font-medium">
            Services
          </a>
          <a onClick={closeMenu} href="" className="text-[#4D695C] font-medium">
            Experts
          </a>
          <a onClick={closeMenu} href="" className="text-[#4D695C] font-medium">
            Testimonials
          </a>
          <a onClick={closeMenu} href="" className="text-[#4D695C] font-medium">
            Contact
          </a>
        </div>
      )}

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

export default Navbar;
