import React, { useState } from "react";

const Form = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          date,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      console.log(data);

      alert("Appointment Booked Successfully ✅");

      setName("");
      setPhone("");
      setEmail("");
      setDate("");
      setMessage("");

      // ✅ close modal after success
      if (closeModal) closeModal();

    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center rounded-3xl p-5 md:p-10 shadow-[0_-6px_10px_rgba(0,0,0,0.05),0_6px_10px_rgba(0,0,0,0.05)] bg-white w-full">

        {/* Header with Close */}
        <div className="flex justify-between items-start w-full mb-6">
          <div>
            <h4 className="font-serif text-2xl md:text-4xl">
              Book Your Glow
            </h4>
            <p className="text-sm md:text-lg mt-1 text-gray-500 font-light">
              Experience premium skincare tailored to you
            </p>
          </div>

          {closeModal && (
            <button
              onClick={closeModal}
              className="text-xl text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs text-[#6B7280] font-semibold tracking-wide">
                FULL NAME
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                className="px-3 py-3 bg-[#FCFBFA] rounded-lg border border-[#bdc0bf] w-full"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-xs text-[#6B7280] font-semibold tracking-wide">
                NUMBER
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                required
                className="px-3 py-3 bg-[#FCFBFA] rounded-lg border border-[#bdc0bf] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#6B7280] font-semibold tracking-wide">
              EMAIL
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="px-3 py-3 bg-[#FCFBFA] rounded-lg border border-[#bdc0bf] w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#6B7280] font-semibold tracking-wide">
              DATE
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              required
              className="px-3 py-3 bg-[#FCFBFA] rounded-lg text-sm border border-[#bdc0bf] w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#6B7280] font-semibold tracking-wide">
              MESSAGE
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="px-3 py-3 bg-[#FCFBFA] rounded-lg text-sm border border-[#bdc0bf] w-full"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="text-white p-3 rounded-xl font-semibold bg-[#365345] w-full mt-3 disabled:opacity-50"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Form;
