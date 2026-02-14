import React from "react";
import smile from "../assets/smile.png";
import face from "../assets/face.png";
import sofa from "../assets/sofa.png";

const Transformations = () => {
  const cardsData = [
    {
      image: smile,
      protocol: "Acne Scarring Protocol",
      treatments: "Restorative Laser",
      session: "3",
    },
    {
      image: face,
      protocol: "Anti-Aging Series",
      treatments: "Hydra-Lift Facial",
      session: "1",
    },
    {
      image: sofa,
      protocol: "Pigmentation Control",
      treatments: "Brightening Peel",
      session: "2",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-12 md:mt-24 px-6 md:px-72">
        <h4 className="font-serif text-4xl">Real Transformations</h4>
        <p className="text-lg text-center mt-2 text-gray-500 font-light">
          Visible results achieved through personalized treatment plans.
        </p>
      </div>
      <div className="cards flex flex-col md:flex-row gap-8 px-8 py-8 md:py-16">
        {cardsData.map((card,index) => (
          <div key={index} className="w-full md:w-1/3 rounded-3xl">
            <div className="relative w-full h-72 rounded-3xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center
                transition-transform duration-300 ease-out
                hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="absolute left-4 bottom-4 px-3 py-1 bg-gray-100 rounded-4xl w-fit">
                <h4 className="text-xs text-[#4D695C] font-semibold">
                  {card.protocol}
                </h4>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <h4 className="font-serif text-lg text-[#2D3833] font-extralight">
                {card.treatments}
              </h4>
              <h4 className="text-[#8FA89B] text-sm font-semibold">
                {card.session} Sessions
              </h4>
            </div>
          </div>
        ))}
        {/* <div className="relative w-1/3 h-72 rounded-3xl">
          <div
            className="w-full h-full bg-cover bg-center
               transition-transform duration-300 ease-out
               hover:scale-105 rounded-3xl"
            style={{ backgroundImage: `url(${smile})` }}
          ></div>
          <div className="absolute left-4 bottom-4 px-3 py-1 bg-gray-100 rounded-4xl w-fit">
            <h4 className="text-xs text-[#4D695C] font-semibold">
              Acne Scarring Protocol
            </h4>
          </div>
          <div className="flex justify-between mt-4">
            <h4 className="font-serif text-lg text-[#2D3833] font-extralight">
              Restorative Laser
            </h4>
            <h4 className="text-[#8FA89B] text-sm font-semibold">3 Sessions</h4>
          </div>
        </div>
        <div className="relative w-1/3 h-72 rounded-3xl">
          <div
            className="w-full h-full bg-cover bg-center
               transition-transform duration-300 ease-out
               hover:scale-105 rounded-3xl"
            style={{ backgroundImage: `url(${face})` }}
          ></div>
          <div className="absolute left-4 bottom-4 px-3 py-1 bg-gray-100 rounded-4xl w-fit">
            <h4 className="text-xs text-[#4D695C] font-semibold">
              Anti-Aging Series
            </h4>
          </div>
          <div className="flex justify-between mt-4">
            <h4 className="font-serif text-lg text-[#2D3833] font-extralight">
              Hydra-Lift Facial
            </h4>
            <h4 className="text-[#8FA89B] text-sm font-semibold">1 Session</h4>
          </div>
        </div>
        <div className="relative w-1/3 h-72 rounded-3xl">
          <div
            className="w-full h-full bg-cover bg-center
               transition-transform duration-300 ease-out
               hover:scale-105 rounded-3xl"
            style={{ backgroundImage: `url(${sofa})` }}
          ></div>
          <div className="absolute left-4 bottom-4 px-3 py-1 bg-gray-100 rounded-4xl w-fit">
            <h4 className="text-xs text-[#4D695C] font-semibold">
              Pigmentation Control
            </h4>
          </div>
          <div className="flex justify-between mt-4">
            <h4 className="font-serif text-lg text-[#2D3833] font-extralight">
              Brightening Peel
            </h4>
            <h4 className="text-[#8FA89B] text-sm font-semibold">2 Sessions</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Transformations;
