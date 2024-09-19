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
      <div className="bg-gray-300 flex items-center  justify-center min-h-screen relative overflow-hidden p-4">
        <div className="relative py-10">
          <div className="relative flex flex-col items-center justify-center z-10">
            <h3 className="text-black mt-4 text-2xl sm:text-3xl md:text-4xl drop-shadow-lg">
              Our Wonderful
            </h3>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 drop-shadow-lg">
              Achievements
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center mt-12 md:mt-16">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg p-4 sm:p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                  {box.number}
                </h1>
                <p className="text-lg sm:text-xl text-gray-900">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Achieve;
