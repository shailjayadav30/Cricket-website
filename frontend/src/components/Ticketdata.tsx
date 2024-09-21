import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import formdatabg from "../images/formdatabg.jpg";
import { motion } from "framer-motion";

interface TicketFormData {
  name: string;
  email: string;
  match: string;
  date: string;
  seat: string;
  tickets: number;
}

interface LocationState {
  state: {
    formData: TicketFormData;
    bookingTime: string;
  };
}

const Ticketdata: React.FC = () => {
  const location = useLocation() as LocationState;
  const navigate = useNavigate();
  const { formData, bookingTime } = location.state;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="flex items-center justify-center h-[100vh] w-full"
      style={{
        backgroundImage: `url(${formdatabg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white/30 backdrop-blur-md p-4 sm:p-6 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] rounded-2xl shadow-xl sm:mt-[6rem]
        animate-slide-in-bottom  transition-transform transform duration-300 hover:scale-105 "
      >
        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blue-800 text-center">Ticket Details</h3>
    
        <div className="space-y-2 sm:space-y-4 text-base sm:text-lg text-gray-900">
          <div className="flex justify-between">
            <p className="font-semibold">Name:</p>
            <p>{formData.name}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Email:</p>
            <p>{formData.email}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Match:</p>
            <p>{formData.match}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Date:</p>
            <p>{formData.date}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Seat:</p>
            <p>{formData.seat}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Tickets:</p>
            <p>{formData.tickets}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Booking Time:</p>
            <p>{bookingTime}</p>
          </div>
        </div>

        {/* Responsive close button */}
        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={() => navigate("/ticketform")}
            className=" inline-flex justify-center py-2 px-4 sm:py-2 sm:px-6 border border-transparent shadow-lg text-sm sm:text-lg font-semibold
            rounded-lg text-white bg-blue-600 focus:outline-none transition duration-500 transform hover:scale-110"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Ticketdata;
