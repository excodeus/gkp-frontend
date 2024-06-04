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
      className="md:h-[760px] h-auto p-28 bg-no-repeat bg-center bg-[bg-gray-500] bg-gray-600 bg-blend-multiply"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      {/* <svg
        width="1440"
        height="520"
        viewBox="0 0 2107 1142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 z-10 box-border"
      >
        <circle cx="263" cy="548" r="239" stroke="#B1E4A7" stroke-width="48" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M225.371 0C203.832 0 186.371 17.4609 186.371 39V227.971C210.958 222.106 236.616 219 263 219C444.702 219 592 366.298 592 548C592 729.702 444.702 877 263 877C236.616 877 210.958 873.894 186.371 868.029V1103C186.371 1124.54 203.832 1142 225.371 1142H2067.37C2088.91 1142 2106.37 1124.54 2106.37 1103V39C2106.37 17.4609 2088.91 0 2067.37 0H225.371Z"
          fill="#B1E4A7"
        />
      </svg> */}

      <div className="relative max-w-screen-xl mx-auto px-4 flex z-50">
        <div className="w-1/3 pr-8 mt-48">
          <h2 className="text-white text-4xl font-bold mb-8">
            Our Sole Agents
          </h2>
        </div>
        <div className="w-2/3 bg-gkpgreen opacity-80 rounded-3xl py-14">
          <div className="grid grid-cols-2 gap-16">
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
              <img src={agent3} alt="Logo 3" className="max-h-20" />
            </div>

            {/* <!-- Logo 4 --> */}
            <div className="flex justify-center items-center">
              <img src={agent4} alt="Logo 4" className="max-h-20" />
            </div>

            {/* <!-- Logo 5 --> */}
            <div className="flex justify-center items-center">
              <img src={agent5} alt="Logo 5" className="max-h-28" />
            </div>

            {/* <!-- Logo 6 --> */}
            <div className="flex justify-center items-center">
              <img src={agent6} alt="Logo 6" className="max-h-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
