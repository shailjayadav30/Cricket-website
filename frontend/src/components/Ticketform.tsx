import React, { useState } from "react";
import cricketbg from "../images/cricketbg.jpg";
import { useNavigate } from "react-router-dom";

interface TicketFormData {
  name: string;
  email: string;
  match: string;
  date: string;
  seat: string;
  tickets: number;
}

const TicketBookingForm: React.FC = () => {
  const [formData, setFormData] = useState<TicketFormData>({
    name: "",
    email: "",
    match: "",
    date: "",
    seat: "",
    tickets: 1,
  });
  const [bookingTime, setBookingTime] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    setBookingTime(now.toLocaleString());
    navigate("/ticketdata", {
      state: {
        formData: formData,
        bookingTime: now.toLocaleString(),
      },
    });
  };

  return (
    <div 
      className="w-[100%] h-screen bg-cover bg-center pt-[6rem]  flex items-center justify-center"
      style={{ backgroundImage: `url(${cricketbg})` }}
    >
      <form 
        className="max-w-3xl mx-auto p-6 bg-white shadow-2xl rounded-xl transition-transform transform duration-300 hover:scale-105 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
          Book Your Cricket Match Tickets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm placeholder-gray-400"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm placeholder-gray-400"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Match Selection */}
        <div className="mb-4">
          <label
            htmlFor="match"
            className="block text-sm font-medium text-gray-700"
          >
            Match
          </label>
          <select
            id="match"
            name="match"
            className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
            value={formData.match}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select a Match
            </option>
            <option value="Match 1">Match 1: Team A vs Team B</option>
            <option value="Match 2">Match 2: Team C vs Team D</option>
          </select>
        </div>

        {/* Date and Seat side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="seat"
              className="block text-sm font-medium text-gray-700"
            >
              Seat Selection
            </label>
            <select
              id="seat"
              name="seat"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
              value={formData.seat}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a Seat
              </option>
              <option value="VIP">VIP</option>
              <option value="General">General</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
        </div>

        {/* Number of Tickets */}
        <div className="mb-4">
          <label
            htmlFor="tickets"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Tickets
          </label>
          <input
            type="number"
            id="tickets"
            name="tickets"
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
            value={formData.tickets}
            min={1}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book Tickets
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketBookingForm;
