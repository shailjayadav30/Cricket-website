import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"; // Icons for date and location
import { useNavigate } from "react-router-dom";

interface Match {
  id: number;
  date: string;
  team1: string;
  team2: string;
  location: string;
}

const upcomingMatches: Match[] = [
  { id: 1, date: "Sep 28, 2024", team1: "Team A", team2: "Team B", location: "Stadium 1" },
  { id: 2, date: "Oct 05, 2024", team1: "Team C", team2: "Team D", location: "Stadium 2" },
  { id: 3, date: "Oct 12, 2024", team1: "Team E", team2: "Team F", location: "Stadium 3" },
  { id: 4, date: "Oct 19, 2024", team1: "Team G", team2: "Team H", location: "Stadium 4" },
  { id: 5, date: "Oct 26, 2024", team1: "Team I", team2: "Team J", location: "Stadium 5" },
  { id: 6, date: "Nov 02, 2024", team1: "Team K", team2: "Team L", location: "Stadium 6" },
  { id: 7, date: "Nov 09, 2024", team1: "Team M", team2: "Team N", location: "Stadium 7" },
  { id: 8, date: "Nov 16, 2024", team1: "Team O", team2: "Team P", location: "Stadium 8" },
];

const MatchCard: React.FC<Match> = ({ date, team1, team2, location }) => (

  
  <motion.div
    className="bg-white shadow-lg rounded-xl p-4 md:p-6 transform transition-transform duration-300 hover:scale-105"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex flex-col justify-between items-center space-y-2 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {team1} <span className="text-blue-600">vs</span> {team2}
      </h2>
      <div className="text-gray-500 flex items-center space-x-2">
        <FaCalendarAlt className="text-blue-600" />
        <p>{date}</p>
      </div>
      <div className="text-gray-500 flex items-center space-x-2">
        <FaMapMarkerAlt className="text-blue-600" />
        <p>{location}</p>
      </div>
    </div>
  </motion.div>
);

const UpcomingMatches: React.FC = () => {
  const navigate=useNavigate()
  return (
    <div id="upcoming" className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900 py-10 px-4">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-slate-900 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">Don't Miss the Excitement</h1>
        <p className="mt-4 text-lg">Catch all the upcoming matches and cheer for your favorite teams!</p>
        <button className="mt-6 bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-blue-50 transition" onClick={() => navigate("/ticketform")}>
          Buy Tickets
        </button>
      </header>

      {/* Matches Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Upcoming Matches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMatches.map((match) => (
            <MatchCard key={match.id} {...match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;
