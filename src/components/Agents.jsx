import React from "react";
import image from "../assets/bgagent.jpg";
import agent1 from "../assets/agent1.png";
import agent2 from "../assets/agent2.png";
import agent3 from "../assets/agent3.png";
import agent4 from "../assets/agent4.png";
import agent5 from "../assets/agent5.png";
import agent6 from "../assets/agent6.png";

const Agents = () => {
  return (
    <div
      className="md:h-[760px] h-auto px-28 py-16 bg-no-repeat bg-center bg-[bg-gray-500] bg-gray-600 bg-blend-multiply"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >

      <div className="relative max-w-screen-xl mx-auto px-4 flex z-30">
        <div className="w-1/3 pr-8 mt-60">
          <h2 className="text-white text-5xl font-bold mb-8">
            Our Sole Agents
          </h2>
        </div>
        <div className="w-2/3 bg-gkpgreen opacity-80 rounded-3xl py-16">
          <div className="grid grid-cols-2 gap-20">
            {/* <!-- Logo 1 --> */}
            <div className="flex justify-center items-center">
              <img src={agent1} alt="Logo 1" className="max-h-20" />
            </div>

            {/* <!-- Logo 2 --> */}
            <div className="flex justify-center items-center">
              <img src={agent2} alt="Logo 2" className="max-h-20" />
            </div>

            {/* <!-- Logo 3 --> */}
            <div className="flex justify-center items-center">
              <img src={agent3} alt="Logo 3" className="max-h-28" />
            </div>

            {/* <!-- Logo 4 --> */}
            <div className="flex justify-center items-center">
              <img src={agent4} alt="Logo 4" className="max-h-20" />
            </div>

            {/* <!-- Logo 5 --> */}
            <div className="flex justify-center items-center">
              <img src={agent5} alt="Logo 5" className="max-h-40" />
            </div>

            {/* <!-- Logo 6 --> */}
            <div className="flex justify-center items-center">
              <img src={agent6} alt="Logo 6" className="max-h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
