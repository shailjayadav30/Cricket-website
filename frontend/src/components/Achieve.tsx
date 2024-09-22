import React from "react";

interface BoxInterface {
  number: number;
  text: string;
}

interface AchieveProps {
  boxes: BoxInterface[];
}

const Achieve: React.FC<AchieveProps> = ({ boxes }) => {
  return (
    <div className="bg-gradient-to-b  from-gray-300 to-blue-100 flex items-center pt-[3rem] justify-center min-h-screen relative overflow-hidden p-4">
      <div className="relative py-10">
        {/* Title Section */}
        <div className="relative flex flex-col items-center justify-center z-10 mb-12">
          <h3 className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-lg tracking-wide">
            Our Wonderful
          </h3>
          <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 mt-2 tracking-wider drop-shadow-lg">
            Achievements
          </span>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center mt-12">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-4">
                {box.number}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-gray-900 tracking-wide">
                {box.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achieve;
